/*
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let count = 0;
btn.addEventListener("click",function(){
h2.innerHTML = "processing"
h2.style.color = "gold"    

if(count == 0){
    setTimeout(function(){
        h2.innerHTML = "friend"
        h2.style.color = "green"
        btn.innerHTML = "Remove Freind" 
        
        },3000)
count = 1;        
}
else{
    h2.innerHTML = "Stringer"
    h2.style.color = "red"
    btn.innerHTML = "Add friend" 
    btn.style.backgroundColor = "rgb(27, 169, 160)" 
    count = 0
}
})
*/

/*

let btn = document.querySelector("button");
let percent = document.getElementById("percent");
let growth = document.getElementById("growth");

let count = 0;  
let fleg = 0;
btn.addEventListener("click",function(){
if(fleg == 0){
    let int = setInterval(() => {
        count++
        percent.innerHTML = `${count}%`
        growth.style.width = `${count}%`
    }, 40);
    
    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = "Downloaded"
        btn.style.opacity = "0.9"
    }, 4000);
    fleg = 1;
}
else{
    percent.innerHTML = `0%`
        growth.style.width = `0%`
         btn.innerHTML = "Download File"
        btn.style.opacity = "1"
        fleg = 0
}
})
*/