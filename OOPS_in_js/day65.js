/*
function dalo(name,callback){
    console.log(name);
    callback();
}

function nekalo(name,c1){
    console.log(name);
    c1();
}

function nekalodalo(name,call){
    console.log(name);
    call();
}

dalo("step1",() => {
    nekalo("step2",() => {
        nekalodalo("step3",() => {
            console.log("all step done");
        })
    })
 })
    */

/*
let pr = new Promise(function (res, rej) {
  console.log("whatsapp se message bhej ne ko bola");
  console.log("whatsapp se message bhej diya");
  console.log("whatsapp se message nhi pahuch");
  res();
});

pr.then(function(){
    console.log("Error")
}).catch(function(){
    console.log("rejected")
});
*/

/*
function dalo(name){
    return new Promise(function(res , rej){
        console.log(name);
        res()
    })
}

function nekalo(name){
    return new Promise(function(res , rej){
        console.log(name);
        res();
    })
}

function nekalodalo(name){
    return new Promise(function(res , rej){
        console.log(name);
        res();
    })
}

dalo("step1",).then(function(){
    nekalo("step2").then(function(){
        nekalodalo("step3").then(function(){
            console.log("All step are Done");
        })
    })
})

*/
/*

function Pi() {
  console.log("Pizza order");
  return new Promise((res, rej) => {
    setTimeout(() => {
      let chance = Math.random() < 0.7;
      if (chance) res();
      else rej();
    }, 2000);
  });
}

Pi()
  .then(() => {
    console.log("🍕 Pizza dilevered");
  })
  .catch(() => {
    console.log("🚫 Dilevery failed!");
  });
*/
/*
function getUser() {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res({ id: 1, name: "kashyap" });
    }, 1000);
  });
}

function getPosts(userid) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(["title1", "title2"]);
    }, 1000);
  });
}

function getComments(postid) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res("Nice persone is kahyap");
    }, 1000);
  });
}

getUser()
  .then(function (data) {
    console.log(data);

    return getPosts(data.id);
  })
  .then((comment) => {
    console.log(comment);
    return getComments(420);
  })
  .then((cmd) => {
    console.log(cmd);
  })
.finally(() => {
    setTimeout(function () {
        console.log("heloooooo");
      }, 1000);
})
      */


function fakeApiCall(endpoint){
    let data = {
      Uers:["kashyap","rahul","sandip"],
      Posts:["loda data","managing dairecter","kashyap house"],
    }
    let dilay = Math.random() * 2000 + 1000;

    return new Promise((res,rej) => {
        setTimeout(function(){
          res(data[endpoint]);
        },dilay)
    })
}

 fakeApiCall("Uers").then((data) => {
    console.log(data);
 })
 fakeApiCall("Posts").then((data) => {
    console.log(data);
 })