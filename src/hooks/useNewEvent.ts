/** @format */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newEvent } from "@/utils/form-schema";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import ApiRoutes from "@/services/api/api-routes";
import { z } from "zod";

export const useNewEvent = () => {
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

  return {
    register,
    handleSubmit,
    setValue,
    watch,
    errors,
    onSubmit,
    handleDelete,
    handleImageUploadComplete,
    handleRemoveUploadedImage,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    uploadedImageUrl,
    mutation,
  };
};
