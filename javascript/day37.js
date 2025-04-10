// let btn = document.querySelector("button")
// let box = document.querySelector("#box")

// function changebox(){
    //     box.style.backgroundColor = "red"
    //     console.log("function is runinng");
    
    // }
    // btn.addEventListener("click",changebox)
    
    
    let btn = document.querySelector("button")
    let h4 = document.querySelector("h4")

    let count = 0;
    btn.addEventListener("click",function(){
        if(count == 0){
            h4.innerText = "Friends"
            h4.style.color = "green"
            btn.innerText = "Remove "
            console.log("frinde done");
            
            count = 1
        }
        else{
            h4.innerText = "Stranger"
            h4.style.color = "red"
            btn.innerText = "Add Friends"
            console.log("Remove frinde done");


            count = 0
        }
        
    })