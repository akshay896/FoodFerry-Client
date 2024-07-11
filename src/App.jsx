import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Menu from "./pages/menu/Menu";
import Register from "./pages/Register/Register";
import FavItem from "./components/FavItem/FavItem";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import MyOrders from "./pages/Order/MyOrders";
import Verify from "./pages/Verify/Verify";

function App() {
  const location = useLocation();

  // Check if the current route is "/reg" (Register page)
  const isRegisterPage = location.pathname === "/reg";

  return (
    <div className="app-container">
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/fav" element={<FavItem />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myOrder" element={<MyOrders />} />
          
          {/* Conditional rendering for Register page */}
          {isRegisterPage && <Route path="/reg" element={<Register />} />}
        </Routes>
      </div>
      {!isRegisterPage && <Footer />}
    </div>
  );
}

export default App;
