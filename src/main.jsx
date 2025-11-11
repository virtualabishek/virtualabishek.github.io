import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Notify from "../src/components/Notify.jsx";
import BackgroundMusic from "../src/components/BackgroundMusic.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BackgroundMusic />
    <App />
  </BrowserRouter>,
);
