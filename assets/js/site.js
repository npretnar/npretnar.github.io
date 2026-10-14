// Research page: "Expand all / Collapse all", open a paper when its #anchor
// is linked, and expand everything when printing. The page works without JS.
(function () {
  var papers = Array.prototype.slice.call(document.querySelectorAll("details.paper"));
  if (!papers.length) return;

  function setAll(open) {
    papers.forEach(function (d) { d.open = open; });
  }

  var toolbar = document.querySelector(".toolbar");
  if (toolbar) {
    toolbar.hidden = false;
    toolbar.addEventListener("click", function (e) {
      var button = e.target.closest("[data-toggle-all]");
      if (button) setAll(button.getAttribute("data-toggle-all") === "open");
    });
  }

  function openFromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    var el = id && document.getElementById(id);
    if (el && el.tagName === "DETAILS") {
      el.open = true;
      el.scrollIntoView();
    }
  }
  openFromHash();
  window.addEventListener("hashchange", openFromHash);

  window.addEventListener("beforeprint", function () { setAll(true); });
})();
