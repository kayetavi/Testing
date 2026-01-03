// ✅ Format date as dd-mm-yyyy
function formatDate(date) {
  if (!(date instanceof Date) || isNaN(date)) return "";
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

// ✅ Parse dd-mm-yyyy, dd/mm/yyyy, or Excel serial number correctly
function parseDDMMYYYY(value) {
  if (!value) return null;

  // Case 1: Already a valid Date object
  if (value instanceof Date && !isNaN(value)) return value;

  // Case 2: Excel serial number (numeric)
  if (!isNaN(value) && value !== "") {
    return new Date((Number(value) - 25569) * 86400 * 1000 + (new Date().getTimezoneOffset() * 60000));
  }

  // Case 3: String inputs like "25-10-2025" or "25/10/2025"
  if (typeof value === "string") {
    value = value.trim().replace(/\./g, "-").replace(/\//g, "-");
    const match = value.match(/^(\d{1,2})-(\d{1,2})-(\d{2,4})$/);
    if (match) {
      const dd = parseInt(match[1]);
      const mm = parseInt(match[2]) - 1; // Month index starts at 0
      const yyyy = match[3].length === 2 ? 2000 + parseInt(match[3]) : parseInt(match[3]);
      const parsed = new Date(yyyy, mm, dd);
      return isNaN(parsed) ? null : parsed;
    }

    // Case 4: Try fallback ISO or text-like (2025-10-25)
    const parsed = new Date(value);
    return isNaN(parsed) ? null : parsed;
  }

  return null;
}



// ✅ Get precise difference in years, months, days
// ✅ Get precise difference in years, months, days (safe version)
function dateDiff(startDate, endDate) {
  const start = parseDDMMYYYY(startDate);
  const end = parseDDMMYYYY(endDate);

  // Prevent invalid date errors
  if (!start || !end || isNaN(start) || isNaN(end)) {
    return { years: 0, months: 0, days: 0 };
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

// ✅ Main corrosion calculation
function calculateRow(row) {
  // Accept different possible key formats but priority to normalized header
  const tagNumber = row.tagnumber || row['tag number'] || row.tag || row.tagNumber || "-";

 const baseDate = parseDDMMYYYY(row.basedate);
const midDate = row.middate ? parseDDMMYYYY(row.middate) : null;
const lastDate = parseDDMMYYYY(row.lastdate);


  const baseThk = parseFloat(row.basethk);
  const midThk = parseFloat(row.midthk);
  const lastThk = parseFloat(row.lastthk);
  const tmin = parseFloat(row.tmin);
  const freq = parseInt(row.freq) || 60;

  if (
    isNaN(baseThk) || isNaN(lastThk) || isNaN(tmin) ||
    !baseDate || isNaN(baseDate.getTime()) ||
    !lastDate || isNaN(lastDate.getTime()) ||
    baseDate >= lastDate
  ) {
    // return error but include tagNumber so we can show it in bulk table
    return { error: "Invalid or missing base/last dates or thicknesses", tagNumber };
  }

  // Corrosion Rate Calculations (same logic as before)
  let ltcr = (baseThk - lastThk) / ((lastDate - baseDate) / (1000 * 60 * 60 * 24 * 365.25));
  ltcr = ltcr < 0 ? 0 : ltcr;

  let stcr = ltcr;
  if (midDate && !isNaN(midThk) && baseDate < midDate && midDate < lastDate) {
    stcr = (midThk - lastThk) / ((lastDate - midDate) / (1000 * 60 * 60 * 24 * 365.25));
    stcr = stcr < 0 ? 0 : stcr;
  }

  const ccr = Math.max(ltcr, stcr);
  let remLifeYears = (lastThk - tmin) / ccr;
  if (remLifeYears < 0 || !isFinite(remLifeYears)) remLifeYears = 0;

  const projDate = new Date(lastDate);
  const projDaysToAdd = Math.round(remLifeYears * 365.25);
  projDate.setDate(projDate.getDate() + projDaysToAdd);

  const factorDate = new Date(lastDate);
  const factorDaysToAdd = Math.round(remLifeYears * 0.5 * 365.25);
  factorDate.setDate(factorDate.getDate() + factorDaysToAdd);

  const intervalDate = new Date(lastDate);
  intervalDate.setMonth(intervalDate.getMonth() + freq);

  let schedDate = intervalDate;
  if (projDate < schedDate) schedDate = projDate;
  if (factorDate < schedDate) schedDate = factorDate;

  const today = new Date();
  const estDiff = dateDiff(today, projDate);
  const factorDiff = dateDiff(today, factorDate);

  return {
    tagNumber: tagNumber,
    baseDate: formatDate(baseDate),
    midDate: midDate ? formatDate(midDate) : "-",
    lastDate: formatDate(lastDate),
    baseThk: baseThk.toFixed(2),
    midThk: !isNaN(midThk) ? midThk.toFixed(2) : "-",
    lastThk: lastThk.toFixed(2),
    tmin: tmin.toFixed(2),
    freq,
    controllingCorrosionRate: ccr.toFixed(4) + " mm/year",
    longTermCorrosionRate: ltcr.toFixed(4) + " mm/year",
    shortTermCorrosionRate: stcr.toFixed(4) + " mm/year",
    scheduledNextInspection: formatDate(schedDate),
    intervalNextInspection: formatDate(intervalDate),
    factorLifeDate: formatDate(factorDate),
    projectedTminDate: formatDate(projDate),
    estimatedLife: `${estDiff.years} Years, ${estDiff.months} Months, ${estDiff.days} Days`,
    factorLifeDuration: `${factorDiff.years} Years, ${factorDiff.months} Months, ${factorDiff.days} Days`,
    trendData: [
      { date: baseDate, thk: baseThk },
      ...(midDate ? [{ date: midDate, thk: midThk }] : []),
      { date: lastDate, thk: lastThk }
    ]
  };
}



// ✅ Excel download template (with Picklist section in 2 sheets)
function downloadTemplate() {
  // ---- Sheet 1: Input Template ----
  const headers = ["Tag Number", "BaseDate", "BaseThk", "MidDate", "MidThk", "LastDate", "LastThk", "Tmin", "Freq"];
  
  // Blank row for user input
  const blankRow = ["", "", "", "", "", "", "", "", ""];
  const mainSheet = [headers, blankRow];

  // ---- Sheet 2: Picklist / Data Guide (Horizontal Format) ----
  const picklistData = [
    ["Column Name", "Tag Number", "BaseDate", "BaseThk", "MidDate", "MidThk", "LastDate", "LastThk", "Tmin", "Freq"],
    ["Description / Format / Example",
      "Unique equipment tag (e.g., E-101, P-201A)",
      "Inspection date (format: dd-mm-yyyy)",
      "Base measured thickness (mm) e.g., 6.5",
      "Mid inspection date (optional, dd-mm-yyyy)",
      "Mid thickness (optional, mm)",
      "Last inspection date (format: dd-mm-yyyy)",
      "Last measured thickness (mm) e.g., 6.0",
      "Minimum allowable thickness (mm) e.g., 3.8",
      "Inspection frequency in months (e.g., 24)"
    ]
  ];

  // ---- Create Excel workbook ----
  const wb = XLSX.utils.book_new();

  // ---- Convert arrays to sheets ----
  const wsMain = XLSX.utils.aoa_to_sheet(mainSheet);
  const wsPicklist = XLSX.utils.aoa_to_sheet(picklistData);

  // ---- Append both sheets ----
  XLSX.utils.book_append_sheet(wb, wsMain, "Corrosion_Analysis_Details");
  XLSX.utils.book_append_sheet(wb, wsPicklist, "Picklist");

  // ---- Download Excel file ----
  XLSX.writeFile(wb, "corrosion_analysis_template.xlsx");
}

// ✅ SINGLE FORM CALCULATE HANDLER
function calculate() {
  const row = {
    basedate: document.getElementById("baseDate").value,
    basethk: document.getElementById("baseThk").value,
    middate: document.getElementById("midDate").value,
    midthk: document.getElementById("midThk").value,
    lastdate: document.getElementById("lastDate").value,
    lastthk: document.getElementById("lastThk").value,
    tmin: document.getElementById("tmin").value,
    freq: document.getElementById("freq").value
  };

  const result = calculateRow(row);
  if (result.error) {
    alert(result.error);
    return;
  }

  // ✅ Output updates
  document.getElementById("ccr").innerText = result.controllingCorrosionRate;
  document.getElementById("ltcr").innerText = result.longTermCorrosionRate;
  document.getElementById("stcr").innerText = result.shortTermCorrosionRate;
  document.getElementById("schedDate").innerText = result.scheduledNextInspection;
  document.getElementById("intDate").innerText = result.intervalNextInspection;
  document.getElementById("factorDate").innerText = `${result.factorLifeDuration} (${result.factorLifeDate})`;
  document.getElementById("projDate").innerText = `${result.estimatedLife} (${result.projectedTminDate})`;
  document.getElementById("tminVal").innerText = result.tmin;
  document.getElementById("remLife").innerText = `${result.estimatedLife} (${result.projectedTminDate})`;

  drawTrendChart(result.trendData);
}

// ✅ TREND CHART
let trendChart;
function drawTrendChart(dataPoints) {
  const ctx = document.getElementById("thicknessTrendChart").getContext("2d");
  if (trendChart) trendChart.destroy();

  trendChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dataPoints.map(p => formatDate(new Date(p.date))),
      datasets: [{
        label: "Thickness (mm)",
        data: dataPoints.map(p => p.thk),
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.1)",
        tension: 0.3,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          title: { display: true, text: 'Thickness (mm)' }
        },
        x: {
          title: { display: true, text: 'Date' }
        }
      }
    }
  });
}


