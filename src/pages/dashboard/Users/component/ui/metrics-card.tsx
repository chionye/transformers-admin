/** @format */

import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import { Link } from "react-router-dom";

const MetricsCard = ({
  title,
  count,
  icon,
  iconBg,
  isLink,
  linkText,
  linkRef,
  bgColor,
}: {
  title: string;
  count: number | string;
  icon: React.ReactNode;
  iconBg?: string;
  isLink?: boolean;
  linkText?: string;
  linkRef?: string;
  bgColor?: string;
}) => {
  return (
    <Card
      className={`border border-[#EBEEF2] rounded-xl py-5 shadow-none`}
      style={{ backgroundColor: bgColor ?? "#F6F8F9" }}>
      <div className='flex flex-col justify-between px-5 gap-2'>
        <div
          className='flex items-center justify-center w-10 h-10 rounded-full'
          style={{ backgroundColor: iconBg }}>
          {icon}
        </div>
        <p className='font-dm-sans text-[16px] font-normal text-[#686868]'>
          {title}
        </p>

        <div className='flex items-center justify-between'>
          <p className='font-dm-sans text-[28px] font-semibold text-[#1E1E1E]'>
            {count}
          </p>
          {isLink && (
            <Link to={linkRef as never} className='flex items-center gap-2'>
              <p className='font-dm-sans text-[14px] font-medium text-[#198841]'>
                {linkText}
              </p>
              <Icons.arrowCircleRight />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MetricsCard;
