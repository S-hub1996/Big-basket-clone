
// import './App.css';
import React from 'react';
import TestCartCheckout from './Pages/TestCartCheckout';
import TestcheckoutTable from './Components/CartCheckOut/TestcheckoutTable';
import {TestEmptyBasketModel} from './Components/CartCheckOut/TestEmptyBasketModel';
import {TestCheckoutCards} from './Components/CartCheckOut/TestCheckoutCards';
import {TestListitem} from './Components/CartCheckOut/TestListitem'
function App() {
  return (
   <>
     <TestCartCheckout/>
     <TestcheckoutTable/>
     <TestListitem/>
     <TestEmptyBasketModel/>
     <TestCheckoutCards/>
   </>
  );
}

export default App;
