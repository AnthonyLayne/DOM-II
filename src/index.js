import "./less/index.less";

// Your code goes here!

const navBar = document.querySelector("nav");
const logo = document.querySelector("logo-heading");
const introImg = document.querySelector("intro img");
const contentDest = document.querySelector("content-destination h2");

//focusin/focusout-turns lightblue when clicked on, when clicked off turns green.

navBar.addEventListener("focusin", (event) => {
  event.target.style.background = "lightblue";
  navBar.addEventListener("focusout", (event) => {
    event.target.style.background = "lightgreen";
  });
});

//mouseover

window.addEventListener("mouseover", () => {
  console.log("mouseover is functioning");
});
//keydown

document.addEventListener("keydown", logKey);
function logKey(key) {
  console.log(`${key.code}`);
}

Array.from(document.links).forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
//wheel

//load

//resize

//scroll

//select

//dbclick
