import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Servies = () => {
  const navigator = useNavigate()
 
  return (
    <div className='mr-10 ml-10'>
      <h1 className='text-4xl mb-5'>servise avelable...</h1>
      <button 
      onClick={() => navigator(`/servies/servisedetails`)}
      className='h-[10%] p-3 text-2xl text-black rounded  bg-amber-50'>get Servies info</button>
      <hr className='my-2'/>
      <Outlet/>
    </div>
  )
}

export default Servies