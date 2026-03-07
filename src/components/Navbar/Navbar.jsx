import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link } from 'react-router'
import { ShopContext } from '../ShopContext';

const Navbar = () => {

  const {quantity} = useContext(ShopContext);

const [isScrolled, setIsScrolled] = useState(false);

useEffect (() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  }

  window.addEventListener('scroll', handleScroll)

  return() => window.removeEventListener('scroll', handleScroll)
}, [])

  return (
   <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled ? "bg-white text-black shadow-md py-4" : "bg-transparent py-6"
   } px-24 flex justify-between items-center`}>

    <div className='text-2xl font-bold'>
      Foodie
    </div>
    <ul className='flex space-x-6 text-lg font-semibold uppercase'>
      <li className='cursor-pointer hover:text-gray-800 transition '>Home</li>
      <li  className='cursor-pointer hover:text-gray-800 transition'>Dishes</li>
      <li className='cursor-pointer hover:text-gray-800 transition'>Contact</li>
      <li className='cursor-pointer hover:text-gray-800 transition'>Use App</li>
    </ul>
    <div className='flex text-xl items-center gap-4'>
        <Link to='/cart' className='relative'>
      <FaCartShopping className='cursor-pointer' />
      {quantity > 0 && (
        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full'>{quantity}</span>
      )

      }
       </Link>
      <FaRegUser className='cursor-pointer' />
   
    </div>
   </div>
  )
}

export default Navbar
