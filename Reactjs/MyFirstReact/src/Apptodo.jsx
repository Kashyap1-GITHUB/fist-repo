import { useState } from "react";
import { nanoid } from "nanoid";
import Creat from "./Component-todo/Creat";
import Read from "./Component-todo/Read";
const Apptodo = () => {
  const [Todolist, setTodolist] = useState([
    { id: 1, tital: "kaise ho", isComplited: false },
  ]);

 
  return (
    <div>
     <Creat Todolist={Todolist} setTodolist = {setTodolist} />
     <Read Todolist={Todolist} setTodolist = {setTodolist} />
    </div>
  );
};

export default Apptodo;
