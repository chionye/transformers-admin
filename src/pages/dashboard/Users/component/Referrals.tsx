/** @format */

import { Card } from "@/components/ui/card";
import HistoryList from "./ui/history-list";

const Referrals = () => {
  const referralsData = [
    {
      title: "Devon Kings",
      subtitle: "5/04/2025",
      icon: (
        <img
          src='https://api.dicebear.com/9.x/initials/svg?seed=Devon Kings&radius=50&size=40'
          alt=''
        />
      ),
    },
    {
      title: "Devon Kings",
      subtitle: "5/04/2025",
      icon: (
        <img
          src='https://api.dicebear.com/9.x/initials/svg?seed=Devon Kings&radius=50&size=40'
          alt=''
        />
      ),
    },
  ];
  return (
    <div>
      <Card className='p-4 rounded-[12px] border border-[#EBEEF2]'>
        <p className='font-dm-sans text-[14px] font-normal text-[#4B4B4B]'>
          Total Referrals
        </p>
        <p className='font-dm-sans text-2xl font-bold text-[#1E1E1E]'>20</p>
      </Card>
      <Card className='p-2 rounded-[12px] border border-[#EBEEF2] mt-2'>
        {referralsData.map((referral, index) => (
          <HistoryList key={index} {...referral} />
        ))}
      </Card>
    </div>
  );
};

export default Referrals;
