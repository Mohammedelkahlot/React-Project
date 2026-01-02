/* eslint-disable @next/next/no-img-element */
import React from 'react';
const Hiro = () => {
    return (
        <>
           <div className="bg-[url('/images/Image-hiro.png')] bg-cover bg-center h-125 sm:pt-0" >

                 <div className='flex justify-center items-center 
                                max-sm:bg-gray-800/50 max-sm:backdrop-blur-md 
                                sm:bg-gray-800/50 sm:backdrop-blur-md   
                                md:bg-gray-800/60 md:backdrop-blur-xl 
                                lg:bg-gray-800/60 lg:backdrop-blur-xl h-125  
                                  lg:max-w-150 '>
                 {/* */}

                <div className=' flex flex-col items-center sm:m-auto '>
                    <div className='flex  items-center'>
                        <span className="w-2.75 h-2.75 bg-[#40DDB6] "></span>
                        <p className='text-white pb-2 p-2'>Welcome to Whitecollar Solution</p>
                    </div>

                    <h1 className='text-4xl font-bold text-white pl-10'>The Best Value <br/>{/* lg:text-4xl md:text-3xl sm:text-3xl */}
                        for <span className='text-[#40DDB6]'>Business</span> and
                       <br/> Corporation</h1>

                    <p className='text-[#B9B9B9] text-sm pl-3 pt-3'>Collaboratively administrate empowered<br/> markets plugand play networks<br/> dynamically procrastinated </p>

                    <div className='gap-5 text-white  mt-5 flex'>
                        <button className='bg-[#40DDB6] p-2 text-[#37393F] text-sm font-bold cursor-pointer'>Get Consulting</button>
                        
                        <div className='flex flex-row  cursor-pointer items-center'>
                            <img src="/images/Play-Butten.png" alt="play" className='w-8'/>
                            <button className='text-sm pl-1 '>Watch Videos</button>
                        </div>
                    </div>
                </div>
                    
                </div>
           </div>
        </>
    );
}

export default Hiro;
