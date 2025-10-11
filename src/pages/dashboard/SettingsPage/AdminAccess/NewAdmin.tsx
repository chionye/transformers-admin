/** @format */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { newAdminSchema } from "@/utils/form-schema";
import { Card } from "@/components/ui/card";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import ApiRoutes from "@/services/api/api-routes";
import { InnerPageContainer } from "@/components/innerpage-container";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { ERoles } from "@/constants/enums";
import type { QueryProps } from "@/types";
import Query from "@/services/query/query";
import { useEffect } from "react";

// Main Component
const NewAdmin = () => {
  const { id } = useParams();
  const { mutation } = Mutation();
  const navigate = useNavigate();

  const queries: { [key: string]: QueryProps } = {
    adminDetails: {
      id: `admin-${id}`,
      url: ApiRoutes.UpdateUserRole(id as string),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: adminData } = Query(queries.adminDetails);

  type NewAdminFormData = z.infer<typeof newAdminSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewAdminFormData>({
    resolver: zodResolver(newAdminSchema),
    defaultValues: {
      fullName: "",
      email: "",
      role: "",
    },
  });

  const roles = [
    { label: "Admin", value: ERoles.ADMINISTRATOR },
    { label: "Manager", value: ERoles.MANAGER },
  ];

  const onSubmit = async (data: NewAdminFormData) => {
    try {
      mutation.mutate(
        {
          url: id ? ApiRoutes.InviteAdmin : ApiRoutes.InviteAdmin,
          data: data,
          requestType: id ? "patch" : "post",
        },
        responseHandler({
          //eslint-disable-next-line
          onSuccess: (response: any) => {
            toast.success("Admin invite sent successfully");
            console.log(response, "create admin");
            navigate(-1);
          },
          //eslint-disable-next-line
          onError: (error: any) => {
            console.log(error, "create admin");
            toast.error(error || "Something went wrong");
          },
        })
      );
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (adminData.data) {
      const data = adminData.data.data.user;
      console.log(data);
      reset({
        fullName: data.profile.fullName,
        email: data.email,
        role: data.role,
      });
    }
    //eslint-disable-next-line
  }, [adminData.data]);

  return (
    <InnerPageContainer title='Back to Admin Access' hideTitle>
      <div className='min-h-screen bg-gray-50'>
        <Card className='max-w-4xl mx-auto px-4 py-8'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold text-gray-900'>
              {id ? "Edit Admin" : "Add New Admin"}
            </h1>
          </div>

          {/* Form */}
          <div className='space-y-6'>
            <div className='space-y-6'>
              {/* Full Name */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Full Name
                </label>
                <input
                  {...register("fullName")}
                  type='text'
                  placeholder='John Doe'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
                />
                {errors.fullName && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Email
                </label>
                <input
                  {...register("email")}
                  type='email'
                  placeholder='john.doe@gmail.com'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
                />
                {errors.email && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.email.message}
                  </p>  
                )}
              </div>

              {/* Role */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Role <span className='text-red-500'>*</span>
                </label>
                <select
                  {...register("role")}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'>
                  <option value=''>Select a role</option>
                  {roles.map((role) => (
                    <option
                      key={role.value}
                      value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
                {errors.role && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.role.message}
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className='flex gap-4 w-fit'>
              <Button
                type='button'
                onClick={handleSubmit(onSubmit)}
                disabled={mutation.isPending}
                className='flex-1 bg-[#198841] text-white hover:bg-[#198841]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center w-fit'>
                {mutation.isPending ? (
                  <>
                    <Loader2 className='w-5 h-5 mr-2 animate-spin' />
                    Adding...
                  </>
                ) : (
                  "Add Admin"
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </InnerPageContainer>
  );
};

export default NewAdmin;
