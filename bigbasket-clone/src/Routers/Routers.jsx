import React from "react";
import { Route, Routes } from "react-router-dom";
// import { SingleProduct } from "../Components/productPages/SingleProduct";
import { Error } from "../Components/Header & Footer/Header/HeaderElement";
// import CategoryWiseProducts from "../Pages/CategoryWiseProducts";
// import { Checkout } from "../Pages/Checkout";
import { Home } from "../Components/Home/Home";
impot 

export const Routers = () => {
  return (
    <>
      <Routes>
          
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logged-in" element={<LoggedIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/big-basket" element={<Home />} />
        {/* <Route path="/cl/:category" element={<CategoryWiseProducts />} /> */}
        <Route path="/cl/*" element={<Error>404 Not Found</Error>} />
        {/* <Route path="/:id" element={<SingleProduct />} /> */}
        {/* <Route path="/cl/:category/:id" element={<SingleProduct />} /> */}
        <Route path="/cl/:category/*" element={<Error>404 Not Found</Error>} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/*" element={<Error>404 Not Found</Error>} />
      </Routes>
    </>
  );
};
