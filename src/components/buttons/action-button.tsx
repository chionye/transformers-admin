/** @format */

import { Button } from "@/components/ui/button";
import Icons from "@/constants/icons";
import { Link } from "react-router-dom";

const ActionButton = () => {
  return (
    <div className='flex flex-row items-stretch sm:items-center lg:justify-start justify-between gap-2 lg:gap-3 w-full mb-10'>
      <Link
        to='/dashboard/admin/properties/new'
        className='bg-[#2F2F30] text-white font-maven text-[14px] font-medium px-2 py-2 w-[48%] sm:w-1/2 lg:w-[174.78px] lg:h-[140px] h-[90px] sm:h-[100px] rounded-s-2xl sm:rounded-none sm:rounded-s-2xl overflow-hidden mb-2 sm:mb-0 cursor-pointer'>
        <div className='bg-[url("/images/flash.png")] bg-no-repeat bg-right-top h-full w-full relative'>
          <div className='absolute inset-0 backdrop-blur-xs flex items-end h-full py-2'>
            <span className='text-white text-base sm:text-xl text-left font-bold'>
              Create a new <br /> Contract
            </span>
          </div>
        </div>
      </Link>
      <Button className='bg-[#F5F5F7] text-[#7D7E8E] font-maven text-[14px] font-medium px-2 py-2 w-[48%] sm:w-1/2 lg:w-[174.78px] lg:h-[140px] h-[90px] sm:h-[100px] flex flex-col justify-between cursor-pointer rounded-e-2xl sm:rounded-none sm:rounded-e-2xl overflow-hidden'>
        <div className='flex flex-row items-center justify-end w-full'>
          <Icons.flash />
        </div>
        <div className='bg-no-repeat bg-right-top h-full w-full px-2 flex items-end'>
          <span className='text-base sm:text-xl font-bold text-left '>
            Generate <br /> Report
          </span>
        </div>
      </Button>
    </div>
  );
};

export default ActionButton;
