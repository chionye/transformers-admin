/** @format */

import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import HistoryList from "./ui/history-list";
import { Chip } from "@/components/chip";

const Subscription = () => {
  const subscriptions = [
    {
      title: "Invoice",
      subtitle: "5/04/2025",
      time: "$12",
      icon: <Icons.file1 />,
      iconBg: "#EBEEF2",
    },
    {
      title: "Invoice",
      subtitle: "5/04/2025",
      time: "$12",
      icon: <Icons.file1 />,
      iconBg: "#EBEEF2",
    },
  ];
  return (
    <div>
      <Card className='p-4 rounded-[12px] bg-[#EBEEF2] border border-[#EBEEF2]'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='font-dm-sans text-[16px] font-normal text-[#4B4B4B]'>
              Monthly plan
            </p>
            <div className='flex items-center gap-2'>
              <p className='font-dm-sans text-2xl font-semibold text-black'>
                $120.00
              </p>
              <p className='font-dm-sans text-[14px] font-normal text-[#4B4B4B]'>
                /year
              </p>
            </div>
          </div>
          <Chip
            variant='default'
            className='bg-[#1E1E1E] text-white flex items-center gap-2 w-fit'
            rounded>
            <Icons.star color='white' width='16' height='16' />
            <span>Active</span>
          </Chip>
        </div>
      </Card>
      <p className='font-dm-sans text-[16px] font-semibold text-[#4B4B4B] mt-5'>
        History
      </p>
      <Card className='p-2 rounded-[12px] border border-[#EBEEF2] mt-2'>
        {subscriptions.map((referral, index) => (
          <HistoryList key={index} {...referral} />
        ))}
      </Card>
    </div>
  );
};

export default Subscription;
