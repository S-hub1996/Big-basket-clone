import styled from "styled-components";

export const Error = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;


export const ArrowDown = styled.div`
  width: 8px;
  height: 8px;
  position: relative;
  top: ${(props) => props.top};
  margin-left: 8px;
  border: solid ${(props) => props.color};
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
  transition: all 0.2s ease-out;
`;

export const Nav = styled.nav`
  width: 100%;
  z-index: 1000;
  background-color: #fff;

  > div {
    max-width: 1170px;
    width: 85%;
    margin: auto;
    position: relative;
    > div:nth-child(1) {
      > div {
        width: 100%;
        padding-top: 5px;
        display: flex;
        justify-content: space-between;
        align-items: end;
      }
      > div:nth-child(1) {
        .user,
        .location {
          display: none;
        }
      }
    }

    .hamburger {
      display: none;
    }

    @media screen and (max-width: 870px) {
      width: 100%;
      background-color: #84c225;

      > div:nth-child(1) {
        flex-direction: column;

        > div:nth-child(1) {
          width: 90%;
          margin: auto;
          justify-content: space-between;

          .user,
          .location {
            display: inline-block;
          }
          .basket {
            width: 65px;
          }

          .hamburger {
            width: 26px;
            height: 22px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            span {
              width: 100%;
              height: 2px;
              background-color: white;
            }
          }
        }

        > div {
          height: 38px;
          justify-content: space-around;
          align-items: center;

          > div {
            margin: 0;
          }
          .user {
            i {
              width: 24.62px;
              height: 22.89px;
              background-position: 89.95121945369027% 89.28184791355511%;
            }
          }
          .location {
            i {
              width: 19.8px;
              height: 25px;
              background-position: 46.31066773595685% 44.12751677852349%;
            }
          }
          .empty-divs {
            display: none;
          }
        }
      }

      .user,
      .location {
        display: inline-block;
      }
    }
  }

  .big-basket-logo {
    i {
      width: 200px;
      height: 65px;
      margin: 12px 0 0;
      display: inline-block;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/bb_logo.png);
      background-repeat: no-repeat;
    }
    @media screen and (max-width: 870px) {
      i {
        width: 25px;
        height: 25px;
        margin: 0;
        display: inline-block;
        background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/bb-icon.png);
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }

  .search-bar {
    width: 30%;
    height: 30px;
    position: relative;
    bottom: 10px;
    margin:  1% auto;

    input {
      width: 100%;
      min-height: 30px;
      padding: 0 12px;
      font-size: 14px;
      line-height: 1.42857;
      color: #222;
      border: 1px solid #888;
      border-radius: 0;
      box-shadow: none;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

      :focus {
        outline: none;
      }
    }
    > button {
      width: 35px;
      height: 30px;
      padding: 4px;
      position: absolute;
      right: 0;
      color: #fff;
      background-color: #84c225;
      border: 1px solid #84c225;

      .search-icon {
        width: 20px;
        height: 20px;
        display: inline-block;
        background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
        background-position: 65.2482269503546% 65.72379367720465%;
      }
    }
  }
  .search-bar.small-screen {
    display: none;
  }
  .search-bar.big-screen {
    display: flex;
  }

  @media screen and (max-width: 870px) {
    .search-bar.small-screen {
      display: flex;
      bottom: 0;

      > button {
        background-color: transparent;
        border: none;
        .search-icon {
          background-position: 68.08510638297872% 69.05158069883528%;
        }
      }
    }
    .search-bar.big-screen {
      display: none;
    }
  }

  .basket {
    width: 140px;
    height: 58px;
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: #f2f2f2;
    border-radius: 5px;
    border-color: #f2f2f2;
    cursor: pointer;

    span {
      .cart-count {
        display: none;
      }
    }
    @media screen and (max-width: 870px) {
      span {
        position: relative;
        .cart-count {
          display: inline-block;
          border-radius: 25px;
          padding: 1px 3px 2px;
          position: absolute;
          top: -2px;
          margin-left: 8px;
          min-width: 16px;
          min-height: 16px;
          font-size: 13px;
          background: #ec1c24;
          color: #fff;
        }
      }
    }

    .basket-image {
      width: 39.38px;
      height: 28px;
      display: inline-block;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
      background-position: 2.9170780597545356% 2.0236087689713322%;
    }

    .my-basket,
    .cart-value {
      width: 100%;
      display: inline-block;
      text-align: right;
      font-size: 12px;
      font-weight: 600;
      color: #4d4d4d;
    }

    .cart-value span {
      margin-left: 5px;
    }

    @media screen and (max-width: 870px) {
      background: transparent;
      .basket-image {
        width: 27.55px;
        height: 25px;
        background-position: 8.602708511158488% 6.7114093959731544%;
      }
      .my-basket,
      .cart-value {
        display: none;
      }
    }
  }

  ul.nav-top {
    @media screen and (max-width: 870px) {
      display: none;

      .user,
      .location {
        display: none;
      }
    }

    width: 100%;
    min-height: 30px;
    margin: auto;
    display: flex;
    justify-content: end;
    align-items: center;
    position: absolute;
    top: 0;
    font-size: 12px;
    color: #4a4a4a;
  }

  .telephone,
  .location,
  .user {
    height: 28px;
    margin: 0 10px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    > i {
      margin-right: 3px;
    }
  }

  .telephone {
    > i {
      width: 15px;
      height: 15px;
      display: inline-block;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
      background-position: 21.971830985915492% 19.801980198019802%;
    }
  }

  .location {
    > i {
      width: 11.34px;
      height: 15px;
      display: inline-block;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
      background-position: 42.4572442588943% 38.44884488448845%;
    }
  }

  .user-onlogin {
    > i {
      background-position: 80.77331923961296% 79.36961843872733% !important;
    }
    :hover {
      color: #4a4a4a !important;
      background-color: #84c225;
      .arrow-down {
        top: 0;
        transform: rotate(-135deg);
      }

      .user-option {
        display: flex;
      }

      @media screen and (max-width: 870px) {
        .user-option {
          min-width: 100vw;
          top: 30px;
          left: -234%;
          z-index: 500;
        }
      }
    }
  }

  .user {
    position: relative;

    > i {
      width: 16.85px;
      height: 14.97px;
      display: inline-block;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
      background-position: 78.2883509760042% 76.7543392694314%;
    }

    :hover {
      color: #84c225;
    }

    .user-option {
      min-width: 200px;
      display: none;
      flex-direction: column;
      position: absolute;
      top: 27px;
      right: 0;
      z-index: 1000;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0 6px 12px rgb(0 0 0 / 18%);

      li {
        padding: 5px 10px;
        color: #444;
        font-weight: 400;
        line-height: 1.42857;
        text-align: left;
        border-bottom: 1px dashed #dedede;
        transition: all 0.3s ease;
      }
    }
  }

  .search-item-list {
    width: 100%;
    height: 367px;
    padding: 0 5px;
    margin: 0;
    position: absolute;
    top: 100%;
    z-index: 1000;
    list-style: none;
    background-color: #fff;
    border: 1px solid rgb(0, 0, 0, 0.3);
    overflow-y: scroll;

    li,
    button,
    .search-result-right,
    .search-result-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .search-result-left {
      width: 50%;
      justify-content: start;
    }
    .search-result-right {
      width: 40%;
    }

    li {
      padding: 8px 10px;
      font-size: 11px;
      color: rgb(0, 0, 0, 0.6);
      border-bottom: 1px solid rgb(0, 0, 0, 0.3);

      .image {
        max-width: 40px;
        img {
          width: 100%;
        }
      }
      .name {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        span:nth-child(2) {
          font-size: 11px;
          font-weight: 700;
          color: rgb(0, 0, 0, 0.7);
        }
      }
      .cart-btn {
        button {
          padding: 5px 8px;
          background-color: #ecf26f;
          border: 1px solid rgb(0, 0, 0, 0.5);
          border-radius: 4px;

          i {
            width: 15px;
            height: 10px;
            margin-left: 2px;
            display: inline-block;
            background-image: url(https://www.bbassets.com/static/v2531/custPage/build/content/img/checkout-small-bucket-icon.png);
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
`;

