"use client"

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Rewards from "./components/Rewards";
import LearningModules from "./components/LearningModules";
import FAQ from "./components/FAQ";
import Transactions from "./components/Transactions";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <HeroSection />;
      case 'Rewards':
        return <Rewards />;
      case 'Learning Modules':
        return <LearningModules />;
      case 'FAQ':
        return <FAQ />;
      case 'Transactions':
        return <Transactions />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} activeTab={activeTab} handleTabClick={handleTabClick} toggleSidebar={handleToggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar onToggleSidebar={handleToggleSidebar} />

        {/* Main Section */}
        <div className="pt-16 md:pt-16 md:ml-64">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
