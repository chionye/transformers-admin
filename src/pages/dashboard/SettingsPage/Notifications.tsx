/** @format */

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import ApiRoutes from "@/services/api/api-routes";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/page-title";
import { useQuery } from "@tanstack/react-query";
import type { SettingsApiResponse } from "@/types";
import { Requests } from "@/services/api";
import { useUserDataStore } from "@/store/userdata-store";
import { FeatureSwitcher } from "./Subscription/components/FeatureSwitcher";

interface NotificationSettings {
  paymentConfirmation: boolean;
  challengeUpdates: boolean;
  teamInvitations: boolean;
  earningAlerts: boolean;
}

const Notifications = () => {
  const { mutation } = Mutation();
  const { user } = useUserDataStore();
  const [settings, setSettings] = useState<NotificationSettings>({
    paymentConfirmation: false,
    challengeUpdates: false,
    teamInvitations: false,
    earningAlerts: false,
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
      setSettings({
        paymentConfirmation: data?.notification?.paymentConfirmation ?? false,
        challengeUpdates: data?.notification?.challengeUpdates ?? false,
        teamInvitations: data?.notification?.teamInvitations ?? false,
        earningAlerts: data?.notification?.earningAlerts ?? false,
      });
    }
  }, [userData.data]);

  const handleFeatureChange = (feature: keyof NotificationSettings, value: boolean) => {
    setSettings((prev) => ({
      ...prev,
      [feature]: value,
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      [`notification.paymentConfirmation`]: settings.paymentConfirmation,
      [`notification.challengeUpdates`]: settings.challengeUpdates,
      [`notification.teamInvitations`]: settings.teamInvitations,
      [`notification.earningAlerts`]: settings.earningAlerts,
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
          console.log(response, "update notification settings");
          toast.success("Notification settings updated successfully");
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error, "update notification settings");
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <PageTitle
        title='Notifications'
        subtitle='Configure how and when users and admins receive alerts via email, push, or in-app notifications.'
      />
      <Card className='px-4 py-8'>
        <div className='space-y-1'>
          <FeatureSwitcher
            label='Payment Confirmation'
            checked={settings.paymentConfirmation}
            onCheckedChange={(value) => handleFeatureChange("paymentConfirmation", value)}
          />
          <FeatureSwitcher
            label='Challenge Updates'
            checked={settings.challengeUpdates}
            onCheckedChange={(value) => handleFeatureChange("challengeUpdates", value)}
          />
          <FeatureSwitcher
            label='Team Invitations'
            checked={settings.teamInvitations}
            onCheckedChange={(value) => handleFeatureChange("teamInvitations", value)}
          />
          <FeatureSwitcher
            label='Earning Alerts'
            checked={settings.earningAlerts}
            onCheckedChange={(value) => handleFeatureChange("earningAlerts", value)}
          />
        </div>

        <div className='flex gap-4 w-fit mt-6'>
          <Button
            onClick={handleSubmit}
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
      </Card>
    </div>
  );
};

export default Notifications;
