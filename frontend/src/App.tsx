import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/ContactPage";
import CollectionsPage from "./pages/CollectionsPage";
import Footer from "./components/Footer";
import SignUpPage from "./pages/SignUpPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Orders from "./pages/Orders";
import TrackOrderPage from "./pages/TrackOrderPage";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { useEffect } from "react";

function App() {

  const location = useLocation()
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<CollectionsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product/:_id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/trackorder/:_id" element={<TrackOrderPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
