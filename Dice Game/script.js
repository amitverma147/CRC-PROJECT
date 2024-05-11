var btn = document.querySelector("#button");
var img = document.querySelector("#image");

btn.addEventListener("click", function () {
  var no = Math.floor(Math.random() * 5) + 1;
  img.src = "./images/" + no + ".png";
});
