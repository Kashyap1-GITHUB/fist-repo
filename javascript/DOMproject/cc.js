let main = document.querySelector(".main")
let cursor = document.querySelector(".cursor")


main.addEventListener("mousemove",function(have){
   cursor.style.left = have.x+"px"    
   cursor.style.top = have.y+"px"    
})
