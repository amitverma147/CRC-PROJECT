var btn=document.querySelector('button');
var h3=document.querySelector('h3');

btn.addEventListener('click', function(){
    var otp=Math.floor(Math.random()*(8999))+1000;
    h3.innerHTML=otp;
});