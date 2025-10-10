/** @format */

import { useState } from "react";
import PageTitle from "@/components/page-title";
import { PageTabs } from "@/components/navigation/custom-tab";
import { FreePlan } from "./components/FreePlan";
import { BasicPlan } from "./components/BasicPlan";
import { PremiumPlan } from "./components/PremiumPlan";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface PlanFeatures {
  earnFromTeamDownline: boolean;
  teamAccess: boolean;
  createTeams: boolean;
  teamLeader: boolean;
  messaging: boolean;
  opportunitiesAccess: boolean;
  eventsAccess: boolean;
  learningAccess: boolean;
  prioritySupport: boolean;
}

interface PricingData {
  monthlyPrice: string;
  yearlyPrice: string;
}

const Subscription = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Free Plan State
  const [freePlanFeatures, setFreePlanFeatures] = useState<PlanFeatures>({
    earnFromTeamDownline: false,
    teamAccess: false,
    createTeams: false,
    teamLeader: false,
    messaging: false,
    opportunitiesAccess: false,
    eventsAccess: false,
    learningAccess: false,
    prioritySupport: false,
  });

  // Basic Plan State
  const [basicPlanPricing, setBasicPlanPricing] = useState<PricingData>({
    monthlyPrice: "",
    yearlyPrice: "",
  });
  const [basicPlanFeatures, setBasicPlanFeatures] = useState<PlanFeatures>({
    earnFromTeamDownline: false,
    teamAccess: false,
    createTeams: false,
    teamLeader: false,
    messaging: false,
    opportunitiesAccess: false,
    eventsAccess: false,
    learningAccess: false,
    prioritySupport: false,
  });

  // Premium Plan State
  const [premiumPlanPricing, setPremiumPlanPricing] = useState<PricingData>({
    monthlyPrice: "",
    yearlyPrice: "",
  });
  const [premiumPlanFeatures, setPremiumPlanFeatures] = useState<PlanFeatures>({
    earnFromTeamDownline: false,
    teamAccess: false,
    createTeams: false,
    teamLeader: false,
    messaging: false,
    opportunitiesAccess: false,
    eventsAccess: false,
    learningAccess: false,
    prioritySupport: false,
  });

  // Feature Change Handlers
  const handleFreePlanFeatureChange = (feature: string, value: boolean) => {
    setFreePlanFeatures((prev) => ({
      ...prev,
      [feature]: value,
    }));
  };

  const handleBasicPlanFeatureChange = (feature: string, value: boolean) => {
    setBasicPlanFeatures((prev) => ({
      ...prev,
      [feature]: value,
    }));
  };

  const handlePremiumPlanFeatureChange = (feature: string, value: boolean) => {
    setPremiumPlanFeatures((prev) => ({
      ...prev,
      [feature]: value,
    }));
  };

  // Pricing Change Handlers
  const handleBasicPlanPriceChange = (
    field: "monthlyPrice" | "yearlyPrice",
    value: string
  ) => {
    setBasicPlanPricing((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePremiumPlanPriceChange = (
    field: "monthlyPrice" | "yearlyPrice",
    value: string
  ) => {
    setPremiumPlanPricing((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Submit Handler
  const handleSubmit = async () => {
    setIsSubmitting(true);

    const subscriptionData = {
      freePlan: {
        features: freePlanFeatures,
      },
      basicPlan: {
        pricing: basicPlanPricing,
        features: basicPlanFeatures,
      },
      premiumPlan: {
        pricing: premiumPlanPricing,
        features: premiumPlanFeatures,
      },
    };

    console.log("Subscription Data:", subscriptionData);

    // TODO: Add API call here
    // await submitSubscriptionSettings(subscriptionData);

    setTimeout(() => {
      setIsSubmitting(false);
      // toast.success("Subscription settings updated successfully");
    }, 1000);
  };

  const tabList = [
    { value: "free", label: "Free Plan" },
    { value: "basic", label: "Basic Plan" },
    { value: "premium", label: "Premium Plan" },
  ];

  const tabContent = [
    {
      key: "free",
      children: (
        <FreePlan
          features={freePlanFeatures}
          onFeatureChange={handleFreePlanFeatureChange}
        />
      ),
    },
    {
      key: "basic",
      children: (
        <BasicPlan
          monthlyPrice={basicPlanPricing.monthlyPrice}
          yearlyPrice={basicPlanPricing.yearlyPrice}
          features={basicPlanFeatures}
          onPriceChange={handleBasicPlanPriceChange}
          onFeatureChange={handleBasicPlanFeatureChange}
        />
      ),
    },
    {
      key: "premium",
      children: (
        <PremiumPlan
          monthlyPrice={premiumPlanPricing.monthlyPrice}
          yearlyPrice={premiumPlanPricing.yearlyPrice}
          features={premiumPlanFeatures}
          onPriceChange={handlePremiumPlanPriceChange}
          onFeatureChange={handlePremiumPlanFeatureChange}
        />
      ),
    },
  ];

  return (
    <div className='w-full flex flex-col gap-4'>
      <PageTitle
        title='Subscription & Payment'
        subtitle='Control rules for Free, Basic and Premium plans.'
      />

      <PageTabs defaultValue='free' tabList={tabList} tabContent={tabContent} />

      <div className='flex justify-start mt-4'>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className='bg-[#198841] text-white hover:bg-[#198841]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center px-6'>
          {isSubmitting ? (
            <>
              <Loader2 className='w-5 h-5 mr-2 animate-spin' />
              Saving...
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Subscription;
