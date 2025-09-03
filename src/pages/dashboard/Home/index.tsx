/** @format */
import PageTitle from "@/components/page-title";
import MetricsCard from "./components/metrics-card";
import Icons from "@/constants/icons";
import { Card } from "@/components/ui/card";
import { CustomTabs } from "@/components/navigation/custom-tab";
import HistoryCard from "./components/history-card";
import DoughnutChart from "@/components/charts/doughnut-chart";
import { chartData, cardData, historyData } from "./constants/data";
import { Link } from "react-router-dom";
import AlertCard from "@/components/alert-cards";

const Home = () => {
  const alertData = [
    {
      name: "3 posts flagged for review",
      time: "2 days ago",
    },
    {
      name: "“Tech warriors” Team flagged for review",
      time: "2 days ago",
    },
    {
      name: "3 posts flagged for review",
      time: "2 days ago",
    },
    {
      name: "3 posts flagged for review",
      time: "2 days ago",
    },
  ];
  return (
    <div className='w-full flex flex-col gap-4'>
      <div>
        <PageTitle
          title='Dashboard'
          subtitle='Monitor platform activity, user engagement, and growth.'
        />
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
          {cardData.map((card) => (
            <MetricsCard
              key={card.title}
              title={card.title}
              count={card.count}
              icon={card.icon}
              iconBg={card.iconBg}
              percentage={card.percentage}
              from={card.from}
            />
          ))}
        </div>
        <div className='mt-5 grid grid-cols-1 lg:grid-cols-2'>
          <Card className='px-5 w-full'>
            <CustomTabs
              defaultValue='all'
              tabList={[
                { value: "all", label: "All Activity" },
                { value: "users", label: "Users" },
                { value: "teams", label: "Teams" },
                { value: "challenges", label: "Challenges" },
              ]}
              tabContent={[
                {
                  key: "all",
                  children: historyData.map((data) => (
                    <HistoryCard {...data} />
                  )),
                },
                {
                  key: "users",
                  children: historyData.map((data) => (
                    <HistoryCard {...data} />
                  )),
                },
                {
                  key: "teams",
                  children: historyData.map((data) => (
                    <HistoryCard {...data} />
                  )),
                },
                {
                  key: "challenges",
                  children: historyData.map((data) => (
                    <HistoryCard {...data} />
                  )),
                },
              ]}
            />
          </Card>
          <div className='w-full lg:px-5 flex flex-col gap-4 '>
            <Card className='px-5 w-full'>
              <p className='text-[18px] font-semibold text-[#1E1E1E]'>
                User Analytics
              </p>
              <DoughnutChart data={chartData} />
              <div className='grid grid-cols-2 gap-2'>
                {chartData.map((data) => (
                  <div
                    key={data.name}
                    className='flex items-center justify-center gap-2'>
                    <div className='w-2 h-2 rounded-full bg-[#198841]'></div>
                    <p className='text-[16px] font-normal text-[#1E1E1E]'>
                      {data.name}-{data.value}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className='px-5 w-full'>
              <div className='flex items-center justify-between'>
                <p className='text-[18px] font-semibold text-[#1E1E1E]'>
                  Platform Alerts
                </p>
                <Link
                  to='/dashboard/admin/alerts'
                  className='flex items-center gap-2 text-[#198841] font-dm-sans font-medium text-[16px]'>
                  See All <Icons.arrowRight1 />
                </Link>
              </div>
              <div className='flex flex-col gap-2'>
                {alertData.map((data) => (
                  <AlertCard {...data} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
