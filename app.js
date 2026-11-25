(function () {
  var NAME = "Ashen Dawn";   // nom provisoire : à changer ici seulement
  var els = document.querySelectorAll(".name"); for (var i = 0; i < els.length; i++) els[i].textContent = NAME;
  function set(l) {
    document.documentElement.lang = l;
    var b = document.querySelectorAll("[data-set]");
    for (var i = 0; i < b.length; i++) b[i].setAttribute("aria-pressed", b[i].getAttribute("data-set") === l ? "true" : "false");
    var t = document.querySelector("title"), v = t && t.getAttribute("data-" + l);
    if (v) document.title = v.replace("{name}", NAME);
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  var init = "fr";
  try { init = localStorage.getItem("lang") || ((navigator.language || "fr").slice(0, 2) === "fr" ? "fr" : "en"); } catch (e) {}
  set(init === "en" ? "en" : "fr");
  var b = document.querySelectorAll("[data-set]");
  for (var j = 0; j < b.length; j++) b[j].addEventListener("click", function () { set(this.getAttribute("data-set")); });
})();
