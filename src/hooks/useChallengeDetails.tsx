/** @format */

import { useState } from "react";
import { useParams } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useMemo } from "react";
import type { QueryProps, ViewChallengeData } from "@/types";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import Icons from "@/constants/icons";

export const useChallengeDetails = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState<ViewChallengeData | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { mutation } = Mutation();

  const queries: { [key: string]: QueryProps } = {
    challenge: {
      id: `challenge-${id}`,
      url: ApiRoutes.FetchChallengeDetails(id as string),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: challengeData } = Query(queries.challenge);

  const metrics = useMemo(
    () => [
      {
        title: "Total Participants",
        count: challenge?.challenge?.participants?.length || 0,
        icon: <Icons.users />,
        iconBg: "#F2EDFA",
        isLink: false,
      },
      {
        title: "Completion Rate",
        count: challenge?.completionRate || 0,
        icon: <Icons.percentage color='#7344AC' />,
        iconBg: "#F2EDFA",
        isLink: false,
      },
      {
        title: "Challenge Creator",
        count: `@${
          challenge?.challenge?.owner?.username?.toLowerCase() || "unknown"
        }`,
        icon: <Icons.user width='16' height='16' color='#A17C07' />,
        iconBg: "#FEF0C3",
        isLink: true,
        linkText: "Downline",
        linkRef: `/dashboard/admin/users/user-profile/${challenge?.challenge?.owner?._id}`,
      },
    ],
    [challenge]
  );

  useEffect(() => {
    if (challengeData.data) {
      const data = challengeData.data.data.data;
      setChallenge(data);
    }
  }, [challengeData.data]);

  const handleDeleteChallenge = () => {
    mutation.mutate(
      {
        url: ApiRoutes.FetchChallengeDetails(id as string),
        requestType: "delete",
      },
      responseHandler({
        onSuccess: (response: any) => {
          console.log(response, "res");
          toast.success("Challenge deleted successfully");
          setIsOpen(false);
        },
        onError: (error: any) => {
          console.log(error, "error");
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  return {
    challenge,
    metrics,
    isOpen,
    setIsOpen,
    handleDeleteChallenge,
  };
};
