/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { ChallengeData, ChallengeInfo, QueryProps } from "@/types";
import { HomeColumns } from "./utils/challenges-table-columns";
import PageTitle from "@/components/page-title";
import MetricsCard from "./components/metrics-card";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useMemo, useState } from "react";

const Challenges = () => {
  const [challenges, setChallenges] = useState<ChallengeInfo>({
    totalDocument: 0,
    challenge: [],
  });
  const [page] = useState<number>(1);
  const [limit] = useState<number>(10);

  const cardData = useMemo(
    () => [
      {
        count: challenges.totalDocument || 0,
        title: "Challenges Created",
        icon: <Icons.trophy color='#7344AC' />,
        iconBg: "#F2EDFA",
      },
      {
        count: challenges.challenge.filter(
          (challenge: ChallengeData) => challenge.status === "active"
        ).length,
        title: "Active Challenges",
        icon: <Icons.trophy color='#A17C07' />,
        iconBg: "#FEF0C3",
      },
      {
        count: challenges.challenge
          .map((challenge: ChallengeData) => challenge.participants.length)
          .reduce((prev, curr) => prev + curr, 0),
        title: "Total Participants",
        icon: <Icons.team color='#C8230D' />,
        iconBg: "#FFE3DF",
      },
      {
        count: challenges.challenge.filter(
          (challenge: ChallengeData) => challenge.status === "completed"
        ).length,
        title: "Challenges Completed",
        icon: <Icons.circleCheck />,
        iconBg: "#DDFBE7",
      },
    ],
    [challenges]
  );

  const queries: { [key: string]: QueryProps } = {
    challenges: {
      id: "challenges",
      url: ApiRoutes.FetchChallenges(page, limit),
      method: "GET",
      payload: null,
    },
  };

  const { queryData } = Query(queries.challenges);

  useEffect(() => {
    if (queryData.data) {
      console.log(queryData.data.data);
      setChallenges(queryData.data.data.challenges);
    }
  }, [queryData.data]);
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
              <Button className='font-dm-sans text-[14px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>Create Challenge</span>
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
        <DataTable<ChallengeData>
          columns={HomeColumns}
          data={challenges.challenge}
        />
      </Card>
    </div>
  );
};

export default Challenges;
