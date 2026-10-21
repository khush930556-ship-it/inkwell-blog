/* =========================================================
   Inkwell — interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Header shadow on scroll ---------- */
  var header = document.getElementById("siteHeader");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile navigation ---------- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");

  if (nav && navToggle) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  /* ---------- Category filtering + load more ---------- */
  var grid = document.getElementById("postGrid");
  var loadMore = document.getElementById("loadMore");
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".filter"));

  if (grid && loadMore) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".post-card"));
    var extras = cards.filter(function (card) {
      return card.classList.contains("is-extra");
    });

    var revealed = new Set();
    var activeFilter = "all";
    var PAGE_SIZE = 3;

    function matchesFilter(card) {
      return activeFilter === "all" || card.dataset.category === activeFilter;
    }

    function pendingExtras() {
      return extras.filter(function (card) {
        return matchesFilter(card) && !revealed.has(card);
      });
    }

    function render() {
      cards.forEach(function (card) {
        var isExtra = card.classList.contains("is-extra");
        var visible = (!isExtra || revealed.has(card)) && matchesFilter(card);
        card.hidden = !visible;
      });

      loadMore.hidden = pendingExtras().length === 0;
    }

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        filterButtons.forEach(function (b) {
          b.classList.remove("is-active");
        });
        button.classList.add("is-active");
        activeFilter = button.dataset.filter;
        render();
      });
    });

    loadMore.addEventListener("click", function () {
      pendingExtras()
        .slice(0, PAGE_SIZE)
        .forEach(function (card) {
          revealed.add(card);
        });
      render();
    });

    render();
  }

  /* ---------- Newsletter form ---------- */
  var form = document.getElementById("newsletterForm");
  var formMsg = document.getElementById("formMsg");

  if (form && formMsg) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var input = form.querySelector("input[type='email']");
      var email = input ? input.value.trim() : "";
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      formMsg.classList.toggle("is-error", !valid);

      if (!valid) {
        formMsg.textContent = "Please enter a valid email address.";
        if (input) input.focus();
        return;
      }

      formMsg.textContent = "Thanks! " + email + " is subscribed — check your inbox.";
      form.reset();
    });
  }
})();
