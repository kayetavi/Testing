
// ✅ USERNAME & WELCOME
const username = localStorage.getItem("usernameUpper");
const welcomeDiv = document.getElementById("welcome");
const scrollText = document.getElementById("scrollText");

if (username) {
  welcomeDiv.innerHTML = `Welcome <span class="username-style">${username}</span>`;
  scrollText.innerText = `👋 Hello ${username}! Welcome to the Risk based Inspection Tools Dashboard. Integrity is doing the right thing even when no one is watching - C.S Levis -`;
} else {
  window.location.href = "index.html";
}

// 🚪 LOGOUT FUNCTION
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

// 🌙 DARK MODE HANDLER
const root = document.documentElement;
let currentMode = localStorage.getItem("theme");

// ✅ Default light mode for first-time login
if (!currentMode) {
  localStorage.setItem("theme", "light");
  currentMode = "light";
}

if (currentMode === "light") {
  root.classList.add("light-mode");
}

function toggleDarkMode() {
  root.classList.toggle("light-mode");
  const isLight = root.classList.contains("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}


// 📦 ELEMENTS
const categoryList = document.getElementById("categoryList");
const mechanismDetailsContainer = document.getElementById("mechanismDetailsContainer");
const selectedTitle = document.getElementById("selectedMechanismTitle");
const searchBox = document.getElementById("searchBox");

// 🔒 Hide all main panels
function hideAllMainPanels() {
  document.querySelectorAll(".tab-content").forEach(t => t.style.display = "none");
  mechanismDetailsContainer.innerHTML = "";
  mechanismDetailsContainer.style.display = "none";
  selectedTitle.style.display = "none";
}
// 🧼 HIDE WELCOME PANEL
function hideWelcomePanel() {
  const panel = document.getElementById("welcomePanel");
  if (panel) panel.style.display = "none";
}

// ✅ Highlight only selected link
function setActiveLink(link) {
  document.querySelectorAll("#categoryList a").forEach(a => a.classList.remove("active-link"));
  if (link) link.classList.add("active-link");
}



function toPlainText(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html || "";
  return (tmp.textContent || tmp.innerText || "").toLowerCase();
}



// 🔄 Load API 571 Categories from data.js
// ---------- REPLACE your existing loadCategories with this ----------
function loadCategories(data) {
  categoryList.innerHTML = "";

  Object.entries(data).forEach(([category, mechanisms]) => {
    const categoryItem = document.createElement("li");
    categoryItem.classList.add("category-toggle");

    const span = document.createElement("span");
    span.classList.add("category");
    span.innerHTML = `<span class="arrow"></span><span class="category-title">${category}</span>`;
    categoryItem.appendChild(span);

    const mechList = document.createElement("ul");
    mechList.classList.add("mechanisms");
    mechList.style.display = "none"; // collapsed by default

    // If this is the specific category, inject a filter ICON that toggles the INPUT
    if (category === "Damage Mechanism") {
      // create the input (hidden by default)
      const inlineInput = document.createElement("input");
      inlineInput.type = "text";
      inlineInput.placeholder = "Filter";
      inlineInput.className = "category-inline-filter";
      inlineInput.style.cssText = [
        "margin-left:8px",
        "padding:4px 6px",
        "font-size:12px",
        "width:160px",
        "border-radius:4px",
        "border:1px solid #ccc",
        "vertical-align:middle",
        "box-sizing:border-box",
        "display:none" // start hidden
      ].join(";");

      // create a clickable icon (magnifier)
      const iconBtn = document.createElement("span");
      iconBtn.className = "category-filter-icon";
      iconBtn.setAttribute("role", "button");
      iconBtn.setAttribute("tabindex", "0");
      iconBtn.setAttribute("aria-label", "Toggle filter");
      iconBtn.setAttribute("aria-expanded", "false");
      iconBtn.style.cssText = [
        "margin-left:8px",
        "vertical-align:middle",
        "cursor:pointer",
        "display:inline-flex",
        "align-items:center",
        "justify-content:center",
        "width:20px",
        "height:20px",
        "box-sizing:content-box"
      ].join(";");

     iconBtn.innerHTML = `
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
    <path d="M3 5h18l-7 8v6l-4-2v-4L3 5z" fill="currentColor"/>
  </svg>`;


      // append icon and input to span so they appear inline after the title
      span.appendChild(iconBtn);
      span.appendChild(inlineInput);

      // smart aliases for common corrosion keywords
      const regexMap = {
        pitting: /\bpit(?:s|ting)?\b/i,
        "erosion-corrosion": /\berosion[-\s]?corrosion\b/i,
        localized: /\blocali[sz]ed\b/i,
        thinning: /\bthinn?ing\b/i
      };

      // input handler: filter only mechList items (case-insensitive)
      inlineInput.addEventListener("input", function () {
        const q = String(this.value || "").trim().toLowerCase();
        const items = Array.from(mechList.querySelectorAll("li"));

        const isSpecial = Object.keys(regexMap).some(k => q === k);
        const re = isSpecial ? regexMap[q] : null;

        let anyVisible = false;
        items.forEach(li => {
          const hay = (li.dataset.search || li.textContent).toLowerCase();
          const match = q === "" ? true : (isSpecial ? re.test(hay) : hay.includes(q));
          li.style.display = match ? "list-item" : "none";
          if (match) anyVisible = true;
        });

        // Expand category if user typed and there are matches; collapse if empty
        mechList.style.display = q === "" ? "none" : (anyVisible ? "block" : "none");
      });

      // prevent toggle when clicking in the input
      inlineInput.addEventListener("click", function (e) {
        e.stopPropagation();
      });

      // icon toggle behavior
      const toggleInput = (open) => {
        const willOpen = typeof open === "boolean" ? open : (inlineInput.style.display === "none");
        if (willOpen) {
          inlineInput.style.display = "inline-block";
          iconBtn.setAttribute("aria-expanded", "true");
          mechList.style.display = "block"; // ensure list visible for results
          setTimeout(() => inlineInput.focus(), 0);
        } else {
          inlineInput.value = "";
          inlineInput.dispatchEvent(new Event('input', { bubbles: true }));
          inlineInput.style.display = "none";
          iconBtn.setAttribute("aria-expanded", "false");
          mechList.style.display = "none";
        }
      };

      iconBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleInput();
      });

      iconBtn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          toggleInput();
        }
      });

      // optional: close filter when clicking outside (uncomment if you want this behavior)
      // document.addEventListener('click', (ev) => {
      //   if (inlineInput.style.display !== 'none' && !span.contains(ev.target)) toggleInput(false);
      // });
    }

    // build mechanism list (now with searchable dataset from ALL fields)
    Object.entries(mechanisms).forEach(([mech, info]) => {
      const mechItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = mech;

      // Build searchable blob from ALL fields (name + details)
      const searchableBlob = [
        mech,
        toPlainText(info.description),
        toPlainText(info.affectedMaterials),
        toPlainText(info.criticalFactors),
        toPlainText(info.affectedUnits),
        toPlainText(info.appearance),
        toPlainText(info.mitigation),
        toPlainText(info.inspection),
        toPlainText(info.temperatureComparison)
      ].join(" ");
      mechItem.dataset.search = searchableBlob;

      link.onclick = (e) => {
        e.preventDefault();
        hideAllMainPanels();
        hideWelcomePanel();
        mechanismDetailsContainer.style.display = "block";
        selectedTitle.textContent = mech;
        selectedTitle.style.display = "block";
        setActiveLink(link);

        mechanismDetailsContainer.innerHTML = `
    <div class="tabs">
      <button class="tab-button active" onclick="showTab('description')">Description</button>
      <button class="tab-button" onclick="showTab('materials')">Affected Materials</button>
      <button class="tab-button" onclick="showTab('factors')">Critical Factors</button>
      <button class="tab-button" onclick="showTab('units')">Affected Units</button>
      <button class="tab-button" onclick="showTab('appearance')">Morphology</button>
      <button class="tab-button" onclick="showTab('mitigation')">Prevention</button>
      <button class="tab-button" onclick="showTab('inspection')">Inspection</button>
      <button class="tab-button" onclick="showTab('temperature')">Temperature Comparison</button>
      <button class="tab-button" onclick="showTab('image')">Image</button>
    </div>

    <div id="description" class="tab-content visible mechanism-info"><strong>Description:</strong> ${info.description || ""}</div>
    <div id="materials" class="tab-content mechanism-info"><strong>Materials:</strong> ${info.affectedMaterials || ""}</div>
    <div id="factors" class="tab-content mechanism-info"><strong>Factors:</strong> ${info.criticalFactors || ""}</div>
    <div id="units" class="tab-content mechanism-info"><strong>Units:</strong> ${info.affectedUnits || ""}</div>
    <div id="appearance" class="tab-content mechanism-info"><strong>Morphology:</strong> ${info.appearance || ""}</div>
    <div id="mitigation" class="tab-content mechanism-info"><strong>Mitigation:</strong> ${info.mitigation || ""}</div>
    <div id="inspection" class="tab-content mechanism-info"><strong>Inspection:</strong> ${info.inspection || ""}</div>
    <div id="temperature" class="tab-content mechanism-info"><strong>Temperature:</strong> ${info.temperatureComparison || ""}</div>
    <div id="image" class="tab-content mechanism-info">
      <strong>Damage Mechanism Reference Image:</strong><br>
      ${ info.imagePath ? `<img src="${info.imagePath}" alt="Mechanism Image" style="max-width: 100%; height: auto; border: 1px solid #ccc;">` : "" }
    </div>
  `;
      };

      mechItem.appendChild(link);
      mechList.appendChild(mechItem);
    });

    // clicking the category toggles the mechList (icon/input stopPropagation prevents accidental toggles)
    span.addEventListener("click", function () {
      mechList.style.display = mechList.style.display === "block" ? "none" : "block";
    });

    // append mechList inside categoryItem and then add to categoryList
    categoryItem.appendChild(mechList);
    categoryList.appendChild(categoryItem);
  });
}



