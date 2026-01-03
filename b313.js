// ✅ Toggle Weld Factor Section
function toggleWeldFactor() {
  const highTemp = document.getElementById("b313_highTemp").value;
  document.getElementById("b313_weldFactorSection")
    .classList.toggle("hidden", highTemp !== "yes");
}

// ✅ Toggle Mill Tolerance Section
function toggleMillToleranceSection() {
  const includeMillTol = document.getElementById("b313_includeMillTol").value;
  document.getElementById("b313_millTolSection")
    .classList.toggle("hidden", includeMillTol !== "yes");
}

// ✅ Toggle Corrosion Allowance Box
function toggleCABox() {
  const includeCA = document.getElementById("b313_includeCA").value;
  document.getElementById("b313_caBox")
    .classList.toggle("hidden", includeCA !== "yes");
}

// ✅ Pressure Conversion
function convertPressureUnit() {
  let P = parseFloat(document.getElementById("b313_pressure").value);
  const unit = document.getElementById("b313_pressureUnit").value;
  if (isNaN(P)) return;

  switch (unit) {
    case "kgcm2": P *= 0.0980665; break;
    case "bar": P *= 0.1; break;
    case "psi": P *= 0.00689476; break;
  }
  document.getElementById("b313_pressure").value = P.toFixed(3);
  document.getElementById("b313_pressureUnit").value = "MPa";
}

// ✅ Stress Conversion
function convertStressUnit() {
  let S = parseFloat(document.getElementById("b313_stress").value);
  const unit = document.getElementById("b313_stressUnit").value;
  if (isNaN(S)) return;

  switch (unit) {
    case "ksi": S *= 6.89476; break;
    case "kgcm2": S *= 0.0980665; break;
    case "psi": S *= 0.00689476; break;
  }
  document.getElementById("b313_stress").value = S.toFixed(2);
  document.getElementById("b313_stressUnit").value = "MPa";
}

// ✅ Y Factor Table (no change)
const yTable = {
  ferritic: { "482": 0.4, "510": 0.5, "538": 0.7, "566": 0.7, "593": 0.7, "621": 0.7, "649": 0.7, "677": 0.7 },
  austenitic: { "482": 0.4, "510": 0.4, "538": 0.4, "566": 0.4, "593": 0.5, "621": 0.7, "649": 0.7, "677": 0.7 },
  nickel: { "482": 0.4, "510": 0.4, "538": 0.4, "566": 0.4, "593": 0.4, "621": 0.4, "649": 0.5, "677": 0.7 },
  grayiron: { "482": 0.0, "510": 0.0, "538": 0.0, "566": 0.0, "593": 0.0, "621": 0.0, "649": 0.0, "677": 0.0 },
  other: { "482": 0.4, "510": 0.4, "538": 0.4, "566": 0.4, "593": 0.4, "621": 0.4, "649": 0.4, "677": 0.4 }
};

// ✅ Update Y Factor Dropdown
function updateYDropdown() {
  const material = document.getElementById("b313_yMaterial").value;
  const ySelect = document.getElementById("b313_yFactor");
  ySelect.innerHTML = '<option value="">-- Select Temperature --</option>';
  if (!material || !yTable[material]) return;

  for (const temp in yTable[material]) {
    const y = yTable[material][temp];
    const option = document.createElement("option");
    option.value = y;
    option.textContent = `${temp}°C — Y = ${y}`;
    ySelect.appendChild(option);
  }
}

