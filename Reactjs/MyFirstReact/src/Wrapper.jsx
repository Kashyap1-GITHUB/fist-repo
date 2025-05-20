import React, { children, createContext } from 'react'
import { useState } from 'react';
export const todocontext = createContext(null)


const Wrapper = (props) => {

     const [Todolist, setTodolist] = useState([
        { id: 1, title: "kaise ho", isComplited: false },
      ]);
    
      console.log(props.children);
      

return (
    <todocontext.Provider value={[Todolist, setTodolist]}>
          {props.children}
    </todocontext.Provider>

)
}

export default Wrapper


//   return <div>
//   </div>