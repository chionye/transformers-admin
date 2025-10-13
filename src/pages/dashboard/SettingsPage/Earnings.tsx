/** @format */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { newEarningsSchema } from "@/utils/form-schema";
import { Card } from "@/components/ui/card";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import ApiRoutes from "@/services/api/api-routes";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/page-title";
import { useQuery } from "@tanstack/react-query";
import type { SettingsApiResponse, SettingsProp } from "@/types";
import { Requests } from "@/services/api";
import { useUserDataStore } from "@/store/userdata-store";

type EarningsSettingsFormData = z.infer<typeof newEarningsSchema>;

// Main Component
const EarningsSettings = () => {
  const { mutation } = Mutation();
  const { user } = useUserDataStore();
  const [settings, setSettings] = useState<EarningsSettingsFormData>({
    referral: 0,
    completeGoal: 0,
    completeChallenge: 0,
    makePost: 0,
    joinTeam: 0,
  });
  const [settingsData, setSettingsData] = useState<SettingsProp | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EarningsSettingsFormData>({
    resolver: zodResolver(newEarningsSchema),
    defaultValues: {
      referral: 0,
      completeGoal: 0,
      completeChallenge: 0,
      makePost: 0,
      joinTeam: 0,
    },
  });

  const userData = useQuery<SettingsApiResponse>({
    queryKey: [`admin-settings`],
    queryFn: async (): Promise<SettingsApiResponse> => {
      const response = await Requests.get(
        ApiRoutes.FetchSettings(user.role, user._id)
      );
      return response.data as unknown as SettingsApiResponse;
    },
  });

  useEffect(() => {
    if (userData.data?.settings) {
      const data = userData.data.settings;
      setSettingsData(data);
      setSettings((prev) => ({
        ...prev,
        referral: data?.earnings?.referral ?? 0,
        completeGoal: data?.earnings?.completeGoal ?? 0,
        completeChallenge: data?.earnings?.completeChallenge ?? 0,
        makePost: data?.earnings?.makePost ?? 0,
        joinTeam: data?.earnings?.joinTeam ?? 0,
      }));
    }
  }, [userData.data]);

  const onSubmit = async (data: EarningsSettingsFormData) => {
    const payload = {
      [`earnings.referral`]: data.referral,
      [`earnings.completeGoal`]: data.completeGoal,
      [`earnings.completeChallenge`]: data.completeChallenge,
      [`earnings.makePost`]: data.makePost,
      [`earnings.joinTeam`]: data.joinTeam,
    };
    mutation.mutate(
      {
        url: ApiRoutes.UpdateGeneralSettings(settingsData?._id as string),
        data: payload,
        requestType: "patch",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "update general settings");
          toast.success("Settings updated successfully");
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error, "update general settings");
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  useEffect(() => {
    if (settings) {
      setValue("referral", settings.referral);
      setValue("completeGoal", settings.completeGoal);
      setValue("completeChallenge", settings.completeChallenge);
      setValue("makePost", settings.makePost);
      setValue("joinTeam", settings.joinTeam);
    }
    //eslint-disable-next-line
  }, [settings]);

  return (
    <div className='w-full flex flex-col gap-4'>
      <PageTitle
        title='Earnings'
        subtitle='Set rules for how users earn points on the platform'
      />
      <Card className='px-4 py-8'>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
          <div className='space-y-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
            {/* Referral */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Referral
              </label>
              <input
                {...register("referral", { valueAsNumber: true })}
                type='number'
                placeholder='Enter referral'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.referral && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.referral.message}
                </p>
              )}
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Completed Goals
              </label>
              <input
                {...register("completeGoal", { valueAsNumber: true })}
                type='number'
                placeholder='Enter completed goals'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.completeGoal && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.completeGoal.message}
                </p>
              )}
            </div>
          </div>
          <div className='space-y-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
            {/* Referral */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Create a Challenge
              </label>
              <input
                {...register("completeChallenge", { valueAsNumber: true })}
                type='number'
                placeholder='Enter completed challenges'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.completeChallenge && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.completeChallenge.message}
                </p>
              )}
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Make a Post
              </label>
              <input
                {...register("makePost", { valueAsNumber: true })}
                type='number'
                placeholder='Enter make post'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.makePost && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.makePost.message}
                </p>
              )}
            </div>
          </div>
          <div className='space-y-6 grid lg:grid-cols-1 gap-4'>
            {/* Referral */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Join Team
              </label>
              <input
                {...register("joinTeam", { valueAsNumber: true })}
                type='number'
                placeholder='Enter join team'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.joinTeam && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.joinTeam.message}
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
                  Updating...
                </>
              ) : (
                "Update Settings"
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default EarningsSettings;
