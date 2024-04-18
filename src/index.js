import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App";
import 'semantic-ui-css/semantic.min.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductsContextProvider from "./Context/ProductsContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductsContextProvider>
      <App />
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
