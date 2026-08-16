import "@phosphor-icons/web/regular";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
let menuReturnFocus = null;

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const closeMenu = ({ restoreFocus = false } = {}) => {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Åpne meny");
  mobileNav.setAttribute("aria-hidden", "true");
  mobileNav.classList.remove("is-open");
  mobileNav.inert = true;
  document.body.classList.remove("menu-open");
  if (restoreFocus && menuReturnFocus instanceof HTMLElement) menuReturnFocus.focus();
};

menuButton?.addEventListener("click", () => {
  const shouldOpen = menuButton.getAttribute("aria-expanded") !== "true";
  if (shouldOpen) menuReturnFocus = document.activeElement;
  menuButton.setAttribute("aria-expanded", String(shouldOpen));
  menuButton.setAttribute("aria-label", shouldOpen ? "Lukk meny" : "Åpne meny");
  mobileNav?.setAttribute("aria-hidden", String(!shouldOpen));
  mobileNav?.classList.toggle("is-open", shouldOpen);
  if (mobileNav) mobileNav.inert = !shouldOpen;
  document.body.classList.toggle("menu-open", shouldOpen);
});

if (mobileNav) mobileNav.inert = true;
mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeMenu()));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    closeMenu({ restoreFocus: true });
  }
});

const comparisonButtons = document.querySelectorAll("[data-view]");
const comparisonPanels = document.querySelectorAll("[data-panel]");

const showComparison = (view) => {
  comparisonButtons.forEach((button) => {
    const selected = button.dataset.view === view;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  comparisonPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === view));
};

comparisonButtons.forEach((button) => button.addEventListener("click", () => showComparison(button.dataset.view)));
showComparison("before");

const serviceCards = [...document.querySelectorAll(".service-card")];
const expandService = (selectedCard) => {
  serviceCards.forEach((card) => {
    const expanded = card === selectedCard;
    card.classList.toggle("is-expanded", expanded);
    card.querySelector("[data-service-toggle]")?.setAttribute("aria-expanded", String(expanded));
  });
};

serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => expandService(card));
  card.querySelector("[data-service-toggle]")?.addEventListener("click", () => expandService(card));
  card.querySelector("[data-service-toggle]")?.addEventListener("focus", () => expandService(card));
});

const solutionCards = [...document.querySelectorAll("[data-solution-card]")];
const solutionCurrent = document.querySelector("[data-solution-current]");
const solutionStatus = document.querySelector("[data-solution-status]");
let solutionIndex = 0;

