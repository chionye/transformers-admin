/** @format */

import Icons from "@/constants/icons";
import HistoryList from "./ui/history-list";

const Points = () => {
  const historyData = [
    {
      title: "Streak Unlocked",
      subtitle: "+20 points",
      time: "3/04/25 5:45PM",
      iconBg: "#FEF0C3",
      icon: <Icons.ruby width='16' height='16' color='#A17C07' />,
    },
    {
      title: "Streak Unlocked",
      subtitle: "+20 points",
      time: "3/04/25 5:45PM",
      iconBg: "#FEF0C3",
      icon: <Icons.ruby width='16' height='16' color='#A17C07' />,
    },
    {
      title: "Streak Unlocked",
      subtitle: "+20 points",
      time: "3/04/25 5:45PM",
      iconBg: "#FEF0C3",
      icon: <Icons.ruby width='16' height='16' color='#A17C07' />,
    },
    {
      title: "Streak Unlocked",
      subtitle: "+20 points",
      time: "3/04/25 5:45PM",
      iconBg: "#FEF0C3",
      icon: <Icons.ruby width='16' height='16' color='#A17C07' />,
    },
  ];

  return (
    <div>
      <div className="bg-[url('/images/pattern.png')] bg-cover rounded-[8px] p-3 flex flex-col items-center justify-center gap-2 h-[153px]">
        <Icons.ruby />
        <p className='font-dm-sans text-[16px] font-normal text-white'>
          Available Points
        </p>
        <p className='font-dm-sans text-4xl font-bold text-white'>1200</p>
      </div>
      <div className='flex flex-col border border-[#EBEEF2] rounded-[12px] p-4 mt-2'>
        <div className='flex flex-col gap-2'>
          {historyData.map((history, index) => (
            <HistoryList {...history} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Points;
