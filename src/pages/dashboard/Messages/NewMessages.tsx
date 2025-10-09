/** @format */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { newMessage } from "@/utils/form-schema";
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
import { ERoles } from "@/constants/enums";

// Main Component
const NewMessages = () => {
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [loading, setLoading] = useState(false);
  const { mutation } = Mutation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();
  const roles = [ERoles.BASIC, ERoles.PREMIUM, ERoles.PRO];
  type MessageFormData = z.infer<typeof newMessage>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageFormData>({
    resolver: zodResolver(newMessage),
    defaultValues: {
      title: "",
      content: "",
      recepients: "",
    },
  });

  const onSubmit = async (data: MessageFormData) => {
    setLoading(true);
    try {
      mutation.mutate(
        {
          url: ApiRoutes.SendMessage,
          data: data,
          requestType: "post",
        },
        responseHandler({
          //eslint-disable-next-line
          onSuccess: (response: any) => {
            console.log(response, "create team");
            setLoading(false);
            navigate(`/dashboard/admin/messages`);
          },
          //eslint-disable-next-line
          onError: (error: any) => {
            console.log(error, "create team");
            setLoading(false);
            toast.error(error || "Something went wrong");
          },
        })
      );
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    console.log("Deleting team");
    setIsDeleteModalOpen(false);
    alert("Team deleted successfully!");
  };

  return (
    <InnerPageContainer title='Back to Messages' hideTitle>
      <div className='min-h-screen bg-gray-50'>
        <Card className='max-w-4xl mx-auto px-4 py-8'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold text-gray-900'>
              {mode === "edit" ? "Edit Message" : "Create New Message"}
            </h1>
            <button
              onClick={() => setMode(mode === "create" ? "edit" : "create")}
              className='text-sm text-blue-600 hover:text-blue-700'>
              Switch to {mode === "create" ? "Edit" : "Create"} Mode
            </button>
          </div>

          {/* Form */}
          <div className='space-y-6'>
            <div className=' space-y-6'>
              {/* Message Title */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Title
                </label>
                <input
                  {...register("title")}
                  type='text'
                  placeholder='Enter message title'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
                />
                {errors.title && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Message Content */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Message
                </label>
                <textarea
                  {...register("content")}
                  placeholder='Enter Message...'
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all resize-none'
                />
                {errors.content && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.content.message}
                  </p>
                )}
              </div>
            </div>

            {/* Recepients */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Recipient
              </label>
              <select
                {...register("recepients")}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all resize-none'>
                {roles.map((role: string, index: number) => (
                  <option value={role} key={index}>
                    {role}
                  </option>
                ))}
              </select>
              {errors.recepients && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.recepients.message}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className='flex gap-4 lg:w-1/3 w-full'>
              <Button
                variant={"outline"}
                onClick={handleSubmit(onSubmit)}
                disabled={loading}
                className='flex items-center gap-2 border border-[#E9E9E9]'>
                <Icons.save />
                <span className='text-[#686868]'>Save as draft</span>
              </Button>
              <Button
                type='button'
                onClick={handleSubmit(onSubmit)}
                disabled={loading}
                className='flex-1 bg-[#198841] text-white hover:bg-[#198841]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center'>
                {loading ? (
                  <>
                    <Loader2 className='w-5 h-5 mr-2 animate-spin' />
                    {mode === "edit" ? "Updating..." : "Creating..."}
                  </>
                ) : mode === "edit" ? (
                  "Update Message"
                ) : (
                  "Send Message"
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
          </div>

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
              Are you sure you want to delete this team? You cannot undo this
              action.
            </p>
          </CustomModal>
        </Card>
      </div>
    </InnerPageContainer>
  );
};

export default NewMessages;
