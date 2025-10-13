/** @format */

import { useNavigate } from "react-router-dom";
import Mutation from "@/services/query/mutation";
import { useUserStore } from "@/store/user-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/utils/form-schema";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import ApiRoutes from "@/services/api/api-routes";
import type z from "zod";

export const useAuth = () => {
  const navigate = useNavigate();
  const { mutation } = Mutation();
  const setUser = useUserStore((state) => state.setUser);
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    mutation.mutate(
      {
        url: ApiRoutes.LoginUser,
        data: data,
        requestType: "post",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "login");
          setUser(response?.user);
          localStorage.setItem("user", JSON.stringify(response?.user));
          navigate(`/dashboard/admin/home`);
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error, "login");
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  return {
    mutation,
    form,
    onSubmit,
  };
};
