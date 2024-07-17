// utils/adjustLayout.js
export function adjustLayoutForScale() {
  const scale = window.devicePixelRatio;
  let isMobile = window.matchMedia(
    "only screen and (max-width: 1024px)"
  ).matches;

  if (!isMobile) {
    if (scale > 1) {
      document.documentElement.style.fontSize = `${16 / scale}px`;
    } else {
      document.documentElement.style.fontSize = "16px";
    }
  }
}
