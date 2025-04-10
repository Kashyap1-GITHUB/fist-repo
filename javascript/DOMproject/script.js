let card = document.querySelector("#card")
let i = document.querySelector("i")


card.addEventListener("click",function(){
    i.style.transform = "translate(-50%,-50%) scale(1)"
    i.style. opacity = "1"
    i.style.transition = "all ease 0.2s";
   setTimeout(() => {
      i.style.transform = "translate(-50%,-50%) scale(0)"
    i.style. opacity = "1"
    i.style.transition = "none";

   }, 2000);
})