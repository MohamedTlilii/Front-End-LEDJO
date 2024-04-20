import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavbarAdmin from "../Components/NavbarAdmin/NavbarAdmin";

function AdminLayout() {
  return (
    <div>
      <NavbarAdmin />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AdminLayout;
