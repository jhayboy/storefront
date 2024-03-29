import React from 'react'
// import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
// import CellPhone from '../ProductCategory/CellPhone'
// import Trousers from '../ProductCategory/Trousers'


export default function Product(){  
    return(
        <div className='bg-[rgb(245,245,245)] px-5 py-5'>
            <p className='font-bold text-xl'>Shop by Category</p>
            <div className='cati flex items-center md:justify-center w-full mt-5 bg-white overflow-x-auto'>
                {/* <IoIosArrowBack/> */}
                <div className='bg-white flex w-[900px] justify-between '>
                    <div className='flex flex-col justify-center items-center hover:scale-105 hover:shadow-xl px-2 py-3 gap-3 w-[127px]'>
                        <div className='bg-black rounded-2xl'>
                            <img src="../exclusive-deals_220x220v2.png" alt='category' className='w-24'/>
                        </div>
                        <p className='text-sm'>Cell Phones</p>
                    </div>

                    <div className='flex flex-col justify-center items-center hover:scale-105 hover:shadow-xl px-2 py-3 gap-3 w-[127px]'>
                        <div className='bg-black rounded-2xl'>
                            <img src="../exclusive-deals_220x220v2.png" alt='category' className='w-24'/>
                        </div>
                        <p className='text-sm'>Wrist watch</p>
                    </div>

                    <div className='flex flex-col justify-center items-center hover:scale-105 hover:shadow-xl px-2 py-3 gap-3 w-[127px]'>
                        <div className='bg-black rounded-2xl'>
                            <img src="../exclusive-deals_220x220v2.png" alt='category' className='w-24'/>
                        </div>
                        <p className='text-sm'>Electronics</p>
                    </div>

                    <div className='flex flex-col justify-center items-center hover:scale-105 hover:shadow-xl px-2 py-3 gap-3 w-[127px]'>
                        <div className='bg-black rounded-2xl'>
                            <img src="../exclusive-deals_220x220v2.png" alt='category' className='w-24'/>
                        </div>
                        <p className='text-sm'>Shoes</p>
                    </div>

                    <div className='flex flex-col justify-center items-center hover:scale-105 hover:shadow-xl px-2 py-3 gap-3 w-[127px]'>
                        <div className='bg-black rounded-2xl'>
                            <img src="../exclusive-deals_220x220v2.png" alt='category' className='w-24'/>
                        </div>
                        <p className='text-sm'>T - Shirt</p>
                    </div>

                    <div className='flex flex-col justify-center items-center hover:scale-105 hover:shadow-xl px-2 py-3 gap-3 w-[127px]'>
                        <div className='bg-black rounded-2xl'>
                            <img src="../exclusive-deals_220x220v2.png" alt='category' className='w-24'/>
                        </div>
                        <p className='text-sm'>Jelweries</p>
                    </div>

                    <div className='flex flex-col justify-center items-center hover:scale-105 hover:shadow-xl px-2 py-3 gap-3 w-[127px]'>
                        <div className='bg-black rounded-2xl'>
                            <img src="../exclusive-deals_220x220v2.png" alt='category' className='w-24'/>
                        </div>
                        <p className='text-sm'>Trouser</p>
                    </div>
                </div>
                {/* <IoIosArrowForward/> */}
            {/* <CellPhone/> */}
            </div>
        </div>
    )
}