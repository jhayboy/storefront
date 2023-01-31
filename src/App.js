import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Navbar from './Components/Navbar';
// import Storefront from './Components/Storefront';
import Home from './Components/Home';
import { CartContext } from './CartContext/CartContext';
import { TotalContext } from './CartContext/TotalContext';
import Shipping from './Components/Shipping';
import Paystack from './Components/Paystack';
import { ItemsContext } from './CartContext/ItemsContext';

function App() {
  const [cartitem, setCartitem] = useState([])
  const [total, setTotal] = useState()
  const [itemCart, setItemCart] = useState({})
  const [values, setValues] = useState({
    address: "", 
    city: "", 
    state: "", 
    country: "", 
    zipcode: ""
});

  return (
    <div>
      <ItemsContext.Provider value={{itemCart, setItemCart}}>
        <TotalContext.Provider value={{total, setTotal}}>
          <CartContext.Provider value={{cartitem, setCartitem}}>
            <Router>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/paynow' element={<Paystack values={values}/>}/>
                <Route path='/shipping' element={<Shipping setValues={setValues} values={values}/>}/>
              </Routes>
            </Router>
          </CartContext.Provider>
        </TotalContext.Provider>
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
