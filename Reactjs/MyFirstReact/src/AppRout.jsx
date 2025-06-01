import { ToastContainer } from "react-toastify";
import Nav from "./pages/Nav";
import MainRoute from "./Routes/MainRoute";

const AppRout = () => {
  return (
    <div className="flex flex-col gap-10 bg-black h-screen w-screen text-white px-10 py-10 align-middle justify-baseline">
      <Nav />
      <MainRoute />
      <ToastContainer position="top-center"/>
    </div>
  );
};

export default AppRout;
