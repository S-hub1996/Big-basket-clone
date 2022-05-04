import styled from "styled-components";

export const Nav = styled.nav`
width: 100%;
 z-index: 1000;
 background-color: #fff;
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
`