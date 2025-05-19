import { useState } from "react";

import Creat from "./Component-todo/Creat";
import Read from "./Component-todo/Read";
const Apptodo = () => {
  const [Todolist, setTodolist] = useState([
    { id: 1, title: "kaise ho", isComplited: false },
  ]);

 
  return (
    <div className="h-screen w-screen bg-zinc-600 flex p-10">
     <Creat Todolist={Todolist} setTodolist = {setTodolist} />
     <Read Todolist={Todolist} setTodolist = {setTodolist} />
    </div>
  );
};

export default Apptodo;