// ✅ Excel (.xlsx or .xls) and CSV upload supported
function parseCSV() {
  const fileInput = document.getElementById("bulkUpload");
  const file = fileInput.files[0];
  if (!file) {
    alert("Please upload an Excel (.xlsx) or CSV file.");
    return;
  }

  const reader = new FileReader();

  // ---- CASE 1: Excel file (.xlsx or .xls)
  if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
    reader.onload = function (e) {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        // ✅ Take first sheet
        const firstSheet = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheet];

        // ✅ Convert to JSON (array of objects)
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

        if (jsonData.length === 0) {
          alert("Excel sheet is empty!");
          return;
        }

        // ✅ Normalize keys
        const results = [];
        jsonData.forEach(rowObj => {
  const normalized = {};
  Object.keys(rowObj).forEach(k => {
    const key = k.trim().toLowerCase().replace(/\s+/g, "");
    normalized[key] = rowObj[k];
  });

// ✅ Final working universal date normalization (handles Excel serials + text dd-mm-yyyy correctly)
["basedate", "middate", "lastdate"].forEach(field => {
  if (normalized[field] != null && normalized[field] !== "") {
    let val = normalized[field];

    // 🧮 Case 1: Excel serial number (numeric)
    if (!isNaN(val) && val !== "") {
      const excelDate = new Date((Number(val) - 25569) * 86400 * 1000);
      normalized[field] = formatDate(excelDate);
      return;
    }

    // 📅 Case 2: Already a Date object
    if (val instanceof Date && !isNaN(val)) {
      normalized[field] = formatDate(val);
      return;
    }

    // 🧠 Case 3: String formats (dd-mm-yyyy, dd/mm/yyyy, etc.)
    if (typeof val === "string") {
      val = val.trim();
      val = val.replace(/\./g, "-");  // change 25.10.2022 → 25-10-2022
      val = val.replace(/\\/g, "/");  // change 25\10\2022 → 25/10/2022

      // ✅ Match dd-mm-yyyy or dd/mm/yyyy
      const m = val.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{2,4})$/);
      if (m) {
        let dd = parseInt(m[1]);
        let mm = parseInt(m[2]);
        let yyyy = m[3].length === 2 ? "20" + m[3] : m[3];

        // Always treat as dd-mm-yyyy (India format)
        const parsed = new Date(`${yyyy}-${String(mm).padStart(2,"0")}-${String(dd).padStart(2,"0")}`);
        normalized[field] = isNaN(parsed) ? "" : formatDate(parsed);
        return;
      }

      // ✅ Handle ISO or text-like "2025-10-13"
      const parsed = new Date(val);
      if (!isNaN(parsed)) {
        normalized[field] = formatDate(parsed);
        return;
      }
    }

    // 🚫 Fallback if invalid
    normalized[field] = "";
  }
});


// ✅ After normalizing, calculate and push results
const res = calculateRow(normalized);
results.push(res);
});

