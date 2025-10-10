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
import Orders from "./pages/Orders";
import TrackOrderPage from "./pages/TrackOrderPage";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import ResetPassword from "./pages/ResetPassword";
// import "react-toastify/dist/ReactToastify.css"; for styling

function App() {
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
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
