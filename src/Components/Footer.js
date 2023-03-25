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
                <a href='https://instagram.com/mbc_frame?igshid=YmMyMTA2M2Y='><AiOutlineInstagram size={20}/></a>
                <a href='https://wa.me/message/Y4CTBQADD3Q7E1'><BsWhatsapp/></a>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
