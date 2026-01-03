// ✅ Toggle collapsible section (accordion behavior)
function toggleSection(sectionId) {
  document.querySelectorAll('.collapsible-content').forEach(section => {
    section.style.display = (section.id === sectionId && section.style.display !== 'block') ? 'block' : 'none';
  });
}

// ✅ Handle Shape Selection
function handleShapeSelection() {
  const shape = document.getElementById("shape").value;
  document.getElementById("phaseSection").classList.toggle("hidden", !shape);
  handlePhaseSelection();
}

// ✅ Handle Phase Selection (Show/Hide Inputs + Add Head Checkbox Toggle)
function handlePhaseSelection() {
  const phase = document.getElementById("phaseInventory").value;
  const shape = document.getElementById("shape").value;
  const manual = document.getElementById("manualVolumeOverride").checked;

  // Show/hide liquid and vapor inputs
  document.getElementById("liquidInputs").classList.toggle("hidden", !(phase === "liquid" || phase === "both"));
  document.getElementById("vaporInputs").classList.toggle("hidden", !(phase === "vapor" || phase === "both"));

  // Show/hide shape inputs depending on phase/manual/shape
  document.getElementById("shapeInputs").classList.toggle("hidden", phase === "vapor" || manual || shape === "");

  // Show/hide manual volume fields ONLY for liquid or both phases
  const manualVolumeFields = document.getElementById("manualVolumeFields");
  if (phase === "liquid" || phase === "both") {
    manualVolumeFields.classList.remove("hidden");
  } else {
    manualVolumeFields.classList.add("hidden");
    document.getElementById("manualVolumeOverride").checked = false;
    document.getElementById("volume").disabled = true;
    document.getElementById("volumeUnit").disabled = true;
  }

  // Add Head checkbox & Head Type Section handling
  const addHeadCheckboxDiv = document.getElementById("addHeadCheckboxDiv");
  const headTypeSection = document.getElementById("headTypeSection");
  const addHeadCheckbox = document.getElementById("addHeadCheckbox");

  if (!shape || phase === "vapor") {
    // Hide Add Head checkbox by default if no shape selected or phase is vapor
    if (addHeadCheckboxDiv) addHeadCheckboxDiv.classList.add("hidden");
    if (headTypeSection) headTypeSection.classList.add("hidden");
    if (addHeadCheckbox) addHeadCheckbox.checked = false;
  } else {
    // Show Add Head checkbox only for non-vapor phases
    if (addHeadCheckboxDiv) addHeadCheckboxDiv.classList.remove("hidden");
    toggleHeadSelection();
  }
}

// ✅ Toggle Manual Volume Entry
function toggleManualVolume() {
  const checked = document.getElementById("manualVolumeOverride").checked;
  document.getElementById("volume").disabled = !checked;
  document.getElementById("volumeUnit").disabled = !checked;
  handlePhaseSelection();
}

// ✅ Toggle Custom % Input
function toggleCustomPercent() {
  const isCustom = document.getElementById("equipmentType").value === "custom";
  document.getElementById("customPercentDiv").classList.toggle("hidden", !isCustom);
}

// ✅ Auto-fill Density based on Fluid Type
function autoFillDensity() {
  const fluid = document.getElementById("fluidType").value;
  const densities = { water: 1000, diesel: 832, crude: 850, ammonia: 682 };
  document.getElementById("density").value = densities[fluid] || "";
}

// ✅ Toggle Head Type Section
function toggleHeadSelection() {
  const show = document.getElementById("addHeadCheckbox").checked;
  document.getElementById("headTypeSection").classList.toggle("hidden", !show);
}

// ✅ Default Liquid Volume Percent by Equipment Type
function getDefaultLVPercent(equipmentType) {
  const lvMap = {
    COLTOP: 0.25, COLMID: 0.25, COLBTM: 0.37,
    DRUM: 0.50, KODRUM: 0.10, COMP: 0.0,
    PUMP: 1.0, HEX: 0.50, FINFAN: 0.25,
    FILTER: 1.0, PIPE: 1.0, REACTOR: 0.15
  };
  return lvMap[equipmentType] || 0;
}