// ✅ Corrected Mill Tolerance Map (API 574 + IS Standards)
// Type: % represented as decimal (e.g., -12.5% = 0.125), mm values are direct.
const millToleranceMap = {
  "A53": { type: "%", value: 0.125 },           // -12.5%
  "A106": { type: "%", value: 0.125 },          // -12.5%
  "A134": { type: "%", value: 0.125 },          // -12.5%
  "A135/A135M": { type: "%", value: 0.125 },    // -12.5%
  "A312/A312M": { type: "%", value: 0.125 },          // -12.5%
  "A358/A358M": { type: "mm", value: 0.3 },     // -0.01 in (0.3 mm) 
  "A409/A409M": { type: "mm", value: 0.46 },    // -0.018 in (0.46 mm)
  "A451/A451M": { type: "%", value: 0 },              // 0% 
  "A524": { type: "%", value: 0.125 },          // -12.5%
  "A530/A530M": { type: "%", value: 0.125 },          // -12.5%
  "A587": { type: "%", value: 0.125 },          // -12.5%
  "A600/A600M": { type: "mm", value: 0 },       // Zero less than specified
  "A671/A671M": { type: "mm", value: 0.3 },     // -0.01 in (0.3 mm)
  "A672/A672M": { type: "mm", value: 0.3 },     // -0.01 in (0.3 mm)
  "A691/A691M": { type: "mm", value: 0.3 },     // -0.01 in (0.3 mm)
  "A731/A731M": { type: "%", value: 0.125 },          // -12.5%
  "A335/A335M": { type: "%", value: 0.125 },          // -12.5%
  "A790/A790M": { type: "%", value: 0.125 },          // -12.5%
  

  // ✅ Added IS Standards
  "IS-3589 (SAW & Seamless Pipe)": { type: "%", value: 0.125 },       // -12.5%
  "IS-3589 (ERW Pipe)": { type: "%", value: 0.10 },                   // -10%
  "IS-1239 (Welded: Light Tubes)": { type: "%", value: 0.08 },        // -8%
  "IS-1239 (Welded: Medium/Heavy)": { type: "%", value: 0.10 },       // -10%
  "IS-1239 (Seamless)": { type: "%", value: 0.125 }                   // -12.5%
};


// ✅ API 5L & General Mill Tolerance Logic (Updated as per your requirement)
function getMillTolerance(material, t_nom) {
  const mt = millToleranceMap[material];

  // ✅ If material is listed in millToleranceMap (fixed % or mm)
  if (mt && material.indexOf("API 5L") === -1) {
    if (mt.type === "%") {
      return t_nom * mt.value;
    } else if (mt.type === "mm") {
      return mt.value;
    }
  }

  // ✅ API 5L Seamless (AS PER API 5L)
  if (material === "API 5L (Seamless)") {
    if (t_nom <= 4.0) {
      return 0.5; // −0.5 mm
    } else if (t_nom > 4.0 && t_nom < 25.0) {
      return 0.125 * t_nom; // −0.125t
    } else if (t_nom >= 25.0) {
      return 0.1 * t_nom; // −0.1t
    }
  }

  // ✅ API 5L Welded Pipe (AS PER API 5L)
  if (material === "API 5L (Welded Pipe)") {
    if (t_nom <= 5.0) {
      return 0.5; // −0.5 mm
    } else if (t_nom > 5.0 && t_nom < 15.0) {
      return 0.1 * t_nom; // −0.1t
    } else if (t_nom >= 15.0) {
      return 1.5; // −1.5 mm
    }
  }

  return 0;
}


// ✅ Load Mill Tolerance %
function loadMillTolerance() {
  const material = document.getElementById("b313_materialStd").value;
  const t_nom = parseFloat(document.getElementById("b313_nomThickness").value) || 0;

  if (!material) {
    document.getElementById("b313_autoMillTol").value = "0%";
    document.getElementById("b313_millTolerance").value = 0;
    return;
  }

  const tol = getMillTolerance(material, t_nom);
  document.getElementById("b313_millTolerance").value = tol;

  // ✅ Show in % for % based materials, mm for API 5L / mm based
  if (material.indexOf("API 5L") !== -1 || millToleranceMap[material]?.type === "mm") {
    document.getElementById("b313_autoMillTol").value = tol.toFixed(2) + " mm";
  } else {
    const percent = t_nom > 0 ? ((tol / t_nom) * 100).toFixed(1) : (millToleranceMap[material].value * 100).toFixed(1);
    document.getElementById("b313_autoMillTol").value = percent + "%";
  }
}


// ✅ Track Nominal Thickness manual input & Auto-Update Mill Tolerance
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("b313_includeCA").value = "";
  document.getElementById("b313_caBox").classList.add("hidden");

  // ✅ When user edits nominal thickness, mark as userEdited & recalculate mill tolerance
  document.getElementById("b313_nomThickness").addEventListener("input", function () {
    this.dataset.userEdited = "true";
    loadMillTolerance(); // ✅ Auto-update mill tolerance when thickness changes
  });

  document.getElementById("b313_materialStd").addEventListener("change", loadMillTolerance);
  document.getElementById("b313_yMaterial").addEventListener("change", updateYDropdown);
  document.getElementById("b313_includeMillTol").addEventListener("change", toggleMillToleranceSection);
  document.getElementById("b313_includeCA").addEventListener("change", toggleCABox);
  document.getElementById("b313_highTemp").addEventListener("change", toggleWeldFactor);
});

