// Assume data.js is already loaded

const bkYearSelect = document.getElementById('bkYearSelect');
const bkMaterialSelect = document.getElementById('bkMaterialSelect');
const bkGradeSelect = document.getElementById('bkGradeSelect');
const bkThicknessSelect = document.getElementById('bkThicknessSelect');
const bkTemperatureInput = document.getElementById('bkTemperatureInput');
const bkOutputDiv = document.getElementById('bkOutputDiv');
const bkStressValue = document.getElementById('bkStressValue');
const bkYieldStrength = document.getElementById('bkYieldStrength');
const bkTensileStrength = document.getElementById('bkTensileStrength');

const bkWarning = document.createElement('div');
bkWarning.className = 'bk-warning';
bkWarning.textContent = '⚠️ Temperature is out of range for selected grade';
bkWarning.style.display = 'none';
bkTemperatureInput.insertAdjacentElement('afterend', bkWarning);

// Populate Years
function bkPopulateYears() {
    Object.keys(bkStressData).forEach(year => {
        const opt = document.createElement('option');
        opt.value = year;
        opt.textContent = year;
        bkYearSelect.appendChild(opt);
    });
}

// Populate Materials
function bkPopulateMaterials(year) {
    bkMaterialSelect.innerHTML = '<option value="">-- Select Material --</option>';
    bkGradeSelect.innerHTML = '<option value="">-- Select Grade --</option>';
    bkThicknessSelect.innerHTML = '<option value="">-- Select Thickness --</option>';
    bkTemperatureInput.value = '';
    bkOutputDiv.style.display = 'none';
    bkGradeSelect.disabled = true;
    bkThicknessSelect.disabled = true;
    bkTemperatureInput.disabled = true;
    bkWarning.style.display = 'none';

    if (!year || !bkStressData[year]) {
        bkMaterialSelect.disabled = true;
        return;
    }
    bkMaterialSelect.disabled = false;

    Object.keys(bkStressData[year]).forEach(material => {
        const opt = document.createElement('option');
        opt.value = material;
        opt.textContent = material;
        bkMaterialSelect.appendChild(opt);
    });
}

// Populate Grades
function bkPopulateGrades(year, material) {
    bkGradeSelect.innerHTML = '<option value="">-- Select Grade --</option>';
    bkThicknessSelect.innerHTML = '<option value="">-- Select Thickness --</option>';
    bkTemperatureInput.value = '';
    bkOutputDiv.style.display = 'none';
    bkGradeSelect.disabled = true;
    bkThicknessSelect.disabled = true;
    bkTemperatureInput.disabled = true;
    bkWarning.style.display = 'none';

    if (!year || !material || !bkStressData[year][material]) return;

    bkGradeSelect.disabled = false;
    Object.keys(bkStressData[year][material]).forEach(grade => {
        const opt = document.createElement('option');
        opt.value = grade;
        opt.textContent = grade;
        bkGradeSelect.appendChild(opt);
    });
}

// Populate Thickness if needed
function bkPopulateThickness(year, material, grade) {
    bkThicknessSelect.innerHTML = '<option value="">-- Select Thickness --</option>';
    bkTemperatureInput.value = '';
    bkOutputDiv.style.display = 'none';
    bkWarning.style.display = 'none';

    if (!year || !material || !grade || !bkStressData[year][material][grade]) return;

    const gradeData = bkStressData[year][material][grade];
    const hasThickness = Object.keys(gradeData).some(k => k.includes('mm'));

    if (hasThickness) {
        bkThicknessSelect.disabled = false;
        Object.keys(gradeData).forEach(t => {
            if (t.includes('mm')) {
                const opt = document.createElement('option');
                opt.value = t;
                opt.textContent = t;
                bkThicknessSelect.appendChild(opt);
            }
        });
        bkTemperatureInput.disabled = true;
    } else {
        bkThicknessSelect.disabled = true;
        bkTemperatureInput.disabled = false;
    }
}

