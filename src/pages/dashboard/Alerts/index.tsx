/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { AlertTableData } from "@/types";
import { AlertColumns } from "./utils/alerts-table-columns";
import PageTitle from "@/components/page-title";
import MetricsCard from "./components/metrics-card";
import { cardData } from "./constants/data";

const Alerts = () => {
  const tableData: AlertTableData[] = [
    {
      id: 1,
      event: "Content Flagged for Review",
      user: (
        <div>
          <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
            John Doe
          </p>
          <p className='font-dm-sans text-[#686868] text-[14px] font-normal'>
            sarahjohnson@gmail.com
          </p>
        </div>
      ),
      date: "15/12/24, 10:02AM",
      status: "Resolved",
      action: "View",
    },
    {
      id: 2,
      event: "Payment Transaction Failed",
      user: (
        <div>
          <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
            John Doe
          </p>
          <p className='font-dm-sans text-[#686868] text-[14px] font-normal'>
            sarahjohnson@gmail.com
          </p>
        </div>
      ),
      date: "15/12/24, 10:02AM",
      status: "Pending",
      action: "View",
    },
  ];
  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Alerts'
          subtitle='View and manage system alerts and user notifications.'
          child={
            <div className='flex flex-row items-center gap-2'>
              <CustomDropdown
                triggerLabel='Filter'
                icon={<Icons.upNdownArrow />}
                iconPosition='right'
                items={[
                  { label: "My Profile" },
                  { label: "Settings" },
                  { type: "separator" },
                  { label: "Logout" },
                ]}
              />
              <Button className='font-dm-sans text-[14px] font-semibold text-white bg-[#198841] shadow'>
                <span>Post update</span>
              </Button>
            </div>
          }
        />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {cardData.map((card) => (
          <MetricsCard
            key={card.title}
            title={card.title}
            count={card.count}
            icon={card.icon}
            iconBg={card.iconBg}
          />
        ))}
      </div>
      <Card className='lg:col-span-7 p-4'>
        <DataTable<AlertTableData> columns={AlertColumns} data={tableData} />
      </Card>
    </div>
  );
};

export default Alerts;
