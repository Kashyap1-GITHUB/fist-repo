let btn = document.querySelector("button")
let img1 =  document.querySelector("#img1")
let img2 =  document.querySelector("#img2")



btn.addEventListener("click",function(){
    let att1 = img1.getAttribute("src")
    let att2 = img2.getAttribute("src")


    img1.setAttribute("src",att2)
    img2.setAttribute("src",att1)
  
    
})