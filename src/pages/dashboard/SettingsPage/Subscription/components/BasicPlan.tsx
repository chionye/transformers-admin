/** @format */

import { Card } from "@/components/ui/card";
import { FeatureSwitcher } from "./FeatureSwitcher";

interface BasicPlanProps {
  monthlyPrice: string;
  yearlyPrice: string;
  features: {
    earnFromTeamDownline: boolean;
    teamAccess: boolean;
    createTeams: boolean;
    teamLeader: boolean;
    messaging: boolean;
    opportunitiesAccess: boolean;
    eventsAccess: boolean;
    learningAccess: boolean;
    prioritySupport: boolean;
  };
  onPriceChange: (field: "monthlyPrice" | "yearlyPrice", value: string) => void;
  onFeatureChange: (feature: string, value: boolean) => void;
}

export const BasicPlan = ({
  monthlyPrice,
  yearlyPrice,
  features,
  onPriceChange,
  onFeatureChange,
}: BasicPlanProps) => {
  return (
    <div className='flex flex-col gap-4'>
      {/* Pricing Card */}
      <Card className='w-full p-6'>
        <div className='space-y-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Monthly Price
            </label>
            <input
              type='text'
              value={monthlyPrice}
              onChange={(e) => onPriceChange("monthlyPrice", e.target.value)}
              placeholder='Enter monthly price'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Yearly Price
            </label>
            <input
              type='text'
              value={yearlyPrice}
              onChange={(e) => onPriceChange("yearlyPrice", e.target.value)}
              placeholder='Enter yearly price'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#198841] focus:border-transparent outline-none transition-all'
            />
          </div>
        </div>
      </Card>

      {/* Features Card */}
      <Card className='w-full p-6'>
        <p className='font-dm-sans text-xl font-semibold text-[#1E1E1E]'>
          Features
        </p>
        <FeatureSwitcher
          label='Earn from Team Downline'
          checked={features.earnFromTeamDownline}
          onCheckedChange={(checked) =>
            onFeatureChange("earnFromTeamDownline", checked)
          }
        />
        <FeatureSwitcher
          label='Team Access'
          checked={features.teamAccess}
          onCheckedChange={(checked) => onFeatureChange("teamAccess", checked)}
        />
        <FeatureSwitcher
          label='Create Teams'
          checked={features.createTeams}
          onCheckedChange={(checked) => onFeatureChange("createTeams", checked)}
        />
        <FeatureSwitcher
          label='Team leader'
          checked={features.teamLeader}
          onCheckedChange={(checked) => onFeatureChange("teamLeader", checked)}
        />
        <FeatureSwitcher
          label='Messaging'
          checked={features.messaging}
          onCheckedChange={(checked) => onFeatureChange("messaging", checked)}
        />
        <FeatureSwitcher
          label='Opportunities Access'
          checked={features.opportunitiesAccess}
          onCheckedChange={(checked) =>
            onFeatureChange("opportunitiesAccess", checked)
          }
        />
        <FeatureSwitcher
          label='Events Access'
          checked={features.eventsAccess}
          onCheckedChange={(checked) =>
            onFeatureChange("eventsAccess", checked)
          }
        />
        <FeatureSwitcher
          label='Learning Access'
          checked={features.learningAccess}
          onCheckedChange={(checked) =>
            onFeatureChange("learningAccess", checked)
          }
        />
        <FeatureSwitcher
          label='Priority Support'
          checked={features.prioritySupport}
          onCheckedChange={(checked) =>
            onFeatureChange("prioritySupport", checked)
          }
        />
      </Card>
    </div>
  );
};
