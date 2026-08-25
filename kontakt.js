import "@fontsource-variable/geist";
import "./phosphor-icons.css";

const form = document.querySelector(".contact-form");
const submitButton = form?.querySelector(".button--submit");
const formStatus = form?.querySelector(".form-status");

const requestedService = new URLSearchParams(window.location.search).get("service");
if (["Nettsider", "Automatisering", "Systemer"].includes(requestedService)) {
  const serviceChoice = form?.querySelector(`input[name="service"][value="${requestedService}"]`);
  if (serviceChoice) serviceChoice.checked = true;
}

const messages = {
  name: "Skriv inn navnet ditt.",
  company: "Skriv inn bedriftens navn.",
  email: "Skriv inn en gyldig e-postadresse.",
  message: "Beskriv situasjonen med minst 20 tegn.",
};

const validateField = (field) => {
  const error = field.parentElement?.querySelector(".field-error");
  let message = "";

  field.setCustomValidity("");
  if (field.validity.valueMissing) message = messages[field.name] || "Dette feltet må fylles ut.";
  if (field.type === "email" && field.validity.typeMismatch) message = messages.email;
  if (field.name === "message" && field.value.trim().length > 0 && field.value.trim().length < 20) message = messages.message;

  field.setCustomValidity(message);
  field.setAttribute("aria-invalid", String(Boolean(message)));
  if (error) error.textContent = message;
  return !message;
};

form?.querySelectorAll("input[required], textarea[required]").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("input", () => {
    if (field.getAttribute("aria-invalid") === "true") validateField(field);
  });
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const requiredFields = [...form.querySelectorAll("input[required], textarea[required]")];
  const valid = requiredFields.map(validateField).every(Boolean);

  formStatus?.classList.remove("is-visible", "is-error");
  formStatus?.setAttribute("role", "status");
  if (!valid) {
    requiredFields.find((field) => !field.validity.valid)?.focus();
    return;
  }

  submitButton?.classList.add("is-loading");
  submitButton?.setAttribute("disabled", "");
  submitButton?.setAttribute("aria-busy", "true");
  submitButton?.setAttribute("aria-label", "Sender kartleggingen");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) throw new Error(result.error || "Henvendelsen kunne ikke sendes.");
    window.location.assign("./takk.html");
  } catch (error) {
    if (formStatus) {
      formStatus.textContent = error.message || "Vi fikk ikke sendt henvendelsen. Prøv igjen.";
      formStatus.classList.add("is-visible", "is-error");
      formStatus.setAttribute("role", "alert");
      formStatus.focus({ preventScroll: false });
    }
  } finally {
    submitButton?.classList.remove("is-loading");
    submitButton?.removeAttribute("disabled");
    submitButton?.setAttribute("aria-busy", "false");
    submitButton?.setAttribute("aria-label", "Send inn kartleggingen");
  }
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
