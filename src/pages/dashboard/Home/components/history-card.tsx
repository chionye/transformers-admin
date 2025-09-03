/** @format */

import avatar from "@/assets/images/avatar.png";

const HistoryCard = ({
  name,
  challenge,
  time,
}: {
  name: string;
  challenge: string;
  time: string;
}) => {
  return (
    <div className='flex items-center gap-2 border-b border-[#E9E9E9] py-4 w-full'>
      <img src={avatar} alt='' className='w-[40px] h-[40px] rounded-full' />
      <div>
        <p className='font-dm-sans text-[16px] font-normal'>
          <span className='font-semibold'>{name}</span> {challenge}
        </p>
        <p className='text-[#686868] font-dm-sans text-[14px] font-normal'>
          {time}
        </p>
      </div>
    </div>
  );
};

export default HistoryCard;
