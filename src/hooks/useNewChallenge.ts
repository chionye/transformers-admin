/** @format */

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { newChallengeSchema } from "@/utils/form-schema";
import { responseHandler } from "@/services/response";
import Mutation from "@/services/query/mutation";

type ChallengeFormData = {
  title: string;
  description: string;
  icon: string;
  category: string;
  isPublic?: boolean;
  checklists: { task: string }[];
  start: string;
  end: string;
  frequency?: string;
};

export const useNewChallenge = () => {
  const navigate = useNavigate();
  const { mutation } = Mutation();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  // Fetch categories using Query
  const { queryData: categoriesQuery } = Query({
    id: "categories",
    url: ApiRoutes.FetchCategories,
    method: "GET",
    payload: null,
  });

  const categories = categoriesQuery?.data?.data?.category || [];
  const loading = mutation.isPending;

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ChallengeFormData>({
    resolver: zodResolver(newChallengeSchema),
    defaultValues: {
      title: "",
      description: "",
      icon: "",
      category: "",
      isPublic: false,
      checklists: [{ task: "" }, { task: "" }],
      start: "",
      end: "",
      frequency: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "checklists",
  });

  const onSubmit = async (data: ChallengeFormData) => {
    mutation.mutate(
      {
        url: ApiRoutes.CreateChallenge,
        data: data,
        requestType: "post",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "create challenge");
          navigate(-1);
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error, "create challenge");
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  const handleCategorySelect = (categoryId: string, categoryName: string) => {
    setSelectedCategory(categoryName);
    setValue("category", categoryId, { shouldValidate: true });
  };

  const handleIconSelect = (iconTitle: string) => {
    setSelectedIcon(iconTitle);
    setValue("icon", iconTitle, { shouldValidate: true });
  };

  return {
    categories,
    loading,
    control,
    handleSubmit,
    errors,
    onSubmit,
    handleCategorySelect,
    handleIconSelect,
    selectedCategory,
    selectedIcon,
    fields,
    append,
    remove,
  };
};
