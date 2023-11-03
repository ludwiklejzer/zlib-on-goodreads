// ==UserScript==
// @name         Download book on Z-Library
// @namespace    https://raw.githubusercontent.com/ludwiklejzer/zlib-on-goodreads
// @version      0.1
// @description  Change "Buy on Amazon" button to "Download on Z-Library"
// @author       ludwiklejzer (https://github.com/ludwiklejzer)
// @match        https://*.goodreads.com/book/*
// @supportURL   https://github.com/ludwiklejzer/zlib-on-goodreads/issues
// @homepageURL  https://github.com/ludwiklejzer/zlib-on-goodreads
// @updateURL    https://raw.githubusercontent.com/ludwiklejzer/zlib-on-goodreads/main/zlib-on-goodreads.user.js
// @downloadURL  https://raw.githubusercontent.com/ludwiklejzer/zlib-on-goodreads/main/zlib-on-goodreads.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const originalBtn = document.querySelector(
    "button.Button.Button--buy.Button--medium.Button--block",
  );
  const newBtn = document.createElement("div");
  const span = document.createElement("span");
  const bookName = document.querySelector(
    "[data-testid='bookTitle']",
  ).innerText;
  const url = `https://z-library.se/s/?q=${encodeURI(bookName)}`;

  span.innerText = "Download on Z-Library";
  span.classList.add("Button__labelItem");
  newBtn.classList.add(
    "Button",
    "Button--buy",
    "Button--medium",
    "Button--block",
  );
  newBtn.onclick = () => window.open(url, "_blank").focus();
  newBtn.appendChild(span);

  originalBtn.replaceWith(newBtn);
})();
