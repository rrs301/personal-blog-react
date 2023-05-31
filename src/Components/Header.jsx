import React from 'react'
import logo from './../assets/Images/logo.png'
import { IoLogoYoutube } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate=useNavigate();
  return (
    <div className='flex justify-between items-center'>
        <img src={logo} className='w-[180px]' />
        <ul className='hidden md:flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer' onClick={()=>navigate('/')}>Home</li>
            <li className='hover:font-bold cursor-pointer'>About Us</li>
            <li className='hover:font-bold cursor-pointer'>Contact Us</li>
        </ul>
        <button className='bg-red-500 rounded-full text-white flex items-center text-[14px]'>
            Subscribe <IoLogoYoutube className='ml-3 text-[20px]' /> </button>
    </div>
  )
}

export default Header