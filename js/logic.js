// ================= SETTINGS DROPDOWN =================
document.addEventListener("DOMContentLoaded", () => {
  const settingsBtn = document.getElementById("settingsBtn");
  const dropdown = document.getElementById("dropdownContent");

  if (settingsBtn && dropdown) {
    settingsBtn.addEventListener("click", e => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    window.addEventListener("click", () => dropdown.classList.remove("show"));
  }
});

// ================= COMMON HELPERS =================
function hideWelcomePanel() {
  const panel = document.getElementById("welcomePanel");
  if (panel) panel.style.display = "none";
}

function openHelp() {
  window.open("help.html", "_blank");
}

function toggleCategory(element) {
  const ul = element.nextElementSibling;
  const isExpanded = ul.style.display === "block";
  ul.style.display = isExpanded ? "none" : "block";

  if (isExpanded) {
    hideAllMainPanels();
    const welcome = document.getElementById("welcomePanel");
    if (welcome) welcome.style.display = "block";
  }
}

// ================= TAB CONTROLLERS =================
function showTabById(id) {
  document.querySelectorAll(".tab-content").forEach(t => t.style.display = "none");
  const el = document.getElementById(id);
  if (el) el.style.display = "block";
  document.getElementById("selectedMechanismTitle").style.display = "none";
  hideWelcomePanel();
}

const showCriteriaTab = () => showTabById("criteriaTab");
const showCorrosionFullTab = () => showTabById("corrosionFullTab");
const showFluidSelectorTab = () => showTabById("fluidSelectorTab");
const showInventoryTab = () => showTabById("inventoryTab");
const showRemainingLifeTab = () => showTabById("remainingLifeTab");
const showINSPECTIONCONFIDENCETab = () => showTabById("inspectionconfidenceTab");
const showASMEB31_3Tab = () => showTabById("ASMEB31_3Tab");
const showASMESECTIONVIIIDIV1Tab = () => showTabById("ASMESECTIONVIIIDIV1Tab");
const showpipeThicknessTab = () => showTabById("pipeThicknessTab");
const showTOXIC_CALCULATIONTab = () => showTabById("TOXIC_CALCULATIONTab");
const showCORROSION_CALCULATIONTab = () => showTabById("CORROSION_CALCULATIONTab");
const showcof_calculatorTab = () => showTabById("cof_calculatorTab");
const showQPOF_calculatorTab = () => showTabById("QPOF_calculatorTab");
const showCrackingMechanismTab = () => showTabById("crackingMechanismTab");
const showbkStressTab = () => showTabById("bkStressTab");

// ================= CATEGORY INJECTIONS =================
function injectAPI581Category() {
  const categoryList = document.getElementById("categoryList");
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="category" onclick="toggleCategory(this)">Risk-Based Inspection Methodology</span>
    <ul class="mechanisms" style="display:none;">
      <li><a href="#" onclick="hideAllMainPanels(); showCriteriaTab()">Criteria of Finding Damage Mechanism</a></li>
      <li><a href="#" onclick="hideAllMainPanels(); showCorrosionFullTab()">Corrosion Rate Estimator</a></li>
      <li><a href="#" onclick="hideAllMainPanels(); showFluidSelectorTab()">Representative Fluid</a></li>
      <li><a href="#" onclick="hideAllMainPanels(); showInventoryTab()">Inventory Calculator</a></li>
      <li><a href="#" onclick="hideAllMainPanels(); showINSPECTIONCONFIDENCETab()">Inspection Confidence</a></li>
      <li><a href="#" onclick="hideAllMainPanels(); showTOXIC_CALCULATIONTab()">Toxic % Calculation</a></li>

      <li>
        <span class="subcategory" onclick="toggleCategory(this)">Quantitative</span>
        <ul class="mechanisms" style="display:none;">
          <li><a href="#" onclick="hideAllMainPanels(); showcof_calculatorTab()">Risk Calculator COF</a></li>
          <li><a href="#" onclick="hideAllMainPanels(); showQPOF_calculatorTab()">Risk Calculator POF</a></li>
        </ul>
      </li>

      <li>
        <span class="subcategory" onclick="toggleCategory(this)">Semi Quantitative</span>
        <ul class="mechanisms" style="display:none;">
          <li><a href="#" onclick="hideAllMainPanels(); showCORROSION_CALCULATIONTab()">Risk Calculator</a></li>
        </ul>
      </li>
    </ul>
  `;

  categoryList.appendChild(li);
}

function injectAPI570Category() {
  const categoryList = document.getElementById("categoryList");
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="category" onclick="toggleCategory(this)">Thickness Data Evaluation & Analysis</span>
    <ul class="mechanisms" style="display:none;">
      <li><a href="#" onclick="hideAllMainPanels(); showRemainingLifeTab()">Statistical Analysis</a></li>
    </ul>
  `;

  categoryList.appendChild(li);
}

function injectDesignThicknessCalculatorCategory() {
  const categoryList = document.getElementById("categoryList");
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="category" onclick="toggleCategory(this)">Design Thickness Calculator</span>
    <ul class="mechanisms" style="display:none;">
      <li><a href="#" onclick="showASMEB31_3Tab()">Process Piping</a></li>
      <li><a href="#" onclick="showASMESECTIONVIIIDIV1Tab()">Pressure Vessel</a></li>
      <li><a href="#" onclick="showpipeThicknessTab()">Piping Thickness Chart</a></li>
    </ul>
  `;

  categoryList.appendChild(li);
}

function injectCrackingMechanismCategory() {
  const categoryList = document.getElementById("categoryList");
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="category" onclick="toggleCategory(this)">Cracking Mechanism Finder</span>
    <ul class="mechanisms" style="display:none;">
      <li><a href="#" onclick="showCrackingMechanismTab()">Open Finder</a></li>
    </ul>
  `;

  categoryList.appendChild(li);
}

function injectStressMaterialDataCategory() {
  const categoryList = document.getElementById("categoryList");
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="category" onclick="toggleCategory(this)">Stress & Material Data</span>
    <ul class="mechanisms" style="display:none;">
      <li><a href="#" onclick="showbkStressTab()">Stress Value</a></li>
    </ul>
  `;

  categoryList.appendChild(li);
}

function injectProcessFlowDiagramsCategory() {
  const categoryList = document.getElementById("categoryList");
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="category" onclick="toggleCategory(this)">Corrosion Diagrams</span>
    <ul class="mechanisms" style="display:none;">
      <li><a href="#" onclick="showPROCESSFLOWDIAGRAMSTab()">HYDROPROCESSING</a></li>
      <li><a href="#" onclick="showCDUVDUTab()">CDU / VDU</a></li>
      <li><a href="#" onclick="showMSPTab()">MSP</a></li>
      <li><a href="#" onclick="showH2UTab()">H2U</a></li>
    </ul>
  `;

  categoryList.appendChild(li);
}

// ================= FINAL LOAD =================
window.addEventListener("DOMContentLoaded", () => {
  loadCategories(data);
  injectAPI581Category();
  injectAPI570Category();
  injectDesignThicknessCalculatorCategory();
  injectProcessFlowDiagramsCategory();
  injectCrackingMechanismCategory();
  injectStressMaterialDataCategory();
});
