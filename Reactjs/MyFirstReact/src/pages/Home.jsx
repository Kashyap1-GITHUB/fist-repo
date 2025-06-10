import { useEffect } from "react";
import axios from "../utils/Axios";

const Home = () => {
  const getproduct = async () => {
    try {
      const getinformation1 = await axios.get(
       '/products/'
      );
    
      console.log(getinformation1.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    }
  })
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}>getinformation</button>
    </div>
  );
};

export default Home;
