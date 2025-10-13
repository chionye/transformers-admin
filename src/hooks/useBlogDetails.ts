/** @format */

import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useQueryInvalidateStore } from "@/store/query-invalidate-store";
import type { BlogProp } from "@/types";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect } from "react";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import type { QueryProps } from "@/types";

export const useBlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isQueryInvalidated, setIsQueryInvalidated } =
    useQueryInvalidateStore();
  const [blog, setBlog] = useState<BlogProp>({
    _id: "",
    title: "",
    content: "",
    photo: "",
    isPublished: false,
    createdAt: "",
    composer: {
      _id: "",
      fullName: "",
      email: "",
      avatar: "",
      role: "",
    },
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState<boolean>(false);
  const [isUnpublishModalOpen, setIsUnpublishModalOpen] =
    useState<boolean>(false);
  const { mutation } = Mutation();

  const queries: { [key: string]: QueryProps } = {
    blog: {
      id: `blog-${id}`,
      url: ApiRoutes.FetchBlogById(id as string),
      method: "GET",
      payload: null,
    },
    togglePublish: {
      id: `publish-${id}`,
      url: ApiRoutes.TogglePublish(id as string),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: blogData, handleDataUpdate } = Query(queries.blog);

  useEffect(() => {
    if (blogData.data) {
      console.log(blogData.data.data.blog);
      const data = blogData.data.data.blog;
      setBlog(data);
    }
  }, [blogData.data]);

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
        url: ApiRoutes.TogglePublish(id as string),
        requestType: "patch",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "toggle publish");
          toast.success(
            blog.isPublished
              ? "Blog unpublished successfully"
              : "Blog published successfully"
          );
          setIsPublishModalOpen(false);
          setIsUnpublishModalOpen(false);
          // Refresh blog data
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
        url: ApiRoutes.FetchBlogById(id as string),
        requestType: "delete",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "delete");
          toast.success("Blog deleted successfully");
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
    blog,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    isPublishModalOpen,
    setIsPublishModalOpen,
    isUnpublishModalOpen,
    setIsUnpublishModalOpen,
    handleTogglePublish,
    handleDelete,
    blogData,
    handleDataUpdate,
    isQueryInvalidated,
    setIsQueryInvalidated,
    mutation
  };
};
