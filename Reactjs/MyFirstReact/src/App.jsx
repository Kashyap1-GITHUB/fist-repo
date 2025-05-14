import { useState } from "react";
import Read from "./component/Read";
import Creat from "./component/Creat";

const App = () => {
  // let num = 70;

  // let Str = "kashyap";

  // let boo = true;

  // let n = null;

  // let un = undefined;

  // let arr = [70, "kashyap", true, null, <h1>Hello World</h1>];


 
  
const [user, setuser] = useState([
    { Name: "kashyap", age: 21 },
    { Name: "Rahul", age: 22 },
    { Name: "sandip", age: 23 },
  ])

  return (
    <>
      {/* <h1>Datatype</h1>
      <h1>Number : {num} </h1>
      <h1>String : {Str} </h1>
      <h1>Boolean: {boo} </h1>
      <h1>Null : {n} </h1>
      <h1>Undfined : {un} </h1>
      <h1>Array : {arr} </h1>                 
      <h1>obj : {obj.Name | obj.age} </h1>*/}

    <Creat/>

    <Read user={user} setuser ={setuser}  />
    
    </>
  );
};
export default App;