// ✅ Main Inventory Calculation
function calculateInventory() {
  const shape = document.getElementById("shape").value;
  const phase = document.getElementById("phaseInventory").value;
  const manual = document.getElementById("manualVolumeOverride").checked;

  let volume = 0;

  if (manual) {
    const volInput = parseFloat(document.getElementById("volume").value || "0");
    const volUnit = document.getElementById("volumeUnit").value;
    volume = (volUnit === "ft3") ? volInput * 0.0283168 : volInput;
  } else if (shape && phase !== "vapor") {
    const diameterVal = parseFloat(document.getElementById("inv_diameter").value);
    const lengthVal = parseFloat(document.getElementById("inv_length").value);
    const diameterUnit = parseFloat(document.getElementById("inv_diameterUnit").value) || 1;
    const lengthUnit = parseFloat(document.getElementById("inv_lengthUnit").value) || 1;

    const d = (isNaN(diameterVal) || isNaN(diameterUnit)) ? 0 : diameterVal * diameterUnit;
    const l = (isNaN(lengthVal) || isNaN(lengthUnit)) ? 0 : lengthVal * lengthUnit;

    let cylVolume = 0, headVolume = 0, headCount = 0;

    if (shape === "cylinder") {
      cylVolume = Math.PI * Math.pow(d / 2, 2) * l;

      if (document.getElementById("addHeadCheckbox").checked) {
        const headType = document.getElementById("headType").value;
        headCount = parseInt(document.getElementById("headCount").value);
        headCount = isNaN(headCount) ? 2 : headCount;

        if (headType === "hemihead") headVolume = (2 / 3) * Math.PI * Math.pow(d / 2, 3);
        else if (headType === "torispherical") headVolume = 0.9 * Math.PI * Math.pow(d / 2, 2) * (d / 4);
        else if (headType === "ellipsoidalhead") headVolume = (Math.PI / 24) * Math.pow(d, 3);
      }
      volume = cylVolume + headCount * headVolume;

    } else if (shape === "sphere") {
      volume = (4 / 3) * Math.PI * Math.pow(d / 2, 3);
    }
  }

  let result = `📦 Volume: ${volume.toFixed(2)} m³<br>`;

  if (phase === "liquid" || phase === "both") {
    let equipmentType = document.getElementById("equipmentType").value;
    let percent = (equipmentType === "custom") 
      ? parseFloat(document.getElementById("customPercent").value || "0")
      : getDefaultLVPercent(equipmentType);

    const density = parseFloat(document.getElementById("density").value || "0");

    if (density === 0) {
      alert("⚠️ Please select a fluid type or enter density manually.");
      return;
    }

    if (equipmentType === "custom" && percent === 0) {
      alert("⚠️ Please enter a custom liquid volume %");
      return;
    }

    const liquidMass = volume * percent * density;
    result += `🧪 Liquid Inventory: ${liquidMass.toFixed(2)} kg<br>`;
  }

  if (phase === "vapor" || phase === "both") {
    let flow = parseFloat(document.getElementById("flowRate").value || "0");
    const unit = document.getElementById("flowRateUnit").value;

    if (unit === "kg/min") flow /= 60;
    if (unit === "kg/h") flow /= 3600;

    let residenceTime = parseFloat(document.getElementById("residenceTime").value || "0");
    const residenceUnit = document.getElementById("residenceTimeUnit").value;

    if (isNaN(residenceTime) || residenceTime <= 0) {
      alert("⚠️ Please enter a valid residence time.");
      return;
    }

    if (residenceUnit === "min") residenceTime *= 60;
    if (residenceUnit === "h") residenceTime *= 3600;

    const vaporMass = flow * residenceTime;
    result += `💨 Vapor Inventory: ${vaporMass.toFixed(2)} kg<br>`;
  }

  document.getElementById("inventoryResult").innerHTML = result || "⚠️ Please fill all required inputs.";
}

// ✅ Equipment Type Note (Auto % Display)
document.getElementById("equipmentType").addEventListener("change", function () {
  toggleCustomPercent();
  const note = document.getElementById("percentNote");

  if (this.value !== "custom") {
    const autoPercent = getDefaultLVPercent(this.value);
    note.innerHTML = `ℹ️ Default Liquid Volume %: <strong>${(autoPercent * 100).toFixed(1)}%</strong>`;
    note.style.opacity = "1";
    setTimeout(() => { note.style.opacity = "0"; }, 5000);
  } else {
    note.innerHTML = "";
    note.style.opacity = "0";
  }
});

// ✅ Tab Switching Functions
function showInventoryCalculator() {
  document.getElementById("inventoryCalcSection").style.display = "block";
  document.getElementById("bulkUploadSection").style.display = "none";
}
function showBulkUploader() {
  document.getElementById("inventoryCalcSection").style.display = "none";
  document.getElementById("bulkUploadSection").style.display = "block";
}

// ✅ Initialize page
window.addEventListener("DOMContentLoaded", () => {
  showInventoryCalculator();               // Open inventory tab by default
  document.getElementById("addHeadCheckboxDiv").classList.add("hidden"); // Hide Add Head checkbox initially
  document.getElementById("addHeadCheckbox").checked = false;             // Ensure checkbox unchecked
  handlePhaseSelection();                  // Hide/show sections properly based on defaults
});
