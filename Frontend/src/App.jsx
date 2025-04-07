import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import ManLayout from "./Components/Layout/ManLayout";
import Woman from "./Components/Layout/Woman";
import Kids from "./Components/Layout/Kids";
import Luxe from "./Components/Layout/Luxe";
import Userprofile from "./Components/Layout/UserProfile";
import WishList from "./Components/Layout/WishList";
import Addtocart from "./Components/Layout/Addtocart";
import OrderDetails from "./Components/Layout/OrderDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />} />
        <Route path="/man" element={<ManLayout />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/Luxe" element={<Luxe />} />
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
