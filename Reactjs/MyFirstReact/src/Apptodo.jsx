import { useContext, useState } from "react";

import Creat from "./Component-todo/Creat";
import Read from "./Component-todo/Read";
import { todocontext } from "./Wrapper";
const Apptodo = () => {

 const data =  useContext(todocontext);
 console.log(data);
 

 
  return (
    <div className="h-screen w-screen bg-zinc-600 flex p-10">
     <Creat  />
     <Read  />
    </div>
  );
};

export default Apptodo;
