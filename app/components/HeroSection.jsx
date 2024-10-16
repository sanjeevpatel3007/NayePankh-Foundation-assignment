import React from 'react';
import { FiGift, FiLink, FiShare } from 'react-icons/fi';

const HeroSection = () => {
    return (

        <div>

            {/* heroSection */}
            <div
                className="bg-cover bg-center "
                style={{ backgroundImage: "url('/nayepankh.jpg')" }}
            >

                <div className='flex justify-center items-center h-screen'>
                    <div className="bg-white bg-opacity-60 p-10 rounded shadow-lg max-w-md "> {/* Center the content */}
                        <h2 className="text-2xl font-semibold">Hello Prashant Shukla,</h2>
                        <p className="mt-2 text-gray-600">
                            Initial push is the toughest! Go through the learning modules, or reach out to your fundraising manager to level up.
                        </p>
                    </div>

                </div>

            </div>


            {/* GoalSection */}

            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full  flex justify-between items-center px-10 min-h-screen mx-auto">


                {/* Goal Achieved and Total Goal */}
                <div className="flex-col justify-around items-center w-1/3  mb-6">

                    <div className="flex flex-col justify-center items-center pb-14">
                        <div className="border-4 border-dotted border-red-200 rounded-full h-48 w-48 flex items-center justify-center">
                            <p className="text-2xl font-bold text-red-500">10</p>
                        </div>
                        <p className="text-red-500 font-semibold mt-2">Goal Achieved</p>
                    </div>

                    {/* Share on WhatsApp */}
                    <div className="text-center mt-6">
                        <button className="bg-gradient-to-r from-red-400 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold flex items-center mx-auto">
                            <FiShare className="mr-2" /> Share on WhatsApp
                        </button>
                    </div>
                </div>

                <div className='w-2/3'>

                    <div className='pb-4 flex-col justify-center items-center '>

                        <div className="flex flex-col justify-center items-center">
                            <p className="text-gray-500">Total Goal</p>
                            <p className="text-2xl font-bold text-gray-700">₹30000</p>
                        </div>


                        {/* Level Achieved and Buttons */}
                        <div className="text-center mb-4">
                            <p className="text-gray-500">Level Achieved: <span className="font-bold text-gray-800">Star</span></p>
                        </div>

                        <div className='w-96 border-red-200   border-spacing-4 mx-auto  border-2'>

                        </div>
                    </div>


                    <div className="flex justify-center ml-4 items-center mb-6">
                        <button className="bg-gradient-to-r from-red-400 to-purple-500 text-white font-semibold px-4 py-2 mr-4 rounded-lg flex items-center">
                            <FiGift className="mr-2" /> <span>Rewards</span>
                        </button>
                        <button className="bg-gradient-to-r from-purple-500 to-red-400 text-white font-semibold px-4 py-2 rounded-lg flex items-center">
                            <FiLink className="mr-2" /> <span>Copy Donation Link</span>
                        </button>
                    </div>

                    <p className="text-gray-500 text-sm mb-6">Unlock Ninja Level at 5000</p>

                    {/* Campaign Info and Extend Button */}
                    <div className="text-center mb-4">
                        <p className="text-gray-500">Time Left: <span className="font-bold text-red-500">Campaign Expired</span></p>
                    </div>

                    <div className="text-center mb-6">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">Extend Now</button>
                    </div>

                    <hr className="border-red-400  mb-4" />
                    <div className='w-96 flex  border-red-400  border-spacing-4 h-2 border-4 mx-auto'>

                    </div>

                    {/* Reference Code */}
                    <div className="text-center mb-4">
                        <p className="text-gray-500">Reference Code: <span className="font-bold">pra7432</span></p>
                    </div>

                    <div className="text-center">
                        <button className="bg-gradient-to-r from-red-400 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold">
                            Start Here
                        </button>
                    </div>


                </div>


            </div>


        </div>

    );
};

export default HeroSection;
