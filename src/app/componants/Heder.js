/* eslint-disable @next/next/no-img-element */
"use client"
import React , { useState }  from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Heder = () => {
    const [showMobileMenu , setsShowMobileMenu] = useState(false);
    return (
        <>
        <div className='bg-[#37393F] p-3 w-full max-sm:hidden'>
                <div className=' flex justify-between items-center  max-w-300 mx-auto flex-wrap '>

                        <div className='flex justify-center items-center gap-1'><CiLocationOn className='text-[#40DDB6]'/><p className='text-white text-[13px]  font-extralight'>24 Olive Street, Prairie, NY 53590</p></div>
                        <div className='flex justify-center items-center gap-1'><MdOutlineEmail className='text-[#40DDB6]'/><p className='text-white text-[13px] font-extralight'>whitecollar@gmail.com</p></div>
                  

                  
                        <div className=''>
                            <div className='flex justify-center items-center gap-1'><TbClockHour3 className='text-[#40DDB6]'/><p className='text-white text-[13px]  font-extralight'>Mon - Fri: 8:00 am - 5:00 pm</p></div> 
                        </div>
                        <div className='flex justify-center items-center gap-1 text-white'>
                            <FaInstagram />
                            <FaFacebook />
                            <FaTwitter/>
                            <FaPinterest />
                        </div>
                        
                </div>
        </div>
         

        <div className='flex justify-between items-center max-w-300 mx-auto py-3'>

            {/*  LOGO (Navbar) */}
            <img
            src='/images/Logo.svg'
            alt='Logo'
            className={`transition-all duration-300
                ${showMobileMenu ? 'opacity-0 invisible' : 'opacity-100'}
            `}
            />

            <ul className='hidden md:flex lg:gap-7 md:gap-5'>
            <a href='#Hreadr' className='cursor-pointer hover:text-[#6B77E5]'>Home</a>
            <a href='#About Us' className='cursor-pointer hover:text-[#6B77E5]'>About Us</a>
            <a href='#pages' className='cursor-pointer hover:text-[#6B77E5]'>pages</a>
            <a href='#Services' className='cursor-pointer hover:text-[#6B77E5]'>Services</a>
            <a href='#Blog' className='cursor-pointer hover:text-[#6B77E5]'>Blog</a>
            <a href='#Contact US' className='cursor-pointer hover:text-[#6B77E5]'>Contact US</a>
            </ul>

            <button className='hidden md:block  p-2 rounded-lg text-[#FFFFFF] bg-[#6B77E5]'>
            Get Consulting
            </button>

            <img
            onClick={() => { setsShowMobileMenu(true) }}
            src='images/menu_icon.png'
            alt=''
            className='size-6 md:hidden w-7 cursor-pointer'
            />
        </div>

        {/* ----- Mobile Menu ----- */}
        <div
            className={`md:hidden fixed right-0 top-0 bottom-0 z-10
            ${showMobileMenu ? 'w-full' : 'w-0'}
            overflow-hidden transition-all duration-300 bg-[#B9B9B9]
            `}
        >
            {/* 🔽 LOGO (Sidebar) */}
            <img
            src='/images/Logo.svg'
            alt='Logo'
            className='absolute top-6 left-5'
            />

            <div className='flex justify-end p-6 cursor-pointer'>
            <img
                onClick={() => { setsShowMobileMenu(false) }}
                src='/images/cross_icon.svg'
                alt=''
                className='w-7'
            />
            </div>

            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={() => setsShowMobileMenu(false)} href='#Hreadr' className='px-4 py-2 hover:bg-gray-100 w-full text-center'>Home</a>
            <a onClick={() => setsShowMobileMenu(false)} href='#About Us' className='px-4 py-2 hover:bg-gray-100 w-full text-center'>About Us</a>
            <a onClick={() => setsShowMobileMenu(false)} href='#pages' className='px-4 py-2 hover:bg-gray-100 w-full text-center'>pages</a>
            <a onClick={() => setsShowMobileMenu(false)} href='#Services' className='px-4 py-2 hover:bg-gray-100 w-full text-center'>Services</a>
            <a onClick={() => setsShowMobileMenu(false)} href='#Blog' className='px-4 py-2 hover:bg-gray-100 w-full text-center'>Blog</a>
            <a onClick={() => setsShowMobileMenu(false)} href='#Contact US' className='px-4 py-2 hover:bg-gray-100 w-full text-center'>Contact US</a>
            </ul>
        </div>
        

        </>
    );
}

export default Heder;