showBulkResults(results);

} catch (err) {
  alert("Error reading Excel file: " + err.message);
}
};

reader.readAsArrayBuffer(file);

  }

  // ---- CASE 2: CSV file
  else {
    reader.onload = function (e) {
      const csvText = e.target.result.trim();
      const lines = csvText.split("\n").filter(line => line.trim() !== "");
      if (lines.length < 2) {
        alert("CSV must have at least one data row.");
        return;
      }

      const delimiter = lines[0].includes(";") ? ";" : ",";
      const headers = lines[0].split(delimiter).map(h => h.trim().toLowerCase().replace(/\s+/g, ""));

      const requiredHeaders = [
        "tagnumber", "basedate", "basethk", "middate", "midthk",
        "lastdate", "lastthk", "tmin", "freq"
      ];

      const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));
      if (missingHeaders.length > 0) {
        alert("Missing CSV headers: " + missingHeaders.join(", "));
        return;
      }

      const results = [];
      for (let i = 1; i < lines.length; i++) {
        const rowCells = lines[i].split(delimiter).map(c => c.trim());
        const rowObj = {};
        headers.forEach((header, idx) => (rowObj[header] = rowCells[idx]));
        const res = calculateRow(rowObj);
        results.push(res);
      }

      showBulkResults(results);
    };

    reader.readAsText(file);
  }
}



