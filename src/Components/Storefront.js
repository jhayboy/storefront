import React, {useState, useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
import { sneak } from './SneakersData'
import {GiAmmoBox} from "react-icons/gi"
import {BsBag} from "react-icons/bs"
import {MdDelete} from "react-icons/md"
// import {HiMinus} from "react-icons/hi"
// import {IoMdAdd} from "react-icons/io"
import { AiFillMinusCircle, AiFillPlusCircle, AiFillCloseCircle, } from "react-icons/ai"
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"
import { CartContext } from '../CartContext/CartContext'
import { TotalContext } from '../CartContext/TotalContext'
import Description from './Description'

export default function Storefront({carts, handleCarts}) {
    const {setTotal} = useContext(TotalContext)
    const [currentIndex, setCurrentIndex] = useState(2)
    const {setCartitem} = useContext(CartContext)
    const [desTrig, setDesTrig] = useState(null)
    // const [watch, setWatch] = useState([])
    const [cartItem, setCartItem] = useState([])
    const allprice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0)
    const totalPrice = allprice.toLocaleString()
    
    const handleCheck = () =>{
        setTotal(allprice)
        setCartItem(localStorage.setItem("cartList", JSON.stringify(cartItem)))
    }
    useEffect(()=>{
        setCartItem(cartItem)
        
    },[cartItem, setCartitem])


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
    <div className='relative w-full' >
        {/* the banner section  */}
        <div className='w-full bg-[#222222] flex flex-col justify-center items-center'>
            <p className='description font-semibold text-4xl text-white text-center tracking-wide'>Design & high quality</p>
            <p className='sales text-center my-5 text-white'>Sales of high-quality branded sneakers in a wide range with unique designs</p>
            <div className='my-5 flex gap-3'>
                <button className='openstore bg-[#cae96f] p-2 px-3 rounded-full text-xs'>Open Store</button>
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
            <div onClick={handleCarts} className={cartItem.length > 0 ? 'bg-black rounded-lg p-1 cursor-pointer fixed bottom-10 right-10 md:hidden' : 'hidden'}>
                <BsBag className='text-white'/>
                <div className='absolute ml-3 w-3 h-3 rounded-full bg-white flex justify-center items-center text-black'>
                    <p className='text-xs'>{cartItem.length}</p>
                </div>
            </div>

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
                                    <img onClick={() => handleDes(product)} className='w-40 h-40 object-cover' src={product.images} alt='sneakers'/>
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
                                        <p className='font-semibold '>&#8358;{product.price}</p>
                                        <div className='mt-2 flex justify-center items-center p-1'>
                                            <p className='text-sm text-slate-400'>{product.sold} sold</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>


        {/* THE DESCRIPTION THAT AT THE BOTTOM OF THE PAGE */}
        <div className='w-screen h-full px-5 py-5 gap-3 flex justify-center items-center'>
            {sneak.find((product) => product === desTrig) ? <Description desTrig={desTrig}/> : null}
        </div>
              



{/* CART SECTION */}
        <div className={!carts ?  "p-5 fixed top-0 bottom-0 right-0 w-[375px] bg-[#f2f2f2] gap-3 flex flex-col pt-20" : "hidden" }>
            <AiFillCloseCircle size={25} onClick={handleCarts}/>
            <div className='h-[75%] flex flex-col gap-2 overflow-auto'>
                {cartItem.length === 0 ? 
                    <div className='flex flex-col justify-between items-center h-full py-5'>
                        <img src='https://img.freepik.com/free-vector/shopping-cart_1284-672.jpg?w=740&t=st=1673872179~exp=1673872779~hmac=d1eb6e15f64b0f7f93cb308568d74658a1f8fc5c006e4b50056354a6cf6655b4' alt=''/>
                        {/* <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1060&t=st=1673872292~exp=1673872892~hmac=5b2ee3c7140fde4de8afdafc2c61001cf49b05422e650029749dc0d1906c152d" alt='d'/> */}
                        <p className='font-bold text-xl '>Cart is empty</p>
                    </div> : cartItem.map((item) => {
                    return(
                        <div key={item.id} className='flex justify-between items-center w-full px-5 py-3 bg-white rounded-xl'>
                            <div className='flex justify-center items-center gap-6'>
                                <img className='w-20 h-20 object-cover' src={item.images} alt={item.name} />
                                <div className='flex flex-col items-between h-full gap-2'>
                                    <p>{item.name}</p>
                                    <div className='flex items-center gap-2'>
                                        <AiFillMinusCircle onClick={() => handleRemoveItem(item)}/> 
                                            <p className='flex justify-center items-center h-3 w-3'>{item.quantity}</p>
                                        <AiFillPlusCircle onClick={() => handleAddItem(item)}/>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <p>&#8358;{item.quantity * item.price}</p>
                            <MdDelete onClick={() => setCartItem(cartItem.filter((e) => e !== item))} className='text-red-500'/>
                            </div>
                        </div>
                        
                    )
                })}
            </div>


            {/* THE TOTAL PRICE SECTION THAT IS IN THE BOTTOM OF THE CART SEECTION */}
            {cartItem.length === 0 ? "" : <div className='bg-white bottom-0 w-full h-20 rounded-t-3xl mt-auto px-3 py-3 flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-xl'>&#8358;{totalPrice}</p>
                </div>
                <Link to='/shipping'>
                    <button onClick={handleCheck} className='bg-blue-500 px-3 py-2 font-semibold rounded-2xl'>CheckOut (&#8358;{totalPrice})</button>
                </Link>
            </div>}
        </div>
        {/* End of product section */}
    </div>
  )
}
