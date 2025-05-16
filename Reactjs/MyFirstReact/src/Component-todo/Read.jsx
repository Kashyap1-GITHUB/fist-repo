import React from "react";

const Read = (props) => {
   const Todolist = props.Todolist;
    const setTodolist = props.setTodolist;

  const todohandler = Todolist.map((Todo) => {
    return <li  key={Todo.id}>{Todo.tital}</li>;
  });
  return (
    <>
      <h1 style={ {color:"red"}}>Panding Todo</h1>
      <ol>{todohandler}</ol>
    </>
  );
};

export default Read;
