/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type {
  AlertData,
  AlertProps,
  QueryProps,
  AlertAnalytics,
} from "@/types";
import { AlertColumns } from "./utils/alerts-table-columns";
import PageTitle from "@/components/page-title";
import MetricsCard from "./components/metrics-card";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useMemo, useState } from "react";

const Alerts = () => {
  const [page] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [alertsData, setAlertsData] = useState<AlertProps>({
    history: [],
    totalDocument: 0,
  });
  const [alertAnalyticsData, setAlertAnalyticsData] = useState<AlertAnalytics>({
    reportedPosts: 0,
    reportedTeam: 0,
    reportedUsers: 0,
    unreadAlerts: 0,
  });

  const cardData = useMemo(
    () => [
      {
        count: alertAnalyticsData.unreadAlerts,
        title: "Unread Alerts",
        icon: <Icons.flag />,
        iconBg: "#FFE3DF",
      },
      {
        count: alertAnalyticsData.reportedUsers,
        title: "Reported Users",
        icon: <Icons.flag />,
        iconBg: "#FFE3DF",
      },
      {
        count: alertAnalyticsData.reportedTeam,
        title: "Reported Teams",
        icon: <Icons.flag />,
        iconBg: "#FFE3DF",
      },
      {
        count: alertAnalyticsData.reportedPosts,
        title: "Reported Posts",
        icon: <Icons.flag />,
        iconBg: "#FFE3DF",
      },
    ],
    [alertAnalyticsData]
  );

  const queries: { [key: string]: QueryProps } = {
    alerts: {
      id: "alerts",
      url: ApiRoutes.FetchAlerts(page, limit),
      method: "GET",
      payload: null,
    },
    alertAnalytics: {
      id: "alertAnalytics",
      url: ApiRoutes.FetchAlertAnalytics,
      method: "GET",
      payload: null,
    },
  };

  const { queryData: alertsInfo } = Query(queries.alerts);
  const { queryData: alertAnalyticsInfo } = Query(queries.alertAnalytics);

  useEffect(() => {
    if (alertsInfo.data) {
      console.log(alertsInfo.data.data.alert);
      const alertResponse = alertsInfo.data.data.alert;
      setAlertsData(alertResponse);
    }
  }, [alertsInfo.data]);

  useEffect(() => {
    if (alertAnalyticsInfo.data) {
      console.log(alertAnalyticsInfo.data.data.analytics);
      const alertAnalyticsResponse = alertAnalyticsInfo.data.data.analytics;
      setAlertAnalyticsData(alertAnalyticsResponse);
    }
  }, [alertAnalyticsInfo.data]);

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
        <DataTable<AlertData>
          columns={AlertColumns}
          data={alertsData.history}
        />
      </Card>
    </div>
  );
};

export default Alerts;
