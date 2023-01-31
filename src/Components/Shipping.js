import React, {useEffect, useState} from 'react' 
import {SiCarthrottle} from 'react-icons/si'
// import emailjs from '@emailjs/browser';
import {useNavigate} from "react-router-dom"
// import { ItemsContext } from '../CartContext/ItemsContext';

export default function Shipping({values, setValues}) {
    // const {itemCart} = useContext(ItemsContext)
    const navigate = useNavigate()
    const [lock, setLock] = useState(true)
    
    
    
    const handleChange = (event) => {
        setValues({...values,[event.target.name]: event.target.value})
    }
    // console.log(values)
    const submitDetails =  async (event) => {
        event.preventDefault()
        
        navigate('/paynow')
    }
    useEffect(() =>{
        if (values.address && values.city && values.state && values.country && values.zipcode) {
            setLock(false)
        } else{
            setLock(true)
        }
    },[values.address, values.city, values.state, values.country, values.zipcode])
    
    return(
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <form  className='px-5 w-[400px]'>
                <div className='flex justify-between items-center w-full '>
                    <div className='flex justify-center items-center gap-1 mb-5'>
                        <SiCarthrottle size={30} className="text-black"/>
                        <p className='font-semibold text-black'>Storefront</p>
                    </div>
                </div>
                <div className=" flex flex-col w-full">
                    <p className="font-semibold mt-5 mb-5">Shipping Address</p>
                    
                        <label className='mt-2'>Address</label>
                        <input 
                        className="mt-1 border outline-none border-black w-full px-2 py-1 rounded-md"
                        type="text"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        />
                        <label className='mt-2'>City</label>
                        <input 
                        className="mt-1 border outline-none border-black w-full px-2 py-1 rounded-md"
                        type="text"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        />
                        <label className='mt-2'>State/Province</label>
                        <input 
                        className="mt-1 border outline-none border-black w-full px-2 py-1 rounded-md"
                        type="text"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        />
                    
                        <label className='mt-2'>Country</label>
                        <input 
                        className="mt-1 border outline-none border-black w-full px-2 py-1 rounded-md"
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        />
                    
                        <label className='mt-2'>Zipcode</label>
                        <input 
                        className="mt-1 border outline-none border-black w-[50%] px-2 py-1 rounded-md"
                        type="text"
                        name="zipcode"
                        value={values.zipcode}
                        onChange={handleChange}
                        />
                    <button disabled={lock} type='submit' onClick={submitDetails}  className="bg-[#222222] mt-3 px-2 py-2 rounded-lg font-semibold text-white">Continue</button>
                </div>
            </form>
        </div>    
    )
}