/** @format */

import { PageTabs } from "@/components/navigation/custom-tab";
import PageTitle from "@/components/page-title";
import { useEffect, useState } from "react";
import type { AlertData, AlertProps, PostsData, QueryProps } from "@/types";
import ApiRoutes from "@/services/api/api-routes";
import Query from "@/services/query/query";
import ReportedPosts from "./components/ReportedPosts";
import AllPosts from "./components/AllPosts";
import AlertCard from "@/components/cards/alert-cards";
import { Card } from "@/components/ui/card";

const Posts = () => {
  const [posts, setPosts] = useState<PostsData | null>(null);
  const [page] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [alerts, setAlerts] = useState<AlertProps | undefined>(undefined);

  const queries: { [key: string]: QueryProps } = {
    posts: {
      id: "posts",
      url: ApiRoutes.FetchPosts(page, limit.toString()),
      method: "GET",
      payload: null,
    },
    alerts: {
      id: "alerts",
      url: ApiRoutes.FetchAlerts(page, limit),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: postInfo } = Query(queries.posts);
  const { queryData: alertsData } = Query(queries.alerts);

  useEffect(() => {
    if (postInfo.data) {
      console.log(postInfo.data.data.posts, "works");
      setPosts(postInfo.data.data.posts);
    }
  }, [postInfo.data]);

  useEffect(() => {
    if (alertsData.data) {
      setAlerts(alertsData.data.data.alert);
    }
  }, [alertsData.data]);

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Posts'
          subtitle='Monitor, moderate and manage user-generated content.'
        />
      </div>
      <PageTabs
        tabList={[
          {
            value: "all-posts",
            label: "All Posts",
          },
          {
            value: "reported-posts",
            label: "Reported Posts",
          },
        ]}
        defaultValue='all-posts'
        tabContent={[
          {
            key: "all-posts",
            children: <AllPosts posts={posts} />,
          },
          {
            key: "reported-posts",
            children: <ReportedPosts posts={posts} />,
          },
        ]}
        rghtPositionedChild={
          <Card className='bg-white px-4 gap-2'>
            <div className='flex items-center justify-between mb-2'>
              <p className='text-[18px] font-semibold text-[#1E1E1E]'>
                Flagged Posts
              </p>
            </div>
            {alerts?.history.map((alert: AlertData) => (
              <AlertCard {...alert} />
            ))}
          </Card>
        }
        onValueChange={(value) => console.log(value)}
      />
    </div>
  );
};

export default Posts;
