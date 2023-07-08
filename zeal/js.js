const account_display = document.querySelector(".account_display");
const followingButton = document.querySelector("#followingButton");
const close_icon = document.querySelector("#close_icon");
let Suggested_list = document.querySelector("#Suggested_list");
const person_add_icon = document.querySelector("#person_add_icon");
//////////////////////////////////////////////////////////////////
function filer() {
  document.querySelector(".information-container").style.overflow = "hidden";
  account_display.style.display = "block";
  document.querySelector(".header").style.filter = "blur(2px)";
  document.querySelector("#charlesDetail").style.filter = "blur(2px)";
  document.querySelector(".a").style.filter = "blur(2px)";
  document.querySelector(".sharing-of-photos").style.filter = "blur(2px)";
}
/////////////////////////////////////////////////////////////////
followingButton.addEventListener("click", () => {
  filer();
});
function noneFiler() {
  document.querySelector(".information-container").style.overflow = "none";
  account_display.style.display = "none";
  document.querySelector(".header").style.filter = "none";
  document.querySelector("#charlesDetail").style.filter = "none";
  document.querySelector(".a").style.filter = "none";
  document.querySelector(".sharing-of-photos").style.filter = "none";
}
close_icon.addEventListener("click", () => {
  noneFiler();
});

person_add_icon.addEventListener("click", () => {
  if (Suggested_list.style.display === "none") {
    Suggested_list.style.display = "block";
  }
});
