/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Provide = () => {
    return (
        <>

          <div className=''>
            <div className='text-center mt-16 mb-12'>
            <span className="inline-flex items-center text-sm font-medium text-gray-500 mb-3">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                We Are Expertise In            
                </span>
            <h2 className="text-2xl max-sm:text-3xl font-extrabold text-[#37393F] leading-tight mb-6">We Provide Professional <br/>Business Solutions.</h2>
          </div>

          {/* cards start */}
        <div className='grid
                        lg:grid-cols-3 
                        lg:gap-10
                        md:grid-cols-2
                        sm:grid-cols-1
                        sm:place-items-center
                        mx-auto
                        '>
          {/* <div className='flex justify-center items-center space-x-3.5 sm:flex-col lg:flex-row'>
            
          </div> */}
            <div className='flex justify-center items-center bg-[#F4F4F4] gap-[30%]  h-43.25 p-6   sm:my-4 lg:my-0'>
                <div>
                    <h3 className='font-poppins text-[25px] font-semibold leading-[31.75px] text-[#37393F] pb-5' >Financial Consultancy</h3>
                    <a className="text-[#6B77E5] pt-3">Read More</a>
                </div>
                <img src='/images/icon.png' alt='icon' className=''/>
            </div>

            <div className='flex justify-center items-center bg-[#F4F4F4] gap-[30%] h-43.25  p-6  sm:my-4 lg:my-0'>
                <div>
                    <h3 className='font-poppins text-[25px] font-semibold leading-[31.75px] text-[#37393F] pb-5' >Business Management</h3>
                    <a className="text-[#6B77E5] pt-3">Read More</a>
                </div>
                <img src='/images/icon (1).png' alt='icon' className=''/>
            </div>

            <div className='flex justify-center items-center bg-[#F4F4F4] gap-[30%] h-43.25  p-6  sm:my-4 lg:my-0'>
                <div>
                    <h3 className='font-poppins text-[25px] font-semibold leading-[31.75px] text-[#37393F] pb-5' >Consultants & program</h3>
                    <a className="text-[#6B77E5] pt-3">Read More</a>
                </div>
                <img src='/images/icon (2).png' alt='icon' className=''/>
            </div>

            <div className='flex justify-center items-center bg-[#F4F4F4] gap-[30%]  h-43.25 p-6  sm:my-4 lg:my-0'  >
                <div>
                    <h3 className='font-poppins text-[25px] font-semibold leading-[31.75px] text-[#37393F] mb-5' >Company Management</h3>
                    <a className="text-[#6B77E5] pt-3">Read More</a>
                </div>
                <img src='/images/icon (3).png' alt='icon' className=''/>
            </div>

            <div className='flex justify-center items-center bg-[#F4F4F4] gap-[30%] h-43.25  p-6   sm:my-4 lg:my-0 '>
                <div>
                    <h3 className='font-poppins text-[25px] font-semibold leading-[31.75px] text-[#37393F] mb-5' >Financial & Insurance jobs</h3>
                    <a className="text-[#6B77E5] pt-3">Read More</a>
                </div>
                <img src='/images/icon (4).png' alt='icon' className=''/>
            </div>

            <div className='flex justify-center items-center bg-[#6B77E5] gap-[30%] h-43.25  p-6 w-80 text-[#FFFFFF] font-semibold text-2xl pt-15  sm:my-4 lg:my-0'>
                <p>More Services</p>
            </div>
          {/* <div className='flex justify-center items-center space-x-3.5 mt-6 sm:flex-col lg:flex-row'>
            
          </div> */}
        </div>
          
          {/* cards end */}
          </div>
        </>
    );
}

export default Provide;
