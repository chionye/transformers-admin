/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { MessageProp, Messages, UsersTableData } from "@/types";
import PageTitle from "@/components/page-title";
import { Link } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useState } from "react";
import { MessagesColumns } from "./utils/message-table-columns";

const Messages = () => {
  const [messages, setMessages] = useState<MessageProp>({
    totalDocument: 0,
    message: [],
  });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

  const { queryData: messagesData } = Query({
    id: "messages",
    url: ApiRoutes.FetchMessages(page, limit),
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (messagesData.data) {
      console.log(messagesData.data.data, "works");
      const messageResponse = messagesData.data.data.message;
      setMessages(messageResponse);
    }
  }, [messagesData.data]);

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Messages'
          subtitle='Send direct updates or announcements to users and manage message history.'
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
              <Link
                to='/dashboard/admin/messages/new'
                className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>Create Message</span>
              </Link>
            </div>
          }
        />
      </div>
      <Card className='lg:col-span-7 p-4'>
        <DataTable<Messages>
          columns={MessagesColumns}
          data={messages.message}
        />
      </Card>
    </div>
  );
};

export default Messages;