// ✅ Close modal only when the close (×) button is clicked
window.closeBulkModal = function() {
  const modal = document.getElementById("bulkPreviewModal");
  if (modal) {
    modal.style.display = "none";
  }
};

// Reliable listener binding (works even if script loaded as module or bundler)
document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("bulkPreviewModal");
  const closeBtn = document.getElementById("closeBulkBtn");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  } else {
    // Helpful console message if element not found (remove later)
    console.warn("closeBulkBtn or bulkPreviewModal not found:", !!closeBtn, !!modal);
  }
});




function exportBulkTableToExcel() {
  const table = document.getElementById("bulkPreviewTable");
  const wb = XLSX.utils.table_to_book(table, { sheet: "Preview" });
  XLSX.writeFile(wb, "Bulk_Corrosion_Analysis.xlsx");
}

function exportBulkTableToPDF() {
  const { jsPDF } = window.jspdf; // Access jsPDF
  const doc = new jsPDF("l", "mm", "a4"); // Landscape orientation

  // Add logo (reduce size as per your requirement)
  const logo = 'image/pdflogo.png'; // Replace with your base64 image or URL
  doc.addImage(logo, 'PNG', 10, 10, 20, 20); // Logo at position x=10, y=10, width=20, height=20
  
  // Add Header Text
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Bulk Corrosion Analysis Report", 60, 15);  // Title at x=60, y=15

  // Add Underline below the title
  doc.setLineWidth(0.5); // Line width for the underline
  doc.line(60, 18, 160, 18); // Draw line below the title

  // Add Date Below Title
  doc.setFontSize(12);
  doc.text("Date: " + new Date().toLocaleDateString(), 60, 25); // Date text at x=60, y=25
  
  // Add Table below header (with borders and custom styles)
  const table = document.getElementById("bulkPreviewTable");

  doc.autoTable({
    html: "#bulkPreviewTable",
    startY: 30,  // Start drawing the table below the title and date
    styles: {
      fontSize: 8,  // Table font size
      cellPadding: 2, // Padding inside table cells
      halign: "center", // Center align text
      valign: "middle",  // Vertically align text in the middle
      overflow: "linebreak",  // Handle text overflow and wrap text inside cells
    },
    headStyles: {
      fillColor: [0, 102, 204], // Blue header
      textColor: 255 // White text color
    },
    bodyStyles: {
      lineWidth: 0.5,  // Border width for table cells
      lineColor: [200, 200, 200] // Lighter gray for cell borders
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240] // Alternate row color for better readability
    },
    tableLineColor: [200, 200, 200], // Lighter gray for table border
    tableLineWidth: 0.5, // Line thickness for table borders
    didDrawPage: function (data) {
      // Check for page breaks and move to the next page if the content overflows
      if (data.cursor.y > 270) {
        doc.addPage();
      }
    }
  });

  // Save the PDF
  doc.save("Bulk_Corrosion_Analysis_with_Header.pdf");
}


