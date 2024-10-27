import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";

const RightBar = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-evenly mt-4 ">
        <div className="w-[80%] h-60 bg-blue-gray-600"> 
          <div className="flex flex-row card">
            <div className=" flex flex-col w-[50%] m-4 "> 
                <p className='text-gray-400 mb-2'>Balance</p>
                <p className='text-white text-2xl'>$54,130.00</p>
                <span className='flex flex-row-'><FiArrowDownRight />12.5 </span>
             </div>
                  <div className=""></div>
           </div>
       </div>
 


                 <div className="w-[80%] mt-4 h-60 bg-blue-gray-600 right"> 
                  <div className="flex flex-row card">
                    <div className=" flex flex-col w-[50%] m-4 "> 
                        <p className='text-white mb-2'>Recent Posts</p>
                        
                        <span className='flex flex-row-'><FiArrowDownRight />12.5 </span>    
                    </div>
                     <div className="img"></div>
                  </div>
                </div>
            
         </div>
    </div>
  )
}

export default RightBar
