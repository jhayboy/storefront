import React from 'react'
import {AiOutlineInstagram} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 py-4 w-screen">
            <div className="container mx-auto px-4">
                <p className="text-gray-500 text-center">Copyright &copy; 2023 MBC FRAME. All rights reserved.</p>
            <div className='text-gray-500 mt-3 gap-3 flex justify-center items-center'>
                <AiOutlineInstagram size={20}/>
                <BsWhatsapp/>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
