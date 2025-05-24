import { createRoot } from "react-dom/client";

import App from "./AppRout.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Recepiescontext from "./data/Recepiescontext.jsx";

createRoot(document.getElementById("root")).render(
<Recepiescontext>
    <BrowserRouter>
    <App />
  </BrowserRouter>
</Recepiescontext>
);
