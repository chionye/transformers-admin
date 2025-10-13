/** @format */

import { useState } from "react";
import type { EventsPropData } from "@/types";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect } from "react";

export const useEvents = () => {
  const [event, setEvent] = useState<EventsPropData>({
    totalDocument: 0,
    event: [],
  });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

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

  return {
    event,
    eventData,
    page,
    setPage,
    limit,
    setLimit,
  };
};
