function openModal(type) {
  document.getElementById(type + "Modal").style.display = "flex";
}
function closeModal(type) {
  document.getElementById(type + "Modal").style.display = "none";
}

// -------------------------------
// 🔹 Shared ART Table
// -------------------------------
const artTable = {
    0.02: {1:{l:1,m:1,h:1,vh:1}, 2:{l:1,m:1,h:1,vh:1}, 3:{l:1,m:1,h:1,vh:1}, 4:{l:1,m:1,h:1,vh:1},5:{l:1,m:1,h:1,vh:1},6:{l:1,m:1,h:1,vh:1}},
0.04: {1:{l:1,m:1,h:1,vh:1}, 2:{l:1,m:1,h:1,vh:1}, 3:{l:1,m:1,h:1,vh:1}, 4:{l:1,m:1,h:1,vh:1},5:{l:1,m:1,h:1,vh:1},6:{l:1,m:1,h:1,vh:1}},
0.06: {1:{l:1,m:1,h:1,vh:1}, 2:{l:1,m:1,h:1,vh:1}, 3:{l:1,m:1,h:1,vh:1}, 4:{l:1,m:1,h:1,vh:1},5:{l:1,m:1,h:1,vh:1},6:{l:1,m:1,h:1,vh:1}},
0.08: {1:{l:1,m:1,h:1,vh:1}, 2:{l:1,m:1,h:1,vh:1}, 3:{l:1,m:1,h:1,vh:1}, 4:{l:1,m:1,h:1,vh:1},5:{l:1,m:1,h:1,vh:1},6:{l:1,m:1,h:1,vh:1}},
0.10: {1:{l:2,m:1,h:1,vh:1}, 2:{l:1,m:1,h:1,vh:1}, 3:{l:1,m:1,h:1,vh:1}, 4:{l:1,m:1,h:1,vh:1},5:{l:1,m:1,h:1,vh:1},6:{l:1,m:1,h:1,vh:1}},
0.12: {1:{l:5,m:3,h:2,vh:1}, 2:{l:4,m:2,h:1,vh:1}, 3:{l:3,m:1,h:1,vh:1}, 4:{l:2,m:1,h:1,vh:1},5:{l:2,m:1,h:1,vh:1},6:{l:1,m:1,h:1,vh:1}},
0.14: {1:{l:17,m:10,h:6,vh:1}, 2:{l:13,m:6,h:1,vh:1}, 3:{l:10,m:3,h:1,vh:1}, 4:{l:7,m:2,h:1,vh:1},5:{l:5,m:1,h:1,vh:1},6:{l:4,m:1,h:1,vh:1}},
0.16: {1:{l:70,m:50,h:20,vh:3}, 2:{l:50,m:20,h:4,vh:1}, 3:{l:40,m:10,h:1,vh:1}, 4:{l:30,m:5,h:1,vh:1},5:{l:20,m:2,h:1,vh:1},6:{l:14,m:1,h:1,vh:1}},
0.18: {1:{l:200,m:130,h:70,vh:7}, 2:{l:170,m:70,h:10,vh:1}, 3:{l:130,m:35,h:3,vh:1}, 4:{l:100,m:15,h:1,vh:1},5:{l:70,m:7,h:1,vh:1},6:{l:50,m:3,h:1,vh:1}},
0.20: {1:{l:300,m:210,h:110,vh:15}, 2:{l:290,m:120,h:20,vh:1}, 3:{l:260,m:60,h:5,vh:1}, 4:{l:180,m:20,h:2,vh:1},5:{l:120,m:10,h:1,vh:1},6:{l:100,m:6,h:1,vh:1}},
0.25: {1:{l:450,m:290,h:150,vh:20}, 2:{l:350,m:170,h:30,vh:2}, 3:{l:240,m:80,h:6,vh:1}, 4:{l:200,m:30,h:20,vh:1},5:{l:150,m:15,h:2,vh:1},6:{l:120,m:7,h:1,vh:1}},
0.30: {1:{l:550,m:400,h:200,vh:30}, 2:{l:400,m:200,h:40,vh:4}, 3:{l:320,m:110,h:9,vh:2}, 4:{l:240,m:50,h:4,vh:2},5:{l:180,m:25,h:3,vh:2},6:{l:150,m:10,h:2,vh:2}},
0.35: {1:{l:650,m:550,h:300,vh:80}, 2:{l:600,m:300,h:80,vh:10}, 3:{l:540,m:150,h:20,vh:5}, 4:{l:440,m:90,h:10,vh:4},5:{l:350,m:70,h:6,vh:4},6:{l:280,m:40,h:5,vh:4}},
0.40: {1:{l:800,m:700,h:400,vh:130}, 2:{l:700,m:400,h:120,vh:30}, 3:{l:600,m:200,h:50,vh:10}, 4:{l:500,m:140,h:20,vh:8},5:{l:400,m:110,h:10,vh:8},6:{l:350,m:90,h:9,vh:8}},
0.45: {1:{l:900,m:810,h:500,vh:200}, 2:{l:800,m:500,h:160,vh:40}, 3:{l:700,m:270,h:60,vh:20}, 4:{l:600,m:200,h:30,vh:15},5:{l:500,m:160,h:20,vh:15},6:{l:400,m:130,h:20,vh:15}},
0.50: {1:{l:1100,m:970,h:600,vh:270}, 2:{l:1000,m:600,h:200,vh:60}, 3:{l:900,m:360,h:80,vh:40}, 4:{l:800,m:270,h:50,vh:40},5:{l:700,m:210,h:40,vh:40},6:{l:600,m:180,h:40,vh:40}},
0.55: {1:{l:1200,m:1130,h:700,vh:350}, 2:{l:1100,m:750,h:300,vh:100}, 3:{l:1000,m:500,h:130,vh:90}, 4:{l:900,m:350,h:100,vh:90},5:{l:800,m:260,h:90,vh:90},6:{l:700,m:240,h:90,vh:90}},
0.60: {1:{l:1400,m:1250,h:850,vh:500}, 2:{l:1300,m:900,h:400,vh:230}, 3:{l:1200,m:620,h:250,vh:240}, 4:{l:1000,m:450,h:220,vh:210},5:{l:900,m:360,h:210,vh:210},6:{l:800,m:300,h:210,vh:210}},
0.65: {1:{l:1700,m:1400,h:1000,vh:700}, 2:{l:1600,m:1105,h:670,vh:530}, 3:{l:1300,m:880,h:550,vh:500}, 4:{l:1200,m:700,h:530,vh:500},5:{l:1100,m:640,h:500,vh:500},6:{l:1000,m:600,h:500,vh:500}},
0.75: {1:{l:2100,m:1700,h:1200,vh:1000}, 2:{l:2000,m:1400,h:1000,vh:1000}, 3:{l:1800,m:1100,h:1000,vh:1000}, 4:{l:1500,m:1000,h:1000,vh:1000},5:{l:1300,m:1000,h:1000,vh:1000},6:{l:1000,m:1000,h:1000,vh:100}}

  };

