/** @format */

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useQueryInvalidateStore } from "@/store/query-invalidate-store";
import type { EventProp } from "@/types";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect } from "react";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import type { QueryProps } from "@/types";

export const useEventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isQueryInvalidated, setIsQueryInvalidated } =
    useQueryInvalidateStore();
  const [event, setEvent] = useState<EventProp>({
    _id: "",
    title: "",
    eventDate: "",
    description: "",
    location: "",
    photo: "",
    createdAt: "",
    status: "",
    isPublished: false,
    composer: {
      _id: "",
      fullName: "",
      email: "",
      avatar: "",
      role: "",
    },
    link: "",
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState<boolean>(false);
  const [isUnpublishModalOpen, setIsUnpublishModalOpen] =
    useState<boolean>(false);
  const { mutation } = Mutation();

  const queries: { [key: string]: QueryProps } = {
    event: {
      id: `event-${id}`,
      url: ApiRoutes.FetchEventById(id as string),
      method: "GET",
      payload: null,
    },
    togglePublish: {
      id: `publish-${id}`,
      url: ApiRoutes.TogglePublishEvent(id as string),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: eventData, handleDataUpdate } = Query(queries.event);

  useEffect(() => {
    if (eventData.data) {
      console.log(eventData.data.data.event);
      const data = eventData.data.data.event;
      setEvent(data);
    }
  }, [eventData.data]);

  useEffect(() => {
    if (isQueryInvalidated) {
      handleDataUpdate();
      setIsQueryInvalidated(false);
    }
    //eslint-disable-next-line
  }, [isQueryInvalidated]);

  const handleTogglePublish = () => {
    mutation.mutate(
      {
        url: ApiRoutes.TogglePublishEvent(id as string),
        requestType: "patch",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "toggle publish");
          toast.success(
            event.isPublished
              ? "Event unpublished successfully"
              : "Event published successfully"
          );
          setIsPublishModalOpen(false);
          setIsUnpublishModalOpen(false);
          // Refresh event data
          window.location.reload();
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error);
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  const handleDelete = () => {
    mutation.mutate(
      {
        url: ApiRoutes.FetchEventById(id as string),
        requestType: "delete",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "delete");
          toast.success("event deleted successfully");
          setIsDeleteModalOpen(false);
          navigate(-1);
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error);
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  return {
    event,
    eventData,
    handleTogglePublish,
    handleDelete,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    isPublishModalOpen,
    setIsPublishModalOpen,
    isUnpublishModalOpen,
    setIsUnpublishModalOpen,
    mutation,
  };
};
