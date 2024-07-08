export function adjustLayoutForScale() {
  const scale = window.devicePixelRatio;
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (!isMobile) {
    if (scale > 1) {
      document.documentElement.style.fontSize = `${16 / scale}px`;
    } else {
      document.documentElement.style.fontSize = "16px";
    }
  }
}
