import React from 'react'
import { FaCreditCard, FaMoneyBill, FaWallet, FaChartBar, FaFileAlt, FaUser } from 'react-icons/fa';
import { MdDashboard ,MdOutlineAddBox} from 'react-icons/md'; 
import { GoDiamond } from "react-icons/go";
const Navbar = () => {
  return (
    <div className='flex flex-col gap-4 items-center container-bg text-white h-[635px] '>
      <div>
        <img src='/images/file.png' alt='logo' className='w-[100px] mb-3 mt-4'/>
      </div>
      <p className='text-sm mb-2 mr-5 cursor-pointer'>Main Menu</p>
      <div className='w-[75%] ml-[87px]'>
        <ul className='flex flex-col gap-1'>
          <li className='hover:bg-black rounded-l-[20px]  hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center '> <span className='m-1 p-1'> <MdDashboard/> </span> Overview </li>
          <li className='hover:bg-black  rounded-l-[20px] hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center   '> <span className='m-1 p-1'>  <FaCreditCard /> </span> Card</li>
          <li className='hover:bg-black rounded-l-[20px]  hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center '> <span className='m-1 p-1'>  <FaMoneyBill /> </span> Budget</li>
          <li className='hover:bg-black rounded-l-[20px]  hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center '> <span className='m-1 p-1'>  <FaWallet /> </span> Payment</li> 
          <li className='hover:bg-black  rounded-l-[20px] hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center '> <span className='m-1 p-1'> <FaChartBar /> </span> Statistics</li> 
          <li className='hover:bg-black  rounded-l-[20px]  hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center '> <span className='m-1 p-1 '>  <FaFileAlt /> </span> Report</li>
          <li className='hover:bg-black rounded-l-[20px] hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center  '> <span className='m-1 p-1 '>   <FaUser /> </span> Account</li>
        </ul>
      </div>
      <p className='text-sm mb-2 mr-5 container-text cursor-pointer flex flex-row'>Finacial category <span  className=' m-1 pb-1  text-white'><MdOutlineAddBox/></span></p>
    <ul>
      <li className='hover:bg-black rounded-l-[20px] hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center  '>  <span className='m-1 p-1 '> <GoDiamond />
      </span> Incomes </li>
      <li className='hover:bg-black rounded-l-[20px] hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center  '>  <span className='m-1 p-1 '> <GoDiamond />
      </span> Debts </li>
      <li className='hover:bg-black rounded-l-[20px] hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center  '>  <span className='m-1 p-1 '> <GoDiamond />
      </span> Bills</li>
      <li className='hover:bg-black rounded-l-[20px] hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center  '>  <span className='m-1 p-1 '> <GoDiamond />
      </span> Investments</li>
      <li className='hover:bg-black rounded-l-[20px] hover:m-2 transition-all ease-in-out duration-300 flex flex-row items-center  '>  <span className='m-1 p-1 '> <GoDiamond />
      </span> Assets</li>
    </ul>

    
    </div>
  )
}

export default Navbar


