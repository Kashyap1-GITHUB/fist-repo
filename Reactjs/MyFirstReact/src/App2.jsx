import { useState } from 'react';

function App2() {

    const [username, setusername] = useState("kashyap");

    let count = 0 ;
    const changeName = () => {
      if (count == 0) {
        setusername("sandip");
        count++
        }
      else if(count == 1) {
            setusername("kashyap");
            count--  
        }

        console.log(username);    
    };
  return (
    <div>
        <h1>{username} </h1>
        <button onClick={changeName}>change</button>
    </div>
  )
}

export default App2