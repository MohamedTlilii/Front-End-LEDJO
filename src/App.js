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
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";

import Admin from "./Pages/Admin/Admin";
// import men_banner from "./Components/Assets/banner_mens.png";
// import women_banner from "./Components/Assets/banner_women.png";
// import kids from "./Components/Assets/banner_kids.png";
import PublicRoute from "./Routes/PublicRoute";
import UserRoute from "./Routes/UserRoute";
import AdminRoute from "./Routes/AdminRoute";
// import BanneRoute from "./Routes/BanneRoute";
import PrivateRoute from "./Routes/PrivateRoute";
// import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="products" element={<Products />} />
        <Route
          path="product/:id"
          element={
            <PrivateRoute>
              <Product  />
            </PrivateRoute>
          }
        />
     
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
             </PrivateRoute>
          }
        />
        <Route path="about" element={<About />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
      </Route>
      <Route path="/" element={<ConnexionLayout />}>
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <UserRoute>
              <Cart />
            </UserRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
