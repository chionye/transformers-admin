import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type {
  AlertData,
} from "@/types";
import { AlertColumns } from "./utils/alerts-table-columns";
import PageTitle from "@/components/page-title";
import MetricsCard from "./components/metrics-card";
import { useAlert } from "@/hooks/useAlert";

const Alerts = () => {
  const { cardData, alertsData } = useAlert();

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
        <DataTable<AlertData>
          columns={AlertColumns}
          data={alertsData.history}
        />
      </Card>
    </div>
  );
};

export default Alerts;
