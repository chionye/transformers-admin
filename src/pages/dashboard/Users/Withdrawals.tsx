/** @format */

import { DataTable } from "@/components/data-table";
import { InnerPageContainer } from "@/components/innerpage-container";
import { Card } from "@/components/ui/card";
import { WithdrawalColumns } from "./utils/withdrawal-table-columns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { QueryProps } from "@/types";
import ApiRoutes from "@/services/api/api-routes";
import Query from "@/services/query/query";

export const Withdrawals = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [withdrawalHistory, setWithdrawalHistory] = useState<{
    totalDocuments: number;
    history: any;
  }>({
    totalDocuments: 0,
    history: [],
  });

  const queries: { [key: string]: QueryProps } = {
    withdrawals: {
      id: `withdrawal-history-${id}`,
      url: ApiRoutes.FetchUserWithdrawalHistory(id as string, page, limit),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: withdrawalData } = Query(queries.withdrawals);

  const data = [
    {
      date_requested: "3/04/25 5:45PM",
      amount: "100",
      country: "Nigeria",
      bank: "Access Bank",
      status: "Pending",
      action: "Approve",
    },
  ];

  useEffect(() => {
    if (withdrawalData.data) {
      const data = withdrawalData.data.data.withdrawal;
      console.log(data);
      setWithdrawalHistory(data);
    }
  }, [withdrawalData.data]);

  return (
    <div>
      <InnerPageContainer title='Back' hideTitle>
        <Card className='p-4'>
          <p className='font-dm-sans text-xl font-semibold text-[#1E1E1E]'>
            Withdrawal Requests
          </p>
          <DataTable
            columns={WithdrawalColumns}
            data={withdrawalHistory.history}
          />
        </Card>
      </InnerPageContainer>
    </div>
  );
};
