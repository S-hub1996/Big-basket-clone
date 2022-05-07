import React from "react";

import { OffSection, ArrowDown } from "../styledcomponents/Elements";
import { ButtonSlider } from "../Slider/Buttonslider";
import { ProductSlider } from "../Slider/ProductSlider";

export const Offers = () => {
  return (
    <OffSection>
      <div className="contouter">
        <div className="outer">
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_emf_190x60_250422.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_bbstar_190x60_250422.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_precautionary_190x60_250422.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_faq_190x60_250422.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_combostore_190x60_250422.png"
              alt=""
            />
          </div>
          <div className="item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_dealsoftheweek_190x60_250422.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <h2>My Smart basket</h2>
      <ProductSlider />

      <h2>Bank Offers</h2>
      <div className="payment">
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/a9814177-3e30-4d30-bba6-cc690da0c6a5/May_Affiliates_Citi_480x360-290422.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/a9814177-3e30-4d30-bba6-cc690da0c6a5/May_Affiliates_PaytmWallet_480x360-290422.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/a9814177-3e30-4d30-bba6-cc690da0c6a5/May_Affiliates_RBL%20Bank_480x360-290422.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/a9814177-3e30-4d30-bba6-cc690da0c6a5/May_Affiliates_DigiBank_480x360-290422.jpg"
            alt=""
          />
        </div>
      </div>

      <h2>Best Seller</h2>
      <ProductSlider />
      
      <h2>Most Popular</h2>
      <div className="payment">
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fb6f0bcb-3e36-4fde-a797-b887901fd197/hp_bottles-mostpopularStorefront_m_480_250422_01.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fb6f0bcb-3e36-4fde-a797-b887901fd197/hp_summer-mostpopularStorefront_m_480_250422_02.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fb6f0bcb-3e36-4fde-a797-b887901fd197/hp_deo-mostpopularStorefront_m_480_250422_03.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fb6f0bcb-3e36-4fde-a797-b887901fd197/hp_store-mostpopularStorefront_m_480_250422_04.jpg"
            alt=""
          />
        </div>
      </div>

      <h2>Top Offers</h2>
      <div className="payment">
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/6db37128-9831-4faf-87c5-5150365019eb/hp_deal-topoffersStorefront_m_480_250422_01.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/6db37128-9831-4faf-87c5-5150365019eb/hp_big-topoffersStorefront_m_480_250422_02.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/6db37128-9831-4faf-87c5-5150365019eb/hp_combo-topoffersStorefront_m_480_250422_03.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/6db37128-9831-4faf-87c5-5150365019eb/hp_the-30-topoffersStorefront_m_480_250422_04.jpg"
            alt=""
          />
        </div>
      </div>

      {/* fruits */}
      <h2>Fruits & Vegetables</h2>
      <div className="fiveelements">
        <div className="fivein">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/ed075230-af8a-410b-bc2a-b18f5600bf0c/hp_fnvStorefront_m_250422_560x378_01.jpg"
            alt=""
          />
        </div>
        <div className="fivein1">
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/ed075230-af8a-410b-bc2a-b18f5600bf0c/hp_fresh-fruits-fnvStorefront_m_250422_275x184_02.jpg"
              alt=""
            />
          </div>
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/ed075230-af8a-410b-bc2a-b18f5600bf0c/hp_fresh-veggs-fnvStorefront_m_250422_275x184_03.jpg"
              alt=""
            />
          </div>
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/ed075230-af8a-410b-bc2a-b18f5600bf0c/hp_cut-spourts-fnvStorefront_m_250422_275x184_04.jpg"
              alt=""
            />
          </div>
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/ed075230-af8a-410b-bc2a-b18f5600bf0c/hp_exotic-fnv-fnvStorefront_m_250422_275x184_05.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <h2>Your Daily Staples</h2>
      <div className="sixelements">
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/b73f7a4a-cf66-432c-b876-60e8233521bf/hp_staplesStorefront_m_480_250422_01.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/b73f7a4a-cf66-432c-b876-60e8233521bf/hp_staplesStorefront_m_480_250422_02.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/b73f7a4a-cf66-432c-b876-60e8233521bf/hp_staplesStorefront_m_480_250422_03.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/b73f7a4a-cf66-432c-b876-60e8233521bf/hp_staplesStorefront_m_480_250422_04.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/b73f7a4a-cf66-432c-b876-60e8233521bf/hp_staplesStorefront_m_480_250422_05.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/b73f7a4a-cf66-432c-b876-60e8233521bf/hp_staplesStorefront_m_480_250422_06.jpg"
            alt=""
          />
        </div>
      </div>

      <h2>Beverages</h2>
      <div className="fiveelements">
        <div className="fivein">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/ff523f94-8028-4690-b9b0-427696cd91de/hp_soft-drinks-beveragesStorefront_m_250422_560x378_01.jpg"
            alt=""
          />
        </div>
        <div className="fivein1">
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/ff523f94-8028-4690-b9b0-427696cd91de/hp_juices-beveragesStorefront_m_251121_02.jpg"
              alt=""
            />
          </div>
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/ff523f94-8028-4690-b9b0-427696cd91de/hp_coconut-water-beveragesStorefront_m_251121_03.jpg"
              alt=""
            />
          </div>
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/ff523f94-8028-4690-b9b0-427696cd91de/hp_energy-drinks-beveragesStorefront_m_250422_275x184_04.jpg"
              alt=""
            />
          </div>
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/ff523f94-8028-4690-b9b0-427696cd91de/hp_syrups-concentrates-beveragesStorefront_m_250422_275x184_05.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <h2>Snacks Store</h2>
      <div className="payment">
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/c3f4c5cc-1426-4553-a488-02fa7913a6fc/hp_namkeens-snacksStorefront_m_480_250422_01.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/c3f4c5cc-1426-4553-a488-02fa7913a6fc/hp_frozen-snacks-snacksStorefront_m_480_250422_02.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/c3f4c5cc-1426-4553-a488-02fa7913a6fc/hp_soups-snacksStorefront_m_480_250422_03.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/c3f4c5cc-1426-4553-a488-02fa7913a6fc/hp_biscuits-snacksStorefront_m_480_250422_04.jpg"
            alt=""
          />
        </div>
      </div>

      <h2>Cleaning & Household</h2>
      <div className="payment">
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/4f927b52-d8ce-4ad2-82eb-bb63cad5de74/hp_cleaningStorefront_m_480_250422_01.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/4f927b52-d8ce-4ad2-82eb-bb63cad5de74/hp_cleaningStorefront_m_480_250422_02.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/4f927b52-d8ce-4ad2-82eb-bb63cad5de74/hp_cleaningStorefront_m_480_250422_03.jpg"
            alt=""
          />
        </div>
        <div className="paymentin">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/4f927b52-d8ce-4ad2-82eb-bb63cad5de74/hp_cleaningStorefront_m_480_250422_04.jpg"
            alt=""
          />
        </div>
      </div>

      <h2>Beauty & Hygiene</h2>
      <div className="fiveelements">
        <div className="fivein">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/7dfc95e6-890a-408e-8c00-cc8cea7c5545/hp_summer-deos-beautyStorefront_m_250422_560x378_01.jpg"
            alt=""
          />
        </div>
        <div className="fivein1">
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/7dfc95e6-890a-408e-8c00-cc8cea7c5545/hp_min-20-off-beautyStorefront_m_250422_275x184_02.jpg"
              alt=""
            />
          </div>
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/7dfc95e6-890a-408e-8c00-cc8cea7c5545/hp_min-40-off-beautyStorefront_m_250422_275x184_03.jpg"
              alt=""
            />
          </div>
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/7dfc95e6-890a-408e-8c00-cc8cea7c5545/hp_makeup-mania-beautyStorefront_m_250422_275x184_04.jpg"
              alt=""
            />
          </div>
          <div className="fiveelin">
            <img
              src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/7dfc95e6-890a-408e-8c00-cc8cea7c5545/hp_shaving-care-beautyStorefront_m_250422_275x184_05.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <h2>Home & Kitchen Essentials</h2>
      <div className="sixelements">
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fa7ad295-04e1-4af9-9f88-7d1dd9e7ddd2/hp_GMStorefront_m_250422_01.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fa7ad295-04e1-4af9-9f88-7d1dd9e7ddd2/hp_GMStorefront_m_250422_02.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fa7ad295-04e1-4af9-9f88-7d1dd9e7ddd2/hp_GMStorefront_m_250422_03.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fa7ad295-04e1-4af9-9f88-7d1dd9e7ddd2/hp_GMStorefront_m_250422_04.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fa7ad295-04e1-4af9-9f88-7d1dd9e7ddd2/hp_GMStorefront_m_250422_05.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/fa7ad295-04e1-4af9-9f88-7d1dd9e7ddd2/hp_GMStorefront_m_250422_06.jpg"
            alt=""
          />
        </div>
      </div>

      <ButtonSlider
        imges={[
          "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250422_400.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_tataneu_400_100422.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250422_400.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_250422_400.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250422_400.jpg",
        ]}
      />

      <h2>Brand Store</h2>
      <div className="sixelements">
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/04dd800c-0328-42cf-a356-5bf5a2d78790/hp_brandStorefront_m_480_250422_01.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/04dd800c-0328-42cf-a356-5bf5a2d78790/hp_brandStorefront_m_480_250422_02.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/04dd800c-0328-42cf-a356-5bf5a2d78790/hp_brandStorefront_m_480_250422_03.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/04dd800c-0328-42cf-a356-5bf5a2d78790/hp_brandStorefront_m_480_250422_04.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/04dd800c-0328-42cf-a356-5bf5a2d78790/hp_brandStorefront_m_480_250422_05.jpg"
            alt=""
          />
        </div>
        <div className="sixbox">
          <img
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/17dda928-88f2-4c85-8f48-ebeaf9e915b6/04dd800c-0328-42cf-a356-5bf5a2d78790/hp_brandStorefront_m_480_250422_06.jpg"
            alt=""
          />
        </div>
      </div>

      <ButtonSlider
        imges={[
          "https://www.bigbasket.com/media/uploads/banner_images/hp_c_lauki_cxnp-9690_400_050522.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_c_shukto_cxnp-9692_400_050522.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_c_submit_cxnp-9687_400_050522.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_c_winner_cxnp-9688_400_050522.jpg",
          "https://www.bigbasket.com/media/uploads/banner_images/hp_c_bhapa_cxnp-9689_400_050522.jpg",
        ]}
      />
    </OffSection>
  );
};
