/** @format */

import { Card } from "@/components/ui/card";

const MetricsCard = ({
  title,
  count,
  icon,
  iconBg,
}: {
  title: string;
  count: number | string;
  icon: React.ReactNode;
  iconBg?: string;
}) => {
  return (
    <Card className='bg-white border border-[#EBEEF2] shadow rounded-xl py-5'>
      <div className='flex flex-col justify-between px-5 gap-2'>
        <div
          className='flex items-center justify-center w-10 h-10 rounded-full'
          style={{ backgroundColor: iconBg }}>
          {icon}
        </div>
        <p className='font-dm-sans text-[16px] font-normal text-[#686868]'>
          {title}
        </p>
        <p className='font-dm-sans text-[28px] font-semibold text-[#1E1E1E]'>
          {count}
        </p>
      </div>
    </Card>
  );
};

export default MetricsCard;
