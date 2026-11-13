(function () {
  var key = "fo-theme";
  var root = document.documentElement;
  var btn = document.getElementById("fo-theme-toggle");

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(key, theme);
    if (btn) {
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
      );
    }
  }

  if (btn) {
    btn.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
    setTheme(currentTheme());
  }

  var lightbox = document.getElementById("fo-lightbox");
  var lightboxImg = document.getElementById("fo-lightbox-img");
  var lightboxCaption = document.getElementById("fo-lightbox-caption");
  var lightboxClose = document.getElementById("fo-lightbox-close");
  var lastFocus = null;

  function openLightbox(src, caption, alt) {
    if (!lightbox || !lightboxImg || !src) return;
    lastFocus = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    if (lightboxCaption) lightboxCaption.textContent = caption || "";
    lightbox.hidden = false;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove("is-open");
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.removeAttribute("src");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  document.querySelectorAll("[data-lightbox]").forEach(function (el) {
    el.addEventListener("click", function () {
      var src = el.getAttribute("data-src");
      var img = el.querySelector("img");
      var cap = el.querySelector("figcaption");
      openLightbox(
        src || (img && img.getAttribute("src")),
        cap ? cap.textContent.trim() : "",
        img ? img.getAttribute("alt") : ""
      );
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });

  // Confirmación visual al descargar el CV (la descarga del navegador sigue igual).
  (function setupCvToast() {
    var toast = document.createElement("div");
    toast.className = "fo-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.hidden = true;
    toast.innerHTML =
      '<i class="bi bi-check-circle-fill" aria-hidden="true"></i>' +
      "<span>CV descargado · revisa tus descargas</span>";
    document.body.appendChild(toast);

    var hideTimer = null;
    function showToast() {
      toast.hidden = false;
      // Force reflow so the enter transition runs.
      void toast.offsetWidth;
      toast.classList.add("is-visible");
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        toast.classList.remove("is-visible");
        setTimeout(function () {
          toast.hidden = true;
        }, 280);
      }, 2800);
    }

    document.querySelectorAll('a[href*="Efrain_Rivera_CV.pdf"]').forEach(function (a) {
      a.addEventListener("click", function () {
        showToast();
      });
    });
  })();

  var links = Array.prototype.slice.call(document.querySelectorAll(".fo-nav-scroll a[href^='#']"));
  if (!links.length) return;

  var sectionById = {};
  links.forEach(function (a) {
    var id = (a.getAttribute("href") || "").slice(1);
    var el = id ? document.getElementById(id) : null;
    if (el) sectionById[id] = { el: el, link: a };
  });
  var observed = Object.keys(sectionById).map(function (id) {
    return sectionById[id].el;
  });
  var activeId = null;

  function setActive(id) {
    if (!id || id === activeId) return;
    activeId = id;
    links.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && observed.length) {
    var ratios = {};
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          ratios[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0;
        });
        var best = null;
        var bestRatio = 0;
        Object.keys(ratios).forEach(function (id) {
          if (ratios[id] > bestRatio) {
            bestRatio = ratios[id];
            best = id;
          }
        });
        if (best) setActive(best);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.55, 0.75, 1] }
    );
    observed.forEach(function (s) {
      io.observe(s);
    });
  } else if (observed.length) {
    function setActiveFallback() {
      var y = window.scrollY + 96;
      var current = observed[0];
      observed.forEach(function (s) {
        if (s.offsetTop <= y) current = s;
      });
      if (current) setActive(current.id);
    }
    window.addEventListener("scroll", setActiveFallback, { passive: true });
    setActiveFallback();
  }
})();
