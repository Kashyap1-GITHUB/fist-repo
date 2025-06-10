import React, {  useContext } from 'react'
import { recipescontext } from '../data/Recepiescontext'
import CardRespies from './CardRespies';

const Recipies = () => {
 const [info]  = useContext(recipescontext);

 const redata = info.map((recipes) => (
<CardRespies key= {recipes.id} recipes = {recipes} />
 ))
  return (
    <div className='flex gap-3' >{redata}</div>
  )
}

export default Recipies