let btn = document.querySelector("button");
let inputField = document.getElementById("myInput");
let body = document.querySelector(".footer");

function getuser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    if (!raw.ok) throw new Error("Enter valide data.");
    return raw.json();
  });
}

function getrepos(jdata){
    return fetch(`https://api.github.com/users/${username}/repo`).then((raw) => {
        if (!raw.ok) throw new Error("Enter valide data.");
        return raw.json();
      });
}

function creatcard(cdata) {


  let data = ` 
            <div class="card">
            <div class="img">
                <img src="${cdata.avatar_url}" alt="">
                <p>${cdata.name ? cdata.name : ""}</p>
            </div>
            <div class="info">
                <p>${cdata.login}</p>
                <p>Public repo: ${cdata.public_repos ? cdata.public_repos : ""}</p>
                <p>Follower: ${cdata.followers}</p>
                <p>Following: ${cdata.following}</p>
                <p>Location: ${cdata.location ? cdata.location : ""}</p>
                <p>Company: ${cdata.company ? cdata.company : ""}</p>
                <p>Blog: ${cdata.blog ? cdata.blog : ""}</p>
               </div>
               </div>`;

  body.innerHTML = data;
}


btn.addEventListener("click", (event) => {
  event.preventDefault();
  let value = inputField.value.trim();
  if (value.length > 0) {
    getuser(value).then(function (data) {
      creatcard(data);
    });
  } else {
    alert();
  }
});
