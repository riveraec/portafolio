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
    if (e.key !== "Escape") return;
    if (pdfModal && pdfModal.classList.contains("is-open")) {
      closePdfPreview();
      return;
    }
    var fabOpen = document.querySelector("[data-fo-fab] .fo-fab-panel:not([hidden])");
    if (fabOpen) {
      var closeBtn = document.querySelector("[data-fo-fab-close]");
      if (closeBtn) closeBtn.click();
    }
  });

  // Floating contact widget (Web3Forms).
  (function setupContactFab() {
    var root = document.querySelector("[data-fo-fab]");
    if (!root) return;

    var panel = root.querySelector("#fo-fab-panel");
    var toggle = root.querySelector("[data-fo-fab-toggle]");
    var closeBtn = root.querySelector("[data-fo-fab-close]");
    var label = root.querySelector("[data-fo-fab-label]");
    var form = root.querySelector("[data-fo-fab-form]");
    var feedback = root.querySelector("[data-fo-fab-feedback]");
    if (!panel || !toggle || !form) return;

    var lastFocus = null;
    var endpoint = "https://api.web3forms.com/submit";
    var nameRe = /^[\p{L}][\p{L}\s.'’-]*$/u;
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    var fields = {
      name: form.elements.namedItem("name"),
      email: form.elements.namedItem("email"),
      message: form.elements.namedItem("message"),
    };

    function setFeedback(message, isError) {
      if (!feedback) return;
      if (!message) {
        feedback.hidden = true;
        feedback.textContent = "";
        feedback.classList.remove("is-error");
        return;
      }
      feedback.hidden = false;
      feedback.textContent = message;
      feedback.classList.toggle("is-error", !!isError);
    }

    function setFieldError(name, message) {
      var el = fields[name];
      var err = form.querySelector('[data-fo-fab-error="' + name + '"]');
      var wrap = el && el.closest ? el.closest(".fo-fab-field") : null;
      if (wrap) wrap.classList.toggle("is-invalid", !!message);
      if (el) el.setAttribute("aria-invalid", message ? "true" : "false");
      if (!err) return;
      if (!message) {
        err.hidden = true;
        err.textContent = "";
        return;
      }
      err.hidden = false;
      err.textContent = message;
    }

    function clearFieldErrors() {
      Object.keys(fields).forEach(function (key) {
        setFieldError(key, "");
      });
    }

    function normalizeSpaces(value) {
      return String(value || "").trim().replace(/\s+/g, " ");
    }

    function validateName(raw) {
      var value = normalizeSpaces(raw);
      if (!value) return "Escribe tu nombre.";
      if (value.length < 2) return "Usa al menos 2 caracteres.";
      if (value.length > 80) return "Máximo 80 caracteres.";
      if (/\d/.test(value)) return "El nombre no debe incluir números.";
      if (!nameRe.test(value)) {
        return "Solo letras, espacios, guion o apóstrofe.";
      }
      if (!/[\p{L}]{2,}/u.test(value)) return "Usa un nombre real (mín. 2 letras).";
      return "";
    }

    function validateEmail(raw) {
      var value = String(raw || "").trim();
      if (!value) return "Escribe tu correo.";
      if (/\s/.test(value)) return "El correo no debe tener espacios.";
      if (value.length > 160) return "Máximo 160 caracteres.";
      if (!emailRe.test(value)) return "Formato inválido. Ej: ana@empresa.com";
      return "";
    }

    function validateMessage(raw) {
      var value = String(raw || "").trim();
      if (!value) return "Escribe un mensaje.";
      if (value.length < 20) return "Mínimo 20 caracteres.";
      if (value.length > 2000) return "Máximo 2000 caracteres.";
      return "";
    }

    function validateForm() {
      var nameVal = fields.name && "value" in fields.name ? fields.name.value : "";
      var emailVal = fields.email && "value" in fields.email ? fields.email.value : "";
      var messageVal = fields.message && "value" in fields.message ? fields.message.value : "";
      var errors = {
        name: validateName(nameVal),
        email: validateEmail(emailVal),
        message: validateMessage(messageVal),
      };
      setFieldError("name", errors.name);
      setFieldError("email", errors.email);
      setFieldError("message", errors.message);
      var firstInvalid = ["name", "email", "message"].find(function (key) {
        return !!errors[key];
      });
      return firstInvalid || "";
    }

    function setOpen(open) {
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (label) label.textContent = open ? "Cerrar" : "Contacto";
      if (open) {
        lastFocus = document.activeElement;
        var firstField = form.querySelector('input[name="name"], input:not([type="hidden"]):not(.fo-fab-honeypot), textarea');
        if (firstField) firstField.focus();
      } else if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
    }

    toggle.addEventListener("click", function () {
      setOpen(panel.hidden);
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        setOpen(false);
      });
    }

    Object.keys(fields).forEach(function (key) {
      var el = fields[key];
      if (!el || !el.addEventListener) return;
      el.addEventListener("input", function () {
        setFieldError(key, "");
        if (feedback && !feedback.hidden && feedback.classList.contains("is-error")) {
          setFeedback("");
        }
      });
      el.addEventListener("blur", function () {
        var value = "value" in el ? el.value : "";
        var msg =
          key === "name"
            ? validateName(value)
            : key === "email"
              ? validateEmail(value)
              : validateMessage(value);
        if (String(value || "").trim()) setFieldError(key, msg);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setFeedback("");

      var firstInvalid = validateForm();
      if (firstInvalid) {
        setFeedback("Revisa los campos marcados.", true);
        var bad = fields[firstInvalid];
        if (bad && typeof bad.focus === "function") bad.focus();
        return;
      }

      if (fields.name && "value" in fields.name) {
        fields.name.value = normalizeSpaces(fields.name.value);
      }
      if (fields.email && "value" in fields.email) {
        fields.email.value = String(fields.email.value).trim().toLowerCase();
      }
      if (fields.message && "value" in fields.message) {
        fields.message.value = String(fields.message.value).trim();
      }

      var access = form.querySelector('input[name="access_key"]');
      var accessKey = access ? String(access.value || "").trim() : "";
      if (!accessKey || accessKey === "YOUR_ACCESS_KEY") {
        setFeedback("Falta configurar la Access Key de Web3Forms.", true);
        return;
      }

      var bot = form.querySelector('input[name="botcheck"]');
      if (bot && bot.checked) {
        setFeedback("No se pudo enviar. Intenta de nuevo.", true);
        return;
      }

      var submitBtn = form.querySelector(".fo-fab-submit");
      if (submitBtn) submitBtn.disabled = true;

      var payload = new FormData(form);
      fetch(endpoint, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          if (result.ok && result.data && result.data.success) {
            form.reset();
            clearFieldErrors();
            setFeedback("Mensaje enviado. Hablamos pronto.");
            return;
          }
          var err =
            (result.data && (result.data.message || result.data.error)) ||
            "No se pudo enviar. Prueba correo o LinkedIn.";
          setFeedback(String(err), true);
        })
        .catch(function () {
          setFeedback("Error de red. Prueba correo o LinkedIn.", true);
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  })();

  // Copiar correo / teléfono en Contacto.
  (function setupContactCopy() {
    var buttons = document.querySelectorAll(".fo-contact-copy[data-copy]");
    if (!buttons.length) return;

    function flashCopied(btn) {
      var icon = btn.querySelector("i");
      var label = btn.querySelector("span");
      var prevLabel = label ? label.textContent : "";
      btn.classList.add("is-copied");
      if (icon) icon.className = "bi bi-check2";
      if (label) label.textContent = "Copiado";
      setTimeout(function () {
        btn.classList.remove("is-copied");
        if (icon) icon.className = "bi bi-clipboard";
        if (label) label.textContent = prevLabel || "Copiar";
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
