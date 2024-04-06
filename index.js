const btnEl = document.querySelector(".btn");

btnEl,addEventListener("mouseover", (Event)=>{
   const x = Event.pagex - btnEl.offsetLeft
   const y = Event.pagey - btnEl.offsetTop;
   
   btnEl.Style.setproperty("--xpos", x + "px");
   btnEl.Style.setproperty("--ypos" , y + "px");
});
