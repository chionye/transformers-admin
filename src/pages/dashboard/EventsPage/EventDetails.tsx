/** @format */

import { InnerPageContainer } from "@/components/innerpage-container";
import { Card } from "@/components/ui/card";
import { Chip } from "@/components/chip";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import CustomModal from "@/components/custom-modal";
import moment from "moment";
import { useEventDetails } from "@/hooks/useEventDetail";

const EventDetails = () => {
  const {
    event,
    mutation,
    handleTogglePublish,
    handleDelete,
    setIsDeleteModalOpen,
    setIsUnpublishModalOpen,
    setIsPublishModalOpen,
    isDeleteModalOpen,
    isPublishModalOpen,
    isUnpublishModalOpen,
  } = useEventDetails();

  return (
    <InnerPageContainer
      title='Back to events'
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
          {event.isPublished ? (
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
              {event.title}
            </p>
            <div>
              {event.isPublished ? (
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
          <p className='text-[#4B4B4B] font-dm-sans text-[14px] font-normal'>
            Date Created: {moment(event.createdAt).format("YYYY-MM-DD")}
          </p>
          <p className='text-[#4B4B4B] font-dm-sans text-[14px] font-normal'>
            Event Date: {moment(event.eventDate).format("YYYY-MM-DD")}
          </p>
          <p className='text-[#4B4B4B] font-dm-sans text-[14px] font-normal'>
            Event Location: {event.location}
          </p>
          <p className='text-[#4B4B4B] font-dm-sans text-[14px] font-normal'>
            {event.description}
          </p>
          <div className='rounded-lg overflow-hidden'>
            <img src={event.photo} alt='' className='w-full' />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <img
            src={event?.composer?.avatar}
            alt=''
            className='w-8 h-8 rounded-full'
          />
          <div>
            <p className='font-dm-sans text-[#1E1E1E] text-[14px] font-medium'>
              {event.composer?.fullName}
            </p>
            <p className='font-dm-sans text-[#1E1E1E] text-[14px] font-medium'>
              {event.composer?.role}
            </p>
          </div>
        </div>
      </Card>
      <CustomModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        showCloseButton={false}
        title='Delete event?'
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
              Delete event
            </button>
          </div>
        }>
        <p className='text-gray-600'>
          Are you sure you want to delete this event? You cannot undo this
          action.
        </p>
      </CustomModal>

      <CustomModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
        showCloseButton={false}
        title='Publish event?'
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
              Publish event
            </button>
          </div>
        }>
        <p className='text-gray-600'>
          Are you sure you want to publish this event? It will be visible to all
          users.
        </p>
      </CustomModal>

      <CustomModal
        isOpen={isUnpublishModalOpen}
        onClose={() => setIsUnpublishModalOpen(false)}
        showCloseButton={false}
        title='Unpublish event?'
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
              Unpublish event
            </button>
          </div>
        }>
        <p className='text-gray-600'>
          Are you sure you want to unpublish this event? It will no longer be
          visible to users.
        </p>
      </CustomModal>
    </InnerPageContainer>
  );
};

export default EventDetails;
