/** @format */

import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";

const MetricsCard = ({
  title,
  count,
  icon,
  unit,
  percentage,
  from,
  iconBg,
}: {
  title: string;
  count: number | string;
  icon: React.ReactNode;
  unit?: string;
  percentage: number;
  from: string;
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
          {unit ? `${unit} ${count} ` : count}
        </p>
        <div className='flex lg:flex-row flex-col lg:items-center gap-2 w-full'>
          <div className='flex items-center gap-2'>
            <Icons.chartLine color='#198841' />
            <p className='font-dm-sans text-[14px] font-medium text-[#198841]'>
              {percentage}%
            </p>
          </div>
          <div>
            <p className='font-dm-sans text-[14px] font-normal text-[#989898]'>
              {from}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MetricsCard;
