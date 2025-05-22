import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const navigator = useNavigate()
    const pareams = useParams()

    console.log(pareams);
    
  return (
    <div className='w-screen h-screen bg-black p-10'>
        <h1 className='text-5xl'>{pareams.name}</h1>
        <h2 className='text-4xl'>Product datiles...</h2>
          <button
          onClick={ () =>  navigator(-1)}
          className="w-[8%] h-[10%] bg-white text-black rounded-2xl m-10"
        >go back</button>
       </div>
  )
}

export default ProductDetails