/* =========================================================================
   Mayer Elektro – minimales JavaScript
   -------------------------------------------------------------------------
   Bewusst schlank gehalten (kein Framework):
   1. Mobiles Menü öffnen/schließen (barrierefrei, aria-expanded)
   2. Jahr im Footer automatisch setzen
   3. Formular-Schutz: verhindert Absenden an einen Platzhalter-Endpoint,
      solange kein echtes Ziel (Formspree/Netlify) eingetragen ist.
   ========================================================================= */

(function () {
  "use strict";

  /* -----------------------------------------------------------------------
     1. Mobiles Menü
     --------------------------------------------------------------------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
    });

    // Menü schließen, wenn ein Link angeklickt wird (mobil)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Menü öffnen");
      }
    });
  }

  /* -----------------------------------------------------------------------
     2. Aktuelles Jahr im Footer
     --------------------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* -----------------------------------------------------------------------
     3. Formular-Platzhalter-Schutz
     Solange im <form> action noch der Platzhalter steht (data-form="placeholder"
     und "DEIN_FORM_ID" im action), wird das echte Absenden verhindert und ein
     Hinweis angezeigt. Sobald ein echtes Formspree-/Netlify-Ziel eingetragen
     ist, einfach das Attribut data-form="placeholder" entfernen –
     dann sendet das Formular ganz normal.
     --------------------------------------------------------------------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  if (form) {
    var action = form.getAttribute("action") || "";
    var isPlaceholder =
      form.getAttribute("data-form") === "placeholder" ||
      action.indexOf("DEIN_FORM_ID") !== -1 ||
      action.indexOf("[SO") !== -1 ||
      action.trim() === "";

    form.addEventListener("submit", function (e) {
      // Einfache Pflichtfeld-Prüfung (zusätzlich zu HTML5-required)
      if (!form.checkValidity()) {
        e.preventDefault();
        if (status) {
          status.textContent = "Bitte füllen Sie alle Pflichtfelder aus.";
          status.style.color = "#d92d20";
        }
        return;
      }

      if (isPlaceholder) {
        // Kein Fake-Submit: klarer Hinweis für den Betreiber statt stiller Fehler.
        e.preventDefault();
        if (status) {
          status.textContent =
            "Hinweis für den Betreiber: Bitte im Formular-Tag ein echtes " +
            "Formspree- oder Netlify-Ziel eintragen (action) und " +
            'data-form="placeholder" entfernen, damit Anfragen ankommen.';
          status.style.color = "#d92d20";
        }
        // Zusätzlich in der Konsole, damit es beim Einrichten auffällt:
        // eslint-disable-next-line no-console
        console.warn(
          "[Mayer Elektro] Kontaktformular ist noch ein Platzhalter. " +
            "action= auf Formspree/Netlify setzen und data-form=placeholder entfernen."
        );
      }
      // Wenn kein Platzhalter: Formular sendet normal an den echten Endpoint.
    });
  }
})();
