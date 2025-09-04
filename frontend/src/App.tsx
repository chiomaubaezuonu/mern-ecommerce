import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Home from "./pages/Home";


function App() {
  return (
    <>
    
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  );
}

export default App;
