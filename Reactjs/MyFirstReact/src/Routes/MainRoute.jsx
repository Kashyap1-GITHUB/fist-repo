import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Recipies from "../pages/Recipies"
import CreatRespies from "../pages/CreatRespies"

const MainRoute = () => {
  return <div>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Recipies" element={<Recipies/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/CreatRespies" element={<CreatRespies/>}/>
    </Routes>

  </div>
};

export default MainRoute;
