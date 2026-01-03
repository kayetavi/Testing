// --- Existing Toxic Calculation Functions ---

function toggleInputs_Toxic() {
  const calcType = document.getElementById("calcType_Toxic").value;

  const toxicGasLabel = document.getElementById("toxicGasLabel");
  const toxicGasSelect = document.getElementById("toxicGas_Toxic");
  const kgInputs = document.getElementById("kgInputs_Toxic");
  const molInputs = document.getElementById("molInputs_Toxic");
  const totalMassFlowLabel = document.getElementById("totalMassFlowLabel");
  const totalMassFlowInput = document.getElementById("totalMassFlow_Toxic");
  const calculateBtn = document.getElementById("calculateBtn");

  const gasCompSection = document.getElementById("gasCompCalculatorSection");

  if(calcType === "kg") {
    toxicGasLabel.style.display = "inline-block";
    toxicGasSelect.style.display = "inline-block";
    kgInputs.style.display = "block";
    molInputs.style.display = "none";
    totalMassFlowLabel.style.display = "inline-block";
    totalMassFlowInput.style.display = "inline-block";
    calculateBtn.style.display = "inline-block";

    gasCompSection.style.display = "none";

  } else if(calcType === "mol") {
    toxicGasLabel.style.display = "inline-block";
    toxicGasSelect.style.display = "inline-block";
    kgInputs.style.display = "none";
    molInputs.style.display = "block";
    totalMassFlowLabel.style.display = "inline-block";
    totalMassFlowInput.style.display = "inline-block";
    calculateBtn.style.display = "inline-block";

    gasCompSection.style.display = "none";

  } else if(calcType === "gasComp") {
    // Hide toxic inputs
    toxicGasLabel.style.display = "none";
    toxicGasSelect.style.display = "none";
    kgInputs.style.display = "none";
    molInputs.style.display = "none";
    totalMassFlowLabel.style.display = "none";
    totalMassFlowInput.style.display = "none";
    calculateBtn.style.display = "none";

    // Show gas composition calculator
    gasCompSection.style.display = "block";

  } else {
    // Default - hide all except toxicGas and calc type selector
    toxicGasLabel.style.display = "inline-block";
    toxicGasSelect.style.display = "inline-block";
    kgInputs.style.display = "none";
    molInputs.style.display = "none";
    totalMassFlowLabel.style.display = "inline-block";
    totalMassFlowInput.style.display = "inline-block";
    calculateBtn.style.display = "inline-block";

    gasCompSection.style.display = "none";
  }

  resetCalculation_Toxic();
}

function resetCalculation_Toxic() {
  document.getElementById("componentKg_Toxic").value = "";
  document.getElementById("molPercent_Toxic").value = "";
  document.getElementById("totalMolarFlow_Toxic").value = "";
  document.getElementById("totalMassFlow_Toxic").value = "";
  document.getElementById("result_Toxic").innerHTML = "";
}

function calculateToxic_Toxic() {
  const toxicGas = document.getElementById("toxicGas_Toxic").value;
  const calcType = document.getElementById("calcType_Toxic").value;
  const totalMassFlowStr = document.getElementById("totalMassFlow_Toxic").value;
  const totalMassFlow = parseFloat(totalMassFlowStr);

  if (!toxicGas) {
    document.getElementById("result_Toxic").textContent = "⚠️ Please select a Toxic Gas!";
    return;
  }
  if (!calcType) {
    document.getElementById("result_Toxic").textContent = "⚠️ Please select a Calculation Type!";
    return;
  }
  if (isNaN(totalMassFlow) || totalMassFlow <= 0) {
    document.getElementById("result_Toxic").textContent = "⚠️ Enter valid Total Mass Flow!";
    return;
  }

  const toxicMW = parseFloat(toxicGas);
  let toxicMassFlow = 0, toxicityPercent = 0;

  if (calcType === "kg") {
    const componentKgStr = document.getElementById("componentKg_Toxic").value;
    const componentKg = parseFloat(componentKgStr);
    if (isNaN(componentKg) || componentKg <= 0) {
      document.getElementById("result_Toxic").textContent = "⚠️ Enter valid Component Value (kg/hr)!";
      return;
    }
    toxicMassFlow = componentKg;
    toxicityPercent = (toxicMassFlow / totalMassFlow) * 100;
  } else if (calcType === "mol") {
    const molPercentStr = document.getElementById("molPercent_Toxic").value;
    const totalMolarFlowStr = document.getElementById("totalMolarFlow_Toxic").value;
    const molPercent = parseFloat(molPercentStr);
    const totalMolarFlow = parseFloat(totalMolarFlowStr);

    if (isNaN(molPercent) || molPercent <= 0 || isNaN(totalMolarFlow) || totalMolarFlow <= 0) {
      document.getElementById("result_Toxic").textContent = "⚠️ Enter valid mol% and Total Molar Flow!";
      return;
    }

    const molFraction = molPercent / 100;
    const toxicMolarFlow = molFraction * totalMolarFlow;
    toxicMassFlow = toxicMolarFlow * toxicMW;
    toxicityPercent = (toxicMassFlow / totalMassFlow) * 100;
  }

  document.getElementById("result_Toxic").innerHTML =
    `✅ <b>Results:</b><br>
     Toxic Mass Flow: <b>${toxicMassFlow.toFixed(4)}</b> kg/hr<br>
     Toxicity %: <b>${toxicityPercent.toFixed(8)}</b> %`;
}

// --- Gas Composition Calculator JS ---

