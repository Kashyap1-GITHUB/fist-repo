// let btn = document.querySelector("button");
// let back = document.querySelector("#back");
// let forw = document.querySelector("#for");

// back.addEventListener("click",function(){
//    history.back()

// })
// forw.addEventListener("click",function(){
//   history.forward()
// })

// btn.addEventListener("click",function(){
//   location.href = 'https://www.google.com/'

// })

// location.href = 'https://sheryians.com/classroom/gotoclassroom/6775253edb7d074fe7a88b85'

// let a = location.href

// console.log(a);
// localStorage.clear()
// let data = localStorage.setItem("Name","kashyap")
// let data1 = localStorage.setItem("cast","baghel")
// let data2 = localStorage.setItem("id","42")

// let getdata = localStorage.getItem("id","42")
// console.log(getdata);

// localStorage.removeItem("cast","baghel")

// localStorage.clear()

// let arr = [23,44,12,34,67,29]

// localStorage.setItem("Array",arr);

// let arr1 = [
//     {
//         Name:"kashyap",
//         baghel:"baghel"
//     },
//     {
//         Name:"Anan",
//         baghel:"Suthar"
//     },
//     {
//         Name:"Abhisak",
//         baghel:"Parihar"
//     }
// ]

// let newuser = JSON.stringify(arr1)

// let userdata = localStorage.setItem("Arra2",newuser);

// let ne = JSON.parse(newuser)

// console.log(ne);

// sessionStorage.setItem("Name","Kashyap")
// sessionStorage.setItem("id","rahul")

// console.log(document.cookie);

// document.cookie.clear()

// let div = document.querySelector("div")

// div.addEventListener("click",function(){
// div.classList.add('circle')

// div.setAttribute("class","cube")

// })

// console.log(div.getAttribute("class"));

// div.addEventListener("click",function(){
//     console.log("sdfsdfsd");

// })

let btn = document.querySelector("button");
let div = document.querySelector("div");

let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    div.setAttribute("class","dark");
    localStorage.setItem("thime", "Dark");
    btn.innerHTML = "White Mode"
    flag = 1;
} else {
    div.setAttribute("class","white");
    localStorage.setItem("thime", "white");
    btn.innerHTML = "Dark Mode"
    flag = 0;
  }
});
