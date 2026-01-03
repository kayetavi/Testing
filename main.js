let selectedDMCode = null;

// Load the SVG and bind logic
fetch("HCU-Model-Final.svg")
  .then(res => res.text())
  .then(data => {
    document.getElementById("svgContainer").innerHTML = data;

    const svgRoot = document.querySelector("#svgContainer svg");
    const dmListItems = document.querySelectorAll("#dm-list li");
    const viewBox = svgRoot.viewBox.baseVal;
    let blinkIntervals = [];

    // Set viewBox if not defined
    if (!svgRoot.getAttribute("viewBox")) {
      const vb = svgRoot.getBBox();
      svgRoot.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.width} ${vb.height}`);
    }

    // ✅ DM item click logic
    dmListItems.forEach(item => {
      item.addEventListener("click", () => {
        const dmCode = item.getAttribute("data-dm").trim();
        selectedDMCode = dmCode;

        const showDetailsEl = document.getElementById("showDetailsMsg");
        showDetailsEl.style.display = "inline-block";

        // 👉 Blink animation
        showDetailsEl.classList.add("blink");
        setTimeout(() => {
          showDetailsEl.classList.remove("blink");
        }, 3000);

        // Reset blink
        blinkIntervals.forEach(interval => clearInterval(interval));
        blinkIntervals = [];

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
              txt.style.fill = visible ? "red" : "#00ffff";
              txt.style.stroke = visible ? "#00ffff" : "red";
              txt.style.strokeWidth = "3px";
              txt.style.filter = `drop-shadow(0 0 6px ${visible ? "#00ffff" : "red"}) drop-shadow(0 0 12px ${visible ? "red" : "#00ffff"})`;
              visible = !visible;
            }, 500);
            blinkIntervals.push(interval);
          }
        });
      });
    });

    // ✅ Pan & Zoom
    let isPanning = false, startX, startY;

    svgRoot.addEventListener("mousedown", (e) => {
      isPanning = true;
      startX = e.clientX;
      startY = e.clientY;
      svgRoot.style.cursor = "grabbing";
    });

    window.addEventListener("mouseup", () => {
      isPanning = false;
      svgRoot.style.cursor = "grab";
    });

    window.addEventListener("mousemove", (e) => {
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

// ✅ Open Process Flow modal
function openProcessFlowModal() {
  document.getElementById("processFlowModal").style.display = "block";
}

// ✅ Close Process Flow modal
function closeProcessFlowModal() {
  document.getElementById("processFlowModal").style.display = "none";
}

// ✅ Show Details modal
function openDetailsModal() {
  if (!selectedDMCode || !damageMechanisms[selectedDMCode]) {
    alert("Please select a damage mechanism first.");
    return;
  }

  const dmData = damageMechanisms[selectedDMCode];
  if (!dmData) {
    alert("No data found.");
    return;
  }

  const detailsContent = document.getElementById("detailsContent");
  detailsContent.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = dmData.name;

  const tabs = createTabs(dmData);

  detailsContent.appendChild(title);
  detailsContent.appendChild(tabs);

  document.getElementById("detailsModal").style.display = "block";
}

// ✅ Close Show Details modal
function closeDetailsModal() {
  document.getElementById("detailsModal").style.display = "none";
}

// ✅ ESC closes any modal
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDetailsModal();
    closeProcessFlowModal();
  }
});

// ✅ Tab builder
function createTabs(dmData) {
  const keys = [
    "description",
    "affectedUnits",
    "mitigation",
    "inspection",
    "appearance",
    "criticalFactors",
    "temperatureComparison"
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
    background: "#f9f9f9",
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
