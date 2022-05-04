import React,{ useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Nav } from "../Header/HeaderElement";
// import { Link } from "react-router-dom";
import { ArrowDown } from "../Header/HeaderElement";
// import { Shop } from "./ShopByCategory";
import {  ShopByCategory } from "./ShopByCategory";
const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    // const { data } = useSelector((state) => state.user);
  return (
    <>
      <div>
        <Nav className="nav-sticky">
          <div className="big-basket-logo">
            <i className="big-basket-logo"></i>
          </div>
             {/* <div className="shop-on-scroll">
                <Shop />
            </div> */}
            <ul className="nav-top">
                     <li className="telephone">
              <i></i>
              <span>1860 123 1000</span>
            </li>
            <li className="location">
              <i></i>
              <span>
                {/* {data.location.pincode}, {data.location.city} */}
              </span>
              <ArrowDown top="-3px" color="#4a4a4a" />
            </li>
            </ul>
              <div className="search-bar big-screen">
                <input
                  type="text"
                  placeholder="Search for Products.."
                  value=""
                  onChange=""
                  onKeyUp=""
                />
                <button type="submit">
                  <i className="search-icon"></i>
                </button>
                {/* {searchTerm && (
                  <SearchItemList itemList={searchData} data={data} />
                )} */}
              </div>



          <div>
          <ShopByCategory sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        </Nav>
      </div>
    </>
  );
};

export default Header;
