/** @format */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FaqApiResponse } from "@/types";
import { Loader2 } from "lucide-react";
import { newFaq } from "@/utils/form-schema";
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
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Requests } from "@/services/api";

type faqFormData = z.infer<typeof newFaq>;

// Main Component
const NewFaq = () => {
  const { id } = useParams();
  const [mode] = useState<"create" | "edit">(id ? "edit" : "create");
  const { mutation } = Mutation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [faqs, setFaqs] = useState<faqFormData>({
    question: "",
    answer: "",
  });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<faqFormData>({
    resolver: zodResolver(newFaq),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  const faqData = useQuery<FaqApiResponse>({
    queryKey: [`faq-${id}`],
    queryFn: async (): Promise<FaqApiResponse> => {
      const response = await Requests.get(ApiRoutes.FetchFaqById(id as string));
      return response.data as unknown as FaqApiResponse;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (faqData.data?.question && id) {
      const data = faqData.data.question;
      setFaqs(data);
    }
  }, [faqData.data, id]);

  const onSubmit = async (data: faqFormData) => {
    mutation.mutate(
      {
        url: mode === "edit" ? ApiRoutes.FetchFaqById(id as string) : ApiRoutes.FetchFaq,
        data: data,
        requestType: mode === "edit" ? "patch" : "post",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "create faq");
          navigate(-1);
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error, "create faq");
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  const handleDelete = () => {
    console.log("Deleting course");
    setIsDeleteModalOpen(false);
    alert("Course deleted successfully!");
  };

  useEffect(() => {
    if (faqs) {
      setValue("question", faqs.question);
      setValue("answer", faqs.answer);
    }
    //eslint-disable-next-line
  }, [faqs]);

  return (
    <InnerPageContainer title='Back to FAQs' hideTitle>
      <div className='min-h-screen bg-gray-50'>
        <Card className='max-w-4xl mx-auto px-4 py-8'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold text-gray-900'>
              {mode === "edit" ? "Edit FAQ" : "Create a New FAQ"}
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div className=' space-y-6'>
              {/* Event Title */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  FAQ Title
                </label>
                <input
                  {...register("question")}
                  type='text'
                  placeholder='Enter event title'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
                />
                {errors.question && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.question.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Description
                </label>
                <textarea
                  {...register("answer")}
                  placeholder='Enter description...'
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all resize-none'
                />
                {errors.answer && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.answer.message}
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className='flex gap-4 w-fit'>
              <Button
                type='submit'
                disabled={mutation.isPending}
                className='flex-1 bg-[#198841] w-fit text-white hover:bg-[#198841]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center'>
                {mutation.isPending ? (
                  <>
                    <Loader2 className='w-5 h-5 mr-2 animate-spin' />
                    {mode === "edit" ? "Updating..." : "Creating..."}
                  </>
                ) : mode === "edit" ? (
                  "Update Faq"
                ) : (
                  "Add Faq"
                )}
              </Button>
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

export default NewFaq;
