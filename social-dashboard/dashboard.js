import "@fontsource-variable/geist";
import "@phosphor-icons/web/regular";

const STORAGE_KEY = "kling-social-dashboard-v1";
const DB_NAME = "kling-social-dashboard";
const DB_STORE = "uploaded-assets";

const viewTitles = {
  oversikt: "Innholdsoversikt",
  innhold: "Innholdsbibliotek",
  kalender: "Publiseringskalender",
  tekster: "Tekstutkast",
  tilkoblinger: "Tilkoblinger",
};

const defaultAssets = [
  {
    id: "google-square",
    mediaId: "google-square",
    name: "Google-annonse, kvadrat",
    format: "1200 × 1200",
    source: "Kling",
    src: new URL("../assets/ads/kling-google-ad-square-1200x1200.png", import.meta.url).href,
  },
  {
    id: "google-horizontal",
    mediaId: "google-horizontal",
    name: "Google-annonse, liggende",
    format: "1200 × 628",
    source: "Kling",
    src: new URL("../assets/ads/kling-google-ad-horizontal-1200x628.png", import.meta.url).href,
  },
  {
    id: "mascot-analytics",
    mediaId: "mascot-analytics",
    name: "Bie med driftsoversikt",
    format: "Illustrasjon",
    source: "Kling",
    src: new URL("../assets/mascot/kling-bee-analytics.png", import.meta.url).href,
  },
  {
    id: "mascot-message",
    mediaId: "mascot-message",
    name: "Bie med melding",
    format: "Illustrasjon",
    source: "Kling",
    src: new URL("../assets/mascot/kling-bee-message.png", import.meta.url).href,
  },
  {
    id: "mascot-calendar",
    mediaId: "mascot-calendar",
    name: "Bie med kalender",
    format: "Illustrasjon",
    source: "Kling",
    src: new URL("../assets/mascot/kling-bee-calendar.png", import.meta.url).href,
  },
  {
    id: "mascot-laptop",
    mediaId: "mascot-laptop",
    name: "Bie ved datamaskin",
    format: "Illustrasjon",
    source: "Kling",
    src: new URL("../assets/mascot/kling-bee-laptop.png", import.meta.url).href,
  },
];

const captionTemplates = [
  {
    id: "intro",
    title: "Første innlegg",
    channel: "Facebook og Instagram",
    text: "Hei, vi er Kling.\n\nVi bygger nettsider, automatiseringer og systemer som gjør arbeidshverdagen enklere. Målet er mindre manuelt arbeid, bedre flyt og løsninger som faktisk passer måten bedriften jobber på.\n\nLes mer på klingsystems.no",
  },
  {
    id: "workflow",
    title: "Bedre flyt",
    channel: "Facebook og Instagram",
    text: "Én henvendelse trenger ikke å bli fire manuelle oppgaver.\n\nMed riktig arbeidsflyt kan CRM oppdateres, svar sendes, ansvarlig varsles og oppfølging planlegges automatisk.\n\nVil dere bruke mindre tid på gjentakelser? Ta kontakt på klingsystems.no.",
  },
  {
    id: "website",
    title: "Nettsider",
    channel: "Facebook og Instagram",
    text: "En nettside skal gjøre mer enn å se ryddig ut. Den skal forklare tilbudet, gjøre det enkelt å ta kontakt og støtte resten av arbeidsflyten.\n\nVi bygger nettsider som er enkle å forstå og enkle å bruke.",
  },
];

const defaultConnections = [
  { id: "instagram", title: "Instagram-bedriftskonto", detail: "Kontrolleres mot Instagram API", icon: "ph-instagram-logo", done: false },
  { id: "api", title: "Instagram API", detail: "Token og bruker-ID lagres bare på serveren", icon: "ph-plugs-connected", done: false },
];

const defaultState = {
  queue: [],
  connections: defaultConnections,
};

let state = loadState();
let uploadedAssets = [];
let toastTimer;

