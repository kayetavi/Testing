function updateASMEForm() {
  const type = document.querySelector("#typeSelector").value;
  const tab = document.getElementById("ASMESECTIONVIIIDIV1Tab");

  // hide all forms
  ["shellForm", "dishedEndForm", "torisphericalForm", "hemiForm"].forEach(f => {
    const formEl = tab.querySelector("#" + f);
    if (formEl) formEl.style.display = "none";
  });

  // show selected
  if (type === "shell") tab.querySelector("#shellForm").style.display = "block";
  else if (type === "ellipsoidal") tab.querySelector("#dishedEndForm").style.display = "block";
  else if (type === "torispherical") tab.querySelector("#torisphericalForm").style.display = "block";
  else if (type === "hemispherical") tab.querySelector("#hemiForm").style.display = "block";

  // clear results
  tab.querySelector("#results").innerHTML = "";
}

function calculateASMEThickness() {
  const tab = document.getElementById("ASMESECTIONVIIIDIV1Tab");
  const type = tab.querySelector("#typeSelector").value;
  if (!type) return alert("⚠️ Select a component type first!");

  let values = {};

  // ✅ helper to safely parse number
  const getNumber = (selector) => {
    const el = tab.querySelector(selector);
    if (!el) return null;
    const raw = el.value.trim();
    if (raw === "") return null;
    const val = parseFloat(raw);
    return isNaN(val) ? null : val;
  };

  // ✅ fill values according to type
  if (type === "shell") {
    values = {
      P: getNumber("#pressure"),
      Punit: tab.querySelector("#pressureUnit").value,
      R: getNumber("#radius"),
      Runit: tab.querySelector("#radiusUnit").value,
      S: getNumber("#stress"),
      Sunit: tab.querySelector("#stressUnit").value,
      E: getNumber("#efficiency")
    };
  }
  else if (type === "ellipsoidal") {
    values = {
      P: getNumber("#pressureDished"),
      Punit: tab.querySelector("#pressureDishedUnit").value,
      D: getNumber("#diameterDished"),
      Dunit: tab.querySelector("#diameterDishedUnit").value,
      S: getNumber("#stressDished"),
      Sunit: tab.querySelector("#stressDishedUnit").value,
      E: getNumber("#efficiencyDished")
    };
  }
  else if (type === "torispherical") {
    values = {
      P: getNumber("#pressureTori"),
      Punit: tab.querySelector("#pressureToriUnit").value,
      D: getNumber("#diameterTori"),
      Dunit: tab.querySelector("#diameterToriUnit").value,
      S: getNumber("#stressTori"),
      Sunit: tab.querySelector("#stressToriUnit").value,
      E: getNumber("#efficiencyTori")
    };
  }
  else if (type === "hemispherical") {
    values = {
      P: getNumber("#pressureHemi"),
      Punit: tab.querySelector("#pressureHemiUnit").value,
      D: getNumber("#diameterHemi"),
      Dunit: tab.querySelector("#diameterHemiUnit").value,
      S: getNumber("#stressHemi"),
      Sunit: tab.querySelector("#stressHemiUnit").value,
      E: getNumber("#efficiencyHemi")
    };
  }

  // ✅ validation
  if (Object.values(values).some(v => v === null || v === "")) {
    alert("⚠️ Invalid or missing input values");
    return;
  }

  // ✅ show spinner
  tab.querySelector("#results").innerHTML = `
    <div style="text-align:center; margin-top:10px;">
      <div class="loader"></div>
      <p>Calculating...</p>
    </div>
  `;

  // ✅ send to backend
  fetch("/api/viiidiv", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, values })
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        tab.querySelector("#results").innerHTML = `
          <p style="color:red;">⚠️ ${data.error}</p>
        `;
      } else {
        tab.querySelector("#results").innerHTML = `
          <h3>🧮 Calculated Thickness:</h3>
          <p><strong>${data.thickness} ${data.unit || "mm"}</strong></p>
        `;
      }
    })
    .catch(err => {
      console.error(err);
      tab.querySelector("#results").innerHTML = `
        <p style="color:red;">⚠️ Error connecting to server</p>
      `;
    });
}