const showSolution = (index, shouldScroll = true) => {
  solutionIndex = (index + solutionCards.length) % solutionCards.length;
  solutionCards.forEach((card, cardIndex) => {
    const selected = cardIndex === solutionIndex;
    card.classList.toggle("is-featured", selected);
    card.setAttribute("aria-current", selected ? "true" : "false");
    card.setAttribute("aria-hidden", String(!selected));
    card.hidden = !selected;
  });
  if (solutionCurrent) solutionCurrent.textContent = String(solutionIndex + 1);
  const selectedCard = solutionCards[solutionIndex];
  if (solutionStatus && selectedCard) {
    solutionStatus.setAttribute(
      "aria-label",
      `Løsning ${solutionIndex + 1} av ${solutionCards.length}: ${selectedCard.dataset.solutionName}`,
    );
  }
  if (shouldScroll && selectedCard) {
    if (!motionPreference.matches) {
      gsap.fromTo(selectedCard, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out", clearProps: "opacity,visibility,transform" });
    }
    window.requestAnimationFrame(() => {
      selectedCard.scrollIntoView({ behavior: motionPreference.matches ? "auto" : "smooth", block: "center" });
    });
  }
};

document.querySelector("[data-solution-prev]")?.addEventListener("click", () => showSolution(solutionIndex - 1));
document.querySelector("[data-solution-next]")?.addEventListener("click", () => showSolution(solutionIndex + 1));
showSolution(0, false);

const animationScope = gsap.context(() => {
  const motion = gsap.matchMedia();

  motion.add("(prefers-reduced-motion: no-preference)", () => {
    const heroReveals = gsap.utils.toArray(".hero .reveal");
    const pageReveals = gsap.utils.toArray(".reveal:not(.hero .reveal)");

    gsap.from(heroReveals, {
      autoAlpha: 0,
      y: 12,
      duration: 0.45,
      stagger: 0.08,
      ease: "power2.out",
      clearProps: "opacity,visibility,transform",
    });

    gsap.set(pageReveals, { autoAlpha: 0, y: 14 });
    ScrollTrigger.batch(pageReveals, {
      start: "top 90%",
      once: true,
      onEnter: (elements) => gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: "power1.out",
        clearProps: "opacity,visibility,transform",
      }),
    });

    const scrubCopy = document.querySelector(".scrub-copy");
    if (scrubCopy) {
      const words = scrubCopy.textContent.trim().split(/\s+/);
      scrubCopy.textContent = "";
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.className = "scrub-word";
        span.textContent = index === words.length - 1 ? word : `${word}\u00a0`;
        scrubCopy.append(span);
      });
      gsap.fromTo(
        scrubCopy.querySelectorAll(".scrub-word"),
        { opacity: 0.16 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: scrubCopy,
            start: "top 82%",
            end: "bottom 42%",
            scrub: true,
          },
        },
      );
    }

    gsap.utils.toArray(".about-visual img, .solution-demo, .document-flow").forEach((media) => {
      media.classList.add("gsap-media");
      gsap.from(media, {
        autoAlpha: 0.7,
        scale: 0.94,
        duration: 0.55,
        ease: "power2.out",
        clearProps: "opacity,visibility,transform",
        scrollTrigger: { trigger: media, start: "top 90%", once: true },
      });
    });

    const searchFlight = document.querySelector(".search-flight");
    const searchBee = searchFlight?.querySelector(".section-mascot--analysis");
    const searchPath = searchFlight?.querySelector(".search-flight__path");
    const searchClip = searchFlight?.querySelector(".search-flight__clip");

    if (searchFlight && searchBee && searchPath && searchClip) {
      gsap.set(searchClip, { scaleX: 0, svgOrigin: "0 95" });

      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: ".friction-grid",
          start: "top 42%",
          end: "bottom 32%",
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      })
        .to(searchClip, { scaleX: 1 }, 0)
        .to(searchBee, {
          motionPath: {
            path: searchPath,
            align: searchPath,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
        }, 0);
    }
  });

  const navLinks = gsap.utils.toArray(".desktop-nav a[href^='#'], .mobile-nav a[href^='#']");
  const navTargets = [...new Set(navLinks.map((link) => document.querySelector(link.hash)).filter(Boolean))];
  navTargets.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 38%",
      end: "bottom 38%",
      onToggle: ({ isActive }) => {
        if (!isActive) return;
        navLinks.forEach((link) => {
          if (link.hash === `#${section.id}`) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      },
    });
  });

  return () => motion.revert();
});

document.fonts?.ready.then(() => ScrollTrigger.refresh());
window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
window.addEventListener("pagehide", () => animationScope.revert(), { once: true });

const form = document.querySelector(".contact-form");
const submitButton = form?.querySelector(".button--submit");
const formStatus = form?.querySelector(".form-status");

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

  formStatus?.classList.remove("is-visible");
  if (!valid) {
    requiredFields.find((field) => !field.validity.valid)?.focus();
    return;
  }

  submitButton?.classList.add("is-loading");
  submitButton?.setAttribute("disabled", "");
  submitButton?.setAttribute("aria-busy", "true");
  submitButton?.setAttribute("aria-label", "Sender kartleggingen");
  await new Promise((resolve) => window.setTimeout(resolve, 850));

  submitButton?.classList.remove("is-loading");
  submitButton?.removeAttribute("disabled");
  submitButton?.setAttribute("aria-busy", "false");
  submitButton?.setAttribute("aria-label", "Send inn kartleggingen");
  if (formStatus) {
    formStatus.textContent = "Takk! Demonstrasjonen er fullført. I en publisert versjon ville henvendelsen blitt sendt til Kling nå.";
    formStatus.classList.add("is-visible");
  }
  form.reset();
  requiredFields.forEach((field) => {
    field.removeAttribute("aria-invalid");
    const error = field.parentElement?.querySelector(".field-error");
    if (error) error.textContent = "";
  });
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
