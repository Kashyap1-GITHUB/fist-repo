import Home from "../RoutComponent/Home";
import ProductDetails from "../RoutComponent/ProductDetails";
import Product from "../RoutComponent/Product";
import Servies from "../RoutComponent/Servies";
import About from "../RoutComponent/About";
import { Route, Routes } from "react-router-dom";
import Servisedetails from "../RoutComponent/servisedetails";

const MainRoute = () => {
  return (
    <div className="h-screen w-screen text-emerald-50 bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/productdetails/:name" element={<ProductDetails />} />
        <Route path="/servies" element={<Servies />} >
        <Route path="/servies/servisedetails" element={<Servisedetails />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
