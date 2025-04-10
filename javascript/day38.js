/*
      rendom color ganaretar

let btn = document.querySelector("button");
let box = document.getElementById("box")

btn.addEventListener("click",function(){
  let c1 = Math.floor(Math.random()*256);
  let c2 = Math.floor(Math.random()*256);
  let c3 = Math.floor(Math.random()*256);
  
//   console.log(c1,c2,c3);
box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
btn.style.backgroundColor = `rgb(${c1},${c2},${c3})`

})
*/
/*
let arr = ['CSK','KKR','RCB','DC','RR','PK','SRH','MI','LSG','GT']

let btn = document.querySelector("button");
let display = document.querySelector("h2");

btn.addEventListener("click",function(){
  let c = Math.floor(Math.random()*arr.length);
  let winwer = arr[c]
  console.log(winwer);
  
  display.innerHTML = arr[c] 
})
  */

let arr = [{
    teme:"CSK",
    parimaryColor:"yellow",
    secondry:" blue"
},{
    teme:"KKR",
    parimaryColor:"purple",
    secondry:"gold"
},{
    teme:'RCB',
    parimaryColor:"red",
    secondry:"gold"
},{
    teme:'DC',
    parimaryColor:"red",
    secondry:"Orange"
},{
    teme:"RR",
    parimaryColor:"blue",
    secondry:"yellow"
},{
    teme:"PK",
    parimaryColor:"red",
    secondry:"blue"
},{
    teme:"SRH",
    parimaryColor:"orange",
    secondry:"black"
},{
    teme:"MI",
    parimaryColor:"blue",
    secondry:"gold"
},{
    teme:"LSG",
    parimaryColor:"blue",
    secondry:"orange"
},{
    teme:"GT",
    parimaryColor:"blue",
    secondry:"white"
}]
console.log(arr);

let btn = document.querySelector("button");
let display = document.querySelector("h2");

btn.addEventListener("click",function(){
  let num = Math.floor(Math.random()*arr.length);
  let winwer = arr[num]
  console.log(winwer);
  
  display.innerHTML = arr[num].teme 
  display.style.color = arr[num].parimaryColor
  display.style.backgroundColor = arr[num].
  secondry

})