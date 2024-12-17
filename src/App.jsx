import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PersonalReflection from "./components/PersonalReflection";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalreflection" element={<PersonalReflection />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
