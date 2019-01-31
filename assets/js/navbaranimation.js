var qfind= document.getElementById("qfind");
var welcome=document.getElementById("welcome");
qfind.addEventListener("focus",function(){
    qfind.style.width="600px";
    qfind.style.border="1px solid #505050";
    welcome.style.display="none";
})
qfind.addEventListener("blur",function(){
    qfind.style.width="350px";
    qfind.style.border="none";
    welcome.style.display="block";
})