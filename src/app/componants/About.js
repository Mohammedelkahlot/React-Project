/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { CheckCircle, Award, Briefcase } from "lucide-react";

const About = () => {
    return (
        <>
          <section className="py-20">
            <div className="container mx-auto  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-16 items-center max-w-[80%] m-auto">

                {/* LEFT CARD */}
                <div className="shadow-lg rounded-lg overflow-hidden">
                  <img
                    src="/images/About-Photo.jpg"
                    alt="Team"
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      We’re Ready To Grow Your Business With Us
                    </h3>

                    <p className="text-gray-600 text-sm mb-5">
                      Leverage agile frameworks to provide a robust synopsis for high
                      level overviews. thinking to further the overall value proposition.
                    </p>

                    <a
                      href="#"
                      className="inline-block text-sm font-semibold text-gray-900 border-b border-gray-900"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className=' max-w-[70%] m-auto '>

                  <span className="inline-flex items-center text-sm font-medium text-gray-500 mb-3">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                    Welcome Whitecollar
                  </span>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                    We Care About Your <br /> Business Plan.
                  </h2>

                  <p className="text-gray-600 mb-4">
                    Leverage agile frameworks to provide a robust synopsis for high
                    level overviews. Iterative approaches to corporate strategy foster
                    collaborative thinking to further the overall.
                  </p>

                  <p className="text-gray-600 mb-6">
                    Leverage agile frameworks to provide a robust synopsis for high
                    level overviews. Iterative approaches to corporate strategy.
                  </p>

                  {/* CHECK LIST */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-indigo-600 w-5 h-5" />
                      <span className="text-gray-800">
                        Components of a Business Strategy
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-indigo-600 w-5 h-5" />
                      <span className="text-gray-800">Business Consulting</span>
                    </div>
                  </div>

                  {/* INFO BOXES */}
                  <div className="lg:grid sm:grid-cols-2 gap-6 mb-10 sm:flex sm:flex-col">
                    <div className="flex gap-4 p-5 border rounded-lg">
                      <Briefcase className="text-emerald-500 w-8 h-8" />
                      <div>
                        <h4 className="font-bold text-gray-900">Experience</h4>
                        <p className="text-sm text-gray-600">
                          Leverage frameworks to provide treatment.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-5 border rounded-lg">
                      <Award className="text-emerald-500 w-8 h-8" />
                      <div>
                        <h4 className="font-bold text-gray-900">Awards Winner</h4>
                        <p className="text-sm text-gray-600">
                          Leverage frameworks to provide treatment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-8 py-3 font-semibold rounded">
                    More About Us
                  </button>
                </div>
            </div>
          </section>
        </>
    );
}

export default About;
