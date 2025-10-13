/** @format */

import { useEffect, useState } from "react";
import type { ChallengeInfo, ChallengeData } from "@/types";
import { useMemo } from "react";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import Icons from "@/constants/icons";
import type { QueryProps } from "@/types";

export const useChallenge = () => {
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

  return {
    challenges,
    cardData,
    queryData,
  };
};