// -------------------------------
// 🔹 Shared Damage Factor Lookup
// -------------------------------
function getDamageFactor(fwl, inspections, conf) {
  const keys = Object.keys(artTable).map(parseFloat).sort((a, b) => a - b);
  const closestFWL = keys.find(k => k >= fwl) || keys[keys.length - 1];
  return artTable[closestFWL]?.[inspections]?.[conf.toLowerCase()] || 1;
}

// -------------------------------
// 🔹 Shared Probability Mapping
// -------------------------------
function getProbability(damageFactor) {
  if (damageFactor >= 1000) return 1;
  if (damageFactor >= 100) return 2;
  if (damageFactor >= 10) return 3;
  if (damageFactor >= 1) return 4;
  return 5;
}

// -------------------------------
// 🔹 Spinner helper
// -------------------------------
function showSpinner(targetId) {
  document.getElementById(targetId).innerHTML = `<div class="spinner">Calculating... ⏳</div>`;
}

// -------------------------------
// 🔹 External Calculation
// -------------------------------
function calculateExternal() {
  const years = document.getElementById('ext_years').value;
  const coatingLife = document.getElementById('ext_coating').value;
  const initialThickness_mm = document.getElementById('ext_tInit').value;
  const requiredMinThickness_mm = document.getElementById('ext_tMin').value;
  const operatingTempC = document.getElementById('ext_temp').value;
  const humidityRaw = document.getElementById('ext_humidity').value;
  const insTypeFactor_raw = document.getElementById('ext_insType').value;
  const insCondFactor_raw = document.getElementById('ext_insCond').value;
  const coolingFactor_raw = document.getElementById('ext_cooling').value;
  const inspections = document.getElementById('ext_numInsp').value;
  const inspConf = document.getElementById('ext_inspConf').value;
  const manualCRmm = document.getElementById('ext_cr') ? document.getElementById('ext_cr').value : '';

  if (!years || !coatingLife || !initialThickness_mm || !requiredMinThickness_mm || !operatingTempC ||
      !humidityRaw || !insTypeFactor_raw || !insCondFactor_raw || !coolingFactor_raw || !inspections || !inspConf) {
    alert("⚠️ Please fill all required fields before calculating.");
    return;
  }

  showSpinner("ext_results");

  setTimeout(() => {
    // unit conversions
    const initialThickness = parseFloat(initialThickness_mm) / 25.4;
    const requiredMinThickness = parseFloat(requiredMinThickness_mm) / 25.4;
    const operatingTemp = (parseFloat(operatingTempC) * 9/5) + 32;

    // External Age
    const externalAge = Math.max(0, parseFloat(years) - parseFloat(coatingLife));

    // Base CR (in/yr) — conservative defaults
    let baseCR = 0.0003;
    if (operatingTemp < 150) baseCR = 0.0003;
    else if (operatingTemp < 200) baseCR = 0.0008;
    else if (operatingTemp < 300) baseCR = 0.0012;
    else baseCR = 0.002;

    // Humidity mapping (handles 'L','M','H' or numeric values)
    let humidityFactor = parseFloat(humidityRaw);
    if (isNaN(humidityFactor)) {
      const h = String(humidityRaw).trim().toLowerCase();
      if (h === 'l' || h === 'low') humidityFactor = 0.25;
      else if (h === 'm' || h === 'medium') humidityFactor = 1.0;
      else if (h === 'h' || h === 'high') humidityFactor = 2.0;
      else humidityFactor = 1.0;
    }

    // Insulation factors (robust)
    let insTypeFactor = parseFloat(insTypeFactor_raw);
    let insCondFactor = parseFloat(insCondFactor_raw);
    if (isNaN(insTypeFactor) || insTypeFactor <= 0) {
      insTypeFactor = document.getElementById('ext_insType').selectedOptions[0].text.toLowerCase().includes('non') ? 1.0 : 1.2;
    }
    if (isNaN(insCondFactor) || insCondFactor <= 0) {
      insCondFactor = 1.0;
    }

    // Cooling factor parse
    let coolingFactor = parseFloat(coolingFactor_raw);
    if (isNaN(coolingFactor) || coolingFactor <= 0) coolingFactor = 1.0;

    // Predicted CR: use manual CR if provided (mm/yr) else compute
    let predictedCR_in;
    if (manualCRmm && manualCRmm.trim() !== '') {
      predictedCR_in = parseFloat(manualCRmm) / 25.4; // mm/yr -> in/yr
    } else {
      predictedCR_in = baseCR * humidityFactor * insTypeFactor * insCondFactor * coolingFactor;
    }

    // debug (temporary)
    // console.log({ baseCR, humidityFactor, insTypeFactor, insCondFactor, coolingFactor, predictedCR_in });

    // Wall loss (inches)
    const wallLoss = predictedCR_in * externalAge;
    const fractionalWL = wallLoss / initialThickness;
    const wallRatio = (initialThickness - wallLoss) / requiredMinThickness;

    // Damage Factor (cap FWL)
    const fwlCapped = Math.min(Math.max(fractionalWL, 0), 0.75);
    const damageFactor = getDamageFactor(fwlCapped, parseInt(inspections), inspConf);

    // Probability (you can also apply the +1 rule here for wallRatio>1.5 && CR < 0.127 mm/yr)
    let probability = getProbability(damageFactor);
    // Optional: API rule to increase category if very safe
    if (wallRatio > 1.5 && (predictedCR_in * 25.4) < 0.127) {
      probability = Math.min(probability + 1, 5);
    }

    // Output
    document.getElementById("ext_results").innerHTML = `
      <b>External Age:</b> ${externalAge.toFixed(1)} years<br/>
      <b>Predicted CR:</b> ${(predictedCR_in*25.4).toFixed(3)} mm/yr<br/>
      <b>Wall Loss:</b> ${(wallLoss*25.4).toFixed(2)} mm<br/>
      <b>Fractional WL (ar/t):</b> ${fractionalWL.toFixed(3)}<br/>
      <b>Wall Ratio:</b> ${wallRatio.toFixed(2)}<br/>
      <b>Damage Factor:</b> ${damageFactor}<br/>
      <b>Probability Category:</b> ${probability}
    `;
    document.getElementById("ext_damageFactorBox").innerText = damageFactor;
    document.getElementById("ext_probabilityBox").innerText = probability;

    closeModal("external");
  }, 1200);
}


