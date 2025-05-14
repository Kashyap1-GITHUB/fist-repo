import React from 'react'
import { useState } from "react";


function Creat(props) {
    console.log(props);
    
     const [username, setusername] = useState("")
  const [age, setage] = useState(20)


   const datasubmit = (e) => {
    e.preventDefault();
    const newuser = {username , age}
    console.log(newuser);
    
    console.log("Form submit");
  }

  return (
    <div>
          <h1>Register User</h1>
      <form onSubmit={datasubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setusername(e.target.value)}
          value={username}
        />
        <input
          type="number"
          placeholder="Age"
         onChange={(e) => setage(e.target.value)}
          value={age}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Creat