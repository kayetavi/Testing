/*******************************
 * Chat UI helpers
 *******************************/
function appendToChatLog(sender, message, isHTML = false, isUser = false) {
  const chatLog = document.getElementById("chat-log");
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("chat-message", isUser ? "user-message" : "bot-message");

  msgDiv.innerHTML = isHTML
    ? `<strong>${sender}:</strong><br>${message}`
    : `<strong>${sender}:</strong> ${escapeHtml(message)}`;

  chatLog.appendChild(msgDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/*******************************
 * Gemini Markdown Formatter (FULL)
 *******************************/
function formatGemini(text = "") {
  if (!text) return "";
  marked.setOptions({ mangle: false, headerIds: false });
  return marked.parse(text);
}

function toggleChat() {
  const chatBox = document.getElementById("chat-box");
  if (chatBox) chatBox.classList.toggle("hidden");
}

function toggleMaximize() {
  const chatBox = document.getElementById("chat-box");
  if (chatBox) chatBox.classList.toggle("maximized");
}

function closeChat() {
  const chatBox = document.getElementById("chat-box");
  if (chatBox) chatBox.classList.add("hidden");
}

/*******************************
 * Google Search
 *******************************/
async function fetchGoogleSearch(query) {
  const url = `/api/chatbot?q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (!data.items || data.items.length === 0) return "❌ No Google results found.";

    const resultsHtml = data.items.slice(0, 3).map(item => `
      <div class="search-result" style="margin-bottom:10px; border-bottom:1px solid #ccc; padding-bottom:5px;">
        <b>${escapeHtml(item.title || "")}</b><br>
        ${escapeHtml(item.snippet || "")}<br>
        <button onclick="openInChatIframe('${encodeURIComponent(item.link)}')">View Here</button>
        <button onclick="window.open('${item.link}', '_blank')">Open in Browser</button>
      </div>
    `).join("");

    return `🔍 <b>Google Search Results:</b><br><br>${resultsHtml}`;
  } catch (err) {
    console.error("Google Search error:", err);
    return "❌ Failed to fetch Google results.";
  }
}

/*******************************
 * Gemini (backend -> /api/gemini)
 *******************************/
async function fetchGeminiReply(message) {
  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    let data = {};
    try { data = await res.json(); } catch (_) {}

    return data.reply || data.error || "❌ No response from Gemini AI.";
  } catch (err) {
    console.error("Gemini fetch error:", err);
    return "❌ Failed to get response from Gemini AI.";
  }
}

/*******************************
 * Iframe preview inside chat
 *******************************/
function openInChatIframe(urlEncoded) {
  const url = decodeURIComponent(urlEncoded);
  const chatLog = document.getElementById("chat-log");

  const iframeDiv = document.createElement("div");
  iframeDiv.style.marginTop = "10px";
  iframeDiv.style.position = "relative";

  const closeButton = document.createElement("button");
  closeButton.innerText = "✖";
  closeButton.style.position = "absolute";
  closeButton.style.top = "5px";
  closeButton.style.right = "5px";
  closeButton.style.zIndex = "10";
  closeButton.style.cursor = "pointer";
  closeButton.onclick = () => chatLog.removeChild(iframeDiv);

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.style.width = "100%";
  iframe.style.height = "800px";
  iframe.style.border = "1px solid #ccc";

  iframeDiv.appendChild(closeButton);
  iframeDiv.appendChild(iframe);
  chatLog.appendChild(iframeDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

/*******************************
 * Typing indicator
 *******************************/
function showTyping() {
  const chatLog = document.getElementById("chat-log");
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("chat-message", "bot-message");
  typingDiv.innerHTML = `<em class="typing">🤖 is typing...</em>`;
  chatLog.appendChild(typingDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
  return typingDiv;
}

/*******************************
 * Input handlers
 *******************************/
function handleChat(e) {
  if (e.key === "Enter") {
    sendMessageFromInput();
  }
}

function sendMessageFromInput() {
  const input = document.getElementById("chat-input");
  const message = (input?.value || "").trim();
  if (!message) return;

  appendToChatLog("🧑", message, false, true);
  respondToUser(message);
  if (input) input.value = "";

  const suggestionBox = document.getElementById("suggestions");
  if (suggestionBox) {
    suggestionBox.innerHTML = "";
    suggestionBox.style.display = "none";
  }
}

/*******************************
 * Router / Brain
 *******************************/
async function respondToUser(message) {
  const msg = message.toLowerCase().trim();

  const mechanismsRoot = (typeof data !== "undefined" && data && data["API 571 Damage Mechanism"]) || {};
  const mechanisms = Object.keys(mechanismsRoot);
  let matchedKey = null;

  // ------------------- Greetings -------------------
if (["hello", "hi", "hii", "hey", "hello gemini", "good morning", "good evening", "good afternoon"].some(g => msg.toLowerCase().includes(g))) {
    appendToChatLog("🤖", "Hello! 👋 How can I assist you today? You can ask me about damage mechanisms, inspection, corrosion, or calculations.", true);
    return;
}

// ------------------- About Bot -------------------
if (["who are you", "what are you", "tell me about yourself", "introduce yourself"].some(q => msg.toLowerCase().includes(q))) {
    appendToChatLog("🤖", "I'm your KayetBot Assistant 🤖. I can help you with API 571 damage mechanisms, corrosion rate & remaining life calculations, inspection planning, design thickness calculations (ASME B31.3 / Sec VIII Div 1), toxic & inventory calculations, and more.", true);
    return;
}

// ------------------- Help / Guide -------------------
if (["help", "what can you do", "guide me", "options", "how to use"].some(q => msg.toLowerCase().includes(q))) {
    appendToChatLog("🤖", "Here's what I can do:\n\n✅ Explain Damage Mechanisms (HIC, SSC, SCC, HTHA, MIC, FAC, etc.)\n✅ Corrosion & Remaining Life Calculations\n✅ Projected Failure Date\n✅ ASME B31.3 & Sec VIII Div 1 Design Thickness Help\n✅ Toxic Value & Inventory Calculations\n✅ Inspection Confidence (IIC/AIC) & Interval Planning\n\nTry asking: 'Explain HIC', 'Calculate Remaining Life', or 'What is SSC inspection?'", true);
    return;
}

// ------------------- Thanks -------------------
if (["thanks", "thank you", "thx", "thankyou"].some(q => msg.toLowerCase().includes(q))) {
    appendToChatLog("🤖", "You're welcome! 🙌 Happy to help. Ask me anytime you need guidance.", true);
    return;
}

// ------------------- Goodbye -------------------
if (["bye", "goodbye", "see you", "talk later"].some(q => msg.toLowerCase().includes(q))) {
    appendToChatLog("🤖", "Goodbye 👋 Take care! Feel free to ask me about damage mechanisms or calculations anytime.", true);
    return;
}

// ------------------- Damage Mechanism Queries -------------------
if (["hic", "hydrogen induced cracking", "ssc", "stress corrosion cracking", "scc", "sulfide stress cracking"].some(q => msg.toLowerCase().includes(q))) {
    appendToChatLog("🤖", "Damage Mechanism Info:\n- HIC: Hydrogen Induced Cracking\n- SSC: Sulfide Stress Cracking\n- SCC: Stress Corrosion Cracking\n\nYou can ask for detailed info like affected material, criteria, temperature range, or prevention.", true);
    return;
}

// ------------------- Corrosion & Remaining Life -------------------
if (["corrosion rate", "remaining life", "projected failure", "tmin", "ltcr"].some(q => msg.toLowerCase().includes(q))) {
    appendToChatLog("🤖", "I can help calculate Corrosion Rate, Long Term Corrosion Rate (LTCR), T-Min date, Projected Failure Date, and Remaining Life using your inputs. Example: 'Calculate Remaining Life for line X with current thickness 6.1mm and CR 0.2748mm/year.'", true);
    return;
}

// ------------------- Inspection / Confidence -------------------
if (["inspection", "iic", "aic", "aggregate inspection confidence", "inspection interval"].some(q => msg.toLowerCase().includes(q))) {
    appendToChatLog("🤖", "I can help with Inspection Confidence calculations (Individual IIC, Aggregate AIC), recommend next inspection dates, and determine interval based on previous inspection data and corrosion trends.", true);
    return;
}

// ------------------- Design Thickness / ASME -------------------
if (["design thickness", "b31.3", "asme", "sec viii", "div 1"].some(q => msg.toLowerCase().includes(q))) {
    appendToChatLog("🤖", "I can guide you through ASME B31.3 and Sec VIII Div 1 Design Thickness calculations including minimum required thickness, corrosion allowance, and MAWP considerations.", true);
    return;
}

// ------------------- Toxic / Inventory -------------------
if (["toxic", "inventory", "mass balance", "chemical concentration", "kg/hr"].some(q => msg.toLowerCase().includes(q))) {
    appendToChatLog("🤖", "I can calculate Toxic values, Gas/Liquid inventory, mole% to mass flow conversion, and chemical process mass balance. Example: 'Calculate inventory for H2S at 10,000 kg/hr.'", true);
    return;
}

  for (const key of mechanisms) {
    if (msg.includes(key.toLowerCase())) {
      matchedKey = key;
      break;
    }
  }

  // Show typing animation immediately
  const typingDiv = showTyping();

  let response = "";

  if (matchedKey) {
    if (
      msg.includes("description") || msg.includes("critical") || msg.includes("appearance") ||
      msg.includes("material") || msg.includes("materials") || msg.includes("unit") || msg.includes("units") ||
      msg.includes("inspection") || msg.includes("mitigation") || msg.includes("image") || msg.includes("images")
    ) {
      response = getMechanismDetail(matchedKey, msg);
    } else {
      response = generateTabs(matchedKey);
    }
  } else {
    // Wait for both results before removing typing animation
    const [googleResults, aiReply] = await Promise.all([
      fetchGoogleSearch(msg),
      fetchGeminiReply(msg)
    ]);

    response = `${googleResults}<br><br>🤖 <b>Gemini AI Answer:</b><br>${formatGemini(aiReply)}`;
  }

  // Remove typing animation only when response is ready
  typingDiv.remove();

  appendToChatLog("🤖", response, true);
}

/*******************************
 * API 571 helpers
 *******************************/
function getMechanismDetail(key, msg) {
  const mech = (data && data["API 571 Damage Mechanism"] && data["API 571 Damage Mechanism"][key]) || null;
  if (!mech) return "❌ Mechanism data not found.";

  const wantsDescription = msg.includes("description");
  const wantsCritical = msg.includes("critical");
  const wantsAppearance = msg.includes("appearance");
  const wantsMaterials = msg.includes("material") || msg.includes("materials");
  const wantsUnits = msg.includes("unit") || msg.includes("units");
  const wantsInspection = msg.includes("inspection");
  const wantsMitigation = msg.includes("mitigation");
  const wantsImage = msg.includes("image") || msg.includes("images");

  if (wantsDescription) return `<b>Description:</b><br>${mech.description || "—"}`;
  if (wantsCritical) return `<b>Critical Factors:</b><br>${mech.criticalFactors || "—"}`;
  if (wantsAppearance) return `<b>Appearance:</b><br>${mech.appearance || "—"}`;
  if (wantsMaterials) return `<b>Affected Materials:</b><br>${mech.affectedMaterials || "—"}`;
  if (wantsUnits) return `<b>Affected Units:</b><br>${mech.affectedUnits || "—"}`;
  if (wantsInspection) return `<b>Inspection:</b><br>${mech.inspection || "—"}`;
  if (wantsMitigation) return `<b>Mitigation:</b><br>${mech.mitigation || "—"}`;
  if (wantsImage) {
    const src = mech.imagePath || "";
    return src
      ? `<img src="${src}" alt="${escapeHtml(key)}" style="max-width:100%;">`
      : "❌ No image available.";
  }

  return "❌ No matching detail found.";
}

function generateTabs(key) {
  const tabs = [
    "description",
    "critical factors",
    "appearance",
    "materials",
    "units",
    "inspection",
    "mitigation",
    "image"
  ];
  const tabHtml = tabs
    .map(tab => `<button class="tab-button" onclick="handleTabClick('${escapeHtml(key)}', '${escapeHtml(tab)}')">${escapeHtml(tab)}</button>`)
    .join(" ");
  return `✅ I found data on <b>${escapeHtml(key)}</b>.<br>Click below:<br>${tabHtml}`;
}

function handleTabClick(key, tab) {
  const normalizedTab = tab.toLowerCase();
  const fakeMessage =
    normalizedTab === "critical factors" ? `${key} critical`
    : normalizedTab === "materials" ? `${key} materials`
    : normalizedTab === "units" ? `${key} units`
    : `${key} ${normalizedTab}`;
  respondToUser(fakeMessage);
}

/*******************************
 * Suggestions (typeahead)
 *******************************/
let suggestionDebounce;
function updateSuggestions() {
  clearTimeout(suggestionDebounce);
  suggestionDebounce = setTimeout(_updateSuggestionsCore, 120);
}

function _updateSuggestionsCore() {
  const input = document.getElementById("chat-input");
  const suggestionBox = document.getElementById("suggestions");
  if (!input || !suggestionBox) return;

  const inputVal = input.value.trim().toLowerCase();
  const mechanismsRoot = (typeof data !== "undefined" && data && data["API 571 Damage Mechanism"]) || {};
  const allMechanisms = Object.keys(mechanismsRoot);

  const matched = allMechanisms.filter(item => item.toLowerCase().includes(inputVal));

  if (!inputVal || inputVal.length < 2 || matched.length === 0) {
    suggestionBox.style.display = "none";
    return;
  }

  suggestionBox.innerHTML = "";
  matched.forEach(match => {
    const div = document.createElement("div");
    div.classList.add("suggestion-item");
    const safeMatch = escapeHtml(match);
    const safeInput = escapeHtml(inputVal);
    div.innerHTML = safeMatch.replace(new RegExp(`(${safeInput})`, "gi"), "<strong>$1</strong>");
    div.onclick = () => {
      input.value = match;
      suggestionBox.innerHTML = "";
      suggestionBox.style.display = "none";
      appendToChatLog("🧑", match, false, true);
      respondToUser(match);
    };
    suggestionBox.appendChild(div);
  });

  suggestionBox.style.display = "block";
}