const elements = {
  dashboardLogo: document.querySelector("#dashboard-logo"),
  viewTitle: document.querySelector("#view-title"),
  navItems: document.querySelectorAll("[data-view]"),
  viewLinks: document.querySelectorAll("[data-view-link]"),
  viewPanels: document.querySelectorAll("[data-view-panel]"),
  todayLabel: document.querySelector("#today-label"),
  metricGrid: document.querySelector("#metric-grid"),
  queueList: document.querySelector("#queue-list"),
  calendarList: document.querySelector("#calendar-list"),
  assetGrid: document.querySelector("#asset-grid"),
  assetPreview: document.querySelector("#asset-preview"),
  assetSearch: document.querySelector("#asset-search"),
  connectionSummary: document.querySelector("#connection-summary"),
  connectionGrid: document.querySelector("#connection-grid"),
  captionGrid: document.querySelector("#caption-grid"),
  uploadButton: document.querySelector("#upload-button"),
  assetUpload: document.querySelector("#asset-upload"),
  newPostButton: document.querySelector("#new-post-button"),
  exportButton: document.querySelector("#export-button"),
  dialog: document.querySelector("#post-dialog"),
  postForm: document.querySelector("#post-form"),
  postId: document.querySelector("#post-id"),
  postAssetId: document.querySelector("#post-asset-id"),
  postPreview: document.querySelector("#post-preview"),
  postCaption: document.querySelector("#post-caption"),
  captionCount: document.querySelector("#caption-count"),
  postDate: document.querySelector("#post-date"),
  postTime: document.querySelector("#post-time"),
  postStatus: document.querySelector("#post-status"),
  channelInstagram: document.querySelector("#channel-instagram"),
  postError: document.querySelector("#post-error"),
  dialogTitle: document.querySelector("#dialog-title"),
  closeDialog: document.querySelector("#close-dialog"),
  cancelDialog: document.querySelector("#cancel-dialog"),
  toast: document.querySelector("#toast"),
  checkInstagramButton: document.querySelector("#check-instagram-button"),
  instagramStatus: document.querySelector("#instagram-status"),
  publishInstagramButton: document.querySelector("#publish-instagram-button"),
  publishingNotice: document.querySelector("#publishing-notice"),
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(defaultState);
    return {
      queue: Array.isArray(saved.queue) ? saved.queue : [],
      connections: defaultConnections.map((connection) => ({
        ...connection,
        done: Boolean(saved.connections?.find((item) => item.id === connection.id)?.done),
      })),
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getAllAssets() {
  return [...defaultAssets, ...uploadedAssets];
}

function findAsset(assetId) {
  return getAllAssets().find((asset) => asset.id === assetId);
}

function formatDate(dateValue, options = {}) {
  return new Intl.DateTimeFormat("nb-NO", options).format(new Date(dateValue));
}

function nextAvailableDate() {
  const occupiedDates = new Set(state.queue.map((item) => item.scheduledAt.slice(0, 10)));
  const candidate = new Date();
  candidate.setHours(10, 0, 0, 0);
  if (candidate < new Date()) candidate.setDate(candidate.getDate() + 1);
  while (occupiedDates.has(candidate.toISOString().slice(0, 10))) {
    candidate.setDate(candidate.getDate() + 1);
  }
  return candidate.toISOString().slice(0, 10);
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function channelLabel(channel) {
  return channel === "facebook" ? "Facebook" : "Instagram";
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => elements.toast.classList.remove("is-visible"), 2600);
}

function switchView(viewName) {
  const title = viewTitles[viewName] || viewTitles.oversikt;
  elements.viewTitle.textContent = title;
  elements.navItems.forEach((item) => {
    const active = item.dataset.view === viewName;
    item.classList.toggle("is-active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  elements.viewPanels.forEach((panel) => panel.classList.toggle("is-visible", panel.dataset.viewPanel === viewName));
  history.replaceState(null, "", `#${viewName}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMetrics() {
  const ready = state.queue.filter((item) => item.status === "ready").length;
  const draft = state.queue.filter((item) => item.status === "draft").length;
  const future = state.queue.filter((item) => new Date(item.scheduledAt) >= new Date()).length;
  const channelsReady = state.connections.filter((item) => item.id === "instagram" && item.done).length;
  const metrics = [
    ["Klar", ready, "Klar til publisering", "ph-check-circle"],
    ["Planlagt", future, "Kommende innlegg", "ph-calendar-dots"],
    ["Utkast", draft, "Trenger gjennomgang", "ph-file-text"],
    ["Kanaler", `${channelsReady}/1`, "Bekreftet mot Instagram", "ph-plugs-connected"],
  ];
  elements.metricGrid.innerHTML = metrics.map(([label, value, detail, icon]) => `
    <article class="metric-card">
      <div class="metric-card__top"><span>${label}</span><span class="metric-card__icon"><i class="ph ${icon}" aria-hidden="true"></i></span></div>
      <strong>${value}</strong>
      <small>${detail}</small>
    </article>
  `).join("");
}

function renderQueue() {
  const sorted = [...state.queue].sort((a, b) => new Date(a.scheduledAt) - new Date(b.scheduledAt));
  if (!sorted.length) {
    elements.queueList.innerHTML = `
      <div class="empty-state"><div class="empty-state__inner">
        <i class="ph ph-calendar-dots" aria-hidden="true"></i>
        <strong>Planen er tom</strong>
        <p>Velg et bilde og legg inn tekst, kanaler og ønsket publiseringstid.</p>
        <button class="button button--primary" type="button" data-empty-action>Nytt innlegg</button>
      </div></div>`;
    elements.queueList.querySelector("[data-empty-action]").addEventListener("click", () => openPostDialog());
    return;
  }

  elements.queueList.innerHTML = sorted.slice(0, 6).map((item) => {
    const asset = findAsset(item.assetId);
    const caption = item.caption || "Uten tekst";
    return `
      <article class="queue-item">
        <img class="queue-item__image" src="${asset?.src || ""}" alt="" />
        <div class="queue-item__content">
          <strong>${escapeHtml(caption)}</strong>
          <span>${item.channels.map(channelLabel).join(" og ") || "Ingen kanal valgt"}</span>
        </div>
        <div class="queue-item__time">
          <span>${formatDate(item.scheduledAt, { day: "numeric", month: "short" })}</span><br />
          <strong>${formatDate(item.scheduledAt, { hour: "2-digit", minute: "2-digit" })}</strong>
        </div>
        <div class="queue-item__actions">
          <span class="status-pill status-pill--${item.status}">${item.status === "ready" ? "Klar" : "Utkast"}</span>
          <button class="icon-button" type="button" data-edit-post="${item.id}" aria-label="Rediger innlegg"><i class="ph ph-sliders-horizontal" aria-hidden="true"></i></button>
          <button class="icon-button" type="button" data-delete-post="${item.id}" aria-label="Slett innlegg"><i class="ph ph-x" aria-hidden="true"></i></button>
        </div>
      </article>`;
  }).join("");

  bindQueueActions(elements.queueList);
}

function bindQueueActions(container) {
  container.querySelectorAll("[data-edit-post]").forEach((button) => {
    button.addEventListener("click", () => openPostDialog(null, button.dataset.editPost));
  });
  container.querySelectorAll("[data-delete-post]").forEach((button) => {
    button.addEventListener("click", () => deletePost(button.dataset.deletePost));
  });
}

function renderCalendar() {
  const sorted = [...state.queue].sort((a, b) => new Date(a.scheduledAt) - new Date(b.scheduledAt));
  if (!sorted.length) {
    elements.calendarList.innerHTML = `
      <div class="empty-state"><div class="empty-state__inner">
        <i class="ph ph-calendar-dots" aria-hidden="true"></i>
        <strong>Ingen innlegg er planlagt</strong>
        <p>Nye innlegg vises her sortert etter dato og klokkeslett.</p>
      </div></div>`;
    return;
  }
  elements.calendarList.innerHTML = sorted.map((item) => {
    const asset = findAsset(item.assetId);
    const date = new Date(item.scheduledAt);
    return `
      <article class="calendar-entry">
        <div class="calendar-entry__date"><strong>${formatDate(date, { day: "numeric", month: "short" })}</strong><span>${formatDate(date, { weekday: "long" })}</span></div>
        <img src="${asset?.src || ""}" alt="" />
        <div class="calendar-entry__copy"><strong>${escapeHtml(item.caption || "Uten tekst")}</strong><span>${item.channels.map(channelLabel).join(" og ")} kl. ${formatDate(date, { hour: "2-digit", minute: "2-digit" })}</span></div>
        <span class="status-pill status-pill--${item.status}">${item.status === "ready" ? "Klar" : "Utkast"}</span>
      </article>`;
  }).join("");
}

function assetCard(asset) {
  const uploaded = asset.source === "Lastet opp";
  return `
    <article class="asset-card" data-asset-card>
      <div class="asset-card__image-wrap"><img src="${asset.src}" alt="${escapeHtml(asset.name)}" loading="lazy" /></div>
      <div class="asset-card__body">
        <strong>${escapeHtml(asset.name)}</strong>
        <span>${escapeHtml(asset.format)} · ${asset.source}</span>
        <div class="asset-card__actions">
          <button class="button button--secondary" type="button" data-use-asset="${asset.id}">Legg i planen</button>
          ${uploaded ? `<button class="button button--secondary asset-card__delete" type="button" data-delete-asset="${asset.id}" aria-label="Slett ${escapeHtml(asset.name)}"><i class="ph ph-x" aria-hidden="true"></i></button>` : ""}
        </div>
      </div>
    </article>`;
}

function renderAssets(query = "") {
  const normalized = query.trim().toLocaleLowerCase("nb-NO");
  const assets = getAllAssets().filter((asset) => asset.name.toLocaleLowerCase("nb-NO").includes(normalized));
  elements.assetGrid.innerHTML = assets.length
    ? assets.map(assetCard).join("")
    : `<div class="empty-state"><div class="empty-state__inner"><i class="ph ph-magnifying-glass" aria-hidden="true"></i><strong>Ingen bilder funnet</strong><p>Prøv et annet søk eller legg til et nytt bilde.</p></div></div>`;
  elements.assetPreview.innerHTML = getAllAssets().slice(0, 4).map(assetCard).join("");
  bindAssetActions(elements.assetGrid);
  bindAssetActions(elements.assetPreview);
}

function bindAssetActions(container) {
  container.querySelectorAll("[data-use-asset]").forEach((button) => {
    button.addEventListener("click", () => openPostDialog(button.dataset.useAsset));
  });
  container.querySelectorAll("[data-delete-asset]").forEach((button) => {
    button.addEventListener("click", () => deleteUploadedAsset(button.dataset.deleteAsset));
  });
}

function renderConnections() {
  elements.connectionSummary.innerHTML = state.connections.map((connection) => `
    <div class="connection-row">
      <i class="ph ${connection.icon}" aria-hidden="true"></i>
      <div><strong>${connection.title}</strong><span>${connection.detail}</span></div>
      <span class="connection-state ${connection.done ? "is-done" : ""}">${connection.done ? "Bekreftet" : "Ikke bekreftet"}</span>
    </div>`).join("");

  elements.connectionGrid.innerHTML = state.connections.map((connection) => `
    <article class="connection-card">
      <span class="connection-card__icon"><i class="ph ${connection.icon}" aria-hidden="true"></i></span>
      <div><strong>${connection.title}</strong><p>${connection.detail}</p></div>
      <span class="connection-state ${connection.done ? "is-done" : ""}">${connection.done ? "Tilkoblet" : "Ikke bekreftet"}</span>
    </article>`).join("");
}

async function checkInstagramConnection(showResult = false) {
  elements.checkInstagramButton.disabled = true;
  elements.instagramStatus.textContent = "Kontrollerer tilkoblingen …";
  try {
    const response = await fetch("/api/instagram/status", { headers: { Accept: "application/json" } });
    const result = await response.json();
    const connected = response.ok && result.connected;
    state.connections.forEach((connection) => { connection.done = connected; });
    elements.instagramStatus.textContent = connected
      ? `Tilkoblet @${result.account.username}`
      : result.error || "Instagram er ikke tilkoblet.";
    elements.publishingNotice.classList.toggle("is-connected", connected);
    elements.publishingNotice.querySelector("p").innerHTML = connected
      ? `<strong>Instagram er tilkoblet.</strong> Du kan nå publisere godkjente bilder direkte fra innholdsplanen.`
      : `<strong>Publisering er ikke klar.</strong> Kontroller Instagram-token og bruker-ID i den lokale miljøfilen.`;
    if (showResult) showToast(connected ? "Instagram-tilkoblingen virker" : "Instagram kunne ikke bekreftes");
  } catch {
    state.connections.forEach((connection) => { connection.done = false; });
    elements.instagramStatus.textContent = "Den lokale Instagram-serveren svarer ikke.";
    if (showResult) showToast("Tilkoblingen kunne ikke kontrolleres");
  } finally {
    elements.checkInstagramButton.disabled = false;
    renderMetrics();
    renderConnections();
  }
}

function renderCaptions() {
  elements.captionGrid.innerHTML = captionTemplates.map((caption) => `
    <article class="caption-card">
      <div class="caption-card__top"><div><p class="eyebrow">Tekstutkast</p><h2>${caption.title}</h2></div><span>${caption.channel}</span></div>
      <p>${escapeHtml(caption.text)}</p>
      <button class="button button--secondary" type="button" data-copy-caption="${caption.id}"><i class="ph ph-file-text" aria-hidden="true"></i>Kopier tekst</button>
    </article>`).join("");
  elements.captionGrid.querySelectorAll("[data-copy-caption]").forEach((button) => {
    button.addEventListener("click", async () => {
      const caption = captionTemplates.find((item) => item.id === button.dataset.copyCaption);
      await navigator.clipboard.writeText(caption.text);
      showToast("Teksten er kopiert");
    });
  });
}

function renderAll() {
  renderMetrics();
  renderQueue();
  renderCalendar();
  renderAssets(elements.assetSearch.value);
  renderConnections();
  renderCaptions();
}

function openPostDialog(assetId = null, postId = null) {
  const post = state.queue.find((item) => item.id === postId);
  const selectedAssetId = post?.assetId || assetId || getAllAssets()[0]?.id || "";
  const asset = findAsset(selectedAssetId);
  elements.dialogTitle.textContent = post ? "Rediger innlegg" : "Nytt innlegg";
  elements.postId.value = post?.id || "";
  elements.postAssetId.value = selectedAssetId;
  elements.postCaption.value = post?.caption || "";
  elements.captionCount.textContent = elements.postCaption.value.length;
  elements.postStatus.value = post?.status || "draft";
  elements.channelInstagram.checked = post ? post.channels.includes("instagram") : true;
  const scheduledAt = post ? new Date(post.scheduledAt) : new Date(`${nextAvailableDate()}T10:00:00`);
  elements.postDate.value = scheduledAt.toISOString().slice(0, 10);
  elements.postTime.value = `${String(scheduledAt.getHours()).padStart(2, "0")}:${String(scheduledAt.getMinutes()).padStart(2, "0")}`;
  elements.postError.textContent = "";
  elements.postPreview.innerHTML = asset
    ? `<img src="${asset.src}" alt="${escapeHtml(asset.name)}" />`
    : `<div class="post-preview__empty"><i class="ph ph-layout" aria-hidden="true"></i><span>Legg først til et bilde i biblioteket</span></div>`;
  elements.dialog.showModal();
}

function closePostDialog() {
  elements.dialog.close();
}

function savePost(event) {
  event.preventDefault();
  const channels = [elements.channelInstagram.checked ? "instagram" : null].filter(Boolean);
  if (!elements.postAssetId.value) {
    elements.postError.textContent = "Velg et bilde før du lagrer innlegget.";
    return;
  }
  if (!channels.length) {
    elements.postError.textContent = "Velg minst én kanal.";
    return;
  }
  if (!elements.postCaption.value.trim()) {
    elements.postError.textContent = "Skriv en kort tekst til innlegget.";
    return;
  }

  const id = elements.postId.value || crypto.randomUUID();
  const post = {
    id,
    assetId: elements.postAssetId.value,
    caption: elements.postCaption.value.trim(),
    channels,
    scheduledAt: new Date(`${elements.postDate.value}T${elements.postTime.value}:00`).toISOString(),
    status: elements.postStatus.value,
    updatedAt: new Date().toISOString(),
  };
  const existingIndex = state.queue.findIndex((item) => item.id === id);
  if (existingIndex >= 0) state.queue[existingIndex] = post;
  else state.queue.push(post);
  saveState();
  closePostDialog();
  renderAll();
  showToast(existingIndex >= 0 ? "Innlegget er oppdatert" : "Innlegget er lagt i planen");
}

async function publishOnInstagram() {
  const asset = findAsset(elements.postAssetId.value);
  const caption = elements.postCaption.value.trim();
  if (!asset?.mediaId) {
    elements.postError.textContent = "Lokalt opplastede bilder må først legges på en offentlig bildelagring.";
    return;
  }
  if (!caption) {
    elements.postError.textContent = "Skriv en kort tekst til innlegget.";
    return;
  }
  if (!window.confirm("Vil du publisere dette innlegget på Instagram-kontoen til Kling Systems nå?")) return;

  elements.publishInstagramButton.disabled = true;
  elements.publishInstagramButton.textContent = "Publiserer …";
  elements.postError.textContent = "";
  try {
    const response = await fetch("/api/instagram/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ mediaId: asset.mediaId, caption }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Instagram avviste publiseringen.");
    if (elements.postId.value) {
      state.queue = state.queue.filter((item) => item.id !== elements.postId.value);
      saveState();
    }
    closePostDialog();
    renderAll();
    showToast("Innlegget er publisert på Instagram");
  } catch (error) {
    elements.postError.textContent = error.message;
  } finally {
    elements.publishInstagramButton.disabled = false;
    elements.publishInstagramButton.textContent = "Publiser nå";
  }
}

function deletePost(postId) {
  if (!window.confirm("Vil du fjerne dette innlegget fra planen?")) return;
  state.queue = state.queue.filter((item) => item.id !== postId);
  saveState();
  renderAll();
  showToast("Innlegget er fjernet");
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(DB_STORE)) request.result.createObjectStore(DB_STORE, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function loadUploadedAssets() {
  try {
    const db = await openDatabase();
    const records = await new Promise((resolve, reject) => {
      const request = db.transaction(DB_STORE, "readonly").objectStore(DB_STORE).getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    uploadedAssets.forEach((asset) => URL.revokeObjectURL(asset.src));
    uploadedAssets = records.map((record) => ({
      ...record,
      src: URL.createObjectURL(record.blob),
      source: "Lastet opp",
    }));
  } catch {
    showToast("Lokale bilder kunne ikke leses");
  }
}

async function uploadAssets(files) {
  const validFiles = [...files].filter((file) => ["image/png", "image/jpeg", "image/webp"].includes(file.type));
  if (!validFiles.length) {
    showToast("Velg PNG, JPG eller WebP-bilder");
    return;
  }
  try {
    const db = await openDatabase();
    const transaction = db.transaction(DB_STORE, "readwrite");
    const store = transaction.objectStore(DB_STORE);
    validFiles.forEach((file) => store.put({
      id: crypto.randomUUID(),
      name: file.name.replace(/\.[^.]+$/, "").replaceAll(/[-_]/g, " "),
      format: `${Math.round(file.size / 1024)} KB`,
      blob: file,
      createdAt: new Date().toISOString(),
    }));
    await new Promise((resolve, reject) => {
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    await loadUploadedAssets();
    renderAssets(elements.assetSearch.value);
    showToast(`${validFiles.length} ${validFiles.length === 1 ? "bilde er" : "bilder er"} lagt til`);
  } catch {
    showToast("Bildene kunne ikke lagres lokalt");
  }
}

async function deleteUploadedAsset(assetId) {
  if (state.queue.some((item) => item.assetId === assetId)) {
    showToast("Fjern bildet fra publiseringsplanen først");
    return;
  }
  if (!window.confirm("Vil du slette dette lokale bildet?")) return;
  try {
    const db = await openDatabase();
    await new Promise((resolve, reject) => {
      const request = db.transaction(DB_STORE, "readwrite").objectStore(DB_STORE).delete(assetId);
      request.onsuccess = resolve;
      request.onerror = () => reject(request.error);
    });
    await loadUploadedAssets();
    renderAssets(elements.assetSearch.value);
    showToast("Bildet er slettet");
  } catch {
    showToast("Bildet kunne ikke slettes");
  }
}

function exportPlan() {
  const exportData = state.queue
    .sort((a, b) => new Date(a.scheduledAt) - new Date(b.scheduledAt))
    .map((post) => ({
      bilde: findAsset(post.assetId)?.name || "Ukjent bilde",
      tekst: post.caption,
      kanaler: post.channels.map(channelLabel),
      publisering: post.scheduledAt,
      status: post.status === "ready" ? "Klar" : "Utkast",
    }));
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kling-publiseringsplan-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Publiseringsplanen er lastet ned");
}

function bindEvents() {
  elements.todayLabel.textContent = formatDate(new Date(), { weekday: "long", day: "numeric", month: "long" });
  elements.navItems.forEach((item) => item.addEventListener("click", () => switchView(item.dataset.view)));
  elements.viewLinks.forEach((item) => item.addEventListener("click", () => switchView(item.dataset.viewLink)));
  elements.assetSearch.addEventListener("input", () => renderAssets(elements.assetSearch.value));
  elements.uploadButton.addEventListener("click", () => elements.assetUpload.click());
  elements.assetUpload.addEventListener("change", async () => {
    await uploadAssets(elements.assetUpload.files);
    elements.assetUpload.value = "";
  });
  elements.newPostButton.addEventListener("click", () => openPostDialog());
  elements.exportButton.addEventListener("click", exportPlan);
  elements.closeDialog.addEventListener("click", closePostDialog);
  elements.cancelDialog.addEventListener("click", closePostDialog);
  elements.postForm.addEventListener("submit", savePost);
  elements.publishInstagramButton.addEventListener("click", publishOnInstagram);
  elements.checkInstagramButton.addEventListener("click", () => checkInstagramConnection(true));
  elements.postCaption.addEventListener("input", () => {
    elements.captionCount.textContent = elements.postCaption.value.length;
    elements.postError.textContent = "";
  });
  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) closePostDialog();
  });
}

async function init() {
  elements.dashboardLogo.src = new URL("../assets/kling-logo-cream-transparent.png", import.meta.url).href;
  bindEvents();
  await loadUploadedAssets();
  renderAll();
  await checkInstagramConnection();
  const initialView = location.hash.slice(1);
  if (viewTitles[initialView]) switchView(initialView);
}

init();
