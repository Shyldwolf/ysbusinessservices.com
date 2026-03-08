document.addEventListener("DOMContentLoaded", () => {
  const btnEn = document.getElementById("btn-en");
  const btnEs = document.getElementById("btn-es");

  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-en]").forEach((el) => {
      const text = lang === "es" ? el.getAttribute("data-es") : el.getAttribute("data-en");

      // para inputs, textareas, buttons y otros elementos
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) {
          el.placeholder = text || "";
        } else {
          el.value = text || "";
        }
      } else {
        el.textContent = text || "";
      }
    });

    if (btnEn && btnEs) {
      btnEn.classList.toggle("active", lang === "en");
      btnEs.classList.toggle("active", lang === "es");
    }

    localStorage.setItem("siteLang", lang);
  }

  function getPreferredLanguage() {
    const saved = localStorage.getItem("siteLang");
    if (saved === "en" || saved === "es") return saved;

    const browserLang = navigator.language || navigator.userLanguage || "en";
    return browserLang.toLowerCase().startsWith("es") ? "es" : "en";
  }

  const initialLang = getPreferredLanguage();
  applyLanguage(initialLang);

  if (btnEn) {
    btnEn.addEventListener("click", () => applyLanguage("en"));
  }

  if (btnEs) {
    btnEs.addEventListener("click", () => applyLanguage("es"));
  }
});