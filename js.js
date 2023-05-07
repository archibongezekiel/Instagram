"use strict";
let imageTag = document.querySelector(".image");
let profile = document.querySelector(".profile-pic");
let selection = document.querySelector("#select");

let image = [
  "download.jpeg",
  "download1.jpeg",
  "index.jpeg",
  "download4.  jpeg",
  "download3.jpeg",
  "download6.jpeg",
  "download5.jpeg",
];
let i = 0;
function next() {
  if (i >= image.length - 1) {
    return false;
  }
  i++;
  imageTag.setAttribute("src", image[i]);
}
function back() {
  if (i <= 0) {
    return false;
  }
  i--;
  imageTag.setAttribute("src", image[i]);
}
console.log(image);
let heartButton = document.querySelector(".like");
heartButton.addEventListener("clike", function () {
  alert("gg");
});
function returns(p) {
  return (parseInt(p, 16) % 60) + 1;
}

returns("ezekiel");
console.log(returns("cdcnnrnrnrdnjjr vvnd"));
