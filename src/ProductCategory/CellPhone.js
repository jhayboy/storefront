import React from 'react' 
import { Phones } from '../CategoryDate/CellPhoneData'
import {BsCart4} from 'react-icons/bs'
import Product from '../Components/Product'


export default function CellPhone() {

    return(
        <div>
            <Product/>
            <div className='grid grid-cols-2 gap-x-3 gap-y-3 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 md:gap-4 '>
                {Phones.map((item) => (
                    <div key={item.id} className='flex flex-col justify-center items-center mt-4 text-sm shadow-xl py-3'>
                        <div className='bg-white rounded-xl flex flex-col justify-center items-center'>
                            {/* <div onClick={() => handleClick(item)} className="w-full flex justify-end p-3">
                                {watch === item ? <AiFillHeart size={25}/> : <AiOutlineHeart size={25}/>}
                            </div> */}
                            <img className='w-20 object-cover' src={item.images} alt="name"/>
                        </div>
                        <div className='flex  py-4'>
                            <div> 
                                <p>{item.name}</p>
                                <div className='flex justify-between item'>
                                    <div>
                                        <p className='font-semibold '>&#8358;{item.price?.toLocaleString()}</p>
                                        <p className='text-sm text-slate-400'>{(item.sold).toLocaleString()} sold</p>
                                    </div>
                                    <button className='px-1 rounded-lg mt-2 font-semibold flex justify-center items-center gap-2 '>
                                        <BsCart4 size={20}/>
                                    </button>  
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}