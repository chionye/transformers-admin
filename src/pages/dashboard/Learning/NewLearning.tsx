/** @format */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { newEvent } from "@/utils/form-schema";
import CustomModal from "@/components/custom-modal";
import { Card } from "@/components/ui/card";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import ApiRoutes from "@/services/api/api-routes";
import { InnerPageContainer } from "@/components/innerpage-container";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Icons from "@/constants/icons";
import FileUpload from "@/components/upload/file-upload";
import { DatePicker } from "@/components/date-picker";

// Main Component
const NewEvent = () => {
  const [mode, setMode] = useState<"create" | "edit">("create");
  const { mutation } = Mutation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  type eventFormData = z.infer<typeof newEvent>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<eventFormData>({
    resolver: zodResolver(newEvent),
    defaultValues: {
      title: "",
      eventDate: new Date().toISOString().split("T")[0],
      description: "",
      location: "",
      photo: "",
      link: "",
    },
  });

  const onSubmit = async (data: eventFormData) => {
    mutation.mutate(
      {
        url: ApiRoutes.SubmitEvent,
        data: data,
        requestType: "post",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "create event");
          navigate(-1);
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error, "create event");
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  const handleDelete = () => {
    console.log("Deleting team");
    setIsDeleteModalOpen(false);
    alert("Team deleted successfully!");
  };

  const handleImageUploadComplete = (imageUrl: string) => {
    console.log("Image uploaded successfully:", imageUrl);
    setValue("photo", imageUrl);
    setUploadedImageUrl(imageUrl);
  };

  const handleRemoveUploadedImage = () => {
    setUploadedImageUrl(null);
    setValue("photo", "");
  };

  return (
    <InnerPageContainer title='Back to Opportunities' hideTitle>
      <div className='min-h-screen bg-gray-50'>
        <Card className='max-w-4xl mx-auto px-4 py-8'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold text-gray-900'>
              {mode === "edit" ? "Edit Event" : "Create New Event"}
            </h1>
            <button
              onClick={() => setMode(mode === "create" ? "edit" : "create")}
              className='text-sm text-blue-600 hover:text-blue-700'>
              Switch to {mode === "create" ? "Edit" : "Create"} Mode
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className=' space-y-6'>
              {/* Event Title */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Title
                </label>
                <input
                  {...register("title")}
                  type='text'
                  placeholder='Enter event title'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
                />
                {errors.title && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Details */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Details
                </label>
                <textarea
                  {...register("description")}
                  placeholder='Enter Details...'
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all resize-none'
                />
                {errors.description && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            {/* Event Date */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Event Date
              </label>
              <DatePicker
                value={
                  watch("eventDate") ? new Date(watch("eventDate")) : new Date()
                }
                onChange={(date) => {
                  if (date) {
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, "0");
                    const day = String(date.getDate()).padStart(2, "0");
                    setValue("eventDate", `${year}-${month}-${day}`, {
                      shouldValidate: true,
                    });
                  } else {
                    const today = new Date();
                    const year = today.getFullYear();
                    const month = String(today.getMonth() + 1).padStart(2, "0");
                    const day = String(today.getDate()).padStart(2, "0");
                    setValue("eventDate", `${year}-${month}-${day}`, {
                      shouldValidate: true,
                    });
                  }
                }}
              />
              {errors.eventDate && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.eventDate.message}
                </p>
              )}
            </div>

            {/* Event Title */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Location
              </label>
              <input
                {...register("location")}
                type='text'
                placeholder='Enter location'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.location && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Opportunity Title */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Link (Optional)
              </label>
              <input
                {...register("link")}
                type='text'
                placeholder='Enter URL'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.link && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.link.message}
                </p>
              )}
            </div>

            {/* File Upload Section */}
            <div>
              {!uploadedImageUrl ? (
                <FileUpload
                  onUploadComplete={handleImageUploadComplete}
                  uploadEndpoint='/image/upload'
                />
              ) : (
                <div className='space-y-4'>
                  <div className='relative rounded-lg overflow-hidden border border-gray-200'>
                    <img
                      src={uploadedImageUrl}
                      alt='Uploaded blog image'
                      className='w-full h-64 object-cover'
                    />
                  </div>
                  <div className='flex gap-3'>
                    <Button
                      type='button'
                      onClick={handleRemoveUploadedImage}
                      variant='outline'
                      className='flex items-center gap-2'>
                      <Icons.trash width='16' height='16' />
                      Remove & Upload New
                    </Button>
                    <a
                      href={uploadedImageUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-blue-600 hover:underline flex items-center'>
                      View full size
                    </a>
                  </div>
                </div>
              )}
              {errors.photo && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.photo.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className='flex gap-4 lg:w-1/3 w-full'>
              <Button
                type='submit'
                variant={"outline"}
                disabled={mutation.isPending}
                className='flex items-center gap-2 border border-[#E9E9E9]'>
                <Icons.save />
                <span className='text-[#686868]'>Save as draft</span>
              </Button>
              <Button
                type='submit'
                disabled={mutation.isPending}
                className='flex-1 bg-[#198841] text-white hover:bg-[#198841]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center'>
                {mutation.isPending ? (
                  <>
                    <Loader2 className='w-5 h-5 mr-2 animate-spin' />
                    {mode === "edit" ? "Updating..." : "Creating..."}
                  </>
                ) : mode === "edit" ? (
                  "Update Event"
                ) : (
                  "Submit Event"
                )}
                <Icons.paperPlane />
              </Button>

              {mode === "edit" && (
                <button
                  type='button'
                  onClick={() => setIsDeleteModalOpen(true)}
                  className='px-6 py-3 text-red-600 border border-red-600 rounded-lg font-semibold hover:bg-red-50 transition-all'>
                  Delete
                </button>
              )}
            </div>
          </form>

          {/* Delete Confirmation Modal */}
          <CustomModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            showCloseButton={false}
            title='Delete Team?'
            footer={
              <div className='flex justify-end space-x-3'>
                <button
                  onClick={() => setIsDeleteModalOpen(false)}
                  className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className='px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700'>
                  Delete Team
                </button>
              </div>
            }>
            <p className='text-gray-600'>
              Are you sure you want to delete this event? You cannot undo this
              action.
            </p>
          </CustomModal>
        </Card>
      </div>
    </InnerPageContainer>
  );
};

export default NewEvent;
