/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ChooseMe = () => {
    return (
        <>
            <div className="flex justify-center items-center bg-[#37393f] my-5">
                {/* Text Section */}
                <div className='m-5 pt-3 pl-15'>
                
                    <div className='flex  items-center '>
                        <span className="w-2.75 h-2.75 bg-[#40DDB6] "></span>
                        <p className='text-white pb-2 p-2'>Why Choose Me</p>
                    </div>
                    <h2 className='lg:text-4xl sm:text-2xl font-bold text-white leading-tight mb-6'>We Provide Solutions To <br/>Grow Your Business</h2>
                    <p className='text-sm font-normal size-18px text-[#FFFFFF]'>Leverage agile frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proposition.</p>
                    <div className=''>
                      <div>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-2 gap-5 lg:mt-8 sm:mt-0 py-4'>

                    <div className='flex flex-col bg-[#2E2F34] justify-between gap-10 sm:mt-3 lg:mt-8'>
                        <div className='flex items-center justify-around py-8 px-5'>
                            <img src='/images/Chart.png' alt='chart' className='w-15'/>
                            <div className='ml-4 '>
                                <p className='text-white text-sm '>client</p>
                                <p className='text-white font-bold'>Quick Response</p>
                            </div> 
                        </div> 
                    </div>

                    <div className='flex flex-col sm:flex-col lg:flex-row bg-[#2E2F34]  gap-10 sm:mt-3 lg:mt-8'>
                        <div className='flex items-center justify-around py-8 px-5'>
                            <img src='/images/Chart (1).png' alt='chart' className='w-15'/>
                            <div className='ml-4 '>
                                <p className='text-white text-sm '>Project</p>
                                <p className='text-white font-bold'>Finished Jobs</p>
                            </div> 
                        </div>
                    </div>

                    </div>
                    </div>  
                        

                    <div className='flex justify-center  w-full '>
                        <div className=' '>

                            <div className='flex items-center gap-3 m-5'>
                                <img src='/images/chek.svg' alt='check-icon' />
                                <p className='text-white'><span className='text-2xl font-bold'>2,800+</span> Active clients</p>
                            </div>
                            <div className='flex items-center gap-3 m-5'>
                                <img src='/images/chek.svg' alt='check-icon' />
                                <p className='text-white'><span className='text-2xl font-bold'>1,670+</span> <span className='text-yellow-600'>5 start</span> reviews</p>
                            </div>
                        </div>
                        <div className=' space-x-3 mt-7'>
                            <div className='flex items-center pb-9'>

                                <img src='/images/chek.svg' alt='check-icon' />
                                <span className='text-white ml-3 font-bold'>106+</span>
                            </div>


                            <div className='w-full '>
                                <a className='text-[#40DDB6] font-bold w-full '>Get in Touch</a>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                    

                </div>
             
                {/* Photo Section */}
                <div className=' max-md:hidden lg:block'>
                    <img src="/images/PhotoChoes.jpg" alt="check-icon" className="" />
                </div>
            </div>
        </>
    );
}

export default ChooseMe;
