/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { GoShieldCheck } from "react-icons/go";
const AboutPage = () => {
    return (
        <>
        <div className=" bg-[url('/images/image-about.png')] bg-cover bg-center h-100">
            <div className='h-100
                         max-sm:bg-gray-800/50 max-sm:backdrop-blur-md 
                         sm:bg-gray-800/50 sm:backdrop-blur-md   
                         md:bg-gray-800/60 md:backdrop-blur-xl 
                         lg:bg-gray-800/60 lg:backdrop-blur-xl   
                        lg:max-w-150 
                       flex items-center flex-col justify-center '>
                <div>
                    <div className='flex  items-center '>
                        <span className="w-2.75 h-2.75 bg-[#40DDB6] "></span>
                        <p className='text-white pb-2 p-2'>About Us</p>
                    </div>
                    <h2 className="text-[#FFFFFF] text-4xl font-bold">Know About Us</h2>
                    <p className=' text-sm text-[#B9B9B9] font-medium'>Collaboratively administrate empowered markets plug <br/>
                                    and play networks dynamically procrastinated </p>
                </div>        
                
            </div>   
        </div>

        {/* Welcome Whitecollar */}
        <div className=" max-w-[70%] mx-auto my-20 ">

            <div className="flex justify-center items-center max-sm:flex-col sm:flex-col lg:flex-row md:flex-col mx-auto gap-x-25 ">

                <div className='bg-[#F4F4F4] mb-10'>
                 <div className='h-95 w-full'><img src="/images/About-Photo.jpg" alt="Welcome-Whitecollar" className="w-full h-full object-cover "/></div>
                   <div className='p-6'>
                    <h2 className="text-2xl font-bold  mb-4">We’re Ready To Grow Your <br/> Business With Us</h2>
                    <p className=" text-sm text-[#555555]  mb-6">Leverage agile frameworks to provide a robust synopsis for high level overviews. thinking to further the overall value proposition.</p>
                    <a href="#" className="text-[#37393F] font-medium">Learn More</a>
                   </div> 
                </div>

                <div >
                    <div>
                        <div className='flex  items-center '>
                            <span className="w-2.75 h-2.75 bg-[#40DDB6] "></span>
                            <p className='text-[#555555] pb-2 p-2'>Welcome Whitecollar</p>
                        </div>
                        <h2 className="text-3xl font-bold text-[#37393F] mb-4">We Care About Your Business Plan.</h2>
                        <p className=" text-sm  text-[#555555] mb-10">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overal.</p>
                        <p className=" text-sm  text-[#555555] mb-10">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy</p>
                        
                    </div> 

                    <div>

                        <div className='border border-gray-300  mb-3 p-3 rounded-xl '>
                            <div className="flex items-center gap-3 mb-3">
                                <IoCheckmarkCircle className="text-[#6B77E5] text-xl mr-2 size-7" />
                                <p className="text-[#37393F] font-medium">Our Vision</p>
                            </div>
                            <p className="text-sm text-[#7D7D7D]  pl-12 mb-5">Capitalize on low hanging fruit to identify a ballpark value added activity to beta clickthroughs.</p>
                        </div>

                        <div className='border border-gray-300  mb-3 p-3 rounded-xl '>
                            <div className="flex items-center gap-3 mb-3">
                                <IoCheckmarkCircle className="text-[#6B77E5] text-xl mr-2 size-7" />
                                <p className="text-[#37393F] font-medium">Our Mision</p>
                            </div>
                            <p className="text-sm text-[#7D7D7D]  pl-12 mb-5">Podcasting operational change management inside of workflows to establish a framework.</p>
                        </div>


                    </div>
                    <button className="bg-[#6B77E5] p-5 text-[#FFFFFF] text-sm font-medium cursor-pointer mt-5 mb-10">More About Us</button>
                      
                </div> 
                
            </div>
        </div>

        {/* How We Work */}
        <section className=" py-13 max-w-[70%] m-auto ">
            <div className='py-3 flex flex-col items-center text-center sm:m-auto'>
                <div className='flex  items-center text-center'>
                    <span className="w-2.75 h-2.75 bg-[#40DDB6] "></span>
                    <p className='text-[#37393F] pb-2 p-2'>Work Process</p>
                </div>
                <h2 className='text-2xl font-bold text-[#37393F] py-2'>How We Work</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-auto px-5'>
                <div className="relative  m-auto my-10 bg-gray-100 rounded-lg pt-16 pb-8 px-6 text-center">
  
                        {/* Icon */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2
                                        w-16 h-16 rounded-full bg-emerald-400
                                        flex items-center justify-center">
                            <FaRegCalendarAlt className="text-white text-2xl" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold mb-3">Make Appointment</h3>
                        <p className="text-gray-500 text-sm mb-4 ">
                            Leverage agile frameworks provide synopsis high level overviews value proposition.
                        </p>

                        <a href="#" className="text-indigo-500 font-semibold py-10">
                            Testimonials
                        </a>
                </div>
                <div className="relative m-auto my-10 bg-gray-100 rounded-lg pt-16 pb-8 px-6 text-center">
  
                        {/* Icon */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2
                                        w-16 h-16 rounded-full bg-[#6B77E5]
                                        flex items-center justify-center">
                            <HiOutlinePuzzlePiece className="text-white text-2xl" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold mb-3">Consultation</h3>
                        <p className="text-gray-500 text-sm mb-4 ">
                            Leverage agile frameworks provide synopsis high level overviews value proposition.
                        </p>

                        <a href="#" className="text-indigo-500 font-semibold py-10">
                            Testimonials
                        </a>
                </div>
                <div className="relative m-auto my-10 bg-gray-100 rounded-lg pt-16 pb-8 px-6 text-center">
  
                        {/* Icon */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2
                                        w-16 h-16 rounded-full bg-emerald-400
                                        flex items-center justify-center">
                            <GoShieldCheck className="text-white text-2xl" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold mb-3">Enjoy the Service</h3>
                        <p className="text-gray-500 text-sm mb-4 ">
                            Leverage agile frameworks provide synopsis high level overviews value proposition.
                        </p>

                        <a href="#" className="text-indigo-500 font-semibold py-10">
                            Testimonials
                        </a>
                </div>
            </div>
            
        </section>


        <section className="bg-[url('/images/Background-Image.png')] bg-cover bg-center pb-5 lg:h-100 ">
        <div className='grid lg:grid-cols-4 m-auto
                            max-sm:grid-cols-1 max-sm:py-3 max-sm:mx-auto
                            md:grid-cols-2 md:mx-auto
                            max-w-[70%] mx-auto
                            justify-center items-center pt-21'>

            <div className='text-center flex flex-col items-center max-sm:max-w-none max-w-63.25 justify-center'>
                <div><img src='/images/icons.png' alt='icons'  className='size-25 flex justify-center items-center'/></div>
                <h2 className='text-3xl py-2 font-bold text-[#40DDB6]'>10+</h2>
                <p className='text-[#37393F] py-3 font-medium'>Years of experience</p>
                <p className='text-sm text-[#7D7D7D]'>Synopsishigh level overviews value proposition.</p>
            </div>
            <div className='text-center flex flex-col items-center max-sm:max-w-none max-w-63.25 justify-center'>
                <div><img src='/images/icons(1).png' alt='icons'   className='size-25 flex justify-center items-center'/></div>
                <h2 className='text-3xl py-2 font-bold text-[#40DDB6]'>5960</h2>
                <p className='text-[#37393F] py-3 font-medium'>Satisfied clients</p>
                <p className='text-sm text-[#7D7D7D]'>Synopsishigh level overviews value proposition.</p>
            </div>
            <div className='text-center flex flex-col items-center max-sm:max-w-none max-w-63.25 justify-center'>
                <div><img src='/images/icons(2).png' alt='icons'   className='size-25 flex justify-center items-center'/></div>
                <h2 className='text-3xl py-2 font-bold text-[#40DDB6]'>50+</h2>
                <p className='text-[#37393F] py-3 font-medium'>IT problems solved</p>
                <p className='text-sm text-[#7D7D7D]'>Synopsishigh level overviews value proposition.</p>
            </div>
            <div className='text-center flex flex-col items-center max-sm:max-w-none max-w-63.25 justify-center'>
                <div><img src='/images/icons(3).png' alt='icons'   className='size-25 flex justify-center items-center'/></div>
                <h2 className='text-3xl py-2 font-bold text-[#40DDB6]'>25+</h2>
                <p className='text-[#37393F] py-3 font-medium'>Pro team members</p>
                <p className='text-sm text-[#7D7D7D]'>Synopsishigh level overviews value proposition.</p>
            </div>
        </div>
            
        </section>
        {/* our presentation */}
        <section  className="bg-[url('/images/Image-hiro.png')] bg-cover bg-center  ">
            <div className='bg-[#40DDB6]/80 h-100  backdrop-blur-xs  '>
                <div className='flex flex-col items-center justify-center text-center h-screen pb-70'>
                    <div>
                        <div className='flex  items-center '>
                            <span className="w-2.75 h-2.75 bg-[#6B77E5] "></span>
                            <p className='text-[#37393F] pb-2 p-2'>Short Video</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-4xl font-bold text-[#37393F] py-4'>our presentation</h2>
                        <p className='py-3'>lorem mdlmv o lme seo vrkvmi;vs<br/> kdvmjieml jvimnvs sljvin opjefije svj </p>
                        <button className='pt-5'>
                            <img src='/images/Play-Butten.png' alt='Play-Butten'/>
                        </button>
                    </div>
                </div>
            </div>
            
        </section>

        {/* Teem section */}
        <section>
            <div className='text-center py-5'>
               <div>
                <div className='flex  items-center justify-center'>
                    <span className="w-2.75 h-2.75 bg-[#6B77E5] "></span>
                    <p className='text-[#37393F] pb-2 p-2'>Short Video</p>
                </div>
                <h2 className='text-4xl font-bold text-[#37393F] py-4'>Meet Our Experts</h2>
            </div> 
            </div>
            
            <div className='max-w-[70%] m-auto grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 sm:py-4 my-10 text-center'>
                <div className='mx-5 max-sm:py-4 md:py-3'>
                    <img src='/images/PhotoParson.png 'alt='PhotoParson' className=' '/>
                    <div className='bg-white p-5 text-center shadow-xl'>
                                        
                        <h2 className='text-xl text-[#37393F] font-bold'>Nattasha Klvin</h2>
                        <p className='text-sm text-gray-500'>Managing Director</p>
                    </div>
                </div>

                <div className='mx-5 max-sm:py-4 md:py-3'>
                    <img src='/images/PhotoParson.png 'alt='PhotoParson' className=' '/>
                    <div className='bg-white p-5 text-center shadow-xl'>
                                        
                        <h2 className='text-xl text-[#37393F] font-bold'>David Simpson</h2>
                        <p className='text-sm text-gray-500'>Designer</p>
                    </div>
                </div>

                <div className='mx-5 max-sm:py-4 md:py-3'>
                    <img src='/images/PhotoParson.png 'alt='PhotoParson' className=' '/>
                    <div className='bg-white p-5 text-cente shadow-xl '>
                                        
                        <h2 className='text-xl text-[#37393F] font-bold'>Madeleine Grant</h2>
                        <p className='text-sm text-gray-500'>Managing Director</p>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
}

export default AboutPage;
