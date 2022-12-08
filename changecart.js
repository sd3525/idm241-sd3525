let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "img/smallcart.png") {
    myImage.setAttribute("src", "img/smallcart2.png");
  } else {
    myImage.setAttribute("src", "img/smallcart.png");
  }
};
