import React from 'react'
import { useNavigate } from 'react-router-dom'

const Servisedetails = () => {
     const navigator = useNavigate()
  return (
    <div className='w-screen h-screen bg-black '>
        <h1 className='text-5xl mb-6'>yeppeeee...</h1>
        <h2 className='text-4xl'>servise datiles...</h2>
          <button
          onClick={ () =>  navigator(-1)}
          className="w-[8%] h-[10%] bg-white text-black rounded-2xl m-10"
        >go back</button>
       </div>
  
  )
}

export default Servisedetails