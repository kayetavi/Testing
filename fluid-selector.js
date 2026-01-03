const fluids = [
  ["C₁–C₂", "Methane, ethane, ethylene, LNG, fuel gas", 23, -125, -193, 558, 1036],
  ["C₃–C₄", "Propane, butane, isobutane, LPG", 51, -21, -6.3, 369, 696],
  ["C₅", "Pentane", 72, 36, 97, 284, 544],
  ["C₆–C₈", "Gasoline, naphtha, light straight run, heptane", 100, 99, 210, 223, 433],
  ["C₉–C₁₂", "Diesel, kerosene", 149, 184, 364, 208, 406],
  ["C₁₃–C₁₆", "Jet fuel, kerosene, atmospheric gas oil", 205, 261, 502, 202, 396],
  ["C₁₇–C₂₅", "Gas oil, typical crude", 280, 344, 651, 202, 396],
  ["C₂₅+", "Residuum, heavy crude, lube oil, seal oil", 422, 527, 981, 202, 396],
  ["Water", "Water", 18, 100, 212, "N/A", "N/A"],
  ["Steam", "Steam", 18, 100, 212, "N/A", "N/A"],
  ["Acid", "Acid, caustic", 18, 100, 212, "N/A", "N/A"],
  ["H₂", "Hydrogen only", 2, -253, -423, 400, 752],
  ["H₂S", "Hydrogen sulfide only", 34, -59, -75, 260, 500],
  ["HF", "Hydrogen fluoride", 20, 20, 68, 17760, 32000],
  ["CO", "Carbon monoxide", 28, -191, -312, 609, 1128],
  ["DEE", "Diethyl ether", 74, 35, 95, 160, 320],
  ["HCl", "Hydrogen chloride", 36, -85, -121, "N/A", "N/A"],
  ["Nitric acid", "Nitric acid", 63, 121, 250, "N/A", "N/A"],
  ["NO₂", "Nitrogen dioxide", 90, 135, 275, "N/A", "N/A"],
  ["Phosgene", "Phosgene", 99, 83, 181, "N/A", "N/A"],
  ["TDI", "Toluene diisocyanate", 174, 251, 484, 620, 1148],
  ["Methanol", "Methanol", 32, 65, 149, 464, 867],
  ["PO", "Propylene oxide", 58, 34, 93, 449, 840],
  ["Styrene", "Styrene", "—", "—", "—", "—", "—"],
  ["EEA", "Ethylene glycol monoethyl ether acetate", 132, 156, 313, 379, 715],
  ["EE", "Ethylene glycol monoethyl ether", 90, 135, 275, 235, 455],
  ["EG", "Ethylene glycol", 62, 197, 387, 396, 745],
  ["EO", "Ethylene oxide", 44, 11, 51, 429, 804],
];

const fluidTable = document.getElementById("fluidTable");
const tbody = document.getElementById("fluidBody");
const filter = document.getElementById("materialFilter");
const noDataMsg = document.getElementById("noDataMessage");

const materials = [...new Set(fluids.map(f => f[1]))].sort();
materials.forEach(mat => {
  const opt = document.createElement("option");
  opt.value = mat;
  opt.textContent = mat;
  filter.appendChild(opt);
});

$(document).ready(function () {
  $('#materialFilter').select2({
    placeholder: "Select one or more materials...",
    allowClear: true,
    width: '100%'
  });

  $('#materialFilter').on('change', function () {
    const selected = $(this).val();
    renderTable(selected);
  });
});

function renderTable(selectedMaterials) {
  tbody.innerHTML = "";

  if (!selectedMaterials || selectedMaterials.length === 0) {
    fluidTable.style.display = "none";
    noDataMsg.style.display = "block";
    document.getElementById("noteSection").style.display = "none"; // 🔹 Hide note
    return;
  }

  const filtered = fluids.filter(f => selectedMaterials.includes(f[1]));

  if (filtered.length > 0) {
    noDataMsg.style.display = "none";
    fluidTable.style.display = "table";
    document.getElementById("noteSection").style.display = "block"; // 🔹 Show note

    filtered.forEach(f => {
      const row = document.createElement("tr");
      f.forEach(cell => {
        const td = document.createElement("td");
        td.textContent = cell;
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
  } else {
    fluidTable.style.display = "none";
    noDataMsg.style.display = "block";
    document.getElementById("noteSection").style.display = "none"; // 🔹 Hide note
  }
}

