/** @format */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { acceptInviteSchema } from "@/utils/form-schema";
import { Card } from "@/components/ui/card";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { InnerPageContainer } from "@/components/innerpage-container";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import ApiRoutes from "@/services/api/api-routes";

// Main Component
const AcceptInvite = () => {
  const { mutation } = Mutation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  type AcceptInviteFormData = z.infer<typeof acceptInviteSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AcceptInviteFormData>({
    resolver: zodResolver(acceptInviteSchema),
    defaultValues: {
      fullName: "",
      password: "",
    },
  });

  const onSubmit = async (data: AcceptInviteFormData) => {
    try {
      mutation.mutate(
        {
          url: ApiRoutes.AcceptInvite(id as string),
          data: data,
          requestType: "patch",
        },
        responseHandler({
          //eslint-disable-next-line
          onSuccess: (response: any) => {
            toast.success("Invite accepted successfully");
            console.log(response, "accept invite");
            navigate(-1);
          },
          //eslint-disable-next-line
          onError: (error: any) => {
            console.log(error, "accept invite");
            toast.error(error || "Something went wrong");
          },
        })
      );
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <InnerPageContainer title='Back to Admin Access' hideTitle>
      <div className='min-h-screen bg-gray-50'>
        <Card className='max-w-4xl mx-auto px-4 py-8'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold text-gray-900'>Accept Invite</h1>
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

              {/* Password */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Password
                </label>
                <input
                  {...register("password")}
                  type='password'
                  placeholder='Enter your password'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
                />
                {errors.password && (
                  <p className='text-sm text-red-600 mt-1'>
                    {errors.password.message}
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
                    Submitting...
                  </>
                ) : (
                  "Accept Invite"
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </InnerPageContainer>
  );
};

export default AcceptInvite;
