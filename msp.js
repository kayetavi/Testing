let selectedMSPDMCode = null;
let mspBlinkIntervals = []; // ✅ Isolated Blink Interval (unique for MSP)

function initMSP() {
  const modal = document.getElementById("mspModal");
  if (!modal) return; // ✅ Agar modal hi nahi hai to exit
 
  fetch("MSP-Model.svg") // ✅ MSP SVG ka path
    .then(res => res.text())
    .then(data => {
      const svgContainer = document.getElementById("msp-svgContainer");
      svgContainer.innerHTML = data;

      const svgRoot = svgContainer.querySelector("svg");
      const dmListItems = modal.querySelectorAll("#msp-dm-list li");
      const viewBox = svgRoot.viewBox.baseVal;

      // ✅ Set viewBox agar missing hai
      if (!svgRoot.getAttribute("viewBox")) {
        const vb = svgRoot.getBBox();
        svgRoot.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.width} ${vb.height}`);
      }

      // ✅ DM item click logic
      dmListItems.forEach(item => {
        item.addEventListener("click", () => {
          const dmCode = item.getAttribute("data-dm").trim();
          selectedMSPDMCode = dmCode;

          const showDetailsEl = modal.querySelector("#msp-showDetailsMsg");
          showDetailsEl.style.display = "inline-block";
          showDetailsEl.classList.add("blink");
          setTimeout(() => showDetailsEl.classList.remove("blink"), 3000);

          // Reset previous blinking
          mspBlinkIntervals.forEach(interval => clearInterval(interval));
          mspBlinkIntervals = [];

          dmListItems.forEach(li => li.style.fontWeight = "normal");
          item.style.fontWeight = "bold";

          svgRoot.querySelectorAll("text, tspan").forEach(txt => {
            txt.style.fill = "";
            txt.style.stroke = "";
            txt.style.strokeWidth = "";
            txt.style.filter = "";
          });

          svgRoot.querySelectorAll("text, tspan").forEach(txt => {
            const cleanText = txt.textContent.replace(/\s+/g, '').trim();
            if (cleanText === dmCode) {
              let visible = true;
              const interval = setInterval(() => {
                txt.style.fill = visible ? "teal" : "#00cccc";
                txt.style.stroke = visible ? "#00cccc" : "teal";
                txt.style.strokeWidth = "3px";
                txt.style.filter = `drop-shadow(0 0 6px ${visible ? "#00cccc" : "teal"}) drop-shadow(0 0 12px ${visible ? "teal" : "#00cccc"})`;
                visible = !visible;
              }, 500);
              mspBlinkIntervals.push(interval);
            }
          });
        });
      });

      // ✅ Pan & Zoom (Only MSP SVG)
      let isPanning = false, startX, startY;

      svgRoot.addEventListener("mousedown", (e) => {
        isPanning = true;
        startX = e.clientX;
        startY = e.clientY;
        svgRoot.style.cursor = "grabbing";
      });

      svgRoot.addEventListener("mouseup", () => {
        isPanning = false;
        svgRoot.style.cursor = "grab";
      });

      svgRoot.addEventListener("mouseleave", () => {
        isPanning = false;
        svgRoot.style.cursor = "grab";
      });

      svgRoot.addEventListener("mousemove", (e) => {
        if (!isPanning) return;
        const dx = (e.clientX - startX) * (viewBox.width / svgRoot.clientWidth);
        const dy = (e.clientY - startY) * (viewBox.height / svgRoot.clientHeight);
        viewBox.x -= dx;
        viewBox.y -= dy;
        startX = e.clientX;
        startY = e.clientY;
      });

      svgRoot.addEventListener("wheel", (e) => {
        e.preventDefault();
        const zoomFactor = 1.1;
        const scale = e.deltaY < 0 ? 1 / zoomFactor : zoomFactor;

        const newWidth = viewBox.width * scale;
        if (newWidth > 10000 || newWidth < 10) return;

        viewBox.width *= scale;
        viewBox.height *= scale;
      });
    });
}

// ✅ Open Modal
function showMSPTab() {
  document.querySelectorAll(".tab-content").forEach(t => t.style.display = "none");
  document.getElementById("selectedMechanismTitle").style.display = "none";
  hideWelcomePanel();
  hideAllMainPanels();

  const modal = document.getElementById("mspModal");
  modal.style.display = "block";
  initMSP();
}

// ✅ Close Modal
function closeMSPModal() {
  const modal = document.getElementById("mspModal");
  modal.style.display = "none";
  mspBlinkIntervals.forEach(interval => clearInterval(interval));
  mspBlinkIntervals = [];
  hideAllMainPanels();
}

// ✅ Show Details Modal
function openMSPDetailsModal() {
  if (!selectedMSPDMCode || !mspDamageMechanisms[selectedMSPDMCode]) {
    alert("Please select a damage mechanism first.");
    return;
  }

  const dmData = mspDamageMechanisms[selectedMSPDMCode];
  const detailsContent = document.getElementById("msp-detailsContent");
  detailsContent.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = dmData.name;

  const tabs = createMSPTabs(dmData);
  detailsContent.appendChild(title);
  detailsContent.appendChild(tabs);

  document.getElementById("msp-detailsModal").style.display = "block";
}

// ✅ Close Details Modal
function closeMSPDetailsModal() {
  document.getElementById("msp-detailsModal").style.display = "none";
}

// ✅ Close on ESC (Only if modal open)
window.addEventListener("keydown", (e) => {
  const modal = document.getElementById("mspModal");
  if (e.key === "Escape" && modal.style.display === "block") {
    closeMSPDetailsModal();
    closeMSPModal();
  }
});

// ✅ Tab builder
function createMSPTabs(dmData) {
  const keys = [
    "description", "affectedUnits", "mitigation",
    "inspection", "appearance", "criticalFactors", "temperatureComparison"
  ];

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.height = "calc(100vh - 150px)";

  const tabHeader = document.createElement("ul");
  Object.assign(tabHeader.style, {
    display: "flex",
    listStyle: "none",
    margin: "0",
    padding: "0",
    borderBottom: "1px solid #ccc"
  });

  const tabContent = document.createElement("div");
  Object.assign(tabContent.style, {
    padding: "15px",
    flex: "1",
    overflowY: "auto",
    background: "#f9fefe",
    border: "1px solid #ccc",
    borderTop: "none"
  });

  let firstLoaded = false;

  keys.forEach(key => {
    if (!dmData[key]) return;

    const tab = document.createElement("li");
    tab.textContent = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    Object.assign(tab.style, {
      padding: "10px 15px",
      border: "1px solid #ccc",
      borderBottom: "none",
      cursor: "pointer",
      background: firstLoaded ? "#eee" : "#fff"
    });

    tab.onclick = () => {
      [...tabHeader.children].forEach(t => t.style.background = "#eee");
      tab.style.background = "#fff";
      tabContent.innerHTML = `<div>${dmData[key]}</div>`;
    };

    tabHeader.appendChild(tab);

    if (!firstLoaded) {
      tabContent.innerHTML = `<div>${dmData[key]}</div>`;
      firstLoaded = true;
    }
  });

  container.appendChild(tabHeader);
  container.appendChild(tabContent);
  return container;
}
