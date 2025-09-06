/** @format */

import Icons from "@/constants/icons";
import MetricsCard from "./ui/metrics-card";
import HistoryList from "./ui/history-list";

const Wallet = () => {
  const metrics = [
    {
      title: "Current Balance",
      count: "$200",
      bgColor: "#FFFFFF",
      icon: <Icons.wallet />,
      iconBg: "#F2EDFA",
      isLink: false,
    },
    {
      title: "Total Earnings",
      count: "$46",
      bgColor: "#FFFFFF",
      icon: <Icons.userPlus />,
      iconBg: "#FEF0C3",
      isLink: false,
    },
    {
      title: "Total Withdrawn",
      count: "$129",
      bgColor: "#FFFFFF",
      icon: <Icons.export width='16' height='16' color='#C8230D' />,
      iconBg: "#FFE3DF",
      isLink: false,
    },
    {
      title: "Withdrawal Requests",
      count: "5",
      bgColor: "#FFFFFF",
      icon: <Icons.questionCircle />,
      iconBg: "#FEF0C3",
      isLink: true,
      linkText: "View All",
      linkRef: "/dashboard/admin/users/5/withdrawals",
    },
  ];

  const historyData = [
    {
      title: "Downline Earning",
      subtitle: "$5",
      time: "2 days ago",
      icon: <Icons.money />,
    },
    {
      title: "Downline Earning",
      subtitle: "$5",
      time: "2 days ago",
      icon: <Icons.money />,
    },
    {
      title: "Downline Earning",
      subtitle: "$5",
      time: "2 days ago",
      icon: <Icons.money />,
    },
    {
      title: "Downline Earning",
      subtitle: "$5",
      time: "2 days ago",
      icon: <Icons.money />,
    },
  ];
  return (
    <div>
      <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
        {metrics.map((metric, index) => (
          <MetricsCard
            key={index}
            title={metric.title}
            count={metric.count}
            icon={metric.icon}
            iconBg={metric.iconBg}
            isLink={metric.isLink}
            linkText={metric.linkText}
            linkRef={metric.linkRef}
            bgColor={metric.bgColor}
          />
        ))}
      </div>
      <p className='font-dm-sans text-[16px] font-semibold text-[#4B4B4B] mt-5'>
        Earning History
      </p>
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

export default Wallet;
