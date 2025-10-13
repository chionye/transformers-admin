/** @format */

import { useEffect, useState } from "react";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import type { AnalyticsData, QueryProps, AlertData } from "@/types";
import { cardData } from "@/pages/dashboard/Home/constants/data";

export const useHome = () => {
  const [analytics, setAnalytics] = useState<
    AnalyticsData & {
      //eslint-disable-next-line
      metrics: Record<string, any> | undefined;
      //eslint-disable-next-line
      activities: Record<string, any> | undefined;
      alerts: AlertData[];
    }
  >({
    metrics: undefined,
    activities: undefined,
    chartData: [],
    alerts: [],
  });

  const queries: { [key: string]: QueryProps } = {
    analytics: {
      id: "analytics",
      url: ApiRoutes.DashboardAnalytics,
      method: "GET",
      payload: null,
    },
  };

  const { queryData: analyticsData } = Query(queries.analytics);
  //eslint-disable-next-line
  const handleMetrics = (analytics: Record<string, any>) => {
    const metricCardInfo = cardData.map((card) => {
      return {
        ...card,
        count: analytics[card.key][card.child]?.toLocaleString(),
        percentage: analytics[card.key][card.sibling]?.toLocaleString(),
      };
    });
    return metricCardInfo;
  };

  //eslint-disable-next-line
  const handleActivities = (analytics: Record<string, any>) => {
    const activitySections = {
      allActivities: analytics.activities.slice(0, 10),
      users: analytics.activities
        //eslint-disable-next-line
        .filter((activity: any) => activity.type === "USER")
        .slice(0, 10),
      teams: analytics.activities
        //eslint-disable-next-line
        .filter((activity: any) => activity.type === "TEAM")
        .slice(0, 10),
      challenges: analytics.activities
        //eslint-disable-next-line
        .filter((activity: any) => activity.type === "CHALLENGES")
        .slice(0, 10),
    };

    return activitySections;
  };

  //eslint-disable-next-line
  const handleChart = (analytics: Record<string, any>) => {
    const keys = Object.keys(analytics.userAnalytics);
    const chartData = keys.map((key) => ({
      name: key,
      value: analytics.userAnalytics[key],
    }));
    return chartData;
  };

  useEffect(() => {
    if (analyticsData.data) {
      console.log(analyticsData.data.data);
      const { analytics } = analyticsData.data.data;
      setAnalytics({
        metrics: handleMetrics(analytics),
        activities: handleActivities(analytics),
        chartData: handleChart(analytics),
        alerts: analytics?.alerts,
      });
    }
  }, [analyticsData.data]);

  return {
    analytics,
    setAnalytics,
  };
};
