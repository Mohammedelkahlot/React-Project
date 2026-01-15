/* eslint-disable @next/next/no-img-element */
import { BoxSelect, Download } from 'lucide-react';
import React from 'react';

const ServicesSingle = () => {
    return (
        <>
           <div className="bg-[url('/images/Image-hiro.png')] bg-cover bg-center h-100 " >

                    <div className='flex justify-center items-center 
                                    max-sm:bg-gray-800/50 max-sm:backdrop-blur-md 
                                    sm:bg-gray-800/50 sm:backdrop-blur-md   
                                    md:bg-gray-800/60 md:backdrop-blur-xl 
                                    lg:bg-gray-800/60 lg:backdrop-blur-xl h-100  
                                    lg:max-w-150 '>
                    {/* */}

                    <div className=' flex flex-col sm:m-auto '>
                        <div className='flex  items-center'>
                            <span className="w-2.75 h-2.75 bg-[#40DDB6] "></span>
                            <p className='text-white pb-2 p-2'>About The Services</p>
                        </div>

                        <h1 className='text-4xl font-bold text-white '>Business Management</h1>
                        
                    </div>
                        
                    </div>
           </div> 

            <div className='max-w-[70%] m-auto py-20 flex gap-30'>
                <div >
                    <div className='left grid grid-cols-1 '>
                        <div className='bg-gray-100 p-5 w-70 m-5'>
                            <p className='text-lg font-medium'>Services</p>
                               <div className="py-3 hover:text-[#ffff]">
                                <select className='w-full hover:bg-[#6B77E5] p-2'>
                                    <option className="">Financial Consultancy</option>
                                    <option>text-1</option>
                                    <option>text-2</option>
                                    <option>text-3</option>
                                </select>
                                </div> 
                                <div className="py-3 hover:text-[#ffff]">
                                <select className='w-full hover:bg-[#6B77E5] p-2'>
                                    <option className="">Business Management</option>
                                    <option>text-1</option>
                                    <option>text-2</option>
                                    <option>text-3</option>
                                </select>
                                </div>

                                <div className="py-3 hover:text-[#ffff]">
                                <select className='w-full hover:bg-[#6B77E5] p-2'>
                                    <option className="">Consultancy program</option>
                                    <option>text-1</option>
                                    <option>text-2</option>
                                    <option>text-3</option>
                                </select>
                                </div>

                                <div className="py-3 hover:text-[#ffff]">
                                  <select className='w-full hover:bg-[#6B77E5] p-2'>
                                    <option className="">Financial Insurance & Jobs</option>
                                    <option>text-1</option>
                                    <option>text-2</option>
                                    <option>text-3</option>
                                </select>  
                                </div>
                                
                                <div className="py-3 hover:text-[#ffff]">
                                    <select className='w-full hover:bg-[#6B77E5] p-2'>
                                        <option className="">Bank Management</option>
                                        <option>text-1</option>
                                        <option>text-2</option>
                                        <option>text-3</option>
                                    </select>
                                </div>
                        </div>
                        <div className='bg-gray-100 p-5 w-70 m-5'>
                            <div>
                                <h3 className='text-lg font-medium pb-4'>Download</h3>
                                <hr className='text-gray-300'/>
                                <p className='text-gray-500 pt-3'>One-to-one costomer Services with robust deliverables</p>

                                <div className='pt-5'>
                                   <button className='flex bg-[#6B77E5] text-white gap-3 p-5 font-medium my-3'>Document.pdf<Download/></button>
                                    <button className='flex bg-[#6B77E5] text-white gap-3 p-5 font-medium my-3'>Document.pdf<Download/></button> 
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="bg-[url('/images/Image-hiro.png')] bg-cover bg-center  w-70 m-5 h-100">
                            <div className='bg-emerald-400/50 backdrop-blur-md w-full h-100'>
                                <div className='text-center flex flex-col p-5 items-center justify-center h-100'>
                                    <div className='flex items-center'> 

                                        <span className="w-2.75 h-2.75 bg-[#6B77E5] "></span>
                                        <p className='text-black pb-2 p-2'>Have any question</p>
                                    </div>

                                    <div>
                                        <h2 className='text-2xl font-bold py-2'>Do You Need <br/><span className='text-white'>Any Help</span></h2>
                                        <p className='text-gray-900 py-2 text-sm'>Leverage agile frameworks to provide a robust synopsis for high level</p>
                                    </div>

                                    <div>
                                        
                                        <button className='text-white font-medium p-5 bg-[#6B77E5]'>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='right ' >
                        <div className='w-100'>
                            <img src='/images/mm.png' alt='mm'/>
                            <h2 className='text-2xl text-black font-bold py-5'>Why Us For International Business <br/> Management Consulting</h2>
                            <p className='text-sm text-gray-500 '>Completely synergized resourced taxings relationships premiers markets ultivate <br/>one-to-one customer service with robust ideas dynamically innovated resources leveling customer service for state of the art  customer service innovate product  for reliable supply engage web services cutting-edge deliverables. </p>
                        </div>
                        <div className='py-5'>
                            <h2 className='text-[#6B77E5] text-lg font-semibold'>Prioactively envisioned nultimedia based expertise<br/> media gtowth superior collaboration.</h2>
                            <p className='text-[#7D7D7D] text-sm'>One-to-one customer service with robust ideas dynamically innovated resources<br/> for reliable supply engage web services cutting-edge deliverables.</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src='/images/image.png' alt='ss'/>

                            <div>
                                <h2 className='text-[#37393F] text-lg font-medium'>Our benefits</h2>
                                <h2 className='text-[#40DDB6] text-lg font-medium'>Incubate standards compliant channels benefits.</h2>
                                <div className='flex items-center gap-2 py-4'>
                                    <img src='/images/Vector1.png' alt='check'/>
                                    <p className='font-normal text-[#7D7D7D]'>Credibly reintermediate backend</p>
                                </div>
                                <div className='flex items-center gap-2 py-4'>
                                    <img src='/images/Vector1.png' alt='check'/>
                                    <p className='font-normal text-[#7D7D7D]'>Holistically foster superior</p>
                                </div>
                                <div className='flex items-center gap-2 py-4'>
                                    <img src='/images/Vector1.png' alt='check'/>
                                    <p className='font-normal text-[#7D7D7D]'>Distinctively exploit optimal</p>
                                </div>
                            </div>
                        </div>
                            <div className='text-[] text-2xl font-bold py-5'>
                                <h2 className='text-[#37393F] '>Frequently Asked Questions</h2>
                                <p className='text-[#7D7D7D] text-sm font-normal py-2'>Leveling customer service for state of the art  customer service innovate product  <br/>for reliable supply engage web services cutting-edge deliverables.</p>
                            </div>
                        <div className='max-w-2xl mx-auto border  divide-y my-5'>
                            
                            <details className='group p-4 hover:bg-gray-50 open:bg-gray-100'>
                                {/*  */}
                                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>How does our pricing work?<span class="text-xl transition-transform duration-300 group-open:rotate-45">+</span></summary>
                                <p className='mt-4 text-gray-600'>Your pricing explanation goes here.</p>
                            </details>
                            
                            <details className='group p-4 hover:bg-gray-50 open:bg-gray-100 '>
                                {/*  */}
                                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>Where do I look for “Frequently Asked” Questions?<span class="text-xl transition-transform duration-300 group-open:rotate-45">+</span></summary>
                                <p className='mt-4 text-gray-600'>Your pricing explanation goes here.</p>
                            </details>
                            <details className='group p-4 hover:bg-gray-50 open:bg-gray-100 '>
                                {/*  */}
                                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>Which template is the best for business?<span class="text-xl transition-transform duration-300 group-open:rotate-45">+</span></summary>
                                <p className='mt-4 text-gray-600'>Your pricing explanation goes here.</p>
                            </details>
                            <details className='group p-4 hover:bg-gray-50 open:bg-gray-100 '>
                                {/*  */}
                                <summary className='flex cursor-pointer list-none items-center justify-between font-medium'>Which template is the best for business?<span class="text-xl transition-transform duration-300 group-open:rotate-45">+</span></summary>
                                <p className='mt-4 text-gray-600'>Your pricing explanation goes here.</p>
                            </details>

                        </div>
                    </div>
                </div>
           
        </>
    );
}

export default ServicesSingle;
