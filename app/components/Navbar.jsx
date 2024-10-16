import React from 'react';
import { FaBars } from 'react-icons/fa';
import { BsUiChecksGrid } from "react-icons/bs";

const Navbar = ({ onToggleSidebar }) => {
    return (
        <div className="bg-white shadow-md fixed top-0 left-0 md:left-64 w-full md:w-[calc(100%-16rem)] h-16 flex items-center justify-between px-4 ">
            {/* Button to toggle sidebar on mobile */}
            <div className="flex items-center">
                {/* Grid icon for mobile view */}

                <div className='flex px-2 md:hidden ' >
                    <button className='text-blue-800 ' onClick={onToggleSidebar}>
                        <BsUiChecksGrid size={24} />
                    </button>
                    <p className='px-4  text-2xl text-orange-700'>Logo</p>
                </div>



                {/* Title for dashboard */}
                <h1 className="hidden md:block text-lg text-gray-700 font-bold ml-4">Dashboard</h1>

                
            </div>

            <div className='rounded-full bg-red-700 px-4 py-2 text-white'>
                P
            </div>
            
        </div>
    );
};

export default Navbar;
