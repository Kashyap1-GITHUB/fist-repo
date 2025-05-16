import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

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
      <form onSubmit={submithandlare}>
        <h1 style={ {color:"red"}} >User Todotask</h1>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => settital(e.target.value)}
          value={tital}
          style={ {color:"red"}}
        />
        <br />
        <br />
        <button style={ {color:"red", backgroundColor:"black"}} type="submit">Submit</button>
      </form>
      <hr />
    </>
  );
};

export default Creat;
