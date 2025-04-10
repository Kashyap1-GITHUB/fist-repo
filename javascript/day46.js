const people = [
    {
      personName: "LEVI",
      phoneNumber: "9999999999",
      gmail: "levi123@gmail.com",
      location: "Ahmedabad",
      image:"https://wallpaperaccess.com/full/6258978.jpg",
      istatus : "Stringer"
    },
    {
      personName: "ARMIN",
      phoneNumber: "8888888888",
      gmail: "armin456@gmail.com",
      location: "Surat",
       image:"https://wallpaperaccess.com/full/446412.jpg",
      istatus : "Stringer"
    },
    {
      personName: "MIKASA",
      phoneNumber: "7777777777",
      gmail: "mikasa789@gmail.com",
      location: "Vadodara",
       image:"https://wallpaperaccess.com/full/7302838.jpg",
      istatus : "Stringer"
    },
    {
      personName: "EREN",
      phoneNumber: "6666666666",
      gmail: "eren999@gmail.com",
      location: "Rajkot",
       image:"https://wallpaperaccess.com/full/8906596.png",
      istatus : "Stringer"
    },
    {
      personName: "HANGE",
      phoneNumber: "5555555555",
      gmail: "hange001@gmail.com",
      location: "Gandhinagar",
       image:"https://4kwallpapers.com/images/walls/thumbs_2t/16775.jpg",
      istatus : "Stringer"
    }
  ];

  
function profunction(){
  let sum = '' 
  people.forEach(function(elem,index){
  sum = sum + `  <div id="card">
          <div id="image">
            <img src="${elem.image}" alt="">
          </div>
            <h2>Person Name  :${elem.personName}</h2>
            <p>phoneNumber   : ${elem.phoneNumber}</p>
            <p>Gmail        :${elem.gmail}</p>
            <p>Your location : ${elem.location}</p>
            <h1>${elem.istatus}</h1>
            <button id="${index}">Add Frinds</button>
        </div>`
   
      })
  
      let main = document.querySelector("#main")
      main.innerHTML = sum
  
}
profunction()
    
    main.addEventListener("click",function(dest){
      let gold = people[dest.target.id]
      if( gold.istatus == "Stringer"){
        gold.istatus = "frindes"
      }
      else{
        gold.istatus = "Stringer"

      }
      profunction()
    })
    


