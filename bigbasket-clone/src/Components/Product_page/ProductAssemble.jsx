import React from 'react'
// import Page from "./Product_page/page";
import { Ncard } from './Ncard';
import { Mcard } from "./Foodgrain_Ncard";
// import Slide from "./Product_page/Slide";
import { Acard } from "./BakeryCakesDairy_Ncard";
import { Bcard } from "./snacksBrandedFood_Ncard";
import { Ccard } from "./eggMealFish_Ncard";
const ProductAssemble = () => {
  return (
    <>
{/* <Slide/> */}
      <Ncard/> 
      <Mcard/>
      <Acard/>
       <Bcard/>
      <Ccard/>


    </>
  )
}

export default ProductAssemble