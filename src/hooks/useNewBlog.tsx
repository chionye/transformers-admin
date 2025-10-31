/** @format */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newBlogPost } from "@/utils/form-schema";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import ApiRoutes from "@/services/api/api-routes";
import { z } from "zod";

export const useNewBlog = () => {
  const [loading, setLoading] = useState(false);
  const { mutation } = Mutation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  type BlogFormData = z.infer<typeof newBlogPost>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<BlogFormData>({
    resolver: zodResolver(newBlogPost),
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
      photo: "",
    },
  });

  const onSubmit = async (data: BlogFormData) => {
    setLoading(true);
    try {
      mutation.mutate(
        {
          url: ApiRoutes.SubmitBlog,
          data: data,
          requestType: "post",
        },
        responseHandler({
          //eslint-disable-next-line
          onSuccess: (response: any) => {
            console.log(response, "create blog");
            setLoading(false);
            navigate(`/dashboard/admin/blog`);
          },
          //eslint-disable-next-line
          onError: (error: any) => {
            console.log(error, "create blog");
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

  const handleImageUploadComplete = (imageUrl: string) => {
    console.log("Image uploaded successfully:", imageUrl);
    setValue("photo", imageUrl, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
    setUploadedImageUrl(imageUrl);
  };

  const handleRemoveUploadedImage = () => {
    setUploadedImageUrl(null);
    setValue("photo", "");
  };

  const handleContentChange = (html: string) => {
    setValue("content", html, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    });
  };

  return {
    register,
    handleSubmit,
    setValue,
    watch,
    errors,
    isValid,
    loading,
    onSubmit,
    handleDelete,
    handleImageUploadComplete,
    handleRemoveUploadedImage,
    handleContentChange,
    uploadedImageUrl,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
  };
};
