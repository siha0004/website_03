// Burgermenu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// Overlay
// Originally from https://codepen.io/nxworld/pen/MvJQQy
// ChatGPT used for code without jQuery https://chat.openai.com/c/3ef19e1c-9849-4b8e-9d62-bf327aeec5ca

document.addEventListener("DOMContentLoaded", function () {
  // Variabeldeklaration
  var overlays = document.querySelectorAll(".overlay");
  var overlayTriggers = document.querySelectorAll(".overlay-trigger");
  var overlayClose = document.querySelectorAll(".overlay-close");
  var openClass = "is-open";

  // Åbn overlay
  overlayTriggers.forEach(function (trigger, index) {
    trigger.addEventListener("click", function () {
      var num = ("0" + (index + 1)).slice(-2);
      var overlay = document.querySelector(".overlay" + num);
      overlay.classList.add(openClass);
      overlayClose.forEach(function (close) {
        close.classList.add(openClass);
      });
    });
  });

  // Luk overlay
  overlayClose.forEach(function (close) {
    close.addEventListener("click", function () {
      overlayClose.forEach(function (close) {
        close.classList.remove(openClass);
      });
      overlays.forEach(function (overlay) {
        overlay.classList.remove(openClass);
      });
    });
  });
});
