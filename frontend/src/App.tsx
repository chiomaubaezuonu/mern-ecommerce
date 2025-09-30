import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/ContactPage";
import CollectionsPage from "./pages/CollectionsPage";
import Footer from "./components/Footer";
import SignUpPage from "./pages/SignUpPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import PlaceOrder from "./pages/PlaceOrder";

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
        <Route path="/product/:_id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="place-order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
