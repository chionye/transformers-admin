/** @format */

import Icons from "@/constants/icons";

const AlertCard = ({ name, time }: { name: string; time: string }) => {
  return (
    <div className='flex items-center gap-2 bg-[#F9FAFB] border border-[#EBEEF2] px-3 py-[8px] rounded-[8px] w-full'>
      <div className='w-10 h-10 rounded-full bg-[#FFE3DF] flex items-center justify-center'>
        <Icons.flag />
      </div>
      <div>
        <p className='font-dm-sans text-[16px] font-medium'>{name}</p>
        <p className='text-[#686868] font-dm-sans text-[14px] font-normal'>
          {time}
        </p>
      </div>
    </div>
  );
};

export default AlertCard;