// Initial gases with molar masses
const molarMasses = {
  c1: 16.04,
  c2: 30.07,
  c3: 44.10,
  c4: 58.12,
  c5: 72.15,
  h2s: 34.08,
  co: 28.01,
  co2: 44.01
};

const gasNames = {
  c1: "C1 (Methane)",
  c2: "C2 (Ethane)",
  c3: "C3 (Propane)",
  c4: "C4 (Butane)",
  c5: "C5 (Pentane)",
  h2s: "H2S",
  co: "CO",
  co2: "CO2"
};

let gasData = [];

function populateGasDropdown() {
  const gasSelect = document.getElementById('gasSelect');
  gasSelect.innerHTML = '<option value="">--Select--</option>';
  for (const key in molarMasses) {
    const name = gasNames[key] || key.toUpperCase();
    gasSelect.innerHTML += `<option value="${key}">${name}</option>`;
  }
}

function updateTable() {
  const gasTableBody = document.querySelector('#gasTable tbody');
  const totalMassSpan = document.getElementById('totalMass');

  gasTableBody.innerHTML = '';

  gasData.forEach(g => {
    g.moleFraction = g.molePercent / 100;
    g.massContribution = g.moleFraction * g.molarMass;
  });

  let totalMass = gasData.reduce((sum, g) => sum + g.massContribution, 0);

  gasData.forEach((g, idx) => {
    const wtPercent = totalMass ? (g.massContribution / totalMass) * 100 : 0;

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${g.customName || gasNames[g.gasKey] || g.gasKey.toUpperCase()}</td>
      <td><input type="number" min="0" max="100" step="any" value="${g.molePercent.toFixed(3)}" data-idx="${idx}" class="editableMolePercent" /></td>
      <td>${g.moleFraction.toFixed(5)}</td>
      <td>${g.molarMass.toFixed(2)}</td>
      <td>${g.massContribution.toFixed(5)}</td>
      <td>${wtPercent.toFixed(5)}</td>
      <td><button class="removeBtn" data-idx="${idx}">Remove</button></td>
    `;

    gasTableBody.appendChild(tr);
  });

  totalMassSpan.textContent = totalMass.toFixed(6);

  // Add event listeners for inputs and remove buttons
  document.querySelectorAll('.editableMolePercent').forEach(input => {
    input.addEventListener('input', (e) => {
      const i = parseInt(e.target.getAttribute('data-idx'));
      let val = parseFloat(e.target.value);
      if (isNaN(val) || val < 0) val = 0;
      if (val > 100) val = 100;
      gasData[i].molePercent = val;
      updateTable();
    });
  });

  document.querySelectorAll('.removeBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const i = parseInt(e.target.getAttribute('data-idx'));
      gasData.splice(i, 1);
      updateTable();
    });
  });
}

document.getElementById('addGasBtn').addEventListener('click', () => {
  const gasSelect = document.getElementById('gasSelect');
  const molePercentInput = document.getElementById('molePercent');

  const gas = gasSelect.value;
  let molePercent = parseFloat(molePercentInput.value);

  if (!gas) {
    alert('Please select a gas.');
    return;
  }
  if (isNaN(molePercent) || molePercent < 0 || molePercent > 100) {
    alert('Please enter a valid mole % between 0 and 100.');
    return;
  }

  const existingIndex = gasData.findIndex(g => g.gasKey === gas);
  if (existingIndex !== -1) {
    gasData[existingIndex].molePercent = molePercent;
  } else {
    gasData.push({
      gasKey: gas,
      customName: null,
      molePercent,
      moleFraction: molePercent / 100,
      molarMass: molarMasses[gas]
    });
  }

  updateTable();

  gasSelect.value = '';
  molePercentInput.value = '';
});

document.getElementById('addNewGasBtn').addEventListener('click', () => {
  const name = document.getElementById('newGasName').value.trim();
  const molarMass = parseFloat(document.getElementById('newGasMolarMass').value);

  if (!name) {
    alert('Please enter a gas name.');
    return;
  }
  if (isNaN(molarMass) || molarMass <= 0) {
    alert('Please enter a valid molar mass (> 0).');
    return;
  }

  const key = name.toLowerCase().replace(/\s+/g, '');

  if (!molarMasses[key]) {
    molarMasses[key] = molarMass;
    gasNames[key] = name;
    populateGasDropdown();
    alert(`Gas "${name}" added. Now select it from dropdown to add mole %.`);
  } else {
    alert('Gas already exists. Use dropdown to add mole %.');
  }

  document.getElementById('newGasName').value = '';
  document.getElementById('newGasMolarMass').value = '';
});

document.getElementById('exportCsvBtn').addEventListener('click', () => {
  if (gasData.length === 0) {
    alert('No data to export.');
    return;
  }
  let csvContent = 'Gas,Mole %,Mole Fraction,Molar Mass (g/mol),Mass Contribution (g),WT %\n';
  let totalMass = gasData.reduce((sum, g) => sum + g.massContribution, 0);

  gasData.forEach(g => {
    const wtPercent = totalMass ? (g.massContribution / totalMass) * 100 : 0;
    const row = [
      `"${g.customName || gasNames[g.gasKey] || g.gasKey.toUpperCase()}"`,
      g.molePercent.toFixed(3),
      g.moleFraction.toFixed(5),
      g.molarMass.toFixed(2),
      g.massContribution.toFixed(5),
      wtPercent.toFixed(5)
    ];
    csvContent += row.join(',') + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'gas_composition.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});

// Initialize gas dropdown on page load
document.addEventListener('DOMContentLoaded', () => {
  populateGasDropdown();
  toggleInputs_Toxic(); // set initial visibility based on selected calc type
});
