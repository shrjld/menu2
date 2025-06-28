let mymenu=document.querySelector("#menu");
let btnOpen=document.querySelector("#open");
btnOpen.addEventListener('click',menuopen);

let btn2=document.querySelector(".close");
btn2.addEventListener('click',menuclose);

function  menuopen(){
    debugger
    mymenu.style.display='block';
     mymenu.classList.add('menuOpen');
    btnOpen.style.display="none";

}
 function menuclose(){
    mymenu.style.display="none";
    btnOpen.style.display="block";
 }