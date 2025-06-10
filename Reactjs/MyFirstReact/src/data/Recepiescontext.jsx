import React, { createContext, useEffect, useState } from "react";

export const recipescontext = createContext(null);

const Recepiescontext = (props) => {
  const [info, setinfo] = useState([]);
  
 
useEffect(() => {
  setinfo(JSON.parse(localStorage.getItem("recipe")))
},[])

  return (
    <recipescontext.Provider value={[info, setinfo]}>
      {props.children}
    </recipescontext.Provider>
  );
};

export default Recepiescontext;

