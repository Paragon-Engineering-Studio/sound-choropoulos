const SCROLL_GAP = 0;
const SCROLL_NUDGE = 72;

let frame = 0;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function getScrollOffset() {
  const nav = document.querySelector("[data-scroll-offset-root]");
  if (nav instanceof HTMLElement) {
    return Math.ceil(nav.getBoundingClientRect().bottom + SCROLL_GAP);
  }

  return 72;
}

function getScrollTarget(id: string) {
  const section = document.getElementById(id);
  if (!section) return null;

  return section.querySelector("h2") ?? section;
}

export function scrollToSection(href: string) {
  const id = href.replace("#", "");
  if (id === "top") {
    animateScroll(0, href);
    return;
  }

  const target = getScrollTarget(id);
  if (!target) return;

  const offset = getScrollOffset();
  const destination = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - offset + SCROLL_NUDGE,
  );

  animateScroll(destination, href);
}

function animateScroll(destination: number, href: string) {
  const start = window.scrollY;
  const distance = destination - start;

  if (Math.abs(distance) < 2) {
    window.history.pushState(null, "", href);
    return;
  }

  const duration = Math.min(1100, Math.max(480, Math.abs(distance) * 0.45));
  cancelAnimationFrame(frame);

  const started = performance.now();
  const step = (now: number) => {
    const progress = Math.min(1, (now - started) / duration);
    window.scrollTo({ top: start + distance * easeInOutCubic(progress) });
    if (progress < 1) {
      frame = requestAnimationFrame(step);
    }
  };

  frame = requestAnimationFrame(step);
  window.history.pushState(null, "", href);
}
