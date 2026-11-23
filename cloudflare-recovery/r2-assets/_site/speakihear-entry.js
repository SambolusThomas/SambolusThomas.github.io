(function () {
  const root = document.documentElement;
  const key = "sih-entry-intro-v1";
  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    root.classList.add("sih-intro-skipped");
    return;
  }

  let alreadyPlayed = false;
  try {
    alreadyPlayed = sessionStorage.getItem(key) === "1";
    if (!alreadyPlayed) sessionStorage.setItem(key, "1");
  } catch (_) {}

  if (alreadyPlayed) {
    root.classList.add("sih-intro-skipped");
    return;
  }

  root.classList.add("sih-show-intro");
  const preload = document.createElement("link");
  preload.rel = "preload";
  preload.as = "image";
  preload.href = "/assets/speakihear-cosmic-intro.png";
  document.head.appendChild(preload);

  document.addEventListener("DOMContentLoaded", function () {
    const layer = document.getElementById("sih-cosmic-intro");
    const image = layer && layer.querySelector("img");
    if (!layer || !image) return;

    function beginFade() {
      window.setTimeout(function () {
        layer.classList.add("sih-fading");
        window.setTimeout(function () {
          layer.remove();
          root.classList.remove("sih-show-intro");
        }, 1300);
      }, 2300);
    }

    if (image.complete && image.naturalWidth > 0) {
      beginFade();
    } else {
      image.addEventListener("load", beginFade, { once: true });
      image.addEventListener("error", function () {
        layer.remove();
        root.classList.remove("sih-show-intro");
      }, { once: true });
    }
  }, { once: true });
})();
