const account_display = document.querySelector(".account_display");
const followingButton = document.querySelector("#followingButton");

function filer() {
  document.querySelector(".information-container").style.overflow = "hidden";
  account_display.style.display = "block";
  document.querySelector(".header").style.filter = "blur(2px)";
  document.querySelector("#charlesDetail").style.filter = "blur(2px)";
  document.querySelector(".a").style.filter = "blur(2px)";
  document.querySelector(".sharing-of-photos").style.filter = "blur(2px)";
}
followingButton.addEventListener("click", () => {
  filer();
});
