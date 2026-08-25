import "@fontsource-variable/geist";
import "./phosphor-icons.css";

const menuButton = document.querySelector(".service-menu-button");
const mobileNav = document.querySelector(".service-mobile-nav");

const closeMenu = () => {
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Åpne meny");
  mobileNav?.setAttribute("aria-hidden", "true");
  mobileNav?.classList.remove("is-open");
};

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Lukk meny" : "Åpne meny");
  mobileNav?.setAttribute("aria-hidden", String(!open));
  mobileNav?.classList.toggle("is-open", open);
});

mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
