import React, {useState, useContext} from "react"
import { useNavigate } from "react-router-dom";
import { PaystackButton } from 'react-paystack'
import emailjs from '@emailjs/browser';
import {SiCarthrottle} from 'react-icons/si'
import { TotalContext } from "../CartContext/TotalContext";
import { CartContext } from "../CartContext/CartContext";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'


const Paystack = ({values}) =>{
  const {cartitem} = useContext(CartContext)
  const cartinfo = JSON.stringify(cartitem)
  const {total} = useContext(TotalContext)
  const navigate = useNavigate()
  const publicKey = process.env.REACT_APP_PAYSTACK_API_KEY
  const amount = total * 100 // Remember, set in kobo!
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [paid, setPaid] = useState(false)
  const [loading, setLoading] = useState(false)

  // IF THERE IS NO TOTAL SEND THEM BACK TO HOME PAGE
  // IF THERE IS NO TOTAL SEND THEM BACK TO HOME PAGE
  // IF THERE IS NO TOTAL SEND THEM BACK TO HOME PAGE
  // IF THERE IS NO TOTAL SEND THEM BACK TO HOME PAGE
  // IF THERE IS NO TOTAL SEND THEM BACK TO HOME PAGE

 

  // const sendEmail = (e) => {
  //   e.preventDefault()
  //   emailjs.sendForm('service_pqbhyar', 'template_winf26i', {address: delivery.address, state: delivery.state, country: delivery.country, name: name, email: email, phone: phone }, '8NEk374QRG1Nsz1-o')
  //   .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   });
  // }
  
  const submitDetails = async(e) => {
    e.preventDefault()
    // await emailjs.sendForm('service_pqbhyar', 'template_winf26i', values.address, values.state, values.country, values.zipcode, values.city, name, email, phone, '8NEk374QRG1Nsz1-o')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
    setLoading(true)
    await emailjs.send('service_pqbhyar', 'template_winf26i', {address: values.address, state: values.state, country: values.country, zipcode: values.zipcode, city: values.city, name: name, email: email, phone: phone, cart: cartinfo}, '8NEk374QRG1Nsz1-o')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    navigate('/')
    setPaid(false)
  }
  // const form = useRef()

  
  
  const componentProps = {
    email,
    amount,
    name,
    phone,
    publicKey,
    text: "Pay Now",
    onSuccess: () => setPaid(true),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen px-5 bg-[#f2f2f2]">
            <div className="checkout-form w-[375px] flex flex-col justify-center items-center px-5">
              <div className='flex justify-between items-center w-full '>
                  <div className='flex justify-center items-center gap-1 mb-5'>
                      <SiCarthrottle size={30} className="text-black"/>
                      <p className='font-semibold text-black'>Storefront</p>
                  </div>
              </div>
              <div className={paid ? "fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center" : "hidden"}>
                <div className="fixed w-[70%] p-5 bg-white flex flex-col gap-2">
                  <div className="flex gap-1 items-center">
                    <SiCarthrottle size={30} className="text-black"/>
                    <p className='font-semibold text-black'>Storefront</p>
                  </div>
                  <p>Thanks for the purchase, we hope to see you again</p>
                  <button onClick={submitDetails} className="bg-[#222222] mt-3 px-2 py-2 rounded-lg font-semibold text-white flex justify-center items-center">{loading ? <AiOutlineLoading3Quarters className="animate-spin"/> : "Continue"}</button>
                </div>
              </div>
                <div className="checkout-field flex flex-col w-full">
                    <label>Name</label>
                    <input 
                    className="border outline-none border-black w-full px-2 py-1 rounded-md"
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="checkout-field flex flex-col w-full">
                    <label>Email</label>
                    <input 
                    className="border outline-none border-black w-full px-2 py-1 rounded-md"
                    type="text"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="checkout-field flex flex-col w-full">
                    <label>Phone</label>
                    <input 
                    className="border outline-none border-black w-full px-2 py-1 rounded-md"
                    type="text"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <PaystackButton className="bg-[#222222] mt-3 px-3 py-2 rounded-lg font-bold text-white" {...componentProps} />
          </div>
        </div>
    )
}

export default Paystack