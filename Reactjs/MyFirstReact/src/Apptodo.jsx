import { useState } from 'react'
 
const Apptodo = () => {

    const [username, setusername] = useState("")
    const [completed, setcompleted] = useState(true)
    const [Gender, setGender] = useState("")
    const [Anime, setAnime] = useState("dathanote")
    
   const alldone = (e) => {
       e.preventDefault();
       const data = {
            username,completed,Gender,Anime
        }
        console.log(data);
        
    }
        return (
        <div>
      <form onSubmit={alldone}>
          <h1>User information</h1>
        <input type="text"
        placeholder='Enter Name'
        onChange={(e) => setusername(e.target.value)}
        value={username}
         />
         <br />
         <br />
         <input type="checkbox" 
         checked={completed}
          onChange={(e) => setcompleted(e.target.checked)
          }
         />
         <br />
         <br />
         <input type="radio" 
         value={"male"}
         onChange={(e) => setGender(e.target.value)}
         checked={Gender === "male" && true }
         />Male
         <input type="radio" 
         value={"female"}
         onChange={(e) => setGender(e.target.value)}
         checked={Gender === "female" && true }
         />female

        <br />

        <select  value={Anime} onChange={(e) => setAnime(e.target.value)
        }>
            <option value="Onepice">Onepice</option>
            <option value="Narut">Naruto</option>
            <option value="Demonslayer">Demonslayer</option>
            <option value="dathanote">dathanote</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Apptodo