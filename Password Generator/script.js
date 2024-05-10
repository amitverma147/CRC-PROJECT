var btn = document.querySelector("button");
var h3 = document.querySelector("h3");

btn.addEventListener("click", function(){
 const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
 const numbers = "0123456789";
 const specialCharacters = "!@#$%^&*()-_+=<>?";

 let uppercase =
   uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];

 let numeric = "";
 for (let i = 0; i < 2; i++) {
   numeric += numbers[Math.floor(Math.random() * numbers.length)];
 }

 let lower =
   lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];

 let special =
   specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

 let remaining = "";
 for (let i = 0; i < 3; i++) {
   const charset =
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]<>?/|";
   remaining += charset.charAt(Math.floor(Math.random() * charset.length));
 }

 let password = uppercase + numeric + lower + special + remaining;
 h3.innerHTML=password;
 h3.style.opacity=1;
});
