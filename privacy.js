import "@fontsource-variable/geist";
import "@phosphor-icons/web/regular";

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
