import React from "react";
import {Slider } from "./Slider/UpperSlider"
import {Offers} from "./Offers/Offers"

export const Home = ()=>{
    return (
        <>
        {/* <h1>Home</h1> */}
            <Slider imgs={[
                'https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_Weekdayblore_460_040522.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Freshodays_Bangalore_460_0405022.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_c_YXTT611_460_1may22.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_Happychef_460-250422.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_GM-SteeltheDeal!_460-250422.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_skincare_460-250422.jpg',
                'https://www.bigbasket.com/media/uploads/banner_images/hp_m_Adhoc_Dairy(Curd)_460-250422.jpg'
            ]}/>
            <Offers/>
        </>
    )
}