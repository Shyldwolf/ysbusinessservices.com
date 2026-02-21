(function () {
  const K = "ys_lang";
  const D = "en";

  function getLang() {
    return localStorage.getItem(K) || D;
  }

  function apply(l) {
    document.documentElement.setAttribute("lang", l);

    document.querySelectorAll("[data-en][data-es]").forEach((el) => {
      el.textContent = (l === "es") ? (el.dataset.es || "") : (el.dataset.en || "");
    });

    const en = document.getElementById("btn-en");
    const es = document.getElementById("btn-es");
    if (en && es) {
      en.classList.toggle("active", l === "en");
      es.classList.toggle("active", l === "es");
    }
  }

  function setLang(l) {
    localStorage.setItem(K, l);
    apply(l);
  }

  function init() {
    apply(getLang());
    const en = document.getElementById("btn-en");
    const es = document.getElementById("btn-es");
    if (en) en.addEventListener("click", () => setLang("en"));
    if (es) es.addEventListener("click", () => setLang("es"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();