// ✅ Final Calculation
// ✅ Final Calculation (UPDATED to include "Given Data" breakdown)
function calculateThickness() {
  const spinner = document.getElementById("b313_spinner");
  const resultBox = document.getElementById("b313_resultBox");
  const calcBtn = document.querySelector(".calculate-btn");

  // ✅ Show Spinner & Clear Previous Result
  spinner.classList.remove("b313-hidden");
  resultBox.innerHTML = "";
  calcBtn.disabled = true;
  calcBtn.textContent = "Calculating...";

  setTimeout(() => {
    // ✅ Step 1: Unit Conversion (if needed)
    if (document.getElementById("b313_pressureUnit").value !== "MPa") convertPressureUnit();
    if (document.getElementById("b313_stressUnit").value !== "MPa") convertStressUnit();

    // ✅ Step 2: Get Input Values
    const P_raw = document.getElementById("b313_pressure").value;
    const P = parseFloat(P_raw);
    const D_raw = document.getElementById("b313_diameter").value;
    const D = parseFloat(D_raw);
    const S_raw = document.getElementById("b313_stress").value;
    const S = parseFloat(S_raw);
    const E_raw = document.getElementById("b313_efficiency").value;
    const E = parseFloat(E_raw);
    const Y_raw = document.getElementById("b313_yFactor").value;
    const Y = parseFloat(Y_raw);
    const W_raw = document.getElementById("b313_highTemp").value === "yes"
      ? document.getElementById("b313_wFactor").value
      : "1.0";
    const W = parseFloat(W_raw);

    const includeCASelect = document.getElementById("b313_includeCA").value;
    if (includeCASelect === "") {
      resultBox.innerHTML =
        "<strong style='color:red;'>Please select Yes or No for Corrosion Allowance.</strong>";
      spinner.classList.add("b313-hidden");
      calcBtn.disabled = false;
      calcBtn.textContent = "Calculate";
      return;
    }

    const includeMillTol = document.getElementById("b313_includeMillTol").value === "yes";
    const includeCA = includeCASelect === "yes";
    const CA_raw = document.getElementById("b313_corrosion").value;
    const CA = includeCA ? (parseFloat(CA_raw) || 0) : 0;

    const material = document.getElementById("b313_materialStd").value;
    const nominalInput = document.getElementById("b313_nomThickness");
    const userEdited = nominalInput.dataset.userEdited === "true";
    let nominalVal = parseFloat(nominalInput.value);

    // Basic validation
    if (isNaN(P) || isNaN(D) || isNaN(S) || isNaN(E) || isNaN(Y) || isNaN(W)) {
      resultBox.innerHTML =
        "<strong style='color:red;'>Please fill all required fields correctly.</strong>";
      spinner.classList.add("b313-hidden");
      calcBtn.disabled = false;
      calcBtn.textContent = "Calculate";
      return;
    }

    // ✅ Step 3: Design Thickness
    const t_design = (P * D) / (2 * (S * E * W + P * Y));

    // ✅ Step 4: Auto Nominal Thickness if not user-edited
    if (!userEdited || isNaN(nominalVal)) {
      nominalVal = t_design;
      nominalInput.value = nominalVal.toFixed(2);
    }

    // ✅ Step 5: Required Thickness (Nominal + CA)
    const t_req = nominalVal + CA;

    // ✅ Step 6: Mill Tolerance & Corrosion Allowance
    let t_afterMill = nominalVal;
    let millTolVal = 0;
    let t_includingCA_Mill = nominalVal;

    if (includeMillTol && material) {
      millTolVal = getMillTolerance(material, nominalVal);

      if (material === "API 5L (Seamless)" || material === "API 5L (Welded Pipe)") {
        t_afterMill = nominalVal - millTolVal;
        t_includingCA_Mill = Math.max(nominalVal - millTolVal - CA, 0);
      } else {
        t_afterMill = nominalVal - millTolVal;
        t_includingCA_Mill = Math.max(t_afterMill - CA, 0);
      }
    }

    // ✅ Step 7: Show Results
    let result = `<strong>Design Thickness (t):</strong> ${t_design.toFixed(2)} mm<br>`;
    result += `<strong>As per Design Required Thickness (t + CA):</strong> tm = ${nominalVal.toFixed(2)} + ${CA.toFixed(2)} = ${t_req.toFixed(2)} mm<br>`;

    if (includeMillTol) {
      const displayTol = (material.indexOf("API 5L") !== -1 || millToleranceMap[material]?.type === "mm")
        ? millTolVal.toFixed(2) + " mm"
        : ((millTolVal / nominalVal) * 100).toFixed(1) + "%";

      if (material === "API 5L (Seamless)" || material === "API 5L (Welded Pipe)") {
        result += `<strong>After Mill Tolerance (${displayTol}) & CA (AS PER API 5L):</strong><br>`;
        result += `t = ${nominalVal.toFixed(2)} - ${millTolVal.toFixed(2)} - ${CA.toFixed(2)} = <strong>${t_includingCA_Mill.toFixed(4)} mm</strong><br>`;
      } else {
        result += `<strong>After Mill Tolerance (${displayTol}):</strong> t = ${t_afterMill.toFixed(4)} mm<br>`;
        result += `<strong>Including CA with Mill Tolerance:</strong> ${t_afterMill.toFixed(4)} - ${CA.toFixed(2)} = <strong>${t_includingCA_Mill.toFixed(4)} mm</strong><br>`;
      }
    }

    result += `<small>(W = ${W}, Y = ${Y}, Pressure & Stress converted to MPa)</small>`;

    // ✅ Step 7.1: Given Data Breakdown (NEW)
    const inputs = [
      { label: "Pressure (P)", raw: P_raw, value: isNaN(P) ? "Invalid/blank" : P.toFixed(3) + " MPa" },
      { label: "Diameter (D)", raw: D_raw, value: isNaN(D) ? "Invalid/blank" : D.toFixed(2) + " mm" },
      { label: "Allowable Stress (S)", raw: S_raw, value: isNaN(S) ? "Invalid/blank" : S.toFixed(2) + " MPa" },
      { label: "Joint Efficiency (E)", raw: E_raw, value: isNaN(E) ? "Invalid/blank" : E.toString() },
      { label: "Y-factor (Y)", raw: Y_raw, value: isNaN(Y) ? "Invalid/blank" : Y.toString() },
      { label: "High Temp? (used W)", raw: document.getElementById("b313_highTemp").value, value: isNaN(W) ? "Invalid/blank" : W.toString() },
      { label: "Corrosion Allowance included?", raw: includeCASelect, value: includeCA ? (CA.toFixed(2) + " mm") : "No" },
      { label: "Include Mill Tolerance?", raw: document.getElementById("b313_includeMillTol").value, value: includeMillTol ? "Yes" : "No" },
      { label: "Material Standard", raw: material, value: material || "Not selected" },
      { label: "Nominal Thickness (tnom)", raw: nominalInput.value, value: isNaN(nominalVal) ? "Invalid/blank" : nominalVal.toFixed(2) + " mm" },
      { label: "User edited nominal thickness?", raw: nominalInput.dataset.userEdited, value: userEdited ? "Yes" : "No (auto-calculated)" },
      { label: "Mill Tolerance value", raw: millTolVal, value: includeMillTol ? (millToleranceMap[material]?.type === "mm" ? millTolVal.toFixed(2) + " mm" : ( (nominalVal > 0) ? ((millTolVal/nominalVal*100).toFixed(1) + " %") : millTolVal.toString() )) : "N/A" },
      { label: "Thickness after mill tolerance", raw: t_afterMill, value: includeMillTol ? t_afterMill.toFixed(4) + " mm" : "N/A" },
      { label: "Thickness including CA after mill tolerance", raw: t_includingCA_Mill, value: includeMillTol ? t_includingCA_Mill.toFixed(4) + " mm" : "N/A" }
    ];

    // Build HTML for Given Data
    result += `<hr><strong>Given Data (inputs used):</strong><br>`;
    result += `<table style="border-collapse:collapse;font-size:0.95em;">`;
    inputs.forEach(inp => {
      result += `<tr>
        <td style="padding:4px 8px;border:1px solid #ddd;"><strong>${inp.label}</strong></td>
        <td style="padding:4px 8px;border:1px solid #ddd;">${escapeHtml(String(inp.raw || ""))}</td>
        <td style="padding:4px 8px;border:1px solid #ddd;color:#333;">${escapeHtml(String(inp.value))}</td>
      </tr>`;
    });
    result += `</table>`;

    resultBox.innerHTML = result;

    // ✅ Step 8: Hide Spinner & Enable Button
    spinner.classList.add("b313-hidden");
    calcBtn.disabled = false;
    calcBtn.textContent = "Calculate";

  }, 3000); // ✅ Delay for smooth UI (can adjust)
}

// small helper to avoid HTML injection if any user input contains special chars
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}



