"use strict";

const pw1 = document.querySelector("#pwd-1");
const pw2 = document.querySelector("#pwd-2");
const form = document.querySelector("form");
const pwWarn = document.querySelector(".pwWarning");

form.addEventListener("submit", (e) => {
  console.log(pw1.value);
  console.log(pw2.value);

  if (pw1.value !== pw2.value) {
    e.preventDefault();
    pw1.classList.add("error");
    pw2.classList.add("error");
    pwWarn.style.visibility = "visible";
  }
});
