var starter=document.getElementById("form");
var Yes=document.getElementById("Yes");
var No=document.getElementById("No");
var Gi=document.getElementById("Visible");
Gi.style.visibility="hidden";
Yes.addEventListener("click",NowVisible);
function NowVisible(){
    Gi.style.visibility="visible";
}
No.addEventListener("mouseover",CantCatch);
function CantCatch(){
    No.style.left=Math.floor(Math.random()*(window.innerWidth-50)+1)+'px';
    No.style.top=Math.floor(Math.random()*(window.innerHeight-100)+1)+'px';
}
