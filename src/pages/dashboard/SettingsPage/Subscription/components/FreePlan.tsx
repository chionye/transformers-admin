/** @format */

import { Card } from "@/components/ui/card";
import { FeatureSwitcher } from "./FeatureSwitcher";

interface FreePlanProps {
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
  onFeatureChange: (feature: string, value: boolean) => void;
}

export const FreePlan = ({ features, onFeatureChange }: FreePlanProps) => {
  return (
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
        onCheckedChange={(checked) => onFeatureChange("eventsAccess", checked)}
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
  );
};