export const ShopByCategorySection = styled.section`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid #eee;

  .on-sidebar-show {
    display: none;
  }

  @media screen and (max-width: 870px) {
    width: 70%;
    height: 100vh;
    position: absolute;
    flex-direction: column;
    align-items: start;
    top: -76px;
    left: ${(props) => props.left};
    z-index: 12000;
    background-color: #fff;
    transition: all 0.3s ease;

    > div {
      width: 100%;
      font-size: 12px;
      font-weight: 500;
      border-bottom: 1px solid #dedede;
    }

    .on-sidebar-show {
      width: 100%;
      position: relative;
      display: inline-block;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      padding: 8px 10px;
      color: white;
      background-color: #84c225;

      a {
        color: white;
        font-weight: 600;
        text-decoration: none;
      }
    }

    .close-modal {
      width: 28px;
      height: 28px;
      cursor: pointer;
      position: relative;
      background-color: rgb(255, 255, 255, 0.7);
      border-radius: 50%;
    }
    .close-modal span {
      width: 2px;
      height: 20px;
      position: absolute;
      top: 4px;
      right: 13px;
      background-color: #84c225;
    }
    .close-modal span:nth-child(1) {
      transform: rotate(45deg);
    }
    .close-modal span:nth-child(2) {
      transform: rotate(-45deg);
    }
  }

  > div {
    font-size: 15px;
    padding: 8px 6px;
    line-height: 20px !important;
  }

  .shop-by-category,
  .offers,
  .bb-specialty {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 5px;
    cursor: pointer;
  }

  .shop-by-category {
    position: relative;
    width: 245px;
    font-weight: bold;
    color: white;
    background-color: #84c225;

    .show-category {
      display: none;
      width: 1145px;
      top: 100%;
      left: 0;
    }
    :hover {
      .show-category {
        display: block;
      }
    }
  }

  .offers {
    color: #666;
    font-size: 14px;
    i {
      width: 15px;
      height: 15px;
      display: inline-block;
      margin-right: 5px;
      background-image: url(https://www.bbassets.com/static/v2530/custPage/build/content/img/header.css.svg);
      background-position: 60.281858250815965% 60.23102310231023%;
    }
  }
  .bb-specialty:hover{
    color:white ;
  }

  .bb-specialty {
    color: #666;
    font-size: 14px;
    i {
      width: 20.16px;
      height: 15px;
      display: inline-block;
      margin-right: 5px;
      // background-image: url(https://www.bbassets.com/bb2assets/images/png/Wallet.png);
      background-position: 16.173811611102742% 14.851485148514852%;
    }
  }
  

  .offers,
  .bb-specialty {
    :hover {
      background-color: #74ab21;
      color:white;
    }
  }
`;



