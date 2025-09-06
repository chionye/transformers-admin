/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { PaymentTableData } from "@/types";
import { PaymentColumns } from "./utils/payment-table-columns";
import PageTitle from "@/components/page-title";
import MetricsCard from "./components/metrics-card";
import { cardData } from "./constants/data";

const Payment = () => {
  const tableData: PaymentTableData[] = [
    {
      id: 1,
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
      amount: "John Doe",
      cycle: "John Doe",
      subscription_plan: "Premium",
      status: "John Doe",
      method: "John Doe",
      action: "View",
    },
    {
      id: 2,
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
      amount: "John Doe",
      cycle: "John Doe",
      subscription_plan: "Premium",
      status: "John Doe",
      method: "John Doe",
      action: "View",
    },
  ];
  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Challenges'
          subtitle='Track and manage all app challenges.'
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
              <Button className='font-dm-sans text-[14px] font-semibold text-[#686868] bg-white shadow'>
                <Icons.export />
                <span className='lg:block hidden'>Export</span>
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
        <DataTable<PaymentTableData>
          columns={PaymentColumns}
          data={tableData}
        />
      </Card>
    </div>
  );
};

export default Payment;
