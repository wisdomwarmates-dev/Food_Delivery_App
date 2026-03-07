import React from 'react'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <div className='bg-black text-white pb-12'>
      <div className='flex justify-between items-center px-8 py-6 border-b border-gray-600'>
        <h2 className='text-2xl font-bold'>Foodie</h2>
        <div className='flex space-x-4'>
          <FaFacebook className='text-2xl cursor-pointer' />
          <BsInstagram className='text-2xl cursor-pointer' />
          <FaSquareXTwitter className='text-2xl cursor-pointer' />
        </div>
      </div>
      <div className='text-center py-4'>
        <p className='text-gray-400'>&copy; Foodie 2025. all rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
