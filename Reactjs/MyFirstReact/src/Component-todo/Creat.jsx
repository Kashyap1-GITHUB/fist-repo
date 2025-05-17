import { nanoid } from "nanoid";
import { useState } from "react";

const Creat = (props) => {
  const Todolist = props.Todolist;
  const setTodolist = props.setTodolist;
  const [tital, settital] = useState("");

  const submithandlare = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      tital,
      isComplited: false,
    };

    const copytodo = [...Todolist];
    copytodo.push(newtodo);
    setTodolist(copytodo);

    settital("");
  };
  //   console.log(Todolist);
  return (
    <>
      <form onSubmit={submithandlare} className=" w-[60%] p-10  ">
        <h1 className="text-6xl font-thin text-gray-100 ">
          Set <span className="text-amber-600"> Reminders</span> for <br /> tasks
        </h1>
        <input
          className="border-b w-full text-3xl font-thin mt-10 mb-10 p-2 outline-0 text-white"  
          type="text"
          placeholder="Enter Name"
          onChange={(e) => settital(e.target.value)}
          value={tital}
        />
        <br />
        <br />
        <button className="bg-blue-400 text-4xl p-3 rounded-2xl " type="submit">
          Creat Todo
        </button>
      </form>
      <hr />
    </>
  );
};

export default Creat;
