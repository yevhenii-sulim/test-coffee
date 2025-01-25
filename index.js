const [burger, menuSvgOpen, menuSvgClose, nav, body] = [
  ".button-menu",
  ".menu-svg.open",
  ".menu-svg.close",
  ".nav",
  "body",
].map((item) => document.querySelector(item));
burger.addEventListener("click", toggle);
nav.addEventListener("click", closeMenu);

function toggle() {
  nav.classList.toggle("is-open");
  if (nav.classList.contains("is-open")) {
    menuSvgClose.classList.remove("is-close");
    menuSvgOpen.classList.add("is-close");
    body.classList.add("close");
  } else {
    menuSvgOpen.classList.remove("is-close");
    menuSvgClose.classList.add("is-close");
    body.classList.remove("close");
  }
}
function closeMenu(event) {
  const target = event.target.closest(".list");
  if (target) {
    nav.classList.remove("is-open");
    menuSvgOpen.classList.remove("is-close");
    menuSvgClose.classList.add("is-close");
    body.classList.remove("close");
  }
}
