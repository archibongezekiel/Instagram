const account_display = document.querySelector(".account_display");
const followingButton = document.querySelector("#followingButton");
const close_icon = document.querySelector("#close_icon");
const Suggested_list = document.querySelector("#Suggested_list");
const person_add_icon = document.querySelector("#person_add");
const see_all_icon = document.querySelector(".see_all_icon");
const footer = document.querySelector(".footer");
const close_icons = document.querySelector("#close_icons");
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
////////////////////////////////////////////////////////////////////
function noneFiler() {
  document.querySelector(".information-container").style.overflow = "scroll";
  account_display.style.display = "none";
  document.querySelector(".header").style.filter = "none";
  document.querySelector("#charlesDetail").style.filter = "none";
  document.querySelector(".a").style.filter = "none";
  document.querySelector(".sharing-of-photos").style.filter = "none";
}
close_icon.addEventListener("click", () => {
  noneFiler();
});
///////////////////////////////////////////////////////////////
person_add.addEventListener("click", () => {
  if (Suggested_list.style.display === "none") {
    Suggested_list.style.display = "block";
  } else {
    Suggested_list.style.display = "none";
  }
});
/////////////////////////////////////////////////////
function filerS() {
  document.querySelector(".information-container").style.overflow = "hidden";
  footer.style.display = "block";
  document.querySelector(".header").style.filter = "blur(2px)";
  document.querySelector("#charlesDetail").style.filter = "blur(2px)";
  document.querySelector(".a").style.filter = "blur(2px)";
  document.querySelector(".sharing-of-photos").style.filter = "blur(2px)";
}
see_all_icon.addEventListener("click", () => {
  filerS();
});
//////////////////////////////////////////////////////////
function noneFilerS() {
  document.querySelector(".information-container").style.overflow = "scroll";
  footer.style.display = "none";
  document.querySelector(".header").style.filter = "none";
  document.querySelector("#charlesDetail").style.filter = "none";
  document.querySelector(".a").style.filter = "none";
  document.querySelector(".sharing-of-photos").style.filter = "none";
}
close_icons.addEventListener("click", () => {
  noneFilerS();
});
