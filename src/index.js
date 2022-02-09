import "./less/index.less";

// Your code goes here!

const navBar = document.querySelector("nav");

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

//Prevent Default
Array.from(document.links).forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

//Load- gives a message upon loading the website.

window.addEventListener("load", () => {
  alert("Have a nice vacation!");
});

//resize

//scroll

//select

//dbclick
