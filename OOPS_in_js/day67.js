let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let inputField = document.getElementById("myInput");
  let value = inputField.value;
  getuser(value);

  function getuser(name) {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
});
