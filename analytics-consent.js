const consentKey = "kling-analytics-consent";

const readConsent = () => {
  try {
    return localStorage.getItem(consentKey);
  } catch {
    return null;
  }
};

const saveConsent = (value) => {
  try {
    localStorage.setItem(consentKey, value);
  } catch {
    // Samtykket gjelder fortsatt for denne sidevisningen.
  }
};

const updateGoogleConsent = (value) => {
  if (typeof window.gtag !== "function") return;

  window.gtag("consent", "update", {
    analytics_storage: value,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

const closeConsentBanner = (banner, returnFocusTo) => {
  banner.classList.add("is-closing");
  banner.addEventListener("animationend", () => banner.remove(), { once: true });
  window.setTimeout(() => banner.remove(), 300);
  returnFocusTo?.focus();
};

const createConsentBanner = () => {
  const banner = document.createElement("section");
  banner.className = "analytics-consent";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-labelledby", "analytics-consent-title");

  const content = document.createElement("div");
  content.className = "analytics-consent__content";

  const copy = document.createElement("div");
  copy.className = "analytics-consent__copy";

  const title = document.createElement("h2");
  title.id = "analytics-consent-title";
  title.textContent = "Kan vi måle hva som fungerer?";

  const description = document.createElement("p");
  description.textContent = "Vi bruker Google Analytics for å forstå hvordan nettsiden brukes. Du velger selv om vi kan lagre analysecookies.";

  const actions = document.createElement("div");
  actions.className = "analytics-consent__actions";

  const declineButton = document.createElement("button");
  declineButton.className = "analytics-consent__button analytics-consent__button--secondary";
  declineButton.type = "button";
  declineButton.textContent = "Kun nødvendige";

  const acceptButton = document.createElement("button");
  acceptButton.className = "analytics-consent__button analytics-consent__button--primary";
  acceptButton.type = "button";
  acceptButton.textContent = "Tillat analyse";

  const chooseConsent = (value, returnFocusTo) => {
    saveConsent(value);
    updateGoogleConsent(value);
    closeConsentBanner(banner, returnFocusTo);
  };

  declineButton.addEventListener("click", () => chooseConsent("denied", declineButton));
  acceptButton.addEventListener("click", () => chooseConsent("granted", acceptButton));

  copy.append(title, description);
  actions.append(declineButton, acceptButton);
  content.append(copy, actions);
  banner.append(content);
  document.body.append(banner);
};

if (!readConsent()) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createConsentBanner, { once: true });
  } else {
    createConsentBanner();
  }
}
