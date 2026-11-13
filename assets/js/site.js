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

  // Vista previa de certificados PDF dentro del sitio (Formación).
  var pdfModal = document.getElementById("fo-pdf-modal");
  var pdfFrame = document.getElementById("fo-pdf-frame");
  var pdfTitle = document.getElementById("fo-pdf-title");
  var pdfOpen = document.getElementById("fo-pdf-open");
  var pdfClose = document.getElementById("fo-pdf-close");
  var pdfLastFocus = null;

  function openPdfPreview(src, title) {
    if (!pdfModal || !pdfFrame || !src) return;
    pdfLastFocus = document.activeElement;
    if (pdfTitle) pdfTitle.textContent = title || "Certificado";
    if (pdfOpen) pdfOpen.href = src;
    pdfFrame.src = src;
    pdfModal.hidden = false;
    void pdfModal.offsetWidth;
    pdfModal.classList.add("is-open");
    pdfModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (pdfClose) pdfClose.focus();
  }

  function closePdfPreview() {
    if (!pdfModal || !pdfFrame) return;
    pdfModal.classList.remove("is-open");
    pdfModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    var finish = function () {
      pdfModal.hidden = true;
      pdfFrame.removeAttribute("src");
      if (pdfLastFocus && typeof pdfLastFocus.focus === "function") pdfLastFocus.focus();
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    setTimeout(finish, 240);
  }

  document.querySelectorAll("[data-pdf-preview]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      openPdfPreview(
        a.getAttribute("href"),
        a.getAttribute("data-pdf-title") || a.getAttribute("aria-label")
      );
    });
  });

  if (pdfClose) pdfClose.addEventListener("click", closePdfPreview);
  if (pdfModal) {
    pdfModal.addEventListener("click", function (e) {
      if (e.target === pdfModal) closePdfPreview();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && pdfModal && pdfModal.classList.contains("is-open")) {
      closePdfPreview();
    }
  });

  // Copiar correo / teléfono en Contacto.
  (function setupContactCopy() {
    var buttons = document.querySelectorAll(".fo-contact-copy[data-copy]");
    if (!buttons.length) return;

    function flashCopied(btn) {
      var icon = btn.querySelector("i");
      btn.classList.add("is-copied");
      if (icon) {
        icon.className = "bi bi-check2";
      }
      setTimeout(function () {
        btn.classList.remove("is-copied");
        if (icon) icon.className = "bi bi-clipboard";
      }, 1400);
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var value = btn.getAttribute("data-copy") || "";
        if (!value) return;
        var done = function () {
          flashCopied(btn);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(done).catch(function () {
            window.prompt("Copia este dato:", value);
          });
        } else {
          window.prompt("Copia este dato:", value);
        }
      });
    });
  })();

  // Confirmación visual al descargar el CV.
  (function setupCvToast() {
    var toast = document.createElement("div");
    toast.className = "fo-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.hidden = true;
    toast.innerHTML =
      '<i class="bi bi-check-circle-fill" aria-hidden="true"></i>' +
      "<span>CV descargado</span>";
    document.body.appendChild(toast);

    var hideTimer = null;
    function showToast() {
      toast.hidden = false;
      void toast.offsetWidth;
      toast.classList.add("is-visible");
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(function () {
        toast.classList.remove("is-visible");
        setTimeout(function () {
          toast.hidden = true;
        }, 280);
      }, 2200);
    }

    document.querySelectorAll('a[href*="Efrain_Rivera_CV.pdf"]').forEach(function (a) {
      a.addEventListener("click", function () {
        showToast();
      });
    });
  })();

  var links = Array.prototype.slice.call(
    document.querySelectorAll(".fo-nav-scroll a[href^='#']")
  );
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
