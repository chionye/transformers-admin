/** @format */

import moment from "moment";

const HistoryList = ({
  title,
  subtitle,
  time,
  icon,
  iconBg,
}: {
  title: string;
  subtitle?: string;
  time?: string;
  icon: React.ReactNode;
  iconBg?: string;
}) => {
  return (
    <div className='flex items-center gap-2 border-b border-[#EBEEF2] px-3 py-[8px] rounded-none w-full'>
      <div
        className='w-10 h-10 rounded-full flex items-center justify-center'
        style={{ backgroundColor: iconBg ?? "#FFE3DF" }}>
        {icon}
      </div>
      <div className='flex items-start justify-between gap-1 w-full'>
        <div>
          <p className='font-dm-sans text-[14px] text-black font-medium'>
            {title}
          </p>
          {subtitle && (
            <p className='text-[#198841] font-dm-sans text-[14px] font-medium'>
              {subtitle}
            </p>
          )}
        </div>
        {time && (
          <p className='text-[#989898] font-dm-sans text-xs font-normal'>
            {moment(time).fromNow()}
          </p>
        )}
      </div>
    </div>
  );
};

export default HistoryList;
