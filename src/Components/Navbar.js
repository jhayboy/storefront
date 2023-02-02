import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {SiCarthrottle} from "react-icons/si"
import {BsBag} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {GrFormClose} from "react-icons/gr"
import { CartContext } from '../CartContext/CartContext'


export default function Navbar({handleCarts}) {
    const { cartitem} = useContext(CartContext)
    const [bars, setBars] = useState(true)
    const handleClick = () =>{
        setBars(!bars)
    }
  return (
    <div className='flex justify-between bg-[#222222] px-5 py-3 sticky top-0 z-10 text-white items-center'>
        <div className='flex justify-center items-center gap-1'>
            <SiCarthrottle size={30}/>
            <p className='font-semibold'>Storefront</p>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex gap-4'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Store</li>
                <li className='cursor-pointer'>Luxury</li>
                <Link to='/contactxshopino'>
                    <li className='cursor-pointer'>Contact</li>
                </Link>
            </ul>
        </div>
            <div onClick={handleCarts} className='bg-[#cae96f] rounded-lg p-1 relative hidden md:flex cursor-pointer'>
                <BsBag />
                <div className='absolute ml-3 w-3 h-3 rounded-full bg-white flex justify-center items-center text-black'>
                    <p className='text-xs'>{cartitem.length}</p>
                </div>
            </div>
        <div onClick={handleClick} className='bg-white rounded-lg p-1 cursor-pointer md:hidden'>
            {!bars ? <GrFormClose size={20} className='text-black'/> : <GiHamburgerMenu className='text-black'/>}
        </div>

        <div className={bars ? 'hidden' : 'fixed px-3 left-0 top-0 bottom-0 py-3 bg-white w-[70%] h-full z-10 flex flex-col items-center md:hidden'}>
            <div className='flex justify-between items-center w-full'>
                <div className='flex justify-center items-center gap-1'>
                    <SiCarthrottle size={30} className="text-black"/>
                    <p className='font-semibold text-black'>Storefront</p>
                </div>
                
            </div>
            <div className='mr-auto mt-5 w-full'>
                <ul className='flex w-full gap-5 text-black flex-col mt-5'>
                    <li className='border border-x-0 border-t-0 w-full pb-5 cursor-pointer'>Store</li>
                    <li className='border border-x-0 border-t-0 w-full pb-5 cursor-pointer'>Home</li>
                    <li className='border border-x-0 border-t-0 w-full pb-5 cursor-pointer'>Luxury</li>
                    <Link to='/contactxshopino'>
                        <li className='border border-x-0 border-t-0 w-full pb-5 cursor-pointer'>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>


    </div>
  )
}
