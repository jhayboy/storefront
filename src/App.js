// import Navbar from './Components/Navbar';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom"
// import Storefront from './Components/Storefront';
import { CartContext } from './CartContext/CartContext';
import Home from './Components/Home';
import { TotalContext } from './CartContext/TotalContext';
import Shipping from './Components/Shipping';
import Paystack from './Components/Paystack';
import { ItemsContext } from './CartContext/ItemsContext';
import Contact from './Components/Contact';
import Product from './Components/Product';
import Navbar from './Components/Navbar';


const ScrollToTop = () => {
  
  const {pathname} = useLocation()

  useEffect (()=>{
    window.scrollTo(0,0);
  },[pathname])

  return null
}

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

  const [carts, setCarts] = useState(true)
    const handleCarts = () =>{
      setCarts(!carts)
  } 
  return (
    <div>
      <ItemsContext.Provider value={{itemCart, setItemCart}}>
        <TotalContext.Provider value={{total, setTotal}}>
          <CartContext.Provider value={{cartitem, setCartitem}}>
            <Router>
            <ScrollToTop/>
            <Navbar handleCarts={handleCarts}/>
              <Routes>
                <Route path='/' element={<Home carts={carts} handleCarts={handleCarts}/>}/>
                <Route path='/paynow' element={<Paystack values={values}/>}/>
                <Route path='/contactmbc' element={<Contact/>}/>
                <Route path='/product' element={<Product/>}/>
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
