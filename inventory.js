// =========================
// ✅ Spinner Functions
// =========================
function showSpinner(targetId) {
  const target = document.getElementById(targetId);
  target.innerHTML = `<div class="spinner">Calculating... ⏳</div>`;
}

function hideSpinner(targetId) {
  // Nothing needed; results will replace spinner automatically
}



// =========================
// ✅ Toggle collapsible section
// =========================
function toggleSection(sectionId) {
  document.querySelectorAll('.collapsible-content').forEach(section => {
    section.style.display = (section.id === sectionId && section.style.display !== 'block') ? 'block' : 'none';
  });
}

// =========================
// ✅ Handle Shape Selection
// =========================
function handleShapeSelection() {
  const shape = document.getElementById("shape").value;
  document.getElementById("phaseSection").classList.toggle("hidden", !shape);
  handlePhaseSelection();
}

// =========================
// ✅ Handle Phase Selection
// =========================
function handlePhaseSelection() {
  const phase = document.getElementById("phaseInventory").value;
  const shape = document.getElementById("shape").value;
  const manual = document.getElementById("manualVolumeOverride").checked;

  document.getElementById("liquidInputs").classList.toggle("hidden", !(phase === "liquid" || phase === "both"));
  document.getElementById("vaporInputs").classList.toggle("hidden", !(phase === "vapor" || phase === "both"));
  document.getElementById("shapeInputs").classList.toggle("hidden", phase === "vapor" || manual || shape === "");

  const manualVolumeFields = document.getElementById("manualVolumeFields");
  if (phase === "liquid" || phase === "both") {
    manualVolumeFields.classList.remove("hidden");
  } else {
    manualVolumeFields.classList.add("hidden");
    document.getElementById("manualVolumeOverride").checked = false;
    document.getElementById("volume").disabled = true;
    document.getElementById("volumeUnit").disabled = true;
  }

  const addHeadCheckboxDiv = document.getElementById("addHeadCheckboxDiv");
  const headTypeSection = document.getElementById("headTypeSection");
  const addHeadCheckbox = document.getElementById("addHeadCheckbox");

  if (!shape || phase === "vapor") {
    if (addHeadCheckboxDiv) addHeadCheckboxDiv.classList.add("hidden");
    if (headTypeSection) headTypeSection.classList.add("hidden");
    if (addHeadCheckbox) addHeadCheckbox.checked = false;
  } else {
    if (addHeadCheckboxDiv) addHeadCheckboxDiv.classList.remove("hidden");
    toggleHeadSelection();
  }
}

// =========================
// ✅ Toggle Manual Volume
// =========================
function toggleManualVolume() {
  const checked = document.getElementById("manualVolumeOverride").checked;
  document.getElementById("volume").disabled = !checked;
  document.getElementById("volumeUnit").disabled = !checked;
  handlePhaseSelection();
}

// =========================
// ✅ Toggle Custom %
function toggleCustomPercent() {
  const isCustom = document.getElementById("equipmentType").value === "custom";
  document.getElementById("customPercentDiv").classList.toggle("hidden", !isCustom);
}

// =========================
// ✅ Auto-fill Density
// =========================
function autoFillDensity() {
  const fluid = document.getElementById("fluidType").value;
  const densities = { water: 1000, diesel: 832, crude: 850, ammonia: 682 };
  document.getElementById("density").value = densities[fluid] || "";
}

// =========================
// ✅ Toggle Head Section
// =========================
function toggleHeadSelection() {
  const show = document.getElementById("addHeadCheckbox").checked;
  document.getElementById("headTypeSection").classList.toggle("hidden", !show);
}

// =========================
// ✅ Call API for Single Inventory Calculation
// =========================
async function calculateInventory() {
  const targetId = "inventoryResult";
  showSpinner(targetId);

  const payload = {
    shape: document.getElementById("shape").value,
    phase: document.getElementById("phaseInventory").value,
    manual: document.getElementById("manualVolumeOverride").checked,
    volume: parseFloat(document.getElementById("volume").value || "0"),
    volumeUnit: document.getElementById("volumeUnit").value,
    diameter: parseFloat(document.getElementById("inv_diameter").value),
    length: parseFloat(document.getElementById("inv_length").value),
    diameterUnit: parseFloat(document.getElementById("inv_diameterUnit").value) || 1,
    lengthUnit: parseFloat(document.getElementById("inv_lengthUnit").value) || 1,
    headType: document.getElementById("headType").value,
    headCount: parseInt(document.getElementById("headCount").value) || 2,
    addHead: document.getElementById("addHeadCheckbox").checked,
    equipmentType: document.getElementById("equipmentType").value,
    customPercent: parseFloat(document.getElementById("customPercent").value || "0"),
    density: parseFloat(document.getElementById("density").value || "0"),
    flowRate: parseFloat(document.getElementById("flowRate").value || "0"),
    flowRateUnit: document.getElementById("flowRateUnit").value,
    residenceTime: parseFloat(document.getElementById("residenceTime").value || "0"),
    residenceTimeUnit: document.getElementById("residenceTimeUnit").value
  };

  try {
    const res = await fetch("/api/calculateInventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    document.getElementById(targetId).innerHTML = data.message;
  } catch (err) {
    document.getElementById(targetId).innerHTML = "⚠️ Calculation failed.";
    console.error(err);
  }
}


// =========================
// ✅ Bulk Upload CSV
// =========================
function handleBulkUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const targetId = "bulkUploadResult";
  showSpinner(targetId); // ← Add spinner here

  const reader = new FileReader();
  reader.onload = async function(e) {
    const text = e.target.result;
    const rows = text.split("\n").filter(r => r.trim());
    const headers = rows[0].split(",").map(h => h.trim());
    const data = rows.slice(1).map(row => {
      const cols = row.split(",");
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = isNaN(cols[i]) ? cols[i] : parseFloat(cols[i]);
      });
      return obj;
    });

    try {
      const res = await fetch("/api/calculateInventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const results = await res.json();
      document.getElementById(targetId).innerHTML = results.map(r => r.message).join("<hr>");
    } catch (err) {
      document.getElementById(targetId).innerHTML = "⚠️ Bulk calculation failed.";
      console.error(err);
    }
  };
  reader.readAsText(file);
}


// =========================
// ✅ Bulk Upload Tab Switching
// =========================
function showBulkUploader() {
  document.getElementById("inventoryCalcSection").style.display = "none";
  document.getElementById("bulkUploadSection").style.display = "block";
}

function showInventoryCalculator() {
  document.getElementById("inventoryCalcSection").style.display = "block";
  document.getElementById("bulkUploadSection").style.display = "none";
}

// =========================
// ✅ Init Event Listeners
// =========================
window.addEventListener("DOMContentLoaded", () => {
  // Hide Add Head checkbox initially
  document.getElementById("addHeadCheckboxDiv").classList.add("hidden");
  document.getElementById("addHeadCheckbox").checked = false;
  handlePhaseSelection();

  // Bulk upload file input
  const bulkFileInput = document.getElementById("bulkFileInput");
  if (bulkFileInput) bulkFileInput.addEventListener("change", handleBulkUpload);
});
