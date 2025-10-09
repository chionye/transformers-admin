/** @format */
import Icons from "@/constants/icons";
import { InnerPageContainer } from "@/components/innerpage-container";
import { Link, useParams } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useMemo, useState } from "react";
import type {
  MessageDetailsProp,
  Messages,
  QueryProps,
  Recipient,
  TeamsDetailsTableData,
} from "@/types";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import IconCircleBadge from "@/components/icon-circle-badge";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import { CustomDropdown } from "@/components/custom-dropdown";
import PageTitle from "@/components/page-title";
import { RecipientColumns } from "./utils/recipient-table-columns";
import { Chip } from "@/components/chip";

const MessageDetails = () => {
  const { id } = useParams();
  const [message, setMessage] = useState<MessageDetailsProp>({
    message: {},
    recepients: [],
  });
  const [tableData, setTableData] = useState<TeamsDetailsTableData[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { mutation } = Mutation();

  const queries: { [key: string]: QueryProps } = {
    message: {
      id: `message-${id}`,
      url: ApiRoutes.FetchMessageById(id as string),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: messageData } = Query(queries.message);

  useEffect(() => {
    if (messageData.data) {
      console.log(messageData.data.data.message);
      const data = messageData.data.data.message;
      setMessage(data);
    }
  }, [messageData.data]);

  const handleActivateDeactivateUser = () => {
    mutation.mutate(
      {
        url: ApiRoutes.ActivateDeactivateUser(id as string),
        data: {},
        requestType: "patch",
      },
      responseHandler({
        onSuccess: (response: any) => {
          console.log(response, "activate");
          toast.success("User activated successfully");
          setIsOpen(false);
        },
        onError: (error: any) => {
          console.log(error, "activate");
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  return (
    <InnerPageContainer title='Back to Messages' hideTitle>
      <Card className='p-4'>
        <div>
          <div className='flex items-center justify-between'>
            <p className='font-dm-sans text-xl text-[#1E1E1E] font-semibold'>
              {message.message.title}
            </p>
            <div>
              {message.message.status === "pending" ? (
                <Chip className='bg-[#FEF0C3] text-[#A17C07] rounded-full'>
                  {message.message.status}
                </Chip>
              ) : (
                <Chip className='bg-[#DDFBE7] text-[#198841] rounded-full'>
                  {message.message.status}
                </Chip>
              )}
            </div>
          </div>
          <p className='text-[#4B4B4B] font-dm-sans text-[16px] font-normal'>
            {message.message.content}
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <img
            src={message.message.composer?.avatar}
            alt=''
            className='w-8 h-8 rounded-full'
          />
          <div>
            <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
              {message.message.composer?.fullName}
            </p>
          </div>
        </div>
      </Card>
      <Card className='p-4 mt-5'>
        <PageTitle title={`Recipients ${tableData.length}`} />
        <DataTable<Recipient> columns={RecipientColumns} data={message.recepients} />
      </Card>
    </InnerPageContainer>
  );
};

export default MessageDetails;
