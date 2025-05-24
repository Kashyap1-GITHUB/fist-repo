import React, { use, useContext } from 'react'
import { recipescontext } from '../data/Recepiescontext'

const Recipies = () => {
 const [info]  = useContext(recipescontext);

 const redata = info.map((recipe) => (
   <div key={recipe.id}>
          <h3>{recipe.Url}</h3>
          <p>{recipe.Title}</p>
        </div>
 ))
  return (
    <div>{redata}</div>
  )
}

export default Recipies