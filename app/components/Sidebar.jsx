import React from 'react';
import { FaTachometerAlt, FaExchangeAlt, FaQuestionCircle, FaBook, FaGift, FaTimes } from 'react-icons/fa';
import { BsUiChecksGrid } from "react-icons/bs";

const Sidebar = ({ isOpen, activeTab, handleTabClick, toggleSidebar }) => {
  return (
    <div className={`bg-white w-64 h-screen shadow-md fixed top-0 z-10 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0`}>
      {/* Close Button for Mobile View */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center md:hidden">
        <h1 className="text-2xl font-bold text-orange-600">Logo</h1>
        <button onClick={toggleSidebar} className="text-gray-700 hover:text-orange-500">
          <FaTimes size={24} />
        </button>
      </div>

      {/* Logo */}
      <div className="p-4 border-b border-gray-200 hidden md:block">
        <div className='flex justify-between items-center pr-20'>
          <h1 className="text-2xl font-bold text-orange-600">Logo</h1>
          <button className='text-blue-800' onClick={toggleSidebar}>
            <BsUiChecksGrid size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="mt-5">
        <h2 className="text-xs text-gray-600 font-semibold px-4">General</h2>
        <button
          className={`flex items-center w-full text-left p-4 ${activeTab === 'Dashboard' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'} transition-colors duration-300`}
          onClick={() => handleTabClick('Dashboard')}
        >
          <FaTachometerAlt className="mr-3" />
          Dashboard
        </button>
        <button
          className={`flex items-center w-full text-left p-4 ${activeTab === 'Transactions' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'} transition-colors duration-300`}
          onClick={() => handleTabClick('Transactions')}
        >
          <FaExchangeAlt className="mr-3" />
          Transactions
        </button>
        <button
          className={`flex items-center w-full text-left p-4 ${activeTab === 'FAQ' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'} transition-colors duration-300`}
          onClick={() => handleTabClick('FAQ')}
        >
          <FaQuestionCircle className="mr-3" />
          FAQ
        </button>
        <button
          className={`flex items-center w-full text-left p-4 ${activeTab === 'Learning Modules' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'} transition-colors duration-300`}
          onClick={() => handleTabClick('Learning Modules')}
        >
          <FaBook className="mr-3" />
          Learning Modules
        </button>
        <button
          className={`flex items-center w-full text-left p-4 ${activeTab === 'Rewards' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'} transition-colors duration-300`}
          onClick={() => handleTabClick('Rewards')}
        >
          <FaGift className="mr-3" />
          Rewards
        </button>
        {/* <button
          className={`flex items-center w-full text-left p-4 ${activeTab === 'Feedback' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-orange-100'} transition-colors duration-300`}
          onClick={() => handleTabClick('Feedback')}
        >
          <FaGift className="mr-3" />
          Feedback
        </button> */}
      </div>
    </div>
  );
};

export default Sidebar;
