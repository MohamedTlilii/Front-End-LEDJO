import React from "react";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Products from "./Pages/Products/Products";
import Profile from "./Pages/Profile/Profile";
import Contacts from "./Pages/Contacts/Contacts";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import ConnexionLayout from "./Layouts/ConnexionLayout";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import Admin from "./Pages/Admin/Admin";
// import men_banner from "./Components/Assets/banner_mens.png";
// import women_banner from "./Components/Assets/banner_women.png";
// import kids from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="admin" element={<Admin />} />
      </Route>
      <Route path="/" element={<ConnexionLayout />}>
        {/* <Route path="/login" element={<LoginSignup />} /> */}
        <Route path="/login" element={<LoginSignup />} />
 
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
