const consentKey = "kling-analytics-consent";
const consentVersion = "2026-08-19";
const measurementId = "G-EPXJSXY17W";
const consentLifetime = 1000 * 60 * 60 * 24 * 183;

let analyticsLoaded = false;
let activeBanner = null;

const readConsent = () => {
  try {
    const storedValue = localStorage.getItem(consentKey);
    if (!storedValue) return null;

    if (storedValue === "granted" || storedValue === "denied") {
      localStorage.removeItem(consentKey);
      return null;
    }

    const preference = JSON.parse(storedValue);
    if (!preference?.status || !["granted", "denied"].includes(preference.status)) return null;
    if (preference.version !== consentVersion) {
      localStorage.removeItem(consentKey);
      return null;
    }
    if (preference.expiresAt && Date.now() > preference.expiresAt) {
      localStorage.removeItem(consentKey);
      return null;
    }

    return preference.status;
  } catch {
    return null;
  }
};

const saveConsent = (status) => {
  try {
    localStorage.setItem(consentKey, JSON.stringify({
      status,
      savedAt: new Date().toISOString(),
      expiresAt: Date.now() + consentLifetime,
      version: consentVersion,
    }));
  } catch {
    // Valget gjelder fortsatt for denne sidevisningen.
  }
};

const configureGoogleConsent = (status) => {
  if (typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: status,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

const loadAnalytics = () => {
  if (analyticsLoaded || document.querySelector(`script[data-kling-analytics="${measurementId}"]`)) return;

  analyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const analyticsScript = document.createElement("script");
  analyticsScript.async = true;
  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  analyticsScript.dataset.klingAnalytics = measurementId;
  document.head.append(analyticsScript);
};

const removeAnalyticsCookies = () => {
  document.cookie.split(";").forEach((cookie) => {
    const cookieName = cookie.split("=")[0]?.trim();
    if (!cookieName?.startsWith("_ga")) return;

    document.cookie = `${cookieName}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=.klingsystems.no; SameSite=Lax`;
  });
};

const closeConsentBanner = (returnFocusTo) => {
  if (!activeBanner) return;

  const banner = activeBanner;
  activeBanner = null;
  document.body.classList.remove("has-consent-dialog");
  banner.classList.add("is-closing");
  banner.addEventListener("animationend", () => banner.remove(), { once: true });
  window.setTimeout(() => banner.remove(), 300);
  returnFocusTo?.focus();
};

const createConsentBanner = ({ returnFocusTo = null } = {}) => {
  if (activeBanner) return;

  const existingConsent = readConsent();
  const isSettingsDialog = Boolean(returnFocusTo);
  const banner = document.createElement("section");
  banner.className = "analytics-consent";
  if (isSettingsDialog) banner.classList.add("analytics-consent--settings");
  banner.setAttribute("role", isSettingsDialog ? "dialog" : "region");
  if (isSettingsDialog) banner.setAttribute("aria-modal", "true");
  banner.setAttribute("aria-labelledby", "analytics-consent-title");

  const content = document.createElement("div");
  content.className = "analytics-consent__content";

  const copy = document.createElement("div");
  copy.className = "analytics-consent__copy";

  const title = document.createElement("h2");
  title.id = "analytics-consent-title";
  title.textContent = existingConsent ? "Personvernvalg" : "Kan vi måle hva som fungerer?";

  const description = document.createElement("p");
  description.textContent = "Google Analytics lastes bare hvis du tillater analyse. Du kan avslå og endre valget når som helst.";

  const privacyLink = document.createElement("a");
  privacyLink.href = "./personvern.html#informasjonskapsler";
  privacyLink.textContent = "Les om personvern og informasjonskapsler";

  const actions = document.createElement("div");
  actions.className = "analytics-consent__actions";

  const declineButton = document.createElement("button");
  declineButton.className = "analytics-consent__button";
  declineButton.type = "button";
  declineButton.textContent = "Kun nødvendige";

  const acceptButton = document.createElement("button");
  acceptButton.className = "analytics-consent__button";
  acceptButton.type = "button";
  acceptButton.textContent = "Tillat analyse";

  if (existingConsent === "denied") declineButton.setAttribute("aria-pressed", "true");
  if (existingConsent === "granted") acceptButton.setAttribute("aria-pressed", "true");

  const chooseConsent = (status) => {
    const mustReload = status === "denied" && analyticsLoaded;
    saveConsent(status);
    configureGoogleConsent(status);

    if (status === "granted") loadAnalytics();
    if (status === "denied") removeAnalyticsCookies();

    closeConsentBanner(returnFocusTo);
    if (mustReload) window.location.reload();
  };

  declineButton.addEventListener("click", () => chooseConsent("denied"));
  acceptButton.addEventListener("click", () => chooseConsent("granted"));

  copy.append(title, description, privacyLink);
  actions.append(declineButton, acceptButton);

  if (existingConsent) {
    const closeButton = document.createElement("button");
    closeButton.className = "analytics-consent__close";
    closeButton.type = "button";
    closeButton.textContent = "Lukk";
    closeButton.addEventListener("click", () => closeConsentBanner(returnFocusTo));
    actions.append(closeButton);
  }

  content.append(copy, actions);
  banner.append(content);
  if (isSettingsDialog) {
    document.body.classList.add("has-consent-dialog");
    banner.addEventListener("click", (event) => {
      if (event.target === banner) closeConsentBanner(returnFocusTo);
    });
  }
  document.body.append(banner);
  activeBanner = banner;
  declineButton.focus({ preventScroll: true });
};

const initializePrivacyControls = () => {
  const consent = readConsent();
  if (consent === "granted") loadAnalytics();
  if (!consent) createConsentBanner();
};

document.addEventListener("click", (event) => {
  const eventTarget = event.target instanceof Element ? event.target : event.target?.parentElement;
  const control = eventTarget?.closest("[data-open-consent]");
  if (!control) return;

  event.preventDefault();
  if (activeBanner && !document.body.contains(activeBanner)) activeBanner = null;

  if (activeBanner) {
    activeBanner.querySelector("button")?.focus({ preventScroll: true });
    return;
  }

  createConsentBanner({ returnFocusTo: control });
}, { capture: true });

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activeBanner && readConsent()) {
    closeConsentBanner(document.querySelector("[data-open-consent]"));
  }
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePrivacyControls, { once: true });
} else {
  initializePrivacyControls();
}
