/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Busniess = () => {
    return (
        
        <>
            <div className='bg-[#6B77E5]'>
            <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:max-w-150 max-w-300 m-auto'>
                    <div className=" text-white rounded-xl p-10">
                        <span className="inline-flex items-center text-sm font-medium text-[#FFFFFF] mb-3">
                        <span className="w-2 h-2 bg-emerald-400  mr-2 "></span>
                        How We Work
                    </span>
                    <h2 className="text-3xl font-bold mb-4">To Get Your Business <br/> To The Next Level</h2>
                    <p className="mb-6">
                        Leverage agile frameworks to provide synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall.
                    </p>
                    
                    <div className="flex items-center mb-6 bg-[#40DDB6] p-8.75">
                        <img src='/images/Chart3.png' alt='Phone' className='mr-4'/>
                        <h2 className='font-normal '>We have <span className='font-bold'>50+</span> years of experience. We offer <span className='font-bold'>whitecollar</span> services to you</h2>
                    </div>
                    
                    <p className="mb-6">
                        We have <strong>50+</strong> years of experience. We offer <strong>whitecollar</strong> services to you.
                    </p>

                    <div>
                        <div className="flex items-center mb-4">
                        <span className="text-xl text-white mr-4"><img src='/images/Vector.png' alt=''/> </span>
                        <h3 className="text-lg font-semibold">Planning</h3>
                        </div>
                        <p className="ml-8 text-white">
                        Leverage agile frameworks to provide synopsis for high level overviews.
                        </p>
                        <hr className="my-4 border-t-2 border-white" />
                        
                        <div className="flex items-center mb-4">
                        <span className="text-xl text-white mr-4"><img src='/images/Vector.png' alt=''/> </span>
                        <h3 className="text-lg font-semibold">Briefing</h3>
                        </div>
                        <p className="ml-8 text-white">
                        Leverage agile frameworks to provide synopsis for high level approaches.
                        </p>
                        <hr className="my-4 border-t-2 border-white" />
                        
                        <div className="flex items-center mb-4">
                        <span className="text-xl text-white mr-4"><img src='/images/Vector.png' alt=''/> </span>
                        <h3 className="text-lg font-semibold">Evaluation</h3>
                        </div>
                        <p className="ml-8 text-white">
                        Leverage agile frameworks to provide synopsis for high level overviews iterative.
                        </p>
                    </div>
                    </div>
                    {/* form */}
                
                <div className='p-15'>
                    
                    <div>
                    <span className="inline-flex items-center text-sm font-medium text-[#FFFFFF] mb-3">
                        <span className="w-2 h-2 bg-emerald-400  mr-2 "></span>
                        Book Now
                    </span>

                    <h2 className="text-3xl font-bold text-white mb-6">Get Free Business <br/> Appointment</h2> 
                        <div className="bg-[#FFFFFF] p-8 rounded-lg max-w-lg mx-auto">
                    
                    <form className="space-y-4">
                        <div>
                        <label htmlFor="username" className="block text-white">Your Name</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your name"
                            className=" p-3 mt-2 rounded-lg border border-gray-300"
                        />
                        </div>
                        
                        <div>
                        <label htmlFor="email" className="block text-white">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 mt-2 rounded-lg border border-gray-300"
                        />
                        </div>
                        
                        <div>
                        <label htmlFor="phone" className="block text-white">Phone Number</label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="Enter your phone number"
                            className="w-full p-3 mt-2 rounded-lg border border-gray-300"
                        />
                        </div>

                        <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="date" className="block text-white">Date</label>
                            <input
                            id="date"
                            type="date"
                            className="w-full p-3 mt-2 rounded-lg border border-gray-300"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="time" className="block text-white">Time</label>
                            <input
                            id="time"
                            type="time"
                            className="w-full p-3 mt-2 rounded-lg border border-gray-300"
                            />
                        </div>
                        </div>

                        <div>
                        <label htmlFor="description" className="block text-white">Service Description</label>
                        <textarea
                            id="description"
                            placeholder="Describe the service you need"
                            className="w-full p-3 mt-2 rounded-lg border border-gray-300"
                        />
                        </div>

                        <div className="mt-4">
                        <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                            Submit
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                
            </div> 
            </div>
        </>
    );
}

export default Busniess;
