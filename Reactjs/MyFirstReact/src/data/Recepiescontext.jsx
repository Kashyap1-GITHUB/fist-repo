import React, { createContext, useContext ,useState} from 'react'

export const recipescontext = createContext(null)

const Recepiescontext = (props) => {

  const [info, setinfo] = useState([])


  return (
    <recipescontext.Provider value={[info, setinfo]} >
         {props.children}
    </recipescontext.Provider>
  )
}

export default Recepiescontext