// -------------------------------
// 🔹 Internal Calculation
// -------------------------------
function calculateInternal() {
  const years = document.getElementById('int_years').value;
  const cr_mm = document.getElementById('int_cr').value;
  const tNom_mm = document.getElementById('int_tNom').value;
  const tReq_mm = document.getElementById('int_tReq').value;
  const inspections = document.getElementById('int_numInsp').value;
  const inspConf = document.getElementById('int_inspConf').value;

  // ✅ Validation
  if (!years || !cr_mm || !tNom_mm || !tReq_mm || !inspections || !inspConf) {
    alert("⚠️ Please fill all required fields before calculating.");
    return;
  }

  // Spinner show
  showSpinner("int_results");

  setTimeout(() => {
    // Convert units
    const cr_in = parseFloat(cr_mm) / 25.4;
    const tNom_in = parseFloat(tNom_mm) / 25.4;
    const tReq_in = parseFloat(tReq_mm) / 25.4;

    // Wall loss
    const wallLoss = cr_in * parseFloat(years);
    const wallRatio = (tNom_in - wallLoss) / tReq_in;
    const fractionalWL = wallLoss / tNom_in;

    // Damage Factor & Probability
    // Damage Factor & Probability
const damageFactor = getDamageFactor(fractionalWL, parseInt(inspections), inspConf);
let probability = getProbability(damageFactor);

// ✅ Adjustment condition as per API logic
if (wallRatio > 1.5 && parseFloat(cr_mm) < 0.127) {  // 5 mpy = 0.127 mm/yr
  probability = Math.min(probability + 1, 5);
}


    // Output
    document.getElementById("int_results").innerHTML = `
      <b>Years in Service:</b> ${years}<br/>
      <b>Corrosion Rate:</b> ${parseFloat(cr_mm).toFixed(3)} mm/yr<br/>
      <b>Wall Loss:</b> ${(wallLoss*25.4).toFixed(2)} mm<br/>
      <b>Fractional WL (ar/t):</b> ${fractionalWL.toFixed(3)}<br/>
      <b>Wall Ratio:</b> ${wallRatio.toFixed(2)}<br/>
      <b>Damage Factor:</b> ${damageFactor}<br/>
      <b>Probability Category:</b> ${probability}
    `;

    document.getElementById("int_damageFactorBox").innerText = damageFactor;
    document.getElementById("int_probabilityBox").innerText = probability;

    closeModal("internal");
  }, 1200);
}

// -------------------------------