// Enable Temperature Input
function bkEnableTemperature() {
    bkTemperatureInput.value = '';
    bkOutputDiv.style.display = 'none';
    bkWarning.style.display = 'none';

    const year = bkYearSelect.value;
    const material = bkMaterialSelect.value;
    const grade = bkGradeSelect.value;

    if (!year || !material || !grade) return;

    const gradeData = bkStressData[year][material][grade];
    const hasThickness = Object.keys(gradeData).some(k => k.includes('mm'));

    bkTemperatureInput.disabled = hasThickness && !bkThicknessSelect.value;
}

// Get interpolated stress data
function bkGetClosestTemperatureData(year, material, grade, temp, thickness) {
    if (!bkStressData[year] || !bkStressData[year][material] || !bkStressData[year][material][grade]) return null;

    let gradeData = bkStressData[year][material][grade];
    const thicknessKeys = Object.keys(gradeData).filter(k => k.includes('mm'));

    if (thicknessKeys.length > 0) {
        gradeData = gradeData[thickness] || gradeData[thicknessKeys[0]];
    }

    const temps = Object.keys(gradeData).map(t => parseFloat(t)).sort((a, b) => a - b);

    if (temps.length === 0) return null;
    if (temp < temps[0] || temp > temps[temps.length - 1]) return null;

    // ✅ Handle exact match
    if (temps.includes(temp)) {
        const exact = gradeData[temp];
        return {
            stress: exact["Allowable Stress"],
            yield: exact.yield,
            tensile: exact.tensile
        };
    }

    // ✅ Interpolation
    let lower, upper;
    for (let i = 0; i < temps.length - 1; i++) {
        if (temps[i] <= temp && temp <= temps[i + 1]) {
            lower = temps[i];
            upper = temps[i + 1];
            break;
        }
    }

    const lowData = gradeData[lower];
    const highData = gradeData[upper];
    const ratio = (temp - lower) / (upper - lower);

    return {
        stress: +(lowData["Allowable Stress"] + (highData["Allowable Stress"] - lowData["Allowable Stress"]) * ratio).toFixed(2),
        yield: +(lowData.yield + (highData.yield - lowData.yield) * ratio).toFixed(2),
        tensile: +(lowData.tensile + (highData.tensile - lowData.tensile) * ratio).toFixed(2)
    };
}


// Event Listeners
bkYearSelect.addEventListener('change', () => {
    bkPopulateMaterials(bkYearSelect.value);
});

bkMaterialSelect.addEventListener('change', () => {
    bkPopulateGrades(bkYearSelect.value, bkMaterialSelect.value);
});

bkGradeSelect.addEventListener('change', () => {
    bkPopulateThickness(bkYearSelect.value, bkMaterialSelect.value, bkGradeSelect.value);
});

bkThicknessSelect.addEventListener('change', () => {
    bkEnableTemperature();
});

bkTemperatureInput.addEventListener('input', () => {
    const temp = parseFloat(bkTemperatureInput.value);
    const year = bkYearSelect.value;
    const material = bkMaterialSelect.value;
    const grade = bkGradeSelect.value;
    const thickness = bkThicknessSelect.disabled ? null : bkThicknessSelect.value;

    const data = bkGetClosestTemperatureData(year, material, grade, temp, thickness);

    if (!data) {
        bkOutputDiv.style.display = 'none';
        bkWarning.style.display = 'block';
        bkTemperatureInput.classList.add('shake', 'error');
        setTimeout(() => bkTemperatureInput.classList.remove('shake', 'error'), 500);
    } else {
        bkWarning.style.display = 'none';
        bkStressValue.textContent = data.stress;
        bkYieldStrength.textContent = data.yield;
        bkTensileStrength.textContent = data.tensile;

        bkStressValue.style.color = data.stress < 100 ? 'green' : data.stress < 200 ? 'orange' : 'red';
        bkOutputDiv.style.display = 'block';
    }
});

// Init
document.addEventListener('DOMContentLoaded', () => {
    bkPopulateYears();
});
