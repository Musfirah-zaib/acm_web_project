import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { AiTwotoneBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";


const TopBar = () => {
  return (
    <div className="flex items-center justify-between bg-black-300 h-full px-4">
      
      <div className=" ml-11  w-[50%]   text-white">
        <span className='flex flex-row  text-gray-300 items-center ml-4'><IoSearchOutline /><span className='ml-1'>Search here.... </span>
        </span><hr  class="border-t border-gray-600"  />
      </div>
       <div className=" flex flex-row items-center  w-[20%] text-white">
      
       <span className='text-2xl mr-1'><MdOutlineDarkMode /></span>
      <span className='text-2xl mr-1'><AiTwotoneBell /></span>
      <span className='text-2xl mr-1'><CgProfile /> </span>
      <div className="flex flex-col  ml-1">
  <div className="text-white text-1xl">Musfirah</div>
  <div className="text-gray-400">zaib</div>
</div>

      </div> 

      
    </div>
  )
}

export default TopBar
