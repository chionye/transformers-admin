/** @format */

import { DataTable } from "@/components/data-table";
import { InnerPageContainer } from "@/components/innerpage-container";
import { Card } from "@/components/ui/card";
import { WithdrawalColumns } from "./utils/withdrawal-table-columns";

export const Withdrawals = () => {
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

  return (
    <div>
      <InnerPageContainer title='Back' hideTitle>
        <Card className='p-4'>
          <p className='font-dm-sans text-xl font-semibold text-[#1E1E1E]'>
            Withdrawal Requests
          </p>
          <DataTable columns={WithdrawalColumns} data={data} />
        </Card>
      </InnerPageContainer>
    </div>
  );
};
