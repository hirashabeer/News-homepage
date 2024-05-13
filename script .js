document.addEventListener('DOMContentLoaded', ()=> { 
const button =document.querySelector("#button");
const cross = document.querySelector(".cross");
const lines = document.querySelector(".lines")
const popupMenu = document.querySelector(".popupMenu");

button.addEventListener("click", ()=>{
    popupMenu.classList.toggle("boom");
    lines.classList.toggle('lines1');
    cross.classList.toggle('cross1');


})
// button2.addEventListener("click", ()=>{
//     popupMenu.classList.toggle("popupMenu");
//     button.classList.toggle('lines');
//     button2.classList.toggle('cross');


// })
});
