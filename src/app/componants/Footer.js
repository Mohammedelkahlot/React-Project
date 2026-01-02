/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className=' bg-[#37393f] p-7'>
                <div className='flex max-sm:flex-col max-sm:m-auto items-center max-md:flex-col  justify-center m-auto lg:items-center lg:justify-between w-[75%] lg:m-auto'>
                    <div className=''>
                        <img src='/images/LogoFooter.svg' alt='logo' className='w-38'/>
                    </div>

                    <div className='flex max-sm:flex-col max-sm:my-5 max-md:flex-col justify-between  items-center gap-7 py-5' >

                        <div className='flex max-sm:my-3 max-sm:items-center max-sm:m-auto justify-center items-center gap-4'>
                            <div>
                                <img src='/images/phone.png' className='w-10'/>
                            </div>
                            <div>
                                <p className='text-white font-bold text-md'>Call us</p>
                                <p className='text-white text-sm'>+01 569 895 654</p>
                            </div>
                        </div>

                        <div className='flex max-sm:my-3 max-sm:items-center max-sm:m-auto justify-center items-center gap-4'>
                            <div><img src='/images/email.png' className='w-10'/></div>
                            <div>
                                <p className='text-white font-bold text-md'>email us</p>
                                <p className='text-white text-sm'>info@Esampel.com</p>
                            </div>
                        </div>

                        <div className='flex max-sm:my-3 max-sm:items-center max-sm:m-auto lg:justify-center lg:items-center gap-4'>
                            <div><img src='/images/loction.png' className='w-10'/></div>
                            <div>
                                <p className='text-white font-bold text-md'>Location</p>
                                <p className='text-white text-sm'>amsterdam, 109-74</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='text-white'/>
            
                <div className='flex max-sm:flex-col max-sm:m-auto max-sm:items-center max-md:flex-col justify-center items-center lg:justify-between  lg:m-auto w-full'>

                     <div className='pt-7'>
                        <div className='inline-flex items-center'>{/*fayruzy ---- #3fd3af */}
                            <span className='w-2.75 h-2.75 mr-2 bg-[#6b77e5]'></span>
                            <h1 className='text-md text-[#3fd3af] font-bold'>Quick Linl</h1>
                        </div>
                        <ul className='flex flex-col pt-3'>
                            <a href='#Hreadr' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Home</a>
                            <a href='#About Us' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>About Us</a>
                            <a href='#Services' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Services</a>
                            <a href='#Blog' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Blog</a>
                            <a href='#Contact US' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Contact US</a>
                        </ul>
                     </div>
                     <div className='pt-7'>
                        <div className='inline-flex items-center'>{/*fayruzy ---- #3fd3af */}
                            <span className='w-2.75 h-2.75 mr-2 bg-[#6b77e5]'></span>
                            <h1 className='text-md text-[#3fd3af] font-bold'>Our Services</h1>
                        </div>
                        <ul className='flex flex-col pt-3'>
                            <a href='#Hreadr' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Finencial Consulting</a>
                            <a href='#About Us' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Business Mangement</a>
                            <a href='#pages' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Consultent & Programs</a>
                            <a href='#Services' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Company Mangement</a>
                            <a href='#Blog' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>insurance & Finance</a>
                        </ul>
                     </div>
                     <div className='pt-7'>
                        <div className='inline-flex items-center'>{/*fayruzy ---- #3fd3af */}
                            <span className='w-2.75 h-2.75 mr-2 bg-[#6b77e5]'></span>
                            <h1 className='text-md text-[#3fd3af] font-bold'>Uitilty Page</h1>
                        </div>
                        <ul className='flex flex-col pt-3'>
                            <a href='#Hreadr' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Style Guide</a>
                            <a href='#About Us' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Licenses</a>
                            <a href='#pages' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Instruction</a>
                            <a href='#Services' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>Chargelog</a>
                            <a href='#Blog' className='cursor-pointer hover:text-[#3fd3af] text-white py-1'>404 Page</a>
                        </ul>
                     </div>
                     <div className='bg-[#474950] mt-9 py-8 px-6'>
                        <h2 className='text-white text-xl font-medium'>Subscribe</h2>
                        <p className='text-white py-2'>Join Our Mailng List & to get news.</p>
                        <div className='py-2 '>
                            <input type='text' placeholder='Your Email Address ' className='bg-white p-3 '/>
                            <button className='p-3 text-white text-ms font-medium bg-[#6b77e5] cursor-pointer'>Subscribe</button>
                        </div>
                     </div>
                     
                </div>

                <hr className='text-white my-5'/>

                <div className='flex flex-wrap m-auto justify-between items-center'>
                    <div className='text-white py-3'>
                        Copyright @ <span className='text-[#3fd3af]'>WhiteCollar</span> | designed by <span className='text-[#6b77e5]'>ViatowFlow</span> Templates - Porwered by Webfiow
                    </div>

                    <div className='flex gap-3 sm:py-5'>
                        <div>
                            <p className='text-white'>Follow : </p>
                        </div>
                        <div className='flex gap-2'>
                            <img src='/images/insta-icon.svg'alt='insta-icon' className='w-6'/>
                            <img src='/images/fac-icon.svg'alt='fac-icon' className='w-6'/>
                            <img src='/images/twitter-icon.svg'alt='twitter-icon' className='w-6'/>
                            <img src='/images/pint-icon.svg'alt='pint-icon' className='w-6'/>
                        </div>
                    </div>
                </div>
                
            </footer>
        </>
    );
}

export default Footer;
