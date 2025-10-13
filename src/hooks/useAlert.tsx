/** @format */

import Icons from "@/constants/icons";
import ApiRoutes from "@/services/api/api-routes";
import Query from "@/services/query/query";
import type { AlertAnalytics, AlertProps, QueryProps } from "@/types";
import { useEffect, useMemo, useState } from "react";

export const useAlert = () => {
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

  return {
    cardData,
    alertsData,
    alertAnalyticsData,
  };
};
