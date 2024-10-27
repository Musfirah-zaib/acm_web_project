import React from 'react';
import Navbar from '../components/Navbar';
import RightBar from '../components/RightBar';
import Hero from '../components/Hero';
import TopBar from '../components/TopBar';

const Overview = () => {
  return (
    <div className="flex bg-white h-screen">
      <div className="w-[20%] bg-black-200">
        <Navbar />
      </div>
      <div className="w-[80%] flex flex-col">
        <div className="h-[10%] bg-black">
          <TopBar />
        </div>
        <div className="flex flex-grow">
          <div className="w-[60%] bg-black">
            <Hero />
          </div>
          <div className="w-[40%] bg-black">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
