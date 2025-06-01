import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Recipies from "../pages/Recipies"
import CreatRespies from "../pages/CreatRespies"
import Singleditails from "../pages/Singleditails"



const MainRoute = () => {
  return <>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Recipies" element={<Recipies/>}/>
      <Route path="//recipe/detail/:id" element={<Singleditails/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/CreatRespies" element={<CreatRespies/>}/>
    </Routes>

  </>
};

export default MainRoute;