const fluidData = [
  { name: "H2", density: 10.0, bpC: -252.8, fpC: null, mw: 2, HC: 119950, AIT: null, PFF: 0.8, P_IGF: 0.05, toxicEndpoint: null, isDense: false },
  { name: "C1", density: 18.7, bpC: -161.7, fpC: null, mw: 16, HC: 50029, AIT: null, PFF: 2.0, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C2", density: 22.5, bpC: -111.7, fpC: null, mw: 30, HC: 47300, AIT: null, PFF: 2.2, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C3", density: 32.1, bpC: -45, fpC: null, mw: 44, HC: 46000, AIT: null, PFF: 2.8, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C4", density: 37, bpC: -33.3, fpC: -60, mw: 58, HC: 45500, AIT: 550, PFF: 3.0, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C5", density: 40, bpC: 33.3, fpC: -40, mw: 72, HC: 44600, AIT: 500, PFF: 3.2, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C6", density: 41.8, bpC: 101.7, fpC: -4.4, mw: 86, HC: 44400, AIT: 437, PFF: 3.5, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C7", density: 42.9, bpC: 97.2, fpC: 25, mw: 100, HC: 44200, AIT: 399, PFF: 3.5, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C8", density: 44.1, bpC: 125.6, fpC: 13.3, mw: 114, HC: 44200, AIT: 428, PFF: 3.6, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C9", density: 45, bpC: 150.6, fpC: 31.1, mw: 128, HC: 44400, AIT: 401, PFF: 3.8, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C10", density: 45.7, bpC: 173.9, fpC: 46.1, mw: 142, HC: 44400, AIT: 410, PFF: 3.9, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C11", density: 46.3, bpC: 210, fpC: 65, mw: 156, HC: 44800, AIT: 400, PFF: 4.0, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C12", density: 46.9, bpC: 216.1, fpC: 73.9, mw: 170, HC: 45000, AIT: 397, PFF: 4.1, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C13-16", density: 47, bpC: 221.7, fpC: 93.3, mw: 200, HC: 45900, AIT: 400, PFF: 4.2, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C17-25", density: 48, bpC: 371.1, fpC: 93.3, mw: 280, HC: 41800, AIT: 400, PFF: 4.5, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "C25+", density: 49, bpC: 426.7, fpC: 93.3, mw: 422, HC: 40600, AIT: 400, PFF: 4.7, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "MEOH", density: 49.6, bpC: 64.4, fpC: 11.1, mw: 32, HC: 14900, AIT: 464, PFF: 2.0, P_IGF: 0.1, toxicEndpoint: 0.3, isDense: false },
  { name: "ETOH", density: 49.2, bpC: 78.3, fpC: 13, mw: 46, HC: 15000, AIT: 685, PFF: 2.1, P_IGF: 0.1, toxicEndpoint: 0.38, isDense: false },
  { name: "Amine", density: 66.35, bpC: 178.3, fpC: null, mw: 17, HC: 5000, AIT: null, PFF: 2.5, P_IGF: 0.1, toxicEndpoint: 0.5, isDense: true },
  { name: "Glycol", density: 49.6, bpC: 121.1, fpC: null, mw: 62, HC: 14900, AIT: null, PFF: 2.2, P_IGF: 0.1, toxicEndpoint: null, isDense: false },
  { name: "H2O", density: 62.4, bpC: 100, fpC: null, mw: 18, HC: 0, AIT: null, PFF: 0, P_IGF: 0, toxicEndpoint: null, isDense: false },
  { name: "AIR", density: 15, bpC: -128.9, fpC: null, mw: 29, HC: 0, AIT: null, PFF: 0, P_IGF: 0, toxicEndpoint: null, isDense: false },
  { name: "Steam", density: 62.4, bpC: 100, fpC: null, mw: 18, HC: 0, AIT: null, PFF: 0, P_IGF: 0, toxicEndpoint: null, isDense: false },
  { name: "H2SO4", density: 80, bpC: 148.9, fpC: null, mw: 98, HC: 1, AIT: null, PFF: 0, P_IGF: 0, toxicEndpoint: 0.1, isDense: true },
  { name: "NAOH", density: 80, bpC: 104.4, fpC: null, mw: 40, HC: 1, AIT: null, PFF: 0, P_IGF: 0, toxicEndpoint: 0.5, isDense: true },
  { name: "H2S", density: 6.64, bpC: -60, fpC: null, mw: 34, HC: null, AIT: 518, PFF: 1.5, P_IGF: 0.05, toxicEndpoint: 0.014, isDense: true },
  { name: "Chlorine", density: 88, bpC: -34.4, fpC: null, mw: 71, HC: null, AIT: null, PFF: 0, P_IGF: 0, toxicEndpoint: 0.0087, isDense: true },
  { name: "NH3", density: 5.15, bpC: -33.3, fpC: null, mw: 17, HC: null, AIT: 1200, PFF: 1.2, P_IGF: 0.05, toxicEndpoint: 0.14, isDense: true },
  { name: "CO", density: 50.79, bpC: -191.1, fpC: null, mw: 28, HC: null, AIT: 1128, PFF: 0.8, P_IGF: 0.05, toxicEndpoint: 0.045, isDense: false }
];




// =========================================================
//  Consequence Calculation Script – Full Updated Version
// =========================================================

// ✅ Populate the fluid drop-down on page load
window.onload = function () {
    const fluidSelect = document.getElementById('cons_fluid');
    fluidData.forEach((fluid, index) => {
        const option = document.createElement('option');
        option.value = index;  // Use index to access full data later
        option.textContent = `${fluid.name} (Density: ${fluid.density} lb/ft³)`;
        fluidSelect.appendChild(option);
    });
};

// ✅ Auto-fill density, boiling point, flash point, AIT, HCF when fluid changes
function updateDensity() {
    const selectedIndex = document.getElementById('cons_fluid').value;
    const densityInput = document.getElementById('cons_density');
    const bpInput = document.getElementById('cons_boiling_point_C');
    const flashInput = document.getElementById('cons_flash_temp');
    const aitInput = document.getElementById('cons_autoign_temp');
    const hcfInput = document.getElementById('cons_HCF');

    // Clear if nothing is selected
    if (selectedIndex === "") {
        densityInput.value = "";
        bpInput.value = "";
        flashInput.value = "";
        aitInput.value = "";
        hcfInput.value = "";
        return;
    }

    const fluid = fluidData[selectedIndex];

    // ✅ Set values or empty fallback
    densityInput.value = fluid.density !== undefined ? fluid.density : "";
    bpInput.value = fluid.bpC !== undefined ? fluid.bpC : "";

    // Convert °C to °F for flash point
    if (fluid.fpC !== null && fluid.fpC !== undefined) {
        flashInput.value = (fluid.fpC * 9 / 5 + 32).toFixed(2);
    } else {
        flashInput.value = "";
    }

    aitInput.value = fluid.AIT !== undefined ? fluid.AIT : "";
    hcfInput.value = fluid.HCF !== undefined ? fluid.HCF : "";
}

// ✅ Probability of ignition based on operating, flash, and autoignition temps (all Rankine)
// -------------------- Helper: Probability of Ignition --------------------
function calculateProbabilityOfIgnition(T_oper_R, T_flash_R, T_autoignition_R, PIGF) {
    // PIGF = probability at flash (fluid-specific)
    if (!isFinite(T_oper_R) || !isFinite(T_flash_R) || !isFinite(T_autoignition_R)) return PIGF ?? 0.1;
    if (T_oper_R <= T_flash_R) return PIGF ?? 0.1;
    if (T_oper_R >= T_autoignition_R) return 1.0;
    const pig = (PIGF ?? 0.1) + (1 - (PIGF ?? 0.1)) * ((T_oper_R - T_flash_R) / (T_autoignition_R - T_flash_R));
    return Math.min(Math.max(pig, (PIGF ?? 0.1)), 1.0);
}

// -------------------- Helper: Toxic endpoint lookup (ratio tables) --------------------
// NOTE: These example tables use ratio ranges and distance in miles. Replace numeric table
// entries with exact RBI Appendix B values if you have them. Structure: { ratioMin, ratioMax, distance_miles }
const toxicReferenceTable10 = [
    { releaseRateMin: 0, releaseRateMax: 4.4, distance_ft: 0.06 * 5280 },
    { releaseRateMin: 4.4, releaseRateMax: 37, distance_ft: 0.19 * 5280 },
    { releaseRateMin: 37, releaseRateMax: 97, distance_ft: 0.31 * 5280 },
    { releaseRateMin: 97, releaseRateMax: 180, distance_ft: 0.43 * 5280 },
    { releaseRateMin: 180, releaseRateMax: 340, distance_ft: 0.62 * 5280 },
    { releaseRateMin: 340, releaseRateMax: 530, distance_ft: 0.81 * 5280 },
    { releaseRateMin: 530, releaseRateMax: 760, distance_ft: 0.99 * 5280 },
    { releaseRateMin: 760, releaseRateMax: 1000, distance_ft: 1.2 * 5280 },
    { releaseRateMin: 1000, releaseRateMax: 1500, distance_ft: 1.4 * 5280 },
    { releaseRateMin: 1500, releaseRateMax: 1900, distance_ft: 1.6 * 5280 },
    { releaseRateMin: 1900, releaseRateMax: 2400, distance_ft: 1.8 * 5280 },
    { releaseRateMin: 2400, releaseRateMax: 2900, distance_ft: 2.0 * 5280 },
    { releaseRateMin: 2900, releaseRateMax: 3500, distance_ft: 2.2 * 5280 },
    { releaseRateMin: 3500, releaseRateMax: 4400, distance_ft: 2.4 * 5280 },
    { releaseRateMin: 4400, releaseRateMax: 5100, distance_ft: 2.6 * 5280 },
    { releaseRateMin: 5100, releaseRateMax: 5900, distance_ft: 2.8 * 5280 },
    { releaseRateMin: 5900, releaseRateMax: 6800, distance_ft: 3.0 * 5280 },
    { releaseRateMin: 6800, releaseRateMax: 7700, distance_ft: 3.2 * 5280 },
    { releaseRateMin: 7700, releaseRateMax: 9000, distance_ft: 3.4 * 5280 },
    { releaseRateMin: 9000, releaseRateMax: 10000, distance_ft: 3.6 * 5280 },
    { releaseRateMin: 10000, releaseRateMax: 11000, distance_ft: 3.8 * 5280 },
    { releaseRateMin: 11000, releaseRateMax: 12000, distance_ft: 4.0 * 5280 },
    { releaseRateMin: 12000, releaseRateMax: 14000, distance_ft: 4.2 * 5280 },
    { releaseRateMin: 14000, releaseRateMax: 15000, distance_ft: 4.4 * 5280 },
    { releaseRateMin: 15000, releaseRateMax: 16000, distance_ft: 4.6 * 5280 },
    { releaseRateMin: 16000, releaseRateMax: Infinity, distance_ft: 4.8 * 5280 }  // ">4.8 miles"
];


const toxicReferenceTable60 = [
    { releaseRateMin: 0, releaseRateMax: 5.5, distance_ft: 0.06 * 5280 },
    { releaseRateMin: 5.5, releaseRateMax: 46, distance_ft: 0.19 * 5280 },
    { releaseRateMin: 46, releaseRateMax: 120, distance_ft: 0.31 * 5280 },
    { releaseRateMin: 120, releaseRateMax: 220, distance_ft: 0.43 * 5280 },
    { releaseRateMin: 220, releaseRateMax: 420, distance_ft: 0.62 * 5280 },
    { releaseRateMin: 420, releaseRateMax: 650, distance_ft: 0.81 * 5280 },
    { releaseRateMin: 650, releaseRateMax: 910, distance_ft: 0.99 * 5280 },
    { releaseRateMin: 910, releaseRateMax: 1200, distance_ft: 1.2 * 5280 },
    { releaseRateMin: 1200, releaseRateMax: 1600, distance_ft: 1.4 * 5280 },
    { releaseRateMin: 1600, releaseRateMax: 1900, distance_ft: 1.6 * 5280 },
    { releaseRateMin: 1900, releaseRateMax: 2300, distance_ft: 1.8 * 5280 },
    { releaseRateMin: 2300, releaseRateMax: 2600, distance_ft: 2.0 * 5280 },
    { releaseRateMin: 2600, releaseRateMax: 2900, distance_ft: 2.2 * 5280 },
    { releaseRateMin: 2900, releaseRateMax: 3400, distance_ft: 2.4 * 5280 },
    { releaseRateMin: 3400, releaseRateMax: 3700, distance_ft: 2.6 * 5280 },
    { releaseRateMin: 3700, releaseRateMax: 4100, distance_ft: 2.8 * 5280 },
    { releaseRateMin: 4100, releaseRateMax: 4400, distance_ft: 3.0 * 5280 },
    { releaseRateMin: 4400, releaseRateMax: 4800, distance_ft: 3.2 * 5280 },
    { releaseRateMin: 4800, releaseRateMax: 5200, distance_ft: 3.4 * 5280 },
    { releaseRateMin: 5200, releaseRateMax: 5600, distance_ft: 3.6 * 5280 },
    { releaseRateMin: 5600, releaseRateMax: 5900, distance_ft: 3.8 * 5280 },
    { releaseRateMin: 5900, releaseRateMax: 6200, distance_ft: 4.0 * 5280 },
    { releaseRateMin: 6200, releaseRateMax: 6700, distance_ft: 4.2 * 5280 },
    { releaseRateMin: 6700, releaseRateMax: 7000, distance_ft: 4.4 * 5280 },
    { releaseRateMin: 7000, releaseRateMax: 7400, distance_ft: 4.6 * 5280 },
    { releaseRateMin: 7400, releaseRateMax: 7700, distance_ft: 4.8 * 5280 },
    { releaseRateMin: 7700, releaseRateMax: 8100, distance_ft: 5.0 * 5280 },
    { releaseRateMin: 8100, releaseRateMax: 8500, distance_ft: 5.2 * 5280 },
    { releaseRateMin: 8500, releaseRateMax: 8900, distance_ft: 5.4 * 5280 },
    { releaseRateMin: 8900, releaseRateMax: 9200, distance_ft: 5.6 * 5280 },
    { releaseRateMin: 9200, releaseRateMax: 9600, distance_ft: 5.8 * 5280 },
    { releaseRateMin: 9600, releaseRateMax: 10000, distance_ft: 6.0 * 5280 },
    { releaseRateMin: 10000, releaseRateMax: 10400, distance_ft: 6.2 * 5280 },
    { releaseRateMin: 10400, releaseRateMax: 11700, distance_ft: 6.8 * 5280 },
    { releaseRateMin: 11700, releaseRateMax: 13100, distance_ft: 7.5 * 5280 },
    { releaseRateMin: 13100, releaseRateMax: 14500, distance_ft: 8.1 * 5280 },
    { releaseRateMin: 14500, releaseRateMax: 15900, distance_ft: 8.7 * 5280 },
    { releaseRateMin: 15900, releaseRateMax: 17500, distance_ft: 9.3 * 5280 },
    { releaseRateMin: 17500, releaseRateMax: 19100, distance_ft: 9.9 * 5280 },
    { releaseRateMin: 19100, releaseRateMax: 22600, distance_ft: 11 * 5280 },
    { releaseRateMin: 22600, releaseRateMax: 26300, distance_ft: 12 * 5280 },
    { releaseRateMin: 26300, releaseRateMax: 30300, distance_ft: 14 * 5280 },
    { releaseRateMin: 30300, releaseRateMax: 34500, distance_ft: 15 * 5280 },
    { releaseRateMin: 34500, releaseRateMax: 38900, distance_ft: 16 * 5280 },
    { releaseRateMin: 38900, releaseRateMax: 43400, distance_ft: 17 * 5280 },
    { releaseRateMin: 43400, releaseRateMax: 48400, distance_ft: 19 * 5280 },
    { releaseRateMin: 48400, releaseRateMax: 61500, distance_ft: 22 * 5280 },
    { releaseRateMin: 61500, releaseRateMax: 75600, distance_ft: 25 * 5280 },
    { releaseRateMin: 75600, releaseRateMax: Infinity, distance_ft: 25 * 5280 }  // ">25 miles"
];


// If you have dense-gas tables, create denseTable10 / denseTable60 similarly and use `isDense` flag.

function getToxicEndpointDistance(releaseRate_lb_min, toxicEndpoint_mg_L, duration_min, isDense=false) {
    // releaseRate_lb_min: lb/min, toxicEndpoint_mg_L: mg/L
    // Choose table
   const table = (duration_min <= 10) 
    ? (isDense ? denseTable10 : toxicReferenceTable10) 
    : (isDense ? denseTable60 : toxicReferenceTable60); // use dense tables if isDense true
    // Avoid division by zero
    const endpoint = toxicEndpoint_mg_L > 0 ? toxicEndpoint_mg_L : 50;
    for (let i = 0; i < table.length; i++) {
    const row = table[i];
    if (releaseRate_lb_min >= row.releaseRateMin && releaseRate_lb_min < row.releaseRateMax) {
        return row.distance_ft;
    }
}
return table[table.length - 1].distance_ft; // fallback

}

// -------------------- Main: calculateConsequence (replace existing) --------------------
function calculateConsequence() {
    // ---- read inputs ----
    const inputPhase = (document.getElementById('cons_phase').value || "").toLowerCase();
    const boilingPointC = parseFloat(document.getElementById('cons_boiling_point_C').value) || 0;
    const ambientTempC = parseFloat(document.getElementById('cons_ambient_temp_C')?.value) || 25;
    const selectedFluidIndex = document.getElementById('cons_fluid').value;
    const fluid = fluidData[selectedFluidIndex] || {};

    const P_kgcm2       = parseFloat(document.getElementById('cons_pressure').value) || 0;
    const density_lb_ft3= parseFloat(document.getElementById('cons_density').value) || (fluid.density || 50);
    const inventory_kg  = parseFloat(document.getElementById('cons_inventory').value) || 0;
    const leakSize_in2  = parseFloat(document.getElementById('cons_equipment').value) || 0;
    const detect        = parseFloat(document.getElementById('cons_detect').value) || 0;
    const isolate       = parseFloat(document.getElementById('cons_isolate').value) || 0;
    const toxicFluid    = document.getElementById('cons_toxicFluid')?.value || "none";
    const percentToxic  = parseFloat(document.getElementById('cons_percentToxic').value) || 0;
    const lostValue     = parseFloat(document.getElementById('cons_lostValue').value) || 0;
    const prodLossCat = document.getElementById('cons_prodLossCategory')?.value || "N/A";
    const T_oper_C      = parseFloat(document.getElementById('cons_temp_oper')?.value) || 20;

    // ---- derived ----
    const ambientPhase = (ambientTempC >= boilingPointC) ? "gas" : "liquid";
    let phase = inputPhase;
    if (inputPhase === "gas") {
        phase = (ambientPhase === "liquid") ? "liquid" : "gas";
    } else if (inputPhase === "liquid") {
        if (ambientPhase === "gas") {
            const boilingPointF = (boilingPointC * 9 / 5) + 32;
            phase = (boilingPointF > 80) ? "liquid" : "gas";
        } else {
            phase = "liquid";
        }
    }

    // ---- fluid defaults & constants ----
    const Cd_liquid = 0.6;
    const Cd_gas = 0.9;
    const P_atm_psia = 14.7;
    const k  = 1.4;
    const R  = 10.731;
    const gc = 32.2;
    const HCTNT = 4680; // kJ/kg for TNT
    const PFF = fluid.PFF ?? 2.63; // pool fire factor (from fluidData)
    const HCf = fluid.HC ?? 15000; // kJ/kg (heat of combustion) — ensure fluidData has HC
    const baseP_IGF = fluid.P_IGF ?? 0.1; // probability at flash
    const molecularWeight = fluid.mw || 20;

    // operating temps conversion
    const T_oper_R = (T_oper_C + 273.15) * 9 / 5;

    // flash & autoignition temperatures (°F -> Rankine)
    const T_flash_F = (fluid.fpC !== null && fluid.fpC !== undefined) ? (fluid.fpC * 9 / 5 + 32) : 450;
    const T_flash_R = T_flash_F + 459.67;
    const T_autoignition_R = (fluid.AIT !== null && fluid.AIT !== undefined) ? (fluid.AIT + 459.67) : 1000;

    // base P_IGF already assigned
    // Vapor pressure user input (psig)
    const P_vapor_psig  = parseFloat(document.getElementById('cons_vapor_pressure').value) || 0;

    // pressure conversions
    const P_psig      = P_kgcm2 * 14.223;              // kg/cm2 -> psi
    const P_abs_psia  = P_psig + P_atm_psia;          // psia

    // area, temps, etc
    const A_in2 = leakSize_in2;
    const T = T_oper_R;

    // ---- initial release calc ----
    let initialReleaseRate_lb_min = 0;

    if (phase === "liquid") {
        // Liquid: Torricelli-like formula
        const Cd = Cd_liquid;
        const DP_psig = P_psig; // assuming liquid pressure gauge
        const Q_L = 60 * Cd * A_in2 * Math.sqrt((2 * density_lb_ft3 * DP_psig * gc) / 144);
        initialReleaseRate_lb_min = Q_L > 0 && isFinite(Q_L) ? Q_L : 0;
    } else {
        // Gas: sonic vs subsonic (choked)
        // P_transition (psia)
        const P_trans = P_atm_psia * Math.pow((k + 1) / 2, k / (k - 1));
        const Cd = Cd_gas;

        if (P_abs_psia > P_trans) {
            // choked (sonic) flow
            const factor = Math.sqrt((k * molecularWeight) / (R * T)) *
                           Math.pow(2 / (k + 1), (k + 1) / (2 * (k - 1)));
            initialReleaseRate_lb_min = 60 * Cd * A_in2 * P_abs_psia * (gc / 144) * factor;
        } else {
            // subsonic
            const term1 = (molecularWeight / (R * T)) * (gc / 144);
            const term2 = (2 * k) / (k - 1);
            const term3 = Math.pow(P_atm_psia / P_abs_psia, 2 / k);
            const term4 = 1 - Math.pow(P_atm_psia / P_abs_psia, (k - 1) / k);
            const factor = Math.sqrt(term1 * term2 * term3 * term4);
            initialReleaseRate_lb_min = 60 * Cd * A_in2 * P_abs_psia * factor;
        }
        if (!initialReleaseRate_lb_min || isNaN(initialReleaseRate_lb_min) || !isFinite(initialReleaseRate_lb_min)) {
            initialReleaseRate_lb_min = 0;
        }
    }

    // ---- duration and volumes ----
    const inventory_lb = inventory_kg * 2.205;
    const deinventoryTime = initialReleaseRate_lb_min > 0 ? (inventory_lb / initialReleaseRate_lb_min) : (detect + isolate);
    const releaseDuration = Math.min(deinventoryTime, detect + isolate);

    const accurateReleaseRate_lb_min = initialReleaseRate_lb_min;
    const accurateReleaseRate_g_min  = accurateReleaseRate_lb_min * 453.592;
    const leakQty_lb = accurateReleaseRate_lb_min * releaseDuration;
    const leakQty_kg = leakQty_lb / 2.205;

    // ---- probability of ignition ----
    const probIgnition = calculateProbabilityOfIgnition(T_oper_R, T_flash_R, T_autoignition_R, baseP_IGF);

    // ---- delta pressure ----
    const deltaPressure = (phase === "liquid") ? P_psig : Math.max(P_psig - P_vapor_psig, 0);

    // ---- Flammable consequences (distance & FAA) ----
    let distToEndEffect_ft = 0;
    let FAA_ft2 = 0;

    if (phase === "liquid") {
        // pool fire method
        const volReleased_ft3 = leakQty_lb / density_lb_ft3;
        const poolThickness_ft = 0.0328; // 1 cm
        const poolArea_ft2 = poolThickness_ft > 0 ? (volReleased_ft3 / poolThickness_ft) : 0;
        distToEndEffect_ft = PFF * Math.sqrt(Math.max(poolArea_ft2, 0));
        FAA_ft2 = probIgnition * Math.PI * Math.pow(distToEndEffect_ft, 2);
    } else {
        // gas: use TNT-equivalent method per RBI Eqn(9)
        const yieldFrac = 0.1; // 10% participating
        const Wf = leakQty_kg; // kg
        const TNT_equiv_kg = Math.max(0, Wf * yieldFrac * (HCf / HCTNT));
        const distToEndEffect_m = (TNT_equiv_kg > 0) ? 17 * Math.pow(TNT_equiv_kg, 1/3) : 0;
        distToEndEffect_ft = distToEndEffect_m * 3.28084;
        FAA_ft2 = probIgnition * Math.PI * Math.pow(distToEndEffect_ft, 2);
    }

    const distToEndEffect_m = distToEndEffect_ft / 3.28084;
    const FAA_m2 = FAA_ft2 / 10.7639;

    // ---- Flammable category ----
    let flameCat = "E";
    if (FAA_ft2 > 5_000_000) flameCat = "A";
    else if (FAA_ft2 > 500_000) flameCat = "B";
    else if (FAA_ft2 > 50_000) flameCat = "C";
    else if (FAA_ft2 > 5_000) flameCat = "D";

    // ---- Toxic calculation (mixed inventory rules) ----
    let toxicCat = "N/A";
    let toxicMixedRate_g_min = 0, toxicArea_m2 = 0, toxicDuration_min = 0;

    if (toxicFluid && toxicFluid.toLowerCase() !== "none" && percentToxic > 0) {
        // Mixed release logic per PDF Eqns (use 10-min or 60-min accordingly)
        const repRelease_lb_min = accurateReleaseRate_lb_min;
        const percent = percentToxic / 100;

        const mixedRelease_lb_min = repRelease_lb_min * percent;
        // Mixed inventory rate: use 10-min assumption for conservative sizing (PDF uses both 10 and 60)
        const mixedInventoryRate_lb_min = (inventory_lb * percent) / 10;
        const finalToxicRelease_lb_min = Math.min(mixedRelease_lb_min, mixedInventoryRate_lb_min);

        toxicMixedRate_g_min = finalToxicRelease_lb_min * 453.592;

        // toxic endpoint from fluid data (mg/L)
        const toxicEndpoint_mg_L = fluid.toxicEndpoint ?? 50;
        const isDense = !!fluid.isDense;

        // choose duration (releaseDuration) and call lookup
        const distance_ft = getToxicEndpointDistance(finalToxicRelease_lb_min, toxicEndpoint_mg_L, releaseDuration, isDense);
        toxicDuration_min = releaseDuration;
        toxicArea_m2 = Math.PI * Math.pow(distance_ft * 0.3048, 2);

        const toxicArea_ft2 = toxicArea_m2 * 10.7639;
        if (toxicArea_ft2 > 5_000_000) toxicCat = "A";
        else if (toxicArea_ft2 > 500_000) toxicCat = "B";
        else if (toxicArea_ft2 > 50_000) toxicCat = "C";
        else if (toxicArea_ft2 > 5_000) toxicCat = "D";
        else toxicCat = "E";
    }

    // ---- Environmental category ----
    let envConsCat = "E";
    if (lostValue > 10_000_000) envConsCat = "A";
    else if (lostValue > 1_000_000) envConsCat = "B";
    else if (lostValue > 100_000) envConsCat = "C";
    else if (lostValue > 10_000) envConsCat = "D";

    // ---- Pool area (final) ----
    const poolThickness_ft = 0.0328; // 1 cm
    const volReleased_ft3 = leakQty_lb / density_lb_ft3;
    const poolArea_ft2 = poolThickness_ft > 0 ? (volReleased_ft3 / poolThickness_ft) : 0;
    const poolArea_m2 = poolArea_ft2 * 0.092903;

    // ---- write outputs ----
    document.getElementById("cons_results").innerHTML = `
        <table class="result-table">
            <tr><td><b>Final Phase:</b></td><td>${phase}</td></tr>
            <tr><td><b>Leak Size:</b></td><td>${(leakSize_in2 * 6.4516).toFixed(2)} cm²</td></tr>
            <tr><td><b>Leak Rate:</b></td><td>${accurateReleaseRate_g_min.toFixed(2)} grams/min</td></tr>
            <tr><td><b>Estimated Leak Quantity:</b></td><td>${leakQty_kg.toFixed(2)} kg</td></tr>
            <tr><td><b>Release Duration:</b></td><td>${releaseDuration.toFixed(4)} min</td></tr>
            <tr><td><b>Deinventory Time:</b></td><td>${deinventoryTime.toFixed(4)} min</td></tr>
            <tr><td><b>Probability of Ignition:</b></td><td>${probIgnition.toFixed(2)}</td></tr>
            <tr><td><b>Delta Pressure (ΔP):</b></td><td>${deltaPressure.toFixed(2)} psig</td></tr>
            <tr><td><b>Distance to End Effect:</b></td><td>${distToEndEffect_m.toFixed(2)} meters</td></tr>
            <tr><td><b>Toxic Mixed Release Rate:</b></td><td>${toxicMixedRate_g_min.toFixed(2)} grams/min</td></tr>
            <tr><td><b>Flammable Affected Area:</b></td><td>${FAA_m2.toFixed(2)} m²</td></tr>
            <tr><td><b>Toxicity Area:</b></td><td>${toxicArea_m2.toFixed(2)} m²</td></tr>
            <tr><td><b>Toxic Duration:</b></td><td>${toxicDuration_min.toFixed(4)} min</td></tr>
            <tr><td><b>Initial Leak Rate:</b></td><td>${(initialReleaseRate_lb_min * 453.592).toFixed(2)} grams/min</td></tr>
            <tr><td><b>Average Leak Rate:</b></td><td>${(initialReleaseRate_lb_min * 453.592).toFixed(2)} grams/min</td></tr>
            <tr><td><b>Cleanup Cost:</b></td><td>$0</td></tr>
            <tr><td><b>Pool Area:</b></td><td>${poolArea_m2.toFixed(2)} m²</td></tr>
            <tr><td><b>Flammable Consequence Category:</b></td><td>${flameCat}</td></tr>
            <tr><td><b>Toxic Consequence Category:</b></td><td>${toxicCat}</td></tr>
            <tr><td><b>Production Loss Category:</b></td><td>${prodLossCat}</td></tr>
            <tr><td><b>Environmental Consequence Category:</b></td><td>${envConsCat}</td></tr>
        </table>
    `;

    document.getElementById("cons_flameCatBox").innerText = flameCat;
    document.getElementById("cons_toxicCatBox").innerText = toxicCat;
    document.getElementById("cons_prodLossCatBox").innerText = prodLossCat;

    closeModal("consequence");
}








function calculateRiskMatrix() {
  const extProbText = document.getElementById("ext_probabilityBox").innerText;
  const intProbText = document.getElementById("int_probabilityBox").innerText;

  const flameCat = document.getElementById("cons_flameCatBox").innerText;
  const toxicCat = document.getElementById("cons_toxicCatBox").innerText;

  if (!extProbText || !intProbText || !flameCat || !toxicCat) {
    document.getElementById("riskMatrixSection").style.display = "none";
    return;
  }

  const extProb = parseInt(extProbText);
  const intProb = parseInt(intProbText);
  const probability = Math.min(extProb, intProb);

  const catPriority = { A: 1, B: 2, C: 3, D: 4, E: 5 };
  let consequence = flameCat;
  if (toxicCat !== "N/A" && catPriority[toxicCat] < catPriority[flameCat])
    consequence = toxicCat;

  // 🎨 Risk level matrix (right to left: E→A)
  const riskMatrix = {
    1: { E: "Medium-High", D: "Medium-High", C: "High", B: "High", A: "High" },
    2: { E: "Medium", D: "Medium", C: "Medium-High", B: "Medium-High", A: "High" },
    3: { E: "Low", D: "Medium", C: "Medium", B: "Medium-High", A: "High" },
    4: { E: "Low", D: "Medium", C: "Medium", B: "Medium", A: "Medium-High" },
    5: { E: "Low", D: "Low", C: "Low", B: "Medium", A: "Medium-High" },
  };

  // 🔢 Priority number matrix (based on your image)
  const priorityMatrix = {
    1: { E: 11, D: 7, C: 4, B: 2, A: 1 },
    2: { E: 16, D: 13, C: 8, B: 6, A: 3 },
    3: { E: 20, D: 17, C: 14, B: 9, A: 5 },
    4: { E: 23, D: 21, C: 18, B: 15, A: 10 },
    5: { E: 25, D: 24, C: 22, B: 19, A: 12 },
  };

  const riskLevel = riskMatrix[probability]?.[consequence] || "Low";
  const priorityNum = priorityMatrix[probability]?.[consequence] || "-";

  // 🧮 Output
  document.getElementById("riskMatrixSection").style.display = "block";
  document.getElementById("riskResult").innerHTML = `
    <b>Selected Probability:</b> ${probability}<br/>
    <b>Selected Consequence:</b> ${consequence}<br/>
    <b>📊 Risk Level:</b> 
      <span class="${getRiskClass(riskLevel)}">${riskLevel}</span><br/>
    <b>🔢 Inspection Priority Number:</b> 
      <span class="priority-number">${priorityNum}</span>
  `;
}

// 🎨 Risk color class
function getRiskClass(riskLevel) {
  switch (riskLevel) {
    case "Low": return "low";
    case "Medium": return "medium";
    case "Medium-High": return "medium-high";
    case "High": return "high";
    default: return "";
  }
}







