import React, {useState, useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
import { sneak } from './SneakersData'
import {GiAmmoBox} from "react-icons/gi"
import {BsBag} from "react-icons/bs"
// import {MdDelete} from "react-icons/md"
// import {HiMinus} from "react-icons/hi"
// import {IoMdAdd} from "react-icons/io"
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"
import { CartContext } from '../CartContext/CartContext'
import { TotalContext } from '../CartContext/TotalContext'
import Description from './Description'
import CartItems from './CartItems'

export default function Storefront({carts, handleCarts}) {
    const {setTotal} = useContext(TotalContext)
    const [currentIndex, setCurrentIndex] = useState(2)
    const {setCartitem} = useContext(CartContext)
    const [desTrig, setDesTrig] = useState(null)
   

    const [cartItem, setCartItem] = useState(() => JSON.parse(localStorage.getItem('cartList')) || [])
    const allprice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0)
    const totalPrice = allprice.toLocaleString()
    const [bag, setBag] = useState([])
   
    
    const handleCheck = () =>{
        setTotal(allprice)
    }
        
    useEffect(()=>{
        setBag(cartItem)
        setCartitem(cartItem)
        localStorage.setItem('cartList',JSON.stringify(cartItem))
    },[cartItem, setBag, setCartitem])
    


    const handleDelete = (product) =>{
        const ProductExist = cartItem.find((item) => item.id === product.id)
        if (ProductExist.quantity === 1){
            setCartItem(cartItem.filter((item) => item.id !== product.id))
        } else {
            setCartItem(cartItem.filter((item) => item.id !== product.id))

        }
    }
    const handleDes = (product) => {
        setDesTrig(product)
    }

    const prevImage = () => {
        if (currentIndex === sneak.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
       
    }
    
    const nextImage = () => {
        if (currentIndex === 0) {
            setCurrentIndex(sneak.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }
    

    // FUNCTION THAT ADDS ITEM TO THE CART AND IT KEEPS INCREASING THE QUANTITY WHEN YOU KEEP CLICKING ON THE PRODUCT
    const handleAddItem = (product) =>{
        const ProductExist = cartItem.find((item) => item.id === product.id)
        if (ProductExist) {
            setCartItem(cartItem.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1} : item))
        } else {
            setCartItem([...cartItem, {...product, quantity: 1}])
            
        }
    }
    // const theItem = localStorage.getItem('cartList')
    // const main = JSON.parse(theItem)
    // const itemsInCart = window.localStorage.removeItem("chartitem")
    // console.log(itemsInCart)

    // FUNSTION THAT REMOVE THE PRODUCT FROM THE CART WHEN THE QUANTITY IS LESS THAN 1
    const handleRemoveItem = (product) =>{
        const ProductExist = cartItem.find((item) => item.id === product.id)
        if (ProductExist.quantity === 1) {
            setCartItem(cartItem.filter((item) => item.id !== product.id ))
        } else {
            setCartItem(cartItem.map((item)=> item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item))
        }
    }

  return (
    // THE HERO SECTION THAT HAS A BG OF KINDA BLACK
    <div className=' w-full' >
        {/* the banner section  */}
        <div className='w-full bg-[#222222] flex flex-col justify-center items-center'>
            <p className='description font-semibold text-4xl text-white text-center tracking-wide'>Design & high quality</p>
            <p className='sales text-center my-5 text-white'>Sales of high-quality branded sneakers in a wide range with unique designs</p>
            <div className='my-5 flex gap-3'>
                
                <Link to='/product'>
                    <button className='openstore bg-[#cae96f] p-2 px-3 rounded-full text-xs'>Open Store</button>
                </Link>
                <button className='explore border border-[#cae96f] text-[#cae96f] p-2 rounded-full text-xs'>Explore More</button>
            </div>
            <div className='bg-white rounded-xl p-2 hidden md:block'>
                <p className='text-[#cae96f] text-2xl font-semibold'>50+</p>
                <p className='text-xs'>types with a<br/> unique design</p>
            </div>
            <div className='h-full flex items-center '>
                <BsFillArrowLeftCircleFill onClick={prevImage} size={20} className='text-white cursor-pointer'/>
                <div className='shoes flex h-full w-40 gap-5 items-end  mx-10'>
                   {sneak.map((item, index) => {
                    return(
                        <img key={index} src={item.images} alt="a Sneakers" style={{ display: index === currentIndex ? "block" : "none" }} className="w-40 h-40 object-cover mt-10 mb-10"/>
                    )
                   })}
                </div>
                <BsFillArrowRightCircleFill onClick={nextImage} size={20} className='text-white cursor-pointer'/>
            </div>
        </div>
        {/* Product section */}
        <div className='bg-[#f2f2f2] py-3  px-10'>
            <div className='md:flex  md:justify-between w-full md:items-center'>
                <p className='sm:mb-2 font-semibold text-3xl mr-auto'>New arrival</p>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-xs'>All Product</p>
                    <div className='bg-black p-1 rounded-md text-slate-300'>
                    <GiAmmoBox size={20}/>  
                    </div>
                </div>
            </div>





{/* THE CART ICON THAT WIL SHOW ONLY WHEN IT IS ON SMALL SCREEN */}

            

{/* MAPPING THROUGH THE PRODUCT */}
            <div className='w-full'>
                
                <div className='md:grid md:grid-cols-4 gap-5'>
                    {/* mapping through the product items and display them on the screen */}
                    {sneak.map((product) => {
                        return(
                            <div key={product.id} onClick={() => handleAddItem(product)} className='flex flex-col justify-center items-center mt-4'>
                                <div className='bg-white rounded-xl w-full flex flex-col justify-center items-center h-60 '>
                                    {/* <div onClick={() => handleClick(product)} className="w-full flex justify-end p-3">
                                        {watch === product ? <AiFillHeart size={25}/> : <AiOutlineHeart size={25}/>}
                                    </div> */}
                                    <img onClick={() => handleDes(product)} className='w-40 h-40 object-cover' src={product.images} alt="name"/>
                                </div>
                                <div className='flex justify-between w-full py-4'>
                                    <div>
                                        <p>{product.name}</p>
                                        <button onClick={handleAddItem} className='px-1 rounded-lg mt-2 font-semibold flex justify-center items-center gap-2 border border-black'>
                                            <p>Add to card</p>
                                            <div className='w-1 h-1 rounded-full bg-[#222222] animate-ping'></div>
                                        </button>  
                                    </div>
                                    <div className='flex flex-col justify-center items-end'>
                                        <p className='font-semibold '>&#8358;{product.price?.toLocaleString()}</p>
                                        <div className='mt-2 flex justify-center items-center p-1'>
                                            <p className='text-sm text-slate-400'>{(product.sold).toLocaleString()} sold</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
                <div onClick={handleCarts} className='bg-black rounded-lg p-1 fixed bottom-10 right-10 md:hidden animate-bounce'>
                    <BsBag className='text-white'/>
                    <div className='absolute ml-3 w-3 h-3 rounded-full bg-white flex justify-center items-center text-black'>
                        <p className='text-xs'>{cartItem.length}</p>
                    </div>
                </div>


        {/* THE DESCRIPTION THAT AT THE BOTTOM OF THE PAGE */}
        <div className='w-screen h-full px-5 py-5 gap-3 flex justify-center items-center'>
            {sneak.find((product) => product === desTrig) ? <Description desTrig={desTrig}/> : null}
        </div>
              



{/* CART SECTION */}
       <CartItems carts={carts} totalPrice={totalPrice} handleCheck={handleCheck} handleDelete={handleDelete} cartItem={cartItem} handleRemoveItem={handleRemoveItem} handleCarts={handleCarts} handleAddItem={handleAddItem}/>
        {/* End of product section */}
    </div>
  )
}
