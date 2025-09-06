/** @format */

import { useQuery } from "@tanstack/react-query";
import { Requests } from "../api";
import type { QueryProps } from "@/types";
import type { AxiosResponse } from "axios";

// Instantiate the getTodo function once
const get = Requests.get;
type QueryResultData = AxiosResponse<any>;

const Query = (query: QueryProps) => {
  const queryData = useQuery({
    queryKey: [query.id],
    queryFn: async (): Promise<QueryResultData> => {
      const response = await get(query.url, {
        tokenOrHeaders: query.tokenOrHeaders,
      });
      return response;
    },
  });

  const handleDataUpdate = () => {
    queryData.refetch();
  };

  return { queryData, handleDataUpdate };
};

export default Query;
