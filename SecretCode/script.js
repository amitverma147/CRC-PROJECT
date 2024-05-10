var btn = document.querySelector("button");
var h3 = document.querySelector("h3");
var input = document.querySelector("input");
var secretCode = ""; 

btn.addEventListener("click", function () {
  var data = Number(input.value);
  if (data === 0 || isNaN(data)) {
    
    alert("Please enter a valid length.");
    h3.innerHTML = ""; 
  } else {
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    secretCode = ""; 
    for (let i = 0; i < data; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      secretCode += charset[randomIndex];
    }
    h3.innerHTML = secretCode; 
  }
});

input.addEventListener("input", function () {
  h3.innerHTML = ""; 
});
