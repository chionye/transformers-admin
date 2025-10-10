/** @format */

import { InnerPageContainer } from "@/components/innerpage-container";
import { useNavigate, useParams } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useState } from "react";
import type { BlogProp, QueryProps } from "@/types";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/chip";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import CustomModal from "@/components/custom-modal";
import { useQueryInvalidateStore } from "@/store/query-invalidate-store";

const BlogDetails = () => {
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

  return (
    <InnerPageContainer
      title='Back to Blog'
      hideTitle
      child={
        <div className='flex items-center gap-2'>
          <Button
            variant={"outline"}
            onClick={() => setIsDeleteModalOpen(true)}
            disabled={mutation.isPending}
            className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-[#198841] border border-[#198841] shadow'>
            <span>Delete</span>
          </Button>
          {blog.isPublished ? (
            <Button
              onClick={() => setIsUnpublishModalOpen(true)}
              disabled={mutation.isPending}
              className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#C8230D] shadow'>
              <span>Unpublish</span>
            </Button>
          ) : (
            <Button
              onClick={() => setIsPublishModalOpen(true)}
              disabled={mutation.isPending}
              className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
              <span>Publish</span>
            </Button>
          )}
        </div>
      }>
      <Card className='p-4'>
        <div>
          <div className='flex items-center justify-between'>
            <p className='font-dm-sans text-xl text-[#1E1E1E] font-semibold'>
              {blog.title}
            </p>
            <div>
              {!blog.isPublished ? (
                <Chip className='bg-[#FEF0C3] text-[#A17C07] rounded-full'>
                  Pending
                </Chip>
              ) : (
                <Chip className='bg-[#DDFBE7] text-[#198841] rounded-full'>
                  Published
                </Chip>
              )}
            </div>
          </div>
          <p className='text-[#4B4B4B] font-dm-sans text-[16px] font-normal'>
            {blog.content}
          </p>
          <div className='rounded-lg overflow-hidden'>
            <img src={blog.photo} alt='' className='w-full' />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <img
            src={blog?.composer?.avatar}
            alt=''
            className='w-8 h-8 rounded-full'
          />
          <div>
            <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
              {blog.composer?.fullName}
            </p>
            <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
              {blog.composer?.role}
            </p>
          </div>
        </div>
      </Card>
      <CustomModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        showCloseButton={false}
        title='Delete Blog?'
        footer={
          <div className='flex justify-end space-x-3'>
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              disabled={mutation.isPending}
              className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50'>
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={mutation.isPending}
              className='px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50 flex items-center gap-2'>
              {mutation.isPending && <Loader2 className='animate-spin' />}
              Delete Blog
            </button>
          </div>
        }>
        <p className='text-gray-600'>
          Are you sure you want to delete this blog? You cannot undo this
          action.
        </p>
      </CustomModal>

      <CustomModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
        showCloseButton={false}
        title='Publish Blog?'
        footer={
          <div className='flex justify-end space-x-3'>
            <button
              onClick={() => setIsPublishModalOpen(false)}
              disabled={mutation.isPending}
              className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50'>
              Cancel
            </button>
            <button
              onClick={handleTogglePublish}
              disabled={mutation.isPending}
              className='px-4 py-2 text-sm font-medium text-white bg-[#198841] rounded-md hover:bg-[#198841]/90 disabled:opacity-50 flex items-center gap-2'>
              {mutation.isPending && <Loader2 className='animate-spin' />}
              Publish Blog
            </button>
          </div>
        }>
        <p className='text-gray-600'>
          Are you sure you want to publish this blog? It will be visible to all
          users.
        </p>
      </CustomModal>

      <CustomModal
        isOpen={isUnpublishModalOpen}
        onClose={() => setIsUnpublishModalOpen(false)}
        showCloseButton={false}
        title='Unpublish Blog?'
        footer={
          <div className='flex justify-end space-x-3'>
            <button
              onClick={() => setIsUnpublishModalOpen(false)}
              disabled={mutation.isPending}
              className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50'>
              Cancel
            </button>
            <button
              onClick={handleTogglePublish}
              disabled={mutation.isPending}
              className='px-4 py-2 text-sm font-medium text-white bg-[#C8230D] rounded-md hover:bg-[#C8230D]/90 disabled:opacity-50 flex items-center gap-2'>
              {mutation.isPending && <Loader2 className='animate-spin' />}
              Unpublish Blog
            </button>
          </div>
        }>
        <p className='text-gray-600'>
          Are you sure you want to unpublish this blog? It will no longer be
          visible to users.
        </p>
      </CustomModal>
    </InnerPageContainer>
  );
};

export default BlogDetails;
