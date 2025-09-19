import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/ContactPage";
import CollectionsPage from "./pages/CollectionsPage";
import Footer from "./components/Footer";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<CollectionsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
