
const Read = (props) => {
   const Todolist = props.Todolist;
    const setTodolist = props.setTodolist;

    const deleteHandler = (id) => {
      const filtertodo = Todolist.filter((Todolist)  => Todolist.id != id)
      setTodolist(filtertodo);
      
    }

  const todohandler = Todolist.map((Todo) => {
        return <li className="p-4 rounded m-1 bg-gray-900 flex justify-between items-center " key={Todo.id}> <span>{Todo.tital}</span> <button className=" text-center text-amber-600 text-2xl"> <span onClick={() => deleteHandler(Todo.id)}>Deleted</span></button></li>;
  }
  );
  return (
    <div className="w-[40%] ">
      <h1 className="text-7xl font-thin text-gray-100 p-10"> <span className="text-amber-600">Panding</span> Todo</h1>
      <ol className="text-white text-3xl p-10  ">{todohandler}</ol>
    </div>
  );
};

export default Read;