// 🔍 SEARCH - FIXED CATEGORY DISPLAY
searchBox.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const categories = document.querySelectorAll("#categoryList .category-toggle");

  categories.forEach((cat) => {
    const nextUL = cat.nextElementSibling;
    const items = Array.from(nextUL.querySelectorAll("li"));
    let hasMatch = false;

    items.forEach(li => {
      const match = li.textContent.toLowerCase().includes(query);
      li.style.display = match ? "list-item" : "none";
      if (match) hasMatch = true;
    });

    if (query === "") {
      // Reset view
      cat.style.display = "list-item";
      nextUL.style.display = "none";
      items.forEach(li => li.style.display = "list-item");
    } else if (hasMatch) {
      // Show category only if it has visible matching children
      cat.style.display = "list-item";
      nextUL.style.display = "block";
    } else {
      cat.style.display = "none";
      nextUL.style.display = "none";
    }
  });
});

// 📄 Export to PDF
function exportToPDF() {
  let element;
  let filename = "export.pdf"; // default name

  if (document.getElementById("mechanismDetailsContainer").style.display !== "none") {
    element = document.getElementById("mechanismDetailsContainer");
    filename = "damage-mechanism.pdf";
  } else if (document.getElementById("inspectionconfidenceTab").style.display !== "none") {
    element = document.getElementById("inspectionconfidenceTab");
    filename = "inspection-confidence.pdf";
  } else if (document.getElementById("crackingMechanismTab").style.display !== "none") {
    element = document.getElementById("crackingMechanismTab");
    filename = "cracking-mechanism.pdf";
  } else if (document.getElementById("bkStressTab").style.display !== "none") {
    element = document.getElementById("bkStressTab");
    filename = "bk-stress.pdf";
  } else if (document.getElementById("inventoryTab").style.display !== "none") {
    element = document.getElementById("inventoryTab");
    filename = "inventory.pdf";
  } else if (document.getElementById("ASMESECTIONVIIIDIV1Tab").style.display !== "none") {
    element = document.getElementById("ASMESECTIONVIIIDIV1Tab");
    filename = "ASME-VIII-DIV1.pdf";
  } else if (document.getElementById("TOXIC_CALCULATIONTab").style.display !== "none") {
    element = document.getElementById("TOXIC_CALCULATIONTab");
    filename = "toxic-calculation.pdf";
  } else if (document.getElementById("ASMEB31_3Tab").style.display !== "none") {
    element = document.getElementById("ASMEB31_3Tab");
    filename = "ASME-B31.3.pdf";
  } else {
    alert("No active tab to export!");
    return;
  }

  // Create wrapper with double border styling
  const wrapper = document.createElement("div");
  wrapper.style.padding = "20px";
  wrapper.style.border = "4px double #000";
  wrapper.style.borderRadius = "10px";
  wrapper.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
  wrapper.style.backgroundColor = "#fff";
  wrapper.style.width = "100%";
  wrapper.style.boxSizing = "border-box";

  // Create header with logo on left and company name on right
  const header = document.createElement("div");
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-between";
  header.style.marginBottom = "20px";

  const logo = document.createElement("img");
  logo.src = "image/pdflogo.png"; // <-- Replace with your logo path
  logo.style.height = "65px"; // adjust height
  logo.style.objectFit = "contain";

  const companyName = document.createElement("h2");
  companyName.textContent = "Damage Mechanism & Digital Tools"; // <-- Replace with your company name
  companyName.style.fontFamily = "Arial, sans-serif";
  companyName.style.fontSize = "24px";
  companyName.style.margin = "0";

  header.appendChild(logo);
  header.appendChild(companyName);

  wrapper.appendChild(header);

  // Add the content
  wrapper.appendChild(element.cloneNode(true));

  html2pdf().from(wrapper).set({
    margin: [10, 10, 10, 10],
    filename: filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, scrollY: 0 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', putOnlyUsedFonts: true }
  }).save();
}


