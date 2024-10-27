import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div>

            <div className="flex flex-row items-center justify-evenly mt-4">
              <div className="w-[40%] h-30 bg-blue-gray-600"> 
                <div className="flex flex-row card">
                  <div className=" flex flex-col w-[50%] m-4 "> 
                    <p className='text-gray-400 mb-2'>Balance</p>
                    <p className='text-white text-2xl'>$54,130.00</p>
                    <span className='flex flex-row-'><FiArrowDownRight />12.5
                    </span>
                  </div>
                  <div className=""></div>
                </div>
              </div>
                <div className="w-[40%] h-30 bg-blue-gray-600 right"> 
                  <div className="flex flex-row card">
                    <div className=" flex flex-col w-[50%] m-4 "> 
                        <p className='text-gray-400 mb-2'>Balance</p>
                        <p className='text-white text-2xl'>$54,130.00</p>
                        <span className='flex flex-row-'><FiArrowDownRight />12.5 </span>    
                    </div>
                     <div className="img"></div>
                  </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-evenly mt-4">
              <div className="w-[40%] h-30 bg-blue-gray-600"> {/* 32 (8rem or 128px) */}
                <div className="flex flex-row card">
                  <div className=" flex flex-col w-[50%] m-4 "> 
                    <p className='text-gray-400 mb-2'>Balance</p>
                    <p className='text-white text-2xl'>$54,130.00</p>
                    <span className='flex flex-row-'><FiArrowDownRight />12.5
                    </span>
                  </div>
                  <div className=""></div>
                </div>
              </div>
                <div className="w-[40%] h-30 bg-blue-gray-600 right"> 
                  <div className="flex flex-row card">
                    <div className=" flex flex-col w-[50%] m-4 "> 
                        <p className='text-gray-400 mb-2'>Balance</p>
                        <p className='text-white text-2xl'>$54,130.00</p>
                        <span className='flex flex-row-'><FiArrowDownRight />12.5 </span>    
                    </div>
                     <div className="img">
                     <img src="../images/circle.png" alt="circle" />

                     </div>
                  </div>
                </div>
            </div>
            
            <div className="w-[88%] ml-10 mt-4 h-60 bg-blue-gray-600 right"> 
                  <div className="flex flex-row card">
                    <div className=" flex flex-col w-[50%] m-4 "> 
                        <p className='text-white mb-2'>calculations</p> 
                        <span className='flex flex-row-'><FiArrowDownRight />12.5 </span>    
                    </div>
                     <div className="img"></div>
                  </div>
                </div>

    </div>
  )
}

export default Hero
