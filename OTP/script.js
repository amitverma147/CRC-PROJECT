var btn=document.querySelector('button');
var h3=document.querySelector('h3');

btn.addEventListener('click', function(){
    var otp=Math.floor(Math.random()*(90000))+10000;
    h3.innerHTML=otp;
});