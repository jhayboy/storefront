import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillMinusCircle, AiFillPlusCircle, AiFillCloseCircle, } from "react-icons/ai"
import {MdDelete} from 'react-icons/md'

export default function CartItems({handleRemoveItem, cartItem, carts, totalPrice, handleCheck, handleDelete, handleCarts, handleAddItem}){
    
    return(
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
                            <p>&#8358;{(item.price * item.quantity).toLocaleString()}</p>
                            <MdDelete onClick={()=>handleDelete(item)} className='text-red-500 ml-auto'/>
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
    )
}