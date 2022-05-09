import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { SingleProduct } from "../Components/productPages/SingleProduct";
import { Error } from '../Components/Header & Footer/Header/HeaderElement'
import ProductAssemble from '../Components/Product_page/ProductAssemble'
import { Basket } from '../Components/CartCheckout/page/Basket'

// import { Checkout } from "../Pages/Checkout";
import { Home } from "../Components/Home/Home";
import { Login } from "../Components/Login & Signup/Login/SignIn";
import { Wallet } from "../Components/wallet&payments/wallet";
import {Recharge} from "../Components/wallet&payments/recharge"
import { Checkout } from "../Components/Checkout/checkout";
import { SignIn } from "../Components/Login & Signup/Login/SignIn";
import { Ncard } from '../Components/Product_page/Ncard';
import { Mcard } from '../Components/Product_page/Foodgrain_Ncard';
import { Acard } from '../Components/Product_page/BakeryCakesDairy_Ncard';
import { Bcard } from '../Components/Product_page/snacksBrandedFood_Ncard';
import { Ccard } from '../Components/Product_page/eggMealFish_Ncard';
import { Dcard } from "../Components/Product_page/cleaningHousehold_Ncard";


export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/cl/fruits-vegetables/" element={<Ncard />} />
        <Route path="/cl/foodgrains-oil-masala/" element={<Mcard />} />
        <Route path="/cl/bakery-cakes-dairy/" element={<Acard />} />
        <Route path="/cl/snacks-branded-foods/" element={<Bcard />} />
        <Route path="/cl/eggs-meat-fish/" element={<Ccard />} />
        <Route path="/cl/cleaning-household/" element={<Dcard />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/big-basket" element={<Home />} />

        <Route path="/cl/*" element={<Error>404 Not Found</Error>} />
        {/* <Route path="/:id" element={<SingleProduct />} /> */}
        {/* <Route path="/cl/:category/:id" element={<SingleProduct />} /> */}
        <Route path="/cl/:category/*" element={<Error>404 Not Found</Error>} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/basket" element={<Basket />} />
        <Route path="/*" element={<Error>404 Not Found</Error>} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}
