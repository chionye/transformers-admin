/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type {
  EventProp,
  EventsPropData,
} from "@/types";
import PageTitle from "@/components/page-title";
import { Link } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useState } from "react";
import { EventColumns } from "./utils/event-table-columns";

const Events = () => {
  const [event, setEvent] = useState<EventsPropData>({
    totalDocument: 0,
    event: [],
  });
  const [page] = useState(1);
  const [limit] = useState(1);

  const { queryData: eventData } = Query({
    id: "events",
    url: ApiRoutes.FetchEvents(page, limit),
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (eventData.data) {
      console.log(eventData.data.data.events, "works");
      const response = eventData.data.data.events;
      setEvent(response);
    }
  }, [eventData.data]);

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Events'
          subtitle='Promote upcoming events and manage event details for users to engage with.'
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
                to='/dashboard/admin/event/new'
                className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>New Event</span>
              </Link>
            </div>
          }
        />
      </div>
      <Card className='lg:col-span-7 p-4'>
        <DataTable<EventProp> columns={EventColumns} data={event.event} />
      </Card>
    </div>
  );
};

export default Events;
