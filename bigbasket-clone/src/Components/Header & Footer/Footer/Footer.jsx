import React from "react";
import { Link } from "react-router-dom";
import styles from "../Footer/footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.summary}>
        <div className="heading">
          <h2>bigbasket – online grocery store</h2>
        </div>
        <div className="description">
          <p>
            Did you ever imagine that the freshest of fruits and vegetables, top
            quality pulses and food grains, dairy products and hundreds of
            branded items could be handpicked and delivered to your home, all at
            the click of a button? India’s first comprehensive online megastore,
            bigbasket.com, brings a whopping 20000+ products with more than 1000
            brands, to over 4 million happy customers. From household cleaning
            products to beauty and makeup, bigbasket has everything you need for
            your daily needs. bigbasket.com is convenience personified We’ve
            taken away all the stress associated with shopping for daily
            essentials, and you can now order all your household products and
            even buy groceries online without travelling long distances or
            standing in serpentine queues. Add to this the convenience of
            finding all your requirements at one single source, along with great
            savings, and you will realize that bigbasket- India’s largest online
            supermarket, has revolutionized the way India shops for groceries.
            Online grocery shopping has never been easier. Need things fresh?
            Whether it’s fruits and vegetables or dairy and meat, we have this
            covered as well! Get fresh eggs, meat, fish and more online at your
            convenience. Hassle-free Home Delivery options
            We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products from groceries to snacks branded foods reach you in time.


    <ul>
        <li>
        Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.
        </li>
        <li>
        Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.
        </li>
        <li>
        BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified by us.
        </li>
    </ul>

          </p>
          <div className="heading">
            <h2>India’s biggest Online Supermarket</h2>
          </div>
          <p>
            bigbasket.com believes in providing the highest level of customer
            service and is continuously innovating to meet customer
            expectations. Our On-time Guarantee is one such assurance where we
            refund 10% of the bill value if the delivery is delayed. For all
            your order values above Rs. 1000, we provide free delivery. A wide
            range of imported and gourmet products are available through our
            express delivery and slotted delivery service. If you ever find an
            item missing on delivery or want to return a product, you can report
            it to us within 48 hours for a ‘no-questions-asked’ refund. Best
            quality products for our quality-conscious customers. bigbasket.com
            is synonymous with superior quality and continues to strive for
            higher levels of customer trust and confidence, by taking feedback
            and giving our customers what they want. We have added the
            convenience of pre-cut fruits in our Fresho range. If it’s a product
            category you’re looking to shop from, we’ve made it convenient for
            you to access all products in a section easily. For instance, if
            you’re looking for beverages, you can order from a long list of
            beverages that include cool drinks, hot teas, fruit juices and more.
            We are proud to be associated closely with the farmers from whom we
            source our fresh products. Most of our farm-fresh products are
            sourced directly from farmers, which not only ensures the best
            prices and freshest products for our customers but also helps the
            farmers get better prices. With more than 80 Organic Fruits and
            Vegetables and a wide range of organic staples, bigbasket has the
            largest range in the organic products category. When it comes to
            payment, we have made it easy for our customers can pay through
            multiple payment channels like Credit and Debit cards, Internet
            Banking, e-wallets and Sodexo passes or simply pay Cash on Delivery
            (COD).The convenience of shopping for home and daily needs, while
            not compromising on quality, has made bigbasket.com the online
            supermarket of choice for thousands of happy customers across India.
          </p>
        </div>
      </div>
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
                <img
                  className={styles.socialbadge}
                  src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/facebook.png?raw=true"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://in.pinterest.com/bigbasketcom/"
              >
                <img
                  className={styles.socialbadge}
                  src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/pinterest.png?raw=true"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Bigbasket_com"
              >
                <img
                  className={styles.socialbadge}
                  src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/twitter.png?raw=true"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/bigbasketcom/"
              >
                <img
                  className={styles.socialbadge}
                  src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/instagram.png?raw=true"
                  alt=""
                />
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
              <img
                className={styles.paymentVisa}
                src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/visa.png?raw=true"
                alt=""
              />
              <img
                className={styles.paymentMaster}
                src="https://raw.githubusercontent.com/Prashant-Sharma-TWS/big-basket/1c52c14fc833f75b9fd759b201b4906a4848302c/frontend/src/Images/MasterCard_Logo.svg"
                alt=""
              />
              <img
                className={styles.paymentPaytm}
                src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/paytm.png?raw=true"
                alt=""
              />
              <img
                className={styles.paymentMobi}
                src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/mobikwik.png?raw=true"
                alt=""
              />
              <img
                className={styles.paymentRupay}
                src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/Rupay.png?raw=true"
                alt=""
              />
              <img
                className={styles.paymentAmerican}
                src="https://github.com/Prashant-Sharma-TWS/big-basket/blob/master/frontend/src/Images/logo-american-express-icon-text-word-symbol-graphics-transparent-png-203306.png?raw=true"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
