/** @format */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { teamSettings } from "@/utils/form-schema";
import { Card } from "@/components/ui/card";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import ApiRoutes from "@/services/api/api-routes";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/page-title";
import { useQuery } from "@tanstack/react-query";
import type { SettingsApiResponse } from "@/types";
import { Requests } from "@/services/api";
import { useUserDataStore } from "@/store/userdata-store";

type TeamSettingsFormData = z.infer<typeof teamSettings>;

// Main Component
const TeamSettings = () => {
  const { mutation } = Mutation();
  const { user } = useUserDataStore();
  const [settings, setSettings] = useState<TeamSettingsFormData>({
    teams: 0,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TeamSettingsFormData>({
    resolver: zodResolver(teamSettings),
    defaultValues: {
      teams: 0,
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
    console.log(userData.data, "user data");
    if (userData.data?.settings) {
      const data = userData.data.settings;
      setSettings((prev) => ({
        ...prev,
        teams: data?.teams?.maxTeamMembers ?? 0,
      }));
    }
  }, [userData.data]);

  const onSubmit = async (data: TeamSettingsFormData) => {
    const key = Object.keys(data)[0];
    const payload = {
      [`${key}.maxTeamMembers`]: data.teams,
    };
    mutation.mutate(
      {
        url: ApiRoutes.UpdateGeneralSettings(user._id),
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
      setValue("teams", settings.teams);
    }
    //eslint-disable-next-line
  }, [settings]);

  return (
    <div className='w-full flex flex-col gap-4'>
      <PageTitle
        title='General Settings'
        subtitle='Customize platform settings and user preferences.'
      />
      <Card className='px-4 py-8'>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-6'>
            {/* Full Name */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Max Team Members
              </label>
              <input
                {...register("teams", { valueAsNumber: true })}
                type='number'
                placeholder='Enter max team members'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
              />
              {errors.teams && (
                <p className='text-sm text-red-600 mt-1'>
                  {errors.teams.message}
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

export default TeamSettings;
