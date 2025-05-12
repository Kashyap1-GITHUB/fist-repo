import React from "react";

const App = () => {
  const hendelclick = () => {
    alert("hello words");
  };

  // const callpera = 
  
  const peraclick = (e) => {
    alert(e);
  } 
  return (
    <>
      <div>App</div>
      <div>Hello</div>
      <div>World</div>
      <button onClick={hendelclick}>Click</button>
      <button onClick={() =>  peraclick("ye dunya pitle de")}>Click(Pera)</button>
    </>
  );
};
export default App;