function toggleSettingsMenu(event) {
  event.stopPropagation();
  const menu = document.getElementById('settingsMenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', () => {
  const menu = document.getElementById('settingsMenu');
  if (menu) menu.style.display = 'none';
});

function closeSettingsMenu() {
  const menu = document.getElementById('settingsMenu');
  if (menu) menu.style.display = 'none';
}




// ✅ Save Analysis (Single Entry + Bulk Compatible)
// ✅ Enhanced Save with validation for missing required data
function saveAnalysisToServer(singleData = null) {
  try {
    let newEntries = [];

    // ✅ Case 1: Manual (Single Entry Save)
    if (!singleData) {
      const baseDate = document.getElementById("baseDate")?.value?.trim();
      const lastDate = document.getElementById("lastDate")?.value?.trim();
      const baseThk = document.getElementById("baseThk")?.value?.trim();
      const lastThk = document.getElementById("lastThk")?.value?.trim();
      const tmin = document.getElementById("tmin")?.value?.trim();
      const tagNumber = document.getElementById("tagNumber")?.value?.trim() || "-"; // ✅ Allow blank

      // 🟢 Validation (tagNumber is optional now)
      if (!baseDate || !lastDate || !baseThk || !lastThk || !tmin) {
        Swal.fire({
          icon: 'warning',
          title: '⚠️ Missing Required Fields',
          text: 'Missing required fields (Base Date, Last Date, Base/Last Thickness, Tmin). Save cancelled.',
          confirmButtonColor: '#d33'
        });
        return;
      }

      const analysisData = {
        tagNumber,
        ccr: document.getElementById("ccr")?.innerText || "-",
        ltcr: document.getElementById("ltcr")?.innerText || "-",
        stcr: document.getElementById("stcr")?.innerText || "-",
        tminVal: document.getElementById("tminVal")?.innerText || "-",
        remLife: document.getElementById("remLife")?.innerText || "-",
        schedDate: document.getElementById("schedDate")?.innerText || "-",
        projDate: document.getElementById("projDate")?.innerText || "-",
        savedAt: new Date().toLocaleString(),
      };

      const existing = JSON.parse(localStorage.getItem("analyses") || "[]");

      // ⚠️ Only check duplicates if tagNumber is provided
      if (tagNumber !== "-" && tagNumber.trim() !== "") {
        const existingIndex = existing.findIndex(
          (d) => d.tagNumber?.toUpperCase() === tagNumber.toUpperCase()
        );

        if (existingIndex !== -1) {
          Swal.fire({
            icon: "warning",
            title: "⚠️ Duplicate Tag Found",
            text: `Tag "${tagNumber}" already exists. Do you want to overwrite it?`,
            showCancelButton: true,
            confirmButtonText: "Overwrite",
            cancelButtonText: "Cancel",
            reverseButtons: true,
            customClass: {
              popup: "small-swal-popup"
            }
          }).then((result) => {
            if (result.isConfirmed) {
              existing[existingIndex] = analysisData;
              localStorage.setItem("analyses", JSON.stringify(existing));
              Swal.fire({
                icon: "success",
                title: "✅ Overwritten Successfully",
                text: `Tag "${tagNumber}" has been updated.`,
                timer: 2000,
                showConfirmButton: false
              });
            } else {
              Swal.fire({
                icon: "info",
                title: "❌ Save Cancelled",
                text: "Existing data kept unchanged.",
                timer: 1500,
                showConfirmButton: false
              });
            }
          });
          return; // stop execution until user chooses
        }
      }

      // ✅ Save new entry
      existing.push(analysisData);
      localStorage.setItem("analyses", JSON.stringify(existing));

      Swal.fire({
        icon: 'success',
        title: '✅ Save Successful',
        text: tagNumber === "-" ? "Manual analysis saved (no Tag Number)." : `Tag "${tagNumber}" saved successfully.`,
        timer: 2000,
        showConfirmButton: false,
        customClass: { popup: "small-swal-popup" }
      });

      return;
    }

    // ✅ Case 2: Bulk upload save (unchanged)
    else if (Array.isArray(singleData)) {
      newEntries = singleData
        .filter(r =>
          !r.error &&
          r.baseDate && r.lastDate && r.baseThk && r.lastThk && r.tmin &&
          r.tagNumber &&
          r.baseDate !== "-" && r.lastDate !== "-" &&
          !isNaN(parseFloat(r.baseThk)) &&
          !isNaN(parseFloat(r.lastThk)) &&
          !isNaN(parseFloat(r.tmin))
        )
        .map(r => ({
          tagNumber: r.tagNumber || "-",
          ccr: r.controllingCorrosionRate || "-",
          ltcr: r.longTermCorrosionRate || "-",
          stcr: r.shortTermCorrosionRate || "-",
          tminVal: r.tmin || "-",
          remLife: r.estimatedLife || "-",
          schedDate: r.scheduledNextInspection || "-",
          projDate: r.projectedTminDate || "-",
          savedAt: new Date().toLocaleString(),
        }));

      const skipped = singleData.length - newEntries.length;
      if (skipped > 0) {
        Swal.fire({
          icon: 'info',
          title: '⚠️ Records Skipped',
          text: `${skipped} record(s) skipped due to missing or invalid fields.`,
          confirmButtonColor: '#3085d6'
        });
      }

      if (newEntries.length === 0) {
        Swal.fire({
          icon: 'warning',
          title: '⚠️ Nothing Saved',
          text: 'All bulk records invalid or missing required fields. Nothing saved.',
          confirmButtonColor: '#d33'
        });
        return;
      }

      // ✅ Handle duplicates in bulk save (same as before)
      const existing = JSON.parse(localStorage.getItem("analyses") || "[]");
      const duplicates = [];
      const newOnes = [];

      newEntries.forEach(entry => {
        const idx = existing.findIndex(
          e => e.tagNumber?.toUpperCase() === entry.tagNumber?.toUpperCase()
        );
        if (idx !== -1) duplicates.push(entry);
        else newOnes.push(entry);
      });

      if (duplicates.length > 0) {
        Swal.fire({
          icon: "warning",
          title: "⚠️ Duplicate Tags Found",
          html: `
            The following tags already exist:<br>
            <b>${duplicates.map(d => d.tagNumber).join(", ")}</b><br><br>
            Do you want to overwrite them?`,
          showCancelButton: true,
          confirmButtonText: "Overwrite All",
          cancelButtonText: "Skip Duplicates",
          reverseButtons: true,
          customClass: { popup: "small-swal-popup" }
        }).then(result => {
          if (result.isConfirmed) {
            duplicates.forEach(d => {
              const idx = existing.findIndex(
                e => e.tagNumber?.toUpperCase() === d.tagNumber?.toUpperCase()
              );
              if (idx !== -1) existing[idx] = d;
            });
            newOnes.forEach(n => existing.push(n));
            localStorage.setItem("analyses", JSON.stringify(existing));

            Swal.fire({
              icon: "success",
              title: "✅ Bulk Save Complete",
              text: `🆕 Added: ${newOnes.length}, ♻️ Overwritten: ${duplicates.length}`,
              customClass: { popup: "small-swal-popup" }
            });
          } else {
            newOnes.forEach(n => existing.push(n));
            localStorage.setItem("analyses", JSON.stringify(existing));

            Swal.fire({
              icon: "info",
              title: "✅ Partial Save Complete",
              text: `🆕 Added: ${newOnes.length}, ⏭️ Skipped: ${duplicates.length}`,
              customClass: { popup: "small-swal-popup" }
            });
          }
        });
      } else {
        newOnes.forEach(n => existing.push(n));
        localStorage.setItem("analyses", JSON.stringify(existing));

        Swal.fire({
          icon: "success",
          title: "✅ Bulk Save Complete",
          text: `🆕 ${newOnes.length} new record(s) saved.`,
          customClass: { popup: "small-swal-popup" }
        });
      }
    }

  } catch (err) {
    console.error("❌ Error saving analysis:", err);
    Swal.fire({
      icon: 'error',
      title: '❌ Save Failed',
      text: `Failed to save data.\n\n${err.message}`,
      confirmButtonColor: '#d33'
    });
  }
}



// ✅ Show Saved Analyses Popup
function viewSavedAnalyses() {
  const modal = document.getElementById("savedDataModal");
  const container = document.getElementById("savedDataTable");
  const data = JSON.parse(localStorage.getItem("analyses") || "[]");

  if (!data || data.length === 0) {
    container.innerHTML = "<p style='text-align:center; color:#555;'>No saved data found.</p>";
  } else {
    let tableHTML = `
      <table class="saved-data-table">
        <thead>
          <tr>
            <th>Tag</th>
            <th>CCR</th>
            <th>LTCR</th>
            <th>STCR</th>
            <th>Tmin</th>
            <th>Remaining Life</th>
            <th>Schedule Date</th>
            <th>Projected Date</th>
            <th>Saved At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>`;

    data.forEach((row, index) => {
      tableHTML += `
        <tr>
          <td>${row.tagNumber}</td>
          <td>${row.ccr}</td>
          <td>${row.ltcr}</td>
          <td>${row.stcr}</td>
          <td>${row.tminVal}</td>
          <td>${row.remLife}</td>
          <td>${row.schedDate}</td>
          <td>${row.projDate}</td>
          <td>${row.savedAt}</td>
          <td>
            <button class="saved-data-delete-btn" onclick="deleteAnalysis(${index})">Delete</button>
          </td>
        </tr>`;
    });

    tableHTML += "</tbody></table>";
    container.innerHTML = tableHTML;
  }

  modal.style.display = "flex";
}


// ✅ Close Saved Data Popup
function closeSavedDataModal() {
  document.getElementById("savedDataModal").style.display = "none";
}


// ✅ Delete a specific record
function deleteAnalysis(index) {
  const data = JSON.parse(localStorage.getItem("analyses") || "[]");
  if (index >= 0 && index < data.length) {
    if (confirm("Are you sure you want to delete this record?")) {
      data.splice(index, 1);
      localStorage.setItem("analyses", JSON.stringify(data));
      viewSavedAnalyses(); // Refresh table
    }
  }
}


// ✅ Clear all analyses
function clearAllAnalyses() {
  if (confirm("⚠️ This will delete ALL saved analyses. Continue?")) {
    localStorage.removeItem("analyses");
    viewSavedAnalyses(); // Refresh
  }
}


// ✅ Close popup when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("savedDataModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


// ✅ Update your BULK RESULT HANDLER to save automatically
// ✅ Update your BULK RESULT HANDLER to save automatically
function showBulkResults(results) {
  // 🔍 STEP 1: Remove duplicates by tagNumber
  const uniqueMap = new Map();
  const duplicates = [];

  results.forEach(r => {
    const tag = (r.tagNumber || "").trim().toUpperCase();
    if (tag && uniqueMap.has(tag)) {
      duplicates.push(tag);
    } else if (tag) {
      uniqueMap.set(tag, r);
    }
  });

  // ✅ Only keep unique entries
  const uniqueResults = Array.from(uniqueMap.values());

  // ⚠️ Show alert if duplicates were found
  if (duplicates.length > 0) {
    Swal.fire({
      icon: "warning",
      title: "⚠️ Duplicate Tag Numbers Found",
      text: `The following Tag Numbers were duplicated and skipped:\n\n${[...new Set(duplicates)].join(", ")}`,
      confirmButtonColor: "#f39c12"
    });
  }

  const table = document.getElementById("bulkPreviewTable");
  table.innerHTML = "";

  // ✅ Use only unique valid results for display
  const resultsToShow = uniqueResults;

  const firstValid = resultsToShow.find(r => !r.error);
  if (!firstValid) {
    const headers = ["tagNumber", "error"];
    let headerRow = "<tr>";
    headers.forEach(h => {
      const displayHeader = h.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      headerRow += `<th>${displayHeader}</th>`;
    });
    headerRow += "</tr>";
    table.innerHTML += headerRow;

    resultsToShow.forEach((res) => {
      let rowHtml = "<tr>";
      rowHtml += `<td>${res.tagNumber || "-"}</td>`;
      rowHtml += `<td style="color:red;">${res.error}</td>`;
      rowHtml += "</tr>";
      table.innerHTML += rowHtml;
    });

    document.getElementById("bulkPreviewModal").style.display = "block";
    return;
  }

  // ✅ Build valid table
  let headers = ["tagNumber", ...Object.keys(firstValid).filter(h => h.toLowerCase() !== "trenddata" && h !== "tagNumber")];
  if (resultsToShow.some(r => r.error)) headers.push("error");

  let headerRow = "<tr>";
  headers.forEach(h => {
    const displayHeader = h.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    headerRow += `<th>${displayHeader}</th>`;
  });
  headerRow += "</tr>";
  table.innerHTML += headerRow;

  resultsToShow.forEach((res) => {
    let rowHtml = "<tr>";
    headers.forEach(h => {
      if (h === "error") {
        rowHtml += `<td style="color:${res.error ? "red" : "inherit"};">${res.error || "-"}</td>`;
      } else {
        rowHtml += `<td>${res[h] !== undefined ? res[h] : "-"}</td>`;
      }
    });
    rowHtml += "</tr>";
    table.innerHTML += rowHtml;
  });

  document.getElementById("bulkPreviewModal").style.display = "block";

  // ✅ Save only unique valid results
  saveAnalysisToServer(resultsToShow);
}



