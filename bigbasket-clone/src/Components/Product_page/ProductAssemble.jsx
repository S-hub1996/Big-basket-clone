import React from 'react'
// import Page from "./Product_page/page";
import { Ncard } from './Ncard';
import { Mcard } from "./Foodgrain_Ncard";
// import Slide from "./Product_page/Slide";
import { Acard } from "./BakeryCakesDairy_Ncard";
import { Bcard } from "./snacksBrandedFood_Ncard";
import { Ccard } from "./eggMealFish_Ncard";
import { Slider } from '../Home/Slider/UpperSlider';
const ProductAssemble = () => {
  return (
    <>
{/* <Slide/> */} 
    <div style={{width:"85%",margin:"auto"}}>

     <Slider imgs={[
               "https://www.bigbasket.com/media/uploads/banner_images/CXNP9510_1200x300_110322.jpg",
               "https://www.bigbasket.com/media/uploads/banner_images/CXNP9507_1200x300_110322.jpg",
               "https://www.bigbasket.com/media/uploads/banner_images/YXNP641_1200x300_130422.jpg",
               "https://www.bigbasket.com/media/uploads/banner_images/l1p_cmc_m_tataneu_300_100422.jpg",
               "https://www.bigbasket.com/media/uploads/banner_images/CXNP9519_1200x300_160322.jpg",
               "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP1196-1200X300-7thMAY22.jpg",
               "https://www.bigbasket.com/media/uploads/banner_images/L1-YXNP641-1200X300-7thAPR22.jpg",
               "https://www.bigbasket.com/media/uploads/banner_images/CXNP9513_1200x300_110322.jpg"              ]}/>
              </div>
      <Ncard/> 
      <Mcard/>
      <Acard/>
       <Bcard/>
      <Ccard/>


    </>
  )
}

export default ProductAssemble