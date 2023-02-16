import React, {useState} from "react"
// import Navbar from "./Navbar"
import Storefront from "./Storefront"

export default function Home(){
    const [carts, setCarts] = useState(true)
    const handleCarts = () =>{
      setCarts(!carts)
    }

    return(
        <div>
            {/* <Navbar handleCarts={handleCarts}/> */}
            <Storefront carts={carts} handleCarts={handleCarts}/>
        </div>
    )
}