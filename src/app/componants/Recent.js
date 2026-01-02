/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Recent = () => {
    return (
        <>
            <div className='flex max-sm:flex-col sm:m-auto sm:text-center sm:py-7 md:flex-row  items-center justify-between  m-auto w-[70%] mt-10  mb-5  '>
                <div className=''>
                   <span className="inline-flex items-center text-sm font-medium text-[#37393F] mb-3">
                    <span className="w-2 h-2 bg-emerald-400  mr-2 "></span>
                    Our Recent News
                    </span>
                <h2 className='text-3xl font-bold text-[#37393F] py-4'>Latest Posts</h2> 
                </div>
                <div className='bg-[#37393F] sm:w-40 lg:w-35 sm:px-7 sm:py-4 lg:px-6 lg:py-6'>
                    <button className=' text-white max-sm:p-3 '>More News</button>
                </div>
                
            </div>

            {/*  */}

            <div className='flex justify-center items-center max-sm:flex-col  px-10'>
 
                <div className='sm:max-w-[45%] md:max-w-[42%]  md:m-auto p-5'>
                    <div>
                        <img src='/images/lab.png' alt='Photo (2).jpg ' className=''/>
                    </div>
                    <div className='flex'> 
                        <div className=' font-bold text-[#FFFFFF] text-center text-sm bg-[#6B77E5] p-2'>April 13/ 2021</div>

                        <div className='flex items-center justify-center gap-1 bg-[#40DDB6] '>
                            <img src='/images/user.png' alt='' className='h-5 pl-4'/>
                            <p className='text-[#208068] font-normal  text-sm p-2'>Miranda Doe</p>
                        </div>

                        <div className='flex items-center justify-center gap-1 bg-[#40DDB6] '>
                            <img src='/images/user.png' alt='' className='h-5 pl-4 '/>
                            <p className='text-[#208068] font-normal  text-sm text-center p-2'>Miranda Doe</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold text-[#37393F] pt-2'>A Business Consulting That Can Produce</h2>
                        <p className='text-[#7D7D7D]text-sm mb-5 pt-2'>Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.</p>
                        <a href='#' className='text-[#6B77E5] font-semibold text-xl pt-5'>Read More</a>
                    </div>

                </div>

                <div className='sm:max-w-[45%] md:max-w-[42%]  md:m-auto p-5'>
                    <div>
                        <img src='/images/lab.png' alt='Photo (2).jpg ' className=''/>
                    </div>
                    <div className='flex w-full m-0.5 mt-0'> 
                        <div className=' font-bold text-[#FFFFFF] text-center text-sm bg-[#6B77E5] p-2'>April 13/ 2021</div>

                        <div className='flex items-center justify-center gap-1 bg-[#40DDB6] '>
                            <img src='/images/user.png' alt='' className='h-5 pl-4'/>
                            <p className='text-[#208068] font-normal  text-sm p-2'>Miranda Doe</p>
                        </div>

                        <div className='flex items-center justify-center gap-1 bg-[#40DDB6] '>
                            <img src='/images/user.png' alt='' className='h-5 pl-4 '/>
                            <p className='text-[#208068] font-normal  text-sm text-center p-2'>Miranda Doe</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold text-[#37393F] pt-2'>A Business Consulting That Can Produce</h2>
                        <p className='text-[#7D7D7D]text-sm mb-5 pt-2'>Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.</p>
                        <a href='#' className='text-[#6B77E5] font-semibold text-xl pt-5'>Read More</a>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Recent;
