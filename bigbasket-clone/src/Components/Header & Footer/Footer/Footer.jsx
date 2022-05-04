import React from "react";
import { Link } from "react-router-dom";
import styles from "../Footer/footer.module.css";
// import apple from "../../Images/Apple-App-store-icon.png";
// import playstore from "../../Images/Google-App-store-icon.png";
// import facebook from "../../Images/facebook.png";
// import instagram from "../../Images/instagram.png";
// import pinterest from "../../Images/pinterest.png";
// import twitter from "../../Images/twitter.png";
// import visa from "../../Images/visa.png";
// import mastercard from "../../Images/MasterCard_Logo.svg";
// import paytm from "../../Images/paytm.png";
// import mobikwik from "../../Images/mobikwik.png";
// import rupay from "../../Images/Rupay.png";
// import american from "../../Images/logo-american-express-icon-text-word-symbol-graphics-transparent-png-203306.png";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection1}>
        <div>
          <ul>
            <h4>bigbasket</h4>
            <li>
              <Link to={"#"}>About Us</Link>
            </li>
            <li>
              <Link to={"#"}>In News</Link>
            </li>
            <li>
              <Link to={"#"}>Green bigbasket</Link>
            </li>
            <li>
              <Link to={"#"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"#"}>Affiliate</Link>
            </li>
            <li>
              <Link to={"#"}>Terms and Conditions</Link>
            </li>
            <li>
              <Link to={"#"}>Careers At bigbasket</Link>
            </li>
            <li>
              <Link to={"#"}>bb Instant</Link>
            </li>
            <li>
              <Link to={"#"}>bb Daily</Link>
            </li>
            <li>
              <Link to={"#"}>bb Blog</Link>
            </li>
            <li>
              <Link to={"#"}>bbnow</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <h4>Help</h4>
            <li>
              <Link to={"#"}>FAQs</Link>
            </li>
            <li>
              <Link to={"#"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"#"}>bb Wallet FAQs</Link>
            </li>
            <li>
              <Link to={"#"}>bb Wallet T&Cs</Link>
            </li>
            <li>
              <Link to={"#"}>Vendor Connect</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Download Our App</h4>
          <ul>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp"
            >
              <img
                className={styles.badge}
                src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/Google-App-store-icon.png?raw=true"
                alt="img of google play store"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.bbassets.com/static/v2530/custPage/build/content/img/Apple-App-store-icon.png"
            >
              <img
                className={styles.badge}
                src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/Apple-App-store-icon.png?raw=true"
                alt="img of apple store"
              />
            </a>
          </ul>
        </div>

        <div>
          <h4>Get Social With Us</h4>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/pages/Bigbasketcom/139311472851666"
              >
                <img className={styles.socialbadge} src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/facebook.png?raw=true" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://in.pinterest.com/bigbasketcom/"
              >
                <img className={styles.socialbadge} src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/pinterest.png?raw=true" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Bigbasket_com"
              >
                <img className={styles.socialbadge} src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/twitter.png?raw=true" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/bigbasketcom/"
              >
                <img className={styles.socialbadge} src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/instagram.png?raw=true" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerSection2}>
        <div>
          <h4>POPULAR CATEGORIES:</h4>
          <span>
            <Link to={"#"}>Wheat Atta</Link> &nbsp;
            <Link to={"#"}>Ghee</Link> &nbsp;
            <Link to={"#"}>Milk</Link> &nbsp;
            <Link to={"#"}>Health Drinks</Link> &nbsp;
            <Link to={"#"}>Flakes</Link> &nbsp;
            <Link to={"#"}>Organic F&V</Link> &nbsp;
            <Link to={"#"}>Namkeen</Link> &nbsp;
            <Link to={"#"}>Eggs</Link> &nbsp;
            <Link to={"#"}>Floor Cleaners</Link> &nbsp;
            <Link to={"#"}>Other Juices</Link> &nbsp;
            <Link to={"#"}>Leafy Vegetables</Link> &nbsp;
            <Link to={"#"}>Frozen Veg Food</Link> &nbsp;
            <Link to={"#"}>Diapers & Wipes</Link>
          </span>
        </div>
        <div>
          <div>
            <h4>POPULAR BRANDS:</h4>
          </div>
          <div>
            <span>
              {" "}
              Amul Nescafe MTR Red Bull, elite cake Pediasure Yummiez Yera
              Yakult Britannia Wow Momo Fortune Haldirams Ferrero Lays Patanjali
              McCain kwality walls Cadbury Dairy Milk Pedigree
            </span>
          </div>
        </div>
        <div>
          <div>
            <h4>CITIES WE SERVE:</h4>
          </div>
          <div>
            <p>
              Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore,
              Madurai, Coimbatore, Vijayawada-Guntur, Kolkata,
              Ahmedabad-Gandhinagar, Nashik, Lucknow-Kanpur, Gurgaon, Vadodara,
              Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh Tricity,
              Jaipur, Bhopal, Noida-Ghaziabad, Kochi, Krishna District,
              Bhubaneshwar-Cuttack, Guwahati, Renigunta, Hubli, Davanagere,
              Trichy, Amaravathi, Raipur, Rajkot, Gwalior, Bareilly, Allahabad,
              Hyderabad Rural, Bangalore Rural, Chennai Rural, Vizag Rural,
              Lucknow Rural, Noida Rural, Ahmedabad Rural, Bhopal Rural,
              Bhubaneswar Rural, Coimbatore Rural, Chandigarh Rural, Gurugram
              Rural, Guwahati Rural, Indore Rural, Kochi Rural, Kolkata Rural,
              Mumbai Rural, Mysore Rural, Nagpur Rural, Patna Rural, Pune Rural,
              Surat Rural, Vadodara Rural, Jaipur Rural
            </p>
          </div>
        </div>
        <div>
          <div>
            <h4>PAYMENT OPTIONS:</h4>
          </div>
          <div className={styles.paymentIconDiv}>
            <div>
              <img className={styles.paymentVisa} src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/visa.png?raw=true" alt="" />
              <img className={styles.paymentMaster} src="https://raw.githubusercontent.com/Prashant-Sharma-TWS/big-basket/1c52c14fc833f75b9fd759b201b4906a4848302c/frontend/src/Images/MasterCard_Logo.svg" alt="" />
              <img className={styles.paymentPaytm} src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/paytm.png?raw=true" alt="" />
              <img className={styles.paymentMobi} src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/mobikwik.png?raw=true" alt="" />
              <img className={styles.paymentRupay} src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/Rupay.png?raw=true" alt="" />
              <img className={styles.paymentAmerican} src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/logo-american-express-icon-text-word-symbol-graphics-transparent-png-203306.png?raw=true" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};