export const ShopSection = styled.section`
  position: relative;
  top: 5px;
  left: -120%;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }

  .favour {
    width: 100%;
    height: 35px;
    background-color: transparent;
  }

  .show-category {
    width: 1160px;
    display: none;
    top: 90%;
    left: -180%;
    transition: all 0.5s ease-in-out;
  }
  :hover {
    .show-category {
      display: block;
    }
  }

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export const CategoryDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 1000;
  box-shadow: 0 2px 4px 0 #b5b5b5 !important;
  background-color: #fff;

  .open-default {
    display: block !important;
  }

  > .top_category {
    width: 250px;
    line-height: 1.5rem;
    text-align: left;
    color: #555;

    > li {
      font-size: 13px;
      padding: 7px 0 7px 7px;
      border-bottom: 1px solid #eee;

      a {
        text-decoration: none;
      }
      span {
        width: 100%;
        display: inline-block;
        color: #555;
      }

      :hover {
        background-color: #eaeaea;

        .sub_category {
          display: block;
        }
      }

      .sub_category,
      .sub_sub_category,
      .popular_search {
        display: none;
        width: 20%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 21%;
        line-height: 0.8rem;
        padding: 5px 0 0 12px;
        background-color: #eaeaea;
        transition: all 0.3s ease;
      }
      .sub_category,
      .sub_sub_category,
      .popular_search {
        > li {
          font-size: 12px;
          padding: 7px 0 7px 7px;
        }
      }
      .sub_category {
        > li {
          :hover {
            background-color: white;

            .sub_sub_category,
            .popular_search {
              display: block;
            }
          }
        }
      }

      .sub_sub_category,
      .popular_search {
        width: 100%;
        left: 100%;
        background-color: white;
      }
      .sub_sub_category {
        > li {
          :hover {
            color: #84c225;
          }
        }
      }

      .popular_search {
        padding-top: 0;
        left: 200%;
      }
      li.popular_search_title {
        font-size: 15px;
        color: #84c225;
      }
    }
  }
`;

export const SigninSection = styled.section`
  .sign-in-show {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 1100;
  }
  .sign-in-hide {
    display: none;
  }
  .form-container {
    width: 355px;
    min-height: 510px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    position: relative;
    top: 11.5%;
    left: 5%;
    padding: 30px 30px 10px;
    background: #fff;
    border: 1px solid #f2f2f2;
    transition: max-height 0.3s ease-out;
    transition: transform 0.3s ease-out;
    box-shadow: 0 0 36px 0 rgb(141 135 135 / 58%);
  }
  .form-container .close-modal {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
  }
  .form-container .close-modal span {
    width: 2px;
    height: 20px;
    position: absolute;
    right: 8px;
    background-color: #263858;
  }
  .form-container .close-modal span:nth-child(1) {
    transform: rotate(45deg);
  }
  .form-container .close-modal span:nth-child(2) {
    transform: rotate(-45deg);
  }
  h6,
  div,
  button,
  p,
  input {
    width: 100%;
  }
  h6 {
    color: #84c225;
    font-size: 16px;
    text-align: center;
    line-height: 19px;
    font-weight: 600;
    text-align: center;
  }
  input {
    position: relative;
    padding: 8px 0 0;
    margin-bottom: 30px;
    font-size: 14px;
    opacity: 0.5;
    color: #444;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid #dedede;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :focus {
      outline: none;
      opacity: 1;
    }
  }
  .login-with-email,
  .continue {
    padding: 10px;
    margin-bottom: 20px;
    width: 295px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    border: 1px solid #666666;
    bottom: 126px !important;
    text-align: center;
    cursor: pointer;
    outline: none;
  }
  .login-with-email {
    color: #333;
    background-color: #fff;
  }
  .continue {
    color: #fff;
    background: #84c225;
  }
  p {
    color: #979797;
    font-size: 10px;
    letter-spacing: -0.22px;
    padding-right: 22px;
    text-align: center;
    b {
      color: #518ef8;
    }
  }

  .otp {
    font-size: 14px;
  }
  .otp + div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.7);

    button {
      width: 80px;
      font-size: 13px;
      margin-left: 10px;
      color: #979797;
      background-color: transparent;
      border: 1px solid rgb(0, 0, 0, 0.3);
      border-radius: 5px;
      padding: 4px 8px;
      cursor: pointer;
      outline: none;
    }
  }
`;