// 📅 Export Excel — automatically detects active tab------------------
function exportToExcel() {
  let element;

  if (document.getElementById("mechanismDetailsContainer").style.display !== "none") {
    element = document.getElementById("mechanismDetailsContainer");
  } else if (document.getElementById("ASMEB31_3Tab").style.display !== "none") {
    element = document.getElementById("ASMEB31_3Tab");
  } else {
    alert("No active tab to export!");
    return;
  }

  const data = element.innerText;
  const blob = new Blob([data], { type: "application/vnd.ms-excel" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = element.id === "mechanismDetailsContainer" ? "damage-mechanism.xls" : "ASME-B31.3.xls";
  link.click();
}








// 🧽 Tab Switching
function showTab(id) {
  document.querySelectorAll(".mechanism-info").forEach(div => div.classList.remove("visible"));
  document.getElementById(id).classList.add("visible");

  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.tab-button[onclick="showTab('${id}')"]`).classList.add("active");
}



// ✅ CRITERIA FILTER — DAMAGE MECHANISM SUGGESTION
document.getElementById("filterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const mat = document.getElementById("material").value;
  const temp = parseFloat(document.getElementById("temperature").value);
  const mintemp = parseFloat(document.getElementById("mintemp").value);
  const h2pp = parseFloat(document.getElementById("h2pp").value);
  const env = document.getElementById("environment").value.toLowerCase();
  const ph = parseFloat(document.getElementById("ph").value);
  const chloride = parseFloat(document.getElementById("chloride").value);
  const flow = document.getElementById("flow").value;
  const weld = document.getElementById("weld").value;
  const insulated = document.getElementById("insulated").value;
  const exposed = document.getElementById("exposed").value;
  const cycled = document.getElementById("cycled").value;
  const sulfur = parseFloat(document.getElementById("sulfur").value);
  const phase = document.getElementById("phase").value;

  let result = [];

  // 🌟 ORIGINAL + ENHANCED DAMAGE MECHANISMS
  if (mat === "Carbon Steel" && temp >= 260 && temp <= 425 && env.includes("sulfur"))
    result.push("🔥 Sulfidation");

  if (mat === "Carbon Steel" && temp >= 400 && h2pp >= 3.5)
    result.push("💣 High Temperature Hydrogen Attack (HTHA)");

  if (mat.includes("Carbon") && env.includes("wet h2s") && ph < 7.5 && weld === "Yes")
    result.push("⚡ Wet H2S Cracking (HIC/SOHIC)");

  if (insulated === "Yes" && exposed === "Yes" && temp >= 25 && temp <= 175)
    result.push("🧊 Corrosion Under Insulation (CUI)");

  if ((mat === "304 SS" || mat === "316 SS") && chloride > 50 && weld === "Yes")
    result.push("🔩 Chloride SCC");

  if (mat === "Carbon Steel" && env.includes("amine") && ph >= 7 && weld === "Yes")
    result.push("💥 Amine SCC");

  if (mat === "Carbon Steel" && env.includes("caustic") && ph >= 7 && weld === "Yes")
    result.push("🧪 Caustic SCC");

  if (mat === "Carbon Steel" && flow === "Turbulent" && temp >= 150 && temp <= 300)
    result.push("🌀 Flow Accelerated Corrosion (FAC)");

  if (mat === "Carbon Steel" && temp >= 400 && temp <= 700 && h2pp < 1)
    result.push("🔥 Carburization");

  if (mintemp <= -29 && mat === "Carbon Steel")
    result.push("❄️ Brittle Fracture");

  if ((mat === "Carbon Steel" || mat.includes("SS")) && exposed === "Yes" && env.includes("atmosphere"))
    result.push("🌧️ Atmospheric Corrosion");

  if (cycled === "Yes" && temp >= 200)
    result.push("💥 Thermal Shock");

  if (cycled === "Yes" && weld === "Yes" && ph !== 7)
    result.push("🧪 Corrosion Fatigue");

  if (flow === "Stagnant" && ph < 7)
    result.push("💧 Under Deposit Corrosion");

  if (temp >= 100 && temp <= 500 && flow === "Turbulent")
    result.push("🌡️ Thermal Fatigue");

  if (mintemp <= 0 && env.includes("steam"))
    result.push("❄️ Freeze Damage");

  if (cycled === "Yes" && temp > 0)
    result.push("⚡ Dew Point Corrosion");

  if (mat.includes("SS") && weld === "Yes" && env.includes("wet h2s"))
    result.push("🛢️ Polythionic Acid SCC");

  if (mat === "Carbon Steel" && flow === "Stagnant" && env.includes("wet h2s"))
    result.push("🔋 Hydrogen Induced Cracking (HIC)");

  if (mat === "Carbon Steel" && env.includes("wet h2s") && weld === "Yes")
    result.push("⛓️ Stress-Oriented Hydrogen Induced Cracking (SOHIC)");

  if (weld === "Yes" && (env.includes("chloride") || env.includes("caustic")))
    result.push("❌ General Stress Corrosion Cracking");

  if (flow === "Turbulent" && temp >= 100 && weld === "Yes")
    result.push("💥 Erosion-Corrosion");

  if (env.includes("microbial") && flow === "Stagnant" && ph === 7)
    result.push("🦠 Microbiologically Influenced Corrosion (MIC)");

  if (ph >= 8 && temp > 150 && flow === "Turbulent")
    result.push("🧪 Caustic Gouging");

  if (mat === "Carbon Steel" && env.includes("naphthenic") && temp >= 220 && temp <= 400)
    result.push("🔥 Naphthenic Acid Corrosion");

  if (temp > 600 && mat.includes("Steel"))
    result.push("🔥 Refractory Lining Degradation Risk");

  if (mintemp < 0.1)
    result.push("🌫️ Vacuum Failure / Buckling Risk");

  // ✅ NEW — ADDED DAMAGE MECHANISMS

  if (mat === "Carbon Steel" && temp >= 260 && sulfur >= 0.5)
    result.push("🔥 High-Temperature Sulfidation (based on sulfur content)");

  if (phase === "Two-phase" && temp > 100 && flow === "Turbulent")
    result.push("💥 Two-Phase Flow Erosion");

  if (phase === "Liquid" && flow === "Turbulent" && temp < 100)
    result.push("💦 Cavitation Damage");

  if (phase === "Gas" && mat === "Carbon Steel" && h2pp >= 3.5 && temp >= 400)
    result.push("💣 Vapor Phase HTHA Risk");

  if (temp > 425 && cycled === "Yes" && weld === "Yes")
    result.push("🔥 Creep (High Temp Time-Dependent Damage)");

  if ((mat === "304 SS" || mat === "316 SS") && temp > 560)
    result.push("🧪 Sigma Phase Embrittlement");

  if (mat === "Carbon Steel" && temp > 425)
    result.push("🛠️ Graphitization");

  if ((mat.includes("5Cr") || mat.includes("9Cr")) && temp >= 455 && temp <= 510)
    result.push("🔥 885°F Embrittlement");

  if (env.includes("refractory") && temp > 600)
    result.push("🧱 Refractory Degradation");

  if (cycled === "Yes" && flow === "Turbulent")
    result.push("⚙️ Mechanical Fatigue");

  if (cycled === "Yes" && flow === "Turbulent" && weld === "Yes")
    result.push("💥 Reverse Bending Fatigue");

  if (mintemp < -20 && temp < 50 && mat === "Carbon Steel")
    result.push("❄️ Cold Brittle Fracture (Startup Risk)");

  if ((mat.includes("SS")) && env.includes("outdoor") && chloride > 50 && insulated === "Yes")
    result.push("🌧️ External Chloride SCC (CUI-related)");

  if (temp >= 550 && env.includes("air"))
    result.push("⚠️ High Temperature Oxidation");

  if (env.includes("sour water") && mat === "Carbon Steel")
    result.push("🧪 Sour Water Corrosion");

  if (env.includes("flue gas") && mintemp < 60)
    result.push("🧪 Flue Gas Dew Point Corrosion");

  if (env.includes("vacuum") && mintemp < 1)
    result.push("🌫️ Vacuum Buckling / Collapse");

  if (env.includes("electrolyte") && mat.includes("dissimilar"))
    result.push("🔌 Galvanic Corrosion (Dissimilar Metals)");

  if (env.includes("ammonia") && (mat.includes("brass") || mat.includes("copper")))
    result.push("🧪 Ammonia SCC");

  if (env.includes("hf") && mat.includes("alloy 400"))
  result.push("🧪 Hydrogen Stress Cracking in HF (HSC-HF)");

if (env.includes("hf") && temp < 150 && mat === "Carbon Steel")
  result.push("💥 HF Acid Corrosion");

if (env.includes("h2s") && env.includes("hydrogen") && temp > 400)
  result.push("🔥 High-Temperature H₂S/H₂ Corrosion");

if (insulated === "Yes" && chloride > 100 && mat.includes("SS"))
  result.push("🔩 Chloride SCC under Insulation (CLSCC)");

if (env.includes("wet h2s") && ph < 5 && mat.includes("high strength"))
  result.push("🔥 Sulfide Stress Cracking (SSC)");

if (cycled === "Yes" && flow === "Turbulent" && weld === "Yes")
  result.push("⚙️ Piping Vibration Fatigue");

if (env.includes("bottom") && env.includes("product") && phase === "Liquid")
  result.push("🧱 Tank Bottom Corrosion – Product Side");

if (env.includes("soil") && exposed === "Yes" && mintemp > 0)
  result.push("🌊 Tank Bottom Corrosion – Soil Side");

if (env.includes("sour water") && mat === "Carbon Steel")
  result.push("🧪 Corrosion in Sour Water Environment");
  // ✅ DISPLAY OUTPUT
  const output = document.getElementById("result");
  output.style.display = "block";
  output.innerHTML = result.length
  ? `<h3>✅ Matched Damage Mechanisms:</h3><ul>${result.map(r => `<li>${r}</li>`).join("")}</ul>`
  : "<strong>❌ No matching mechanisms found based on API 581 criteria.</strong>";

});

// Full Corrosion Tab Logic (Final + Fixed)
const dmSelectFull = document.getElementById("dmSelectFull");
const formContainerFull = document.getElementById("formContainerFull");
const calculateBtnFull = document.getElementById("calculateBtnFull");
const corrosionResultFull = document.getElementById("corrosionResultFull");

let currentDM = "";

// 🔧 NEW FUNCTION: Auto re-calculate
function triggerAutoCalc() {
  calculateBtnFull.click();
}

// Utility function to find closest value
function findClosestValue(dataArray, temp) {
  return dataArray.reduce((prev, curr) =>
    Math.abs(curr.temp - temp) < Math.abs(prev.temp - temp) ? curr : prev
  );
}

// Handle damage mechanism selection
dmSelectFull.addEventListener("change", () => {
  corrosionResultFull.textContent = ""; // ✅ clear old result
  formContainerFull.innerHTML = ""; // Clear previous input
  currentDM = dmSelectFull.value;
  calculateBtnFull.style.display = currentDM ? "inline-block" : "none";

  // ✅ CUI Mechanism Form
  if (currentDM === "cui") {
  formContainerFull.innerHTML = `
    <label>Material: 
      <select id="materialCUI" onchange="updateCUIFormLimits()">
        <option value="">-- Select Material --</option>
        <option value="cs">Carbon Steel / LAS / LTCS / SS 400 Series</option>
        <option value="ss300">SS 300 Series</option>
        <option value="duplex">Duplex</option>
      </select>
    </label>
    <label>Temperature (°C): <input type="number" id="tempCUI" /></label>
    <label>Is Insulated? 
      <select id="insulatedCUI"><option>Yes</option><option>No</option></select>
    </label>
    <label>Is Exposed to Moisture? 
      <select id="exposedCUI"><option>Yes</option><option>No</option></select>
    </label>
    <label>Severity: 
      <select id="severityCUI">
        <option>Severe</option>
        <option>Moderate</option>
        <option>Mild</option>
        <option>Dry</option>
      </select>
    </label>
  `;

  // Auto-trigger calculation when any input changes
  setTimeout(() => {
    document.getElementById("materialCUI").addEventListener("change", triggerAutoCalc);
    document.getElementById("tempCUI").addEventListener("input", triggerAutoCalc);
    document.getElementById("insulatedCUI").addEventListener("change", triggerAutoCalc);
    document.getElementById("exposedCUI").addEventListener("change", triggerAutoCalc);
    document.getElementById("severityCUI").addEventListener("change", triggerAutoCalc);
  }, 100);
}

    else if (currentDM === "co2") {
  formContainerFull.innerHTML = `
    <label>Material:
      <select id="materialCO2">
        <option value="">-- Select --</option>
        <option value="Carbon Steel"><13% Cr / Carbon Steel</option>
        <option value="Other">Other</option>
      </select>
    </label>
    <div id="step1CO2"></div>
  `;

  document.getElementById("materialCO2").addEventListener("change", (e) => {
    const val = e.target.value;
    const step1 = document.getElementById("step1CO2");
    step1.innerHTML = "";

    if (val === "Other") {
      step1.innerHTML = `<p>❌ No CO₂ corrosion for selected material.</p>`;
      return;
    }

    step1.innerHTML = `
      <label>Are liquid hydrocarbons present?
        <select id="liquidHC">
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <div id="step2CO2"></div>
    `;

    document.getElementById("liquidHC").addEventListener("change", (e2) => {
      const val2 = e2.target.value;
      const step2 = document.getElementById("step2CO2");
      step2.innerHTML = "";

      if (val2 === "Yes") {
        step2.innerHTML = `
          <label>Water Content < 20%?
            <select id="waterContent">
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <div id="step3CO2"></div>
        `;

        document.getElementById("waterContent").addEventListener("change", (e3) => {
          const val3 = e3.target.value;
          const step3 = document.getElementById("step3CO2");
          step3.innerHTML = "";

          if (val3 === "Yes") {
            step3.innerHTML = `
              <label>Fluid velocity > 1 m/s?
                <select id="velocityHigh">
                  <option value="">-- Select --</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
              <div id="step4CO2"></div>
            `;

            document.getElementById("velocityHigh").addEventListener("change", (e4) => {
              const val4 = e4.target.value;
              const step4 = document.getElementById("step4CO2");
              step4.innerHTML = "";

              if (val4 === "Yes") {
                step4.innerHTML = `<p>✅ No CO₂ corrosion expected due to high velocity and low water.</p>`;
              } else {
                showDewPointStep(step4); // ✅ call external function
              }
            });
          } else {
            showDewPointStep(step3);
          }
        });
      } else {
        step2.innerHTML = `<p>⚠️ No hydrocarbons present — proceeding with dew point calculation.</p>`;
        showDewPointStep(step2);
      }
    });
  });
    }
   else if (currentDM === "sulfidation") {
  formContainerFull.innerHTML = `
    <label>Material:
      <select id="materialSulf" onchange="updateSulfidationDropdowns()">
        <option value="">-- Choose --</option>
        <option value="CS">Carbon Steel</option>
        <option value="SS">Austenitic SS without Mo</option>
      </select>
    </label>

    <label>Temperature (°C): <input type="number" id="tempSulf" /></label>

    <label>Sulfur Content (%):
      <select id="sulfurSulf"></select>
    </label>

    <label>TAN:
      <select id="tanSulf"></select>
    </label>

    <label>Velocity (m/s): <input type="number" id="velocitySulf" /></label>

    <button onclick="calculateSulfidation()">Calculate</button>
    <div id="corrosionResultFull"></div>
  `;

  updateSulfidationDropdowns(); // ✅ Call this AFTER HTML is loaded
}
   else if (currentDM === "Alkaline Sour Water Corrosion") {
    formContainerFull.innerHTML = `
      <label>NH₄HS Concentration (wt%):
        <select id="nh4hs">
          <option value="">-- Choose --</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </label>
      <label>Velocity (m/s):
        <select id="velocity">
          <option value="">-- Choose --</option>
          <option value="3.05">3.05</option>
          <option value="4.57">4.57</option>
          <option value="6.10">6.10</option>
          <option value="7.62">7.62</option>
          <option value="9.14">9.14</option>
        </select>
      </label>
      <label>Is H₂S Partial Pressure Known? 
        <select id="pressureKnown">
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </label>
      <div id="pressureInputContainer"></div>
    `;

    document.getElementById("pressureKnown").addEventListener("change", (e) => {
      const container = document.getElementById("pressureInputContainer");
      container.innerHTML = e.target.value === "Yes"
        ? `<label>H₂S Partial Pressure (kg/cm²): <input type="number" id="h2sPressure" /></label>`
        : "";
    });
  }
else if (currentDM === "Acid Sour Water Corrosion") {
  formContainerFull.innerHTML = `
    <label>Is H₂O Present?
      <select id="h2oPresentASW">
        <option value="">-- Select --</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </label>
    <div id="acidSourSteps"></div>
  `;

  document.getElementById("h2oPresentASW").addEventListener("change", () => {
    const h2o = document.getElementById("h2oPresentASW").value;
    const acidSourSteps = document.getElementById("acidSourSteps");
    acidSourSteps.innerHTML = "";

    if (h2o === "no") {
      acidSourSteps.innerHTML = `<p>✅ Estimated Corrosion Rate: 0 mm/y (No H₂O Present)</p>`;
      return;
    }

    acidSourSteps.innerHTML = `
      <label>pH (for routing decision):
        <select id="phStep">
          <option value="">-- Select --</option>
          <option value="4.75">4.75</option>
          <option value="5.25">5.25</option>
          <option value="5.75">5.75</option>
          <option value="6.25">6.25</option>
          <option value="6.75">6.75</option>
          <option value="7.25">> 7</option>
          <option value="4.25">< 4.5</option>
        </select>
      </label>
      <div id="acidSourRouting"></div>
    `;

    document.getElementById("phStep").addEventListener("change", () => {
      const ph = parseFloat(document.getElementById("phStep").value);
      const acidSourRouting = document.getElementById("acidSourRouting");
      acidSourRouting.innerHTML = "";

      if (ph > 7) {
        acidSourRouting.innerHTML = `<p>📌 Routing: Proceed to Section 2.B.8.7</p>`;
        return;
      }
      if (ph < 4.5) {
        acidSourRouting.innerHTML = `<p>📌 Routing: pH too low for this method.</p>`;
        return;
      }

      acidSourRouting.innerHTML = `
        <label>Are Chlorides Present?
          <select id="chloridesPresentASW">
            <option value="">-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <div id="acidSourNextStep"></div>
      `;

      document.getElementById("chloridesPresentASW").addEventListener("change", () => {
        const chlorides = document.getElementById("chloridesPresentASW").value;
        const nextStep = document.getElementById("acidSourNextStep");
        nextStep.innerHTML = "";

        if (chlorides === "yes") {
          nextStep.innerHTML = `<p>📌 Routing: Proceed to Section 2.B.2.1</p>`;
          return;
        }

        nextStep.innerHTML = `
          <label>Material of Construction:
            <select id="materialASW">
              <option value="">-- Select --</option>
              <option value="carbon">Carbon Steel</option>
              <option value="lowalloy">Low Alloy</option>
              <option value="other">Other</option>
            </select>
          </label>
          <div id="baseRateSectionASW"></div>
        `;

        document.getElementById("materialASW").addEventListener("change", () => {
          const mat = document.getElementById("materialASW").value;
          const baseSection = document.getElementById("baseRateSectionASW");
          baseSection.innerHTML = "";

          if (mat === "other") {
            baseSection.innerHTML = `<p>✅ Estimated Corrosion Rate: 0.05 mm/y (Default)</p>`;
            return;
          }

          if (mat === "carbon" || mat === "lowalloy") {
            baseSection.innerHTML = `
              <label>Temperature (°C):
                <select id="tempASW">
                  <option value="">-- Select --</option>
                  <option value="38">38</option>
                  <option value="52">52</option>
                  <option value="79">79</option>
                  <option value="93">93</option>
                </select>
              </label>
              <label>pH (from Table 2.B.10.2M):
                <select id="phFinalASW"><option value="">-- Select Temperature First --</option></select>
              </label>
              <label>Oxygen (ppb): <input type="number" id="oxygenASW" /></label>
              <label>Velocity (m/s): <input type="number" id="velocityASW" step="0.1" /></label>
              <div id="acidSourWaterOutput"></div>
            `;

            const phDropdown = document.getElementById("phFinalASW");
            const tempDropdown = document.getElementById("tempASW");

            tempDropdown.addEventListener("change", () => {
              const temp = tempDropdown.value;
              phDropdown.innerHTML = `<option value="">-- Select --</option>`;
              if (corrosionTableASW[temp]) {
                Object.keys(corrosionTableASW[temp]).forEach(ph => {
                  phDropdown.innerHTML += `<option value="${ph}">${ph}</option>`;
                });
              }
            });
          }
        });
      });
    });
  });
}
    
  else if (currentDM === "oxidation") {
  formContainerFull.innerHTML = `
    <label>Material:
      <select id="materialOxidation">
        <option value="">-- Choose --</option>
        <option value="CS">CS</option>
        <option value="1.25Cr">1¼Cr</option>
        <option value="2.25Cr">2¼Cr</option>
        <option value="5Cr">5Cr</option>
        <option value="7Cr">7Cr</option>
        <option value="9Cr">9Cr</option>
        <option value="12Cr">12Cr</option>
        <option value="304 SS">304 SS</option>
        <option value="309 SS">309 SS</option>
        <option value="310 SS/HK">310 SS/HK</option>
        <option value="800 H/HP">800 H/HP</option>
      </select>
    </label>
    <label>Maximum Metal Temperature (°C): 
      <input type="number" id="tempOxidation" />
    </label>
  `;
  }
    // === HCl Corrosion Dynamic Form (as per flowchart) ===
else if (currentDM === "HCl Corrosion") {
  formContainerFull.innerHTML = `
    <label>Material:
      <select id="materialHCl">
        <option disabled selected>-- Select --</option>
        <option value="Carbon Steel">Carbon Steel</option>
        <option value="300 Series SS">300 Series SS</option>
        <option value="Alloy 20">Alloy 20</option>
        <option value="Alloy 825">Alloy 825</option>
        <option value="Alloy 625">Alloy 625</option>
        <option value="Alloy C-276">Alloy C-276</option>
        <option value="Alloy B-2">Alloy B-2</option>
        <option value="Alloy 400">Alloy 400</option>
      </select>
    </label>
    <div id="hclDynamicFields"></div>
  `;

  document.getElementById("materialHCl").addEventListener("change", (e) => {
    const selected = e.target.value;
    const dynamic = document.getElementById("hclDynamicFields");
    dynamic.innerHTML = "";

    if (selected === "Carbon Steel" || selected === "300 Series SS") {
      dynamic.innerHTML += `
        <label>Do you know the pH?
          <select id="knowPhHCl">
            <option disabled selected>-- Select --</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <div id="phOrClField"></div>
        <div id="tempFieldHCl"></div>
      `;

      document.getElementById("knowPhHCl").addEventListener("change", (e2) => {
        const choice = e2.target.value;
        const container = document.getElementById("phOrClField");
        const tempField = document.getElementById("tempFieldHCl");
        container.innerHTML = "";
        tempField.innerHTML = "";

        if (choice === "yes") {
          container.innerHTML = `<label>pH: <input type="number" step="0.1" id="phHCl" /></label>`;
        } else {
          container.innerHTML = `<label>Cl⁻ Concentration (wppm): <input type="number" id="clwppmHCl" /></label>`;
        }
        tempField.innerHTML = `<label>Temperature (°C): <input type="number" id="tempHCl" /></label>`;
      });
    } else {
      // Common for all Alloys (Alloy 20, 825, 625, C-276, B-2, 400)
      dynamic.innerHTML += `
        <label>Cl⁻ Concentration (wt%): <select id="clHCl">
          <option value="0.5">0.50</option>
          <option value="0.75">0.75</option>
          <option value="1.0">1.00</option>
        </select></label>
        <label>Temperature (°C): <input type="number" id="tempHCl" /></label>
      `;

      if (["Alloy B-2", "Alloy 400"].includes(selected)) {
        dynamic.innerHTML += `
          <label>Oxidizing Conditions:
            <select id="oxidHCl">
              <option value="">-- Select --</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
        `;
      }
    }
  });
}

  else if (currentDM === "H2SO4 Corrosion") {
    formContainerFull.innerHTML = `
      <label>Material:
        <select id="materialH2SO4">
          <option value="304 SS">304 SS</option>
        </select>
      </label>
      <label>Temperature (°C):
        <select id="tempH2SO4"></select>
      </label>
      <label>Acid Concentration (wt%):
        <select id="concH2SO4"></select>
      </label>
      <label>Velocity (m/s):
        <select id="velH2SO4"></select>
      </label>
    `;

    setupH2SO4Dropdowns("304 SS");

    document.getElementById("materialH2SO4").addEventListener("change", (e) => {
      setupH2SO4Dropdowns(e.target.value);
    });
  }
});

// Setup dropdowns for H2SO4 corrosion (304 SS only for now)
function setupH2SO4Dropdowns(material = "304 SS") {
  const tempSelect = document.getElementById("tempH2SO4");
  const concSelect = document.getElementById("concH2SO4");
  const velSelect = document.getElementById("velH2SO4");

  tempSelect.innerHTML = "";
  concSelect.innerHTML = "";
  velSelect.innerHTML = "";

  if (material === "304 SS") {
    const temperatures = [30, 40, 60];
    const concentrations = [2, 3.5, 8, 15, 30, 50, 65, 75, 82, 87, 92.5, 98];
    const velocities = ["0.61", "1.83", "2.13"];

    temperatures.forEach(t => {
      tempSelect.innerHTML += `<option value="${t}">${t} °C</option>`;
    });
    concentrations.forEach(c => {
      concSelect.innerHTML += `<option value="${c}">${c} wt%</option>`;
    });
    velocities.forEach(v => {
      velSelect.innerHTML += `<option value="${v}">${v} m/s</option>`;
    });
  }
}
// ✅ Dew Point Placeholder Function
function showDewPointStep(container) {
  container.innerHTML = `
    <p>📌 Dew Point Calculation logic will appear here later.</p>
  `;
}

// ✅ Place this function OUTSIDE of any if/else blocks
function updateSulfidationDropdowns() {
  const material = document.getElementById("materialSulf").value;
  const sulfurSelect = document.getElementById("sulfurSulf");
  const tanSelect = document.getElementById("tanSulf");

  sulfurSelect.innerHTML = "";
  tanSelect.innerHTML = "";

  const csSulfurOptions = [0.2, 0.4, 0.6, 1.5, 2.5, 3.0];
  const csTanOptions = [0.3, 0.65, 1.5, 3.0, 4.0];

  const ssSulfurOptions = [0.2, 0.4, 0.8];
  const ssTanOptions = [1.0, 1.5, 3.0, 4.0];

  let sulfurOptions = [];
  let tanOptions = [];

  if (material === "CS") {
    sulfurOptions = csSulfurOptions;
    tanOptions = csTanOptions;
  } else if (material === "SS") {
    sulfurOptions = ssSulfurOptions;
    tanOptions = ssTanOptions;
  }

  sulfurOptions.forEach(value => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = value;
    sulfurSelect.appendChild(opt);
  });

  tanOptions.forEach(value => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = value;
    tanSelect.appendChild(opt);
  });
}


// 📌 Existing calculate button logic (unchanged — just reused)
calculateBtnFull.addEventListener("click", () => {
  corrosionResultFull.textContent = "";

try {
  if (currentDM === "cui") {
    const material = document.getElementById("materialCUI").value;
    const temp = parseFloat(document.getElementById("tempCUI").value);
    const insulated = document.getElementById("insulatedCUI").value;
    const exposed = document.getElementById("exposedCUI").value;
    const severity = document.getElementById("severityCUI").value;

    if (!material || isNaN(temp) || !insulated || !exposed || !severity) {
      corrosionResultFull.textContent = "❌ Please fill all fields correctly.";
      return;
    }

    // Temperature range conditions
    let minTemp = -100, maxTemp = 1000;
    if (material === "cs") {
      minTemp = -12;
      maxTemp = 175;
    } else if (material === "ss300") {
      minTemp = 60;
      maxTemp = 175;
    } else if (material === "duplex") {
      minTemp = 140;
      maxTemp = 175;
    }

    if (temp < minTemp || temp > maxTemp) {
      corrosionResultFull.textContent = `🟡 For selected material, valid temperature range is ${minTemp}°C to ${maxTemp}°C.`;
      return;
    }

    const corrosionTable = [
      { temp: -12, values: { Severe: 0, Moderate: 0, Mild: 0, Dry: 0 } },
      { temp: -8, values: { Severe: 0.076, Moderate: 0.025, Mild: 0, Dry: 0 } },
      { temp: 6, values: { Severe: 0.254, Moderate: 0.127, Mild: 0.076, Dry: 0.025 } },
      { temp: 32, values: { Severe: 0.254, Moderate: 0.127, Mild: 0.076, Dry: 0.025 } },
      { temp: 71, values: { Severe: 0.508, Moderate: 0.254, Mild: 0.127, Dry: 0.051 } },
      { temp: 107, values: { Severe: 0.254, Moderate: 0.127, Mild: 0.025, Dry: 0.025 } },
      { temp: 135, values: { Severe: 0.254, Moderate: 0.051, Mild: 0.025, Dry: 0 } },
      { temp: 162, values: { Severe: 0.127, Moderate: 0.025, Mild: 0, Dry: 0 } },
      { temp: 176, values: { Severe: 0, Moderate: 0, Mild: 0, Dry: 0 } }
    ];

    if (insulated === "Yes" && exposed === "Yes") {
      if (temp > 176) {
        corrosionResultFull.textContent = "🟢 Not Susceptible to CUI above 176°C.";
        return;
      }

      const closest = corrosionTable.reduce((prev, curr) =>
        Math.abs(curr.temp - temp) < Math.abs(prev.temp - temp) ? curr : prev
      );
      const rate = closest.values[severity];
      corrosionResultFull.textContent = `✅ Estimated Corrosion Rate: ${rate} mm/year at ${closest.temp}°C [${severity}]`;

      const labels = corrosionTable.map(row => `${row.temp}°C`);
      const rates = corrosionTable.map(row => row.values[severity]);
      drawChart(rates, labels);
    } else {
      corrosionResultFull.textContent = "🟡 CUI requires insulation AND moisture exposure.";
    }
  }
 else if (currentDM === "Acid Sour Water Corrosion") {
  const temp = document.getElementById("tempASW")?.value;
  const ph = document.getElementById("phFinalASW")?.value;
  const oxygen = parseFloat(document.getElementById("oxygenASW")?.value);
  const velocity = parseFloat(document.getElementById("velocityASW")?.value);

  if (!temp || !ph || isNaN(oxygen) || isNaN(velocity)) {
    corrosionResultFull.innerHTML = "❌ Please fill all required fields correctly for Acid Sour Water.";
    return;
  }

  const base = corrosionTableASW[temp]?.[ph];
  if (!base) {
    corrosionResultFull.innerHTML = "❌ Invalid Temperature or pH for corrosion table.";
    return;
  }

  const oxygenFactor = oxygen > 50 ? 2.0 : 1.0;
  const velocityFactor = 1 + 0.1 * velocity;
  const finalRate = base * oxygenFactor * velocityFactor;

  corrosionResultFull.innerHTML = `
  ✅ Final Estimated Corrosion Rate: <b>${finalRate.toFixed(3)} mm/year</b><br>
  📌 Base Rate: ${base} mm/year<br>
  📌 Oxygen Factor: ${oxygenFactor}<br>
  📌 Velocity Factor: ${velocityFactor.toFixed(2)}<br>
  🌡 Temp: ${temp}°C, pH: ${ph}
`;

const rates = [base.toFixed(3), finalRate.toFixed(3)];
const labels = ["Base Rate", "Adjusted Rate"];
drawChart(rates, labels);
        }
            else if (currentDM === "sulfidation") {
  const temp = parseFloat(document.getElementById("tempSulf").value);
  const sulfur = parseFloat(document.getElementById("sulfurSulf").value);
  const tan = parseFloat(document.getElementById("tanSulf").value);
  const material = document.getElementById("materialSulf")?.value || "CS"; // Default to CS

  if (isNaN(temp) || isNaN(sulfur) || isNaN(tan)) {
    corrosionResultFull.textContent = "❌ Please fill all fields correctly.";
    return;
  }

  if (temp < 232 || temp > 399) {
    corrosionResultFull.textContent = "❌ Not Susceptible to Sulfidation at this temperature.";
    return;
  }

  const csData = {
    0.2: {
          0.3: [0.03, 0.08, 0.18, 0.38, 0.51, 0.89, 1.27, 1.52],
          0.65: [0.13, 0.38, 0.64, 0.89, 1.14, 1.40, 1.65, 1.91],
          1.5: [0.51, 0.64, 0.89, 1.65, 3.05, 3.81, 4.57, 5.08],
          3.0: [0.76, 1.02, 1.52, 3.05, 3.81, 4.06, 6.10, 6.10],
          4.0: [1.02, 2.03, 2.54, 4.06, 4.57, 5.08, 7.11, 7.62]
        },
        0.4: {
          0.3: [0.03, 0.10, 0.25, 0.51, 0.76, 1.27, 1.78, 2.03],
          0.65: [0.13, 0.25, 0.38, 0.64, 1.02, 1.52, 2.03, 2.29],
          1.5: [0.20, 0.38, 0.64, 0.89, 1.27, 1.78, 2.29, 2.79],
          3.0: [0.38, 0.64, 0.89, 1.52, 2.29, 3.05, 3.05, 3.30],
          4.0: [0.51, 0.76, 1.27, 1.78, 2.29, 3.05, 3.56, 4.06]
        },
        0.6: {
          0.3: [0.05, 0.13, 0.25, 0.38, 0.64, 1.02, 2.29, 2.54],
          0.65: [0.13, 0.25, 0.38, 0.76, 1.27, 2.03, 2.79, 3.30],
          1.5: [0.25, 0.38, 0.76, 1.27, 2.03, 2.54, 3.30, 3.81],
          3.0: [0.38, 0.76, 1.27, 2.03, 2.54, 3.05, 3.56, 4.06],
          4.0: [0.64, 1.02, 1.52, 2.54, 3.05, 3.81, 4.57, 5.08]
        },
        1.5: {
          0.3: [0.03, 0.13, 0.38, 0.76, 1.27, 2.03, 2.79, 3.30],
          0.65: [0.08, 0.25, 0.51, 0.89, 1.40, 2.54, 3.30, 3.81],
          1.5: [0.38, 0.51, 0.89, 1.40, 2.54, 3.05, 3.81, 4.32],
          3.0: [0.51, 0.76, 1.40, 2.16, 2.79, 3.81, 4.32, 5.08],
          4.0: [0.76, 1.52, 2.29, 3.05, 3.81, 5.08, 5.08, 6.60]
        },
        2.5: {
          0.3: [0.05, 0.18, 0.51, 0.89, 1.40, 2.41, 3.30, 3.81],
          0.65: [0.13, 0.25, 0.76, 1.14, 1.52, 2.54, 3.56, 4.06],
          1.5: [0.38, 0.51, 1.02, 1.52, 1.91, 3.05, 4.32, 5.08],
          3.0: [0.51, 0.89, 1.52, 2.29, 3.05, 4.32, 5.08, 6.60],
          4.0: [0.89, 1.27, 2.29, 3.05, 3.81, 5.08, 6.60, 7.11]
        },
        3.0: {
          0.3: [0.05, 0.20, 0.51, 1.02, 1.52, 2.54, 3.56, 4.06],
          0.65: [0.20, 0.38, 0.64, 1.14, 1.52, 2.54, 3.81, 4.32],
          1.5: [0.38, 0.64, 0.89, 1.65, 3.05, 3.81, 4.57, 5.08],
          3.0: [0.76, 1.52, 2.03, 3.05, 3.81, 4.32, 6.10, 6.10],
          4.0: [1.02, 2.03, 2.54, 4.06, 4.57, 5.08, 7.11, 7.62]
        }
      };


  const ssData = {
  0.2: {
    1.0: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03],
    1.5: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03],
    3.0: [0.03, 0.03, 0.03, 0.03, 0.05, 0.08, 0.10, 0.10],
    4.0: [0.03, 0.03, 0.03, 0.05, 0.08, 0.10, 0.13, 0.15]
  },
  0.4: {
    1.0: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03],
    1.5: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.10, 0.03],
    3.0: [0.03, 0.03, 0.03, 0.03, 0.05, 0.08, 0.10, 0.10],
    4.0: [0.03, 0.03, 0.05, 0.05, 0.08, 0.10, 0.13, 0.15]
  },
  0.8: {
    1.0: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03],
    1.5: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03],
    3.0: [0.03, 0.03, 0.03, 0.05, 0.08, 0.10, 0.13, 0.15],
    4.0: [0.03, 0.05, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30]
  },
  1.5: {
    1.0: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03],
    1.5: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03],
    3.0: [0.03, 0.03, 0.03, 0.05, 0.08, 0.10, 0.13, 0.15],
    4.0: [0.03, 0.05, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30]
  },
  2.5: {
    1.0: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03],
    1.5: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03],
    3.0: [0.03, 0.05, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30],
    4.0: [0.03, 0.05, 0.10, 0.18, 0.25, 0.36, 0.43, 0.51]
  },
  3.0: {
    1.0: [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.05],
    1.5: [0.03, 0.03, 0.03, 0.03, 0.03, 0.05, 0.05, 0.05],
    3.0: [0.03, 0.05, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30],
    4.0: [0.03, 0.05, 0.10, 0.18, 0.25, 0.36, 0.43, 0.51]
  }
};


  const tempRanges = [232, 260, 288, 315, 343, 371, 399, Infinity];

  function interpolateCorrosionRate(temp, rates) {
    for (let i = 0; i < tempRanges.length - 1; i++) {
      const T1 = tempRanges[i];
      const T2 = tempRanges[i + 1];
      if (temp >= T1 && temp <= T2) {
        const R1 = rates[i];
        const R2 = rates[i + 1];
        return R1 + ((temp - T1) / (T2 - T1)) * (R2 - R1);
      }
    }
    return rates[rates.length - 1];
  }

  const dataSource = material === "CS" ? csData : ssData;

  const sulfurKey = Object.keys(dataSource).find(s => Math.abs(parseFloat(s) - sulfur) < 0.11);
  const tanKey = sulfurKey && Object.keys(dataSource[sulfurKey]).find(t => Math.abs(parseFloat(t) - tan) < 0.11);

  if (sulfurKey && tanKey) {
    const selectedRates = dataSource[sulfurKey][tanKey];
    const corrosionRate = interpolateCorrosionRate(temp, selectedRates);
    corrosionResultFull.textContent = `✅ Estimated Corrosion Rate: ${corrosionRate.toFixed(3)} mm/year at ${temp}°C (${material === "CS" ? "Carbon Steel / 12%Cr" : "Austenitic SS without Mo"}, Sulfur: ${sulfur}%, TAN: ${tan})`;
    drawChart([corrosionRate.toFixed(3)], [`TAN ${tan} @ ${temp}°C`]);
  } else {
    corrosionResultFull.textContent = "❌ Invalid combination of Sulfur and TAN value for selected material.";
  }
}

    else if (currentDM === "oxidation") {
  const material = document.getElementById("materialOxidation").value;
  const temp = parseFloat(document.getElementById("tempOxidation").value);

  if (!material || isNaN(temp)) {
    corrosionResultFull.textContent = "❌ Please select material and enter valid temperature.";
    return;
  }

  const oxidationData = {
    "CS":       [0.05, 0.1, 0.15, 0.23, 0.36, 0.56, 0.84, 1.22, null, null, null, null],
    "1.25Cr":   [0.05, 0.08, 0.1, 0.18, 0.3, 0.46, 0.76, 1.17, null, null, null, null],
    "2.25Cr":   [0.03, 0.03, 0.05, 0.1, 0.23, 0.36, 0.61, 1.04, null, null, null, null],
    "5Cr":      [0.03, 0.03, 0.03, 0.05, 0.1, 0.15, 0.38, 0.89, 1.65, null, null, null],
    "7Cr":      [0.03, 0.03, 0.03, 0.03, 0.03, 0.05, 0.08, 0.15, 0.43, 0.94, 1.52, null],
    "9Cr":      [0.03, 0.03, 0.03, 0.03, 0.03, 0.05, 0.08, 0.13, 0.28, 0.58, 1.02, null],
    "12Cr":     [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.05, 0.08, 0.2, 0.38, 0.76, null],
    "304 SS":   [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.05, 0.08, 0.1, null],
    "309 SS":   [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.05, 0.08, 0.08, null],
    "310 SS/HK":[0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.05, null],
    "800 H/HP": [0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.05, null],
  };

  const tempPoints = [496, 524, 552, 579, 607, 635, 663, 691, 718, 746, 774, 802];

  function interpolate(temp, temps, rates) {
    for (let i = 0; i < temps.length - 1; i++) {
      const T1 = temps[i], T2 = temps[i + 1];
      const R1 = rates[i], R2 = rates[i + 1];

      if (temp >= T1 && temp <= T2) {
        if (R1 == null || R2 == null) return null;
        return R1 + ((temp - T1) / (T2 - T1)) * (R2 - R1);
      }
    }
    return null;
  }

  const rates = oxidationData[material];
  const estimatedRate = interpolate(temp, tempPoints, rates);

  if (estimatedRate !== null) {
    corrosionResultFull.textContent = `✅ Estimated Corrosion Rate: ${estimatedRate.toFixed(3)} mm/year at ${temp}°C for ${material}`;
      const ratesChart = [estimatedRate.toFixed(3)];
  const labelsChart = ["Oxidation Rate"];
  drawChart(ratesChart, labelsChart);

  } else {
    corrosionResultFull.textContent = `❌ Temperature out of range or data unavailable for ${material} at ${temp}°C.`;
  }
    }
// === HCl Corrosion Logic Handler ===
else if (currentDM === "HCl Corrosion") {
  const material = document.getElementById("materialHCl").value;
  const temp = parseFloat(document.getElementById("tempHCl").value);

  let ph = null;
  let cl = null;
  let oxid = null;

  if (!material || isNaN(temp)) {
    corrosionResultFull.textContent = "❌ Please enter material and temperature.";
    return;
  }

  function estimatePhFromClWppm(clppm) {
    if (clppm >= 3601) return 0.5;
    else if (clppm >= 1201) return 1.0;
    else if (clppm >= 361) return 1.5;
    else if (clppm >= 121) return 2.0;
    else if (clppm >= 36) return 2.5;
    else if (clppm >= 16) return 3.0;
    else if (clppm >= 6) return 3.5;
    else if (clppm >= 3) return 4.0;
    else if (clppm >= 1) return 4.5;
    else return 5.0;
  }

  // === Handle pH / Cl for CS and SS ===
  if (["Carbon Steel", "300 Series SS"].includes(material)) {
    const knowsPh = document.getElementById("knowPhHCl")?.value;

    if (!knowsPh) {
      corrosionResultFull.textContent = "❌ Please select whether you know the pH.";
      return;
    }

    if (knowsPh === "yes") {
      ph = parseFloat(document.getElementById("phHCl").value);
      if (isNaN(ph)) {
        corrosionResultFull.textContent = "❌ Please enter valid pH value.";
        return;
      }
    } else {
      const clppm = parseFloat(document.getElementById("clwppmHCl").value);
      if (isNaN(clppm)) {
        corrosionResultFull.textContent = "❌ Please enter valid Cl⁻ concentration in ppm.";
        return;
      }
      ph = estimatePhFromClWppm(clppm);
    }
  }

  // === Handle Cl for Alloy 20 to C-276, B-2, 400 ===
  if (
    ["Alloy 20", "Alloy 825", "Alloy 625", "Alloy C-276", "Alloy B-2", "Alloy 400"].includes(material)
  ) {
    cl = parseFloat(document.getElementById("clHCl").value);
    if (isNaN(cl)) {
      corrosionResultFull.textContent = "❌ Please enter valid Cl⁻ concentration.";
      return;
    }
  }

  // === Handle Oxidant Condition for Alloy B-2 and 400 ===
  if (["Alloy B-2", "Alloy 400"].includes(material)) {
    oxid = document.getElementById("oxidHCl")?.value;
    if (!oxid) {
      corrosionResultFull.textContent = "❌ Please select oxidizing condition.";
      return;
    }
  }

  const tempPoints = [38, 52, 79, 93];

  function interpolate(temp, knownTemps, values) {
    if (temp <= knownTemps[0]) return values[0];
    if (temp >= knownTemps[knownTemps.length - 1]) return values[values.length - 1];
    for (let i = 0; i < knownTemps.length - 1; i++) {
      const T1 = knownTemps[i];
      const T2 = knownTemps[i + 1];
      const V1 = values[i];
      const V2 = values[i + 1];
      if (temp >= T1 && temp <= T2) {
        return V1 + ((temp - T1) / (T2 - T1)) * (V2 - V1);
      }
    }
  }

  const csTable = {
    0.5: [25.37, 25.37, 25.37, 25.37],
    0.8: [22.86, 25.37, 25.37, 25.37],
    1.25: [10.16, 25.37, 25.37, 25.37],
    1.75: [5.08, 17.78, 25.37, 25.37],
    2.25: [2.54, 7.62, 10.16, 14.22],
    2.75: [1.52, 3.3, 5.08, 7.11],
    3.25: [1.02, 1.78, 2.54, 3.56],
    3.75: [0.76, 1.27, 2.29, 3.18],
    4.25: [0.51, 1.02, 1.78, 2.54],
    4.75: [0.25, 0.76, 1.27, 1.78],
    5.25: [0.18, 0.51, 0.76, 1.02],
    5.75: [0.1, 0.38, 0.51, 0.76],
    6.25: [0.08, 0.25, 0.38, 0.51],
    6.8: [0.05, 0.13, 0.18, 0.25]
  };

  const ssTable = {
    0.5: [22.86, 25.37, 25.37, 25.37],
    0.8: [12.7, 25.37, 25.37, 25.37],
    1.25: [7.62, 12.7, 17.78, 25.37],
    1.75: [3.81, 6.6, 10.16, 12.7],
    2.25: [2.03, 3.56, 5.08, 6.35],
    2.75: [1.27, 1.78, 2.54, 3.05],
    3.25: [0.76, 1.02, 1.27, 1.65],
    3.75: [0.51, 0.64, 0.76, 0.89],
    4.25: [0.25, 0.38, 0.51, 0.64],
    4.75: [0.13, 0.18, 0.25, 0.3],
    5.25: [0.1, 0.13, 0.15, 0.18],
    5.75: [0.08, 0.1, 0.13, 0.15],
    6.25: [0.05, 0.08, 0.1, 0.13],
    6.8: [0.03, 0.05, 0.08, 0.1]
  };

  const alloyTable = {
    "Alloy 20": {
      0.5: [0.03, 0.08, 1.02, 5.08],
      0.75: [0.05, 0.13, 2.03, 10.16],
      1.0: [0.25, 1.78, 7.62, 25.37]
    },
    "Alloy 825": {
      0.5: [0.03, 0.08, 1.02, 5.08],
      0.75: [0.05, 0.13, 2.03, 10.16],
      1.0: [0.25, 1.78, 7.62, 25.37]
    },
    "Alloy 625": {
      0.5: [0.03, 0.05, 0.38, 1.91],
      0.75: [0.03, 0.13, 0.64, 3.18],
      1.0: [0.05, 0.13, 0.85, 10.16]
    },
    "Alloy C-276": {
      0.5: [0.03, 0.05, 0.2, 0.76],
      0.75: [0.03, 0.05, 0.38, 1.91],
      1.0: [0.05, 0.25, 1.52, 7.62]
    }
  };

  const oxidantTable = {
    "Alloy B-2": {
      No: {
        0.5: [0.03, 0.03, 0.05, 0.1],
        0.75: [0.03, 0.03, 0.13, 0.51],
        1.0: [0.05, 0.13, 0.25, 0.64]
      },
      Yes: {
        0.5: [0.1, 0.1, 0.2, 0.41],
        0.75: [0.1, 0.1, 0.51, 2.03],
        1.0: [0.2, 0.51, 1.02, 2.54]
      }
    },
    "Alloy 400": {
      No: {
        0.5: [0.03, 0.08, 0.76, 7.62],
        0.75: [0.05, 0.13, 2.03, 20.32],
        1.0: [0.48, 0.64, 3.81, 22.86]
      },
      Yes: {
        0.5: [0.1, 0.3, 3.05, 25.37],
        0.75: [0.25, 0.51, 8.13, 25.37],
        1.0: [1.02, 2.54, 15.24, 25.37]
      }
    }
  };

  function findClosest(value, array) {
    return array.reduce((a, b) => Math.abs(a - value) < Math.abs(b - value) ? a : b);
  }

  let rate = null;

  if (material === "Carbon Steel") {
    const pHval = findClosest(ph, Object.keys(csTable).map(Number));
    const values = csTable[pHval];
    rate = interpolate(temp, tempPoints, values);
  } else if (material === "300 Series SS") {
    const pHval = findClosest(ph, Object.keys(ssTable).map(Number));
    const values = ssTable[pHval];
    rate = interpolate(temp, tempPoints, values);
  } else if (alloyTable[material]) {
    const clVal = findClosest(cl, [0.5, 0.75, 1.0]);
    const values = alloyTable[material][clVal];
    rate = interpolate(temp, tempPoints, values);
  } else if (oxidantTable[material]) {
    const clVal = findClosest(cl, [0.5, 0.75, 1.0]);
    const values = oxidantTable[material][oxid][clVal];
    rate = interpolate(temp, tempPoints, values);
  }

  if (rate !== null) {
    corrosionResultFull.textContent = `✅ Estimated Corrosion Rate: ${rate.toFixed(2)} mm/year (${material} @ ${temp}°C)`;
    drawChart([rate.toFixed(2)], ["HCl Corrosion Rate"]);
  } else {
    corrosionResultFull.textContent = "❌ Corrosion rate not available for selected values.";
  }
}

    else if (currentDM === "H2SO4 Corrosion") {
  const material = document.getElementById("materialH2SO4").value;
  const temp = parseInt(document.getElementById("tempH2SO4").value);
  const conc = parseInt(document.getElementById("concH2SO4").value);
  const velocityRange = document.getElementById("velH2SO4").value;

  if (!material || isNaN(temp) || isNaN(conc) || !velocityRange) {
    corrosionResultFull.textContent = "❌ Please fill all H₂SO₄ corrosion fields.";
    return;
  }
const corrosionTable304SS = {
  30: {
    98: [0.13, 0.25, 0.38],
    92.5: [0.51, 1.02, 1.52],
    87: [1.02, 2.03, 3.05],
    82: [2.54, 5.08, 7.62],
    75: [12.7, 25.37, 25.37],
    65: [25.37, 25.37, 25.37],
    50: [25.37, 25.37, 25.37],
    30: [25.37, 25.37, 25.37],
    15: [10.16, 20.32, 25.37],
    8: [5.08, 10.16, 15.24],
    3.5: [1.27, 2.54, 3.81],
    2: [0.51, 1.02, 1.52]
  },
  40: {
    98: [0.51, 1.02, 1.52],
    92.5: [1.02, 2.03, 3.05],
    87: [2.03, 4.06, 6.1],
    82: [5.08, 7.62, 25.37],
    75: [25.37, 25.37, 2.51],
    65: [25.37, 25.37, 25.37],
    50: [25.37, 25.37, 25.37],
    30: [25.37, 25.37, 25.37],
    15: [25.37, 25.37, 25.37],
    8: [10.16, 15.24, 25.37],
    3.5: [2.54, 3.81, 5.33],
    2: [1.02, 1.52, 1.78]
  },
  60: {
    98: [5.08, 10.16, 15.24],
    92.5: [12.7, 25.37, 25.37],
    87: [25.37, 25.37, 25.37],
    82: [25.37, 25.37, 25.37],
    75: [25.37, 25.37, 25.37],
    65: [25.37, 25.37, 25.37],
    50: [25.37, 25.37, 25.37],
    30: [25.37, 25.37, 25.37],
    15: [25.37, 25.37, 25.37],
    8: [12.7, 25.37, 25.37],
    3.5: [3.56, 5.33, 6.6],
    2: [1.52, 2.03, 2.54]
  }
};
      
  if (material === "304 SS") {
    const table = corrosionTable304SS;
    const row = table[temp];
    if (row && row[conc]) {
      let velIndex = 0;
      if (velocityRange === "1–2.5") velIndex = 1;
      else if (velocityRange === "2.5–5") velIndex = 2;
      const rate = row[conc][velIndex];
      corrosionResultFull.textContent = `✅ Estimated Corrosion Rate: ${rate.toFixed(2)} mm/year (304 SS at ${temp}°C, ${conc}% H₂SO₄, ${velocityRange} m/s)`;
      // ✅ Draw Chart — show all 3 rates
      const rates = row[conc]; // All 3 velocities
      const labels = ["<1", "1–2.5", "2.5–5"];
      drawChart(rates, labels);
    } else {
      corrosionResultFull.textContent = "❌ No corrosion data for selected temp/concentration.";
    }
  } else {
    corrosionResultFull.textContent = "❌ Only 304 SS supported for now.";
  }
}
    
    else if (currentDM === "Alkaline Sour Water Corrosion") {
  const nh4hs = parseFloat(document.getElementById("nh4hs").value);
  const velocity = parseFloat(document.getElementById("velocity").value);
  const pressureKnown = document.getElementById("pressureKnown").value;
  const h2sPressureInput = document.getElementById("h2sPressure");

  if (isNaN(nh4hs) || isNaN(velocity)) {
    corrosionResultFull.textContent = "❌ Please fill NH₄HS and Velocity correctly.";
    return;
  }

  const aswcTable = {
    2: [0.08, 0.10, 0.13, 0.20, 0.28],
    5: [0.15, 0.23, 0.30, 0.38, 0.46],
    10: [0.51, 0.69, 0.89, 1.09, 1.27],
    15: [1.14, 1.78, 2.54, 3.81, 5.08]
  };

  const velocities = [3.05, 4.57, 6.10, 7.62, 9.14];

  function getBaselineCR(nh4hs, velocity) {
    const nh4hsKey = Object.keys(aswcTable).find(key => Math.abs(nh4hs - parseFloat(key)) < 0.5);
    if (!nh4hsKey) return null;
    let index = velocities.findIndex(v => Math.abs(v - velocity) < 0.1);
    if (index === -1) return null;
    return aswcTable[nh4hsKey][index];
  }

  function calculateAdjustedCR(baselineCR, h2sPressure) {
    const diff = h2sPressure - 3.51;
    if (h2sPressure < 3.51) {
      return Math.max(((baselineCR / 1.76) * diff) + baselineCR, 0);
    } else {
      return Math.max(((baselineCR / 2.81) * diff) + baselineCR, 0);
    }
  }

  const baseCR = getBaselineCR(nh4hs, velocity);
  if (baseCR === null) {
    corrosionResultFull.textContent = "❌ Invalid NH₄HS or Velocity input.";
    return;
  }

  if (pressureKnown === "Yes") {
    const h2sPressure = parseFloat(h2sPressureInput?.value);
    if (isNaN(h2sPressure)) {
      corrosionResultFull.textContent = "❌ Please enter valid H₂S pressure.";
      return;
    }

    const adjustedCR = calculateAdjustedCR(baseCR, h2sPressure);
    corrosionResultFull.textContent = `✅ Estimated Corrosion Rate: ${adjustedCR.toFixed(3)} mm/year (NH₄HS ${nh4hs} wt%, Velocity ${velocity} m/s, H₂S ${h2sPressure} kg/cm²)`;
    const rates = [baseCR.toFixed(3), adjustedCR.toFixed(3)];
const labels = ["Baseline", "Adjusted (H₂S)"];
drawChart(rates, labels);

  } else {
    corrosionResultFull.textContent = `✅ Baseline Corrosion Rate: ${baseCR.toFixed(3)} mm/year (NH₄HS ${nh4hs} wt%, Velocity ${velocity} m/s, No H₂S adjustment)`;
    const rates = [baseCR.toFixed(3)];
const labels = ["Baseline"];
drawChart(rates, labels);

  }
} else {
      corrosionResultFull.textContent = "❌ Please select a valid damage mechanism.";
    }
  } catch (error) {
    corrosionResultFull.textContent = "⚠️ Error: " + error.message;
  }
});

// ✅ CO₂ helper functions (place at the end of your JS file)

function showDewPointStep(container) {
  container.innerHTML = `
    <div class="section">
      <label>Total Pressure (bar): <input type="number" id="totalPressure" /></label>
      <button onclick="calculateDewPointCO2()">Calculate Dew Point (Eq 2.B.25)</button>
      <div id="dewPointResultCO2"></div>
      <div id="tempCheckCO2"></div>
    </div>
  `;
}

function calculateDewPointCO2() {
  const P = parseFloat(document.getElementById("totalPressure")?.value);
  if (isNaN(P)) {
    alert("Please enter a valid total pressure.");
    return;
  }
  const dew = 114.27 - 12.5 * Math.log10(P);
  document.getElementById("dewPointResultCO2").innerHTML = `<p>Dew Point Temp = <b>${dew.toFixed(2)} °C</b></p>`;

  document.getElementById("tempCheckCO2").innerHTML = `
    <label>Current Temperature (°C): <input type="number" id="tempCO2" /></label>
    <button onclick="checkTempAgainstDew(${dew.toFixed(4)})">Proceed</button>
    <div id="corrosionRateCO2"></div>
  `;
}

function checkTempAgainstDew(dew) {
  const temp = parseFloat(document.getElementById("tempCO2")?.value);
  const container = document.getElementById("corrosionRateCO2");
  container.innerHTML = "";
  if (isNaN(temp)) {
    alert("Please enter current temperature.");
    return;
  }

  if (temp > dew) {
    container.innerHTML = `<p>⚠️ No CO₂ corrosion — Temp (${temp}°C) > Dew Point (${dew.toFixed(2)}°C).</p>`;
    return;
  }

  container.innerHTML = `
    <label>Temperature (°C): <input type="number" id="tempCO2" /></label>
    <label>pH: <input type="number" step="0.1" id="phCO2" /></label>
    <label>CO₂ Partial Pressure (bar): <input type="number" step="0.01" id="pco2CO2" /></label>
    <label>Shear Stress (Pa): <input type="number" id="shearCO2" /></label>
    <button onclick="calculateBaseCO2Rate(${dew.toFixed(4)})">Calculate Base Corrosion Rate (Eq 2.B.26)</button>
    <div id="baseCO2Result"></div>
  `;
}

// ✅ Function must be outside
function calculateBaseCO2Rate(dew) {
  const temp = parseFloat(document.getElementById("tempCO2")?.value);
  const ph = parseFloat(document.getElementById("phCO2")?.value);
  const pco2 = parseFloat(document.getElementById("pco2CO2")?.value);
  const shear = parseFloat(document.getElementById("shearCO2")?.value);

  const container = document.getElementById("baseCO2Result");

  if ([temp, ph, pco2, shear].some(v => isNaN(v))) {
    container.innerHTML = "❌ Please fill all required fields.";
    return;
  }

  const f_TpH = Math.pow((0.6 + (temp - 20) * 0.01 - (ph - 5) * 0.05), 0.52);
  const exponent = 0.146 + 0.0324 * (shear / 19);
  const f_CO2 = Math.pow(pco2, exponent);
  const baseRate = f_TpH * f_CO2;

  container.innerHTML = `
    <p>Base Corrosion Rate = <b>${baseRate.toFixed(3)} mm/year</b></p>
    <label>Is there glycol or inhibitor?
      <select id="hasGlycolOrInhibitor">
        <option value="">-- Select --</option>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>
    </label>
    <div id="adjustmentCO2Area"></div>
  `;

  document.getElementById("hasGlycolOrInhibitor").addEventListener("change", (e) => {
    const value = e.target.value;
    const adjustDiv = document.getElementById("adjustmentCO2Area");
    adjustDiv.innerHTML = "";

    if (value === "No") {
      adjustDiv.innerHTML = `<p>✅ Final Corrosion Rate = <b>${baseRate.toFixed(3)} mm/year</b> (No mitigation applied)</p>`;
    } else if (value === "Yes") {
      adjustDiv.innerHTML = `
        <label>% Glycol: <input type="number" id="glycolCO2" value="0" /></label>
        <label>Inhibitor Factor (0–1): <input type="number" step="0.01" id="inhibitorCO2" value="1" /></label>
        <button onclick="calculateFinalCO2RateFromMitigation(${baseRate.toFixed(5)}, ${dew.toFixed(5)})">Calculate Final Corrosion Rate</button>
        <div id="corrosionResultFull"></div>
      `;
    }
  });
}

function calculateFinalCO2RateFromMitigation(baseRate, dew) {
  const glycol = parseFloat(document.getElementById("glycolCO2")?.value);
  const inhibitor = parseFloat(document.getElementById("inhibitorCO2")?.value);
  const corrosionResult = document.getElementById("corrosionResultFull");

  if ([glycol, inhibitor].some(v => isNaN(v))) {
    corrosionResult.innerHTML = "❌ Fill all mitigation values.";
    return;
  }

  const F_glycol = Math.pow(10, 1.6 * (Math.log10(100 - Math.max(glycol, 0.01)) - 2));
  const finalRate = baseRate * Math.min(F_glycol, inhibitor);

  corrosionResult.innerHTML = `
    <p>Dew Point Temp = <b>${dew.toFixed(2)} °C</b></p>
    <p>Base Corrosion Rate = <b>${baseRate.toFixed(3)} mm/year</b></p>
    <p>Final Adjusted Rate (Eq 2.B.23) = <b>${finalRate.toFixed(3)} mm/year</b></p>
  `;

   // ✅ Draw Chart
  const labels = ["Base Rate", "Final (After Mitigation)"];
  const rates = [baseRate.toFixed(3), finalRate.toFixed(3)];
  drawChart(rates, labels);
}
      

// ✅ Acid Sour Water Corrosion Table (API Table 2.B.10.2M)
const corrosionTableASW = {
  38: { "4.75": 0.03, "5.25": 0.02, "5.75": 0.01, "6.25": 0.01, "6.75": 0.01 },
  52: { "4.75": 0.08, "5.25": 0.05, "5.75": 0.04, "6.25": 0.03, "6.75": 0.01 },
  79: { "4.75": 0.13, "5.25": 0.08, "5.75": 0.05, "6.25": 0.04, "6.75": 0.02 },
  93: { "4.75": 0.18, "5.25": 0.10, "5.75": 0.08, "6.25": 0.05, "6.75": 0.03 }
};














































