import React, {useState, useEffect} from "react"
import {AiOutlineRollback, AiOutlineLoading3Quarters} from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import {useNavigate, Link} from 'react-router-dom'

export default function Contact(){
  const navigate =  useNavigate()
    const [lock, setLock] = useState(true)
    const [contact, setContact] = useState({name: "", email: "", message: ""})
    const [loading, setLoading] = useState(false)

    const handleSubmit =  (e) => {
    e.preventDefault()
    setLoading(true);
    emailjs.send('service_pqbhyar', 'template_cjx3qn6', {name: contact.name, email: contact.email, message: contact.message}, '8NEk374QRG1Nsz1-o')
    .then((result) => {
      navigate('/')
    }, (error) => {
      console.log(error.text);
    });
    }
    useEffect(() =>{
        if (contact.name && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contact.email) && contact.message) {
            setLock(false)
        } else{
            setLock(true)
        }
    },[contact.name, contact.message, contact.email])
    const handleChange = (event) =>{
        setContact({...contact,[event.target.name]: event.target.value})
    }
    return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#222222] px-8">
        <div className='flex justify-center items-center gap-1 text-[#cae96f] mb-3'>
            <p className='font-semibold text-2xl '>MBC Frame Support</p>
        </div> 
      <p className="text-white mb-8 text-center">Need help with a product? Please contact us using the form below:</p>
      <form className="w-full max-w-sm">
        <div className="md:flex  mb-6 md:flex-col ">
          <div className="md:w-full md:flex md:flex-start">
            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name:
            </label>
          </div>
          <div className="md:w-full">
            <input onChange={handleChange} value={contact.name} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" type="text" name="name" />
          </div>
        </div>
        <div className="md:flex  mb-6 md:flex-col ">
          <div className="md:w-full md:flex md:flex-start">
            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email:
            </label>
          </div>
          <div className="md:w-full">
            <input onChange={handleChange} value={contact.email} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" type="email" name="email" />
          </div>
        </div>
        <div className="md:flex  mb-6 md:flex-col ">
          <div className="md:w-full md:flex md:flex-start">
            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
              Message:
            </label>
          </div>
          <div className="md:w-full">
            <textarea onChange={handleChange} value={contact.message} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-32 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" type="text" name="message" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button disabled={lock} className="px-3 bg-[#cae96f] font-bold rounded-md py-1" onClick={handleSubmit}>{loading ? <AiOutlineLoading3Quarters className="animate-spin text-xl text-black"/> : 'Submit'}</button>
          <Link to='/'>
             <button className="px-3 bg-[#cae96f] font-bold rounded-md py-1 flex items-center gap-1">Back <AiOutlineRollback/></button>
          </Link>
        </div>
        </form>
    </div>    
    )
}


       