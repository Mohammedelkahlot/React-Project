/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Check = () => {
    return (
        <>

            <div className='flex justify-center items-center lg:flex-row max-md:flex-col max-sm:flex-col gap-5 p-10 max-w-300 m-auto'>

                <div className='py-5'>
                    <span className="flex text-sm  font-medium text-gray-500 ">
                        <span className="w-2 h-2 mt-2 bg-emerald-400  mr-2"></span>
                        Our Project
                    </span>
                    <h2 className='text-[#37393F] text-lg  md:text-3xl font-bold'>What Our Client Say’s</h2>
                    <p className='text-gray-600 max-md:text-14 pt-3'>Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative </p>
                </div>

                <div >  
                    <div className='flex justify-center gap-10 max-md:flex-col flex-row '>
                        <div className=' bg-[#F6F6F6] gap-2.5 '>

                            <div className=' gap-x-4 flex justify-center items-center  p-5'>
                              <img src='/images/Photo (1).jpg' alt='Photo (1)'className='rounded-full '/>
                              <div className='flex gap-4'>

                                <div>
                                    <h2>Nattasha Kelvin</h2>
                                    <p>Designer</p>
                                    <img src='/images/star.svg' alt='star' className=''/>
                                </div>
                                
                              </div>
                            </div>
                                <div className=''>
                                    <p className='text-xl text-[#7D7D7D] font-normal p-10'>“an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor’s on a personal level and make sure that your site.</p>
                                </div>
                        </div>

                        <div className=' bg-[#F6F6F6] gap-2.5 '>

                            <div className=' flex justify-center items-center p-5 '>
                              <img src='/images/Photo (2).jpg' alt='Photo (1)'className='rounded-full '/>
                              <div className='flex gap-4'>

                                <div className='px-4'>
                                    <h2>Nattasha Kelvin</h2>
                                    <p>Designer</p>
                                    <img src='/images/star.svg' alt='star' className=''/>
                                </div>
                                
                              </div>
                            </div>
                                <div className=''>
                                    <p className='text-xl text-[#7D7D7D] font-normal  p-10'>“dd an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor’s on a personal level and make sure that your site.</p>
                                </div>
                        </div>
                    </div>  
                 </div>
            </div>
        </>
    );
}

export default  Check;
