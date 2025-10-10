/** @format */

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icons from "@/constants/icons";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import type { Plan } from "@/types";
import { Chip } from "@/components/chip";

interface UpgradeAccountProps {
  userId: string;
  currentRole: string;
  onUpgradeSuccess?: () => void;
}

const UpgradeAccount = ({
  userId,
  currentRole,
  onUpgradeSuccess,
}: UpgradeAccountProps) => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const { mutation } = Mutation();

  const { queryData: plansData } = Query({
    id: "merchant-plans",
    url: ApiRoutes.FetchMerchantPlans,
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (plansData.data) {
      console.log(plansData.data.data.plans, "merchant plans");
      setPlans(plansData.data.data.plans);
    }
  }, [plansData.data]);

  const handleUpgrade = () => {
    if (!selectedPlan) {
      toast.error("Please select a plan");
      return;
    }

    mutation.mutate(
      {
        url: ApiRoutes.UpdateUserRole(userId),
        data: { role: selectedPlan },
        requestType: "patch",
      },
      responseHandler({
        //eslint-disable-next-line
        onSuccess: (response: any) => {
          console.log(response, "upgrade success");
          toast.success("User plan updated successfully");
          if (onUpgradeSuccess) {
            onUpgradeSuccess();
          }
        },
        //eslint-disable-next-line
        onError: (error: any) => {
          console.log(error, "upgrade error");
          toast.error(error || "Failed to update user plan");
        },
      })
    );
  };

  if (plansData.isLoading) {
    return (
      <div className='flex items-center justify-center p-8'>
        <p className='text-gray-500'>Loading plans...</p>
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='font-dm-sans text-[18px] font-semibold text-black'>
            Manage User Plan
          </h3>
          <p className='font-dm-sans text-[14px] text-[#686868] mt-1'>
            Upgrade or downgrade user subscription plan
          </p>
        </div>
        <Chip
          variant='default'
          size='lg'
          rounded
          className='bg-[#F2EDFA] hover:bg-[#F2EDFA]'>
          <div className='flex items-center gap-2'>
            <span className='font-dm-sans text-[#7344AC] text-[14px] font-medium capitalize'>
              Current: {currentRole}
            </span>
            <Icons.star color='#7344AC' />
          </div>
        </Chip>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {plans.map((plan) => (
          <Card
            key={plan._id}
            onClick={() => setSelectedPlan(plan._id)}
            className={`p-4 cursor-pointer transition-all ${
              selectedPlan === plan._id
                ? "border-2 border-[#198841] bg-[#198841]/5"
                : "border border-gray-200 hover:border-[#198841]/50"
            }`}>
            <div className='flex items-start justify-between mb-3'>
              <div>
                <h4 className='font-dm-sans text-[16px] font-semibold text-black'>
                  {plan.name}
                </h4>
                <p className='font-dm-sans text-[12px] text-[#686868] mt-1'>
                  {plan.description}
                </p>
              </div>
              {selectedPlan === plan._id && (
                <div className='bg-[#198841] rounded-full p-1'>
                  <Icons.check color='white' width='16' height='16' />
                </div>
              )}
            </div>

            <div className='flex items-end gap-2 mb-3'>
              <span className='font-dm-sans text-[24px] font-bold text-black'>
                {plan.currency} {plan.amount.toLocaleString()}
              </span>
              <span className='font-dm-sans text-[14px] text-[#686868] mb-1'>
                /{plan.interval}
              </span>
            </div>

            <div className='space-y-2'>
              {plan.features.map((feature, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <Icons.check color='#198841' width='16' height='16' />
                  <span className='font-dm-sans text-[14px] text-[#4B4B4B]'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className='mt-3 pt-3 border-t border-gray-200'>
              <p className='font-dm-sans text-[12px] text-[#686868]'>
                <span className='font-semibold'>{plan.subscribers}</span>{" "}
                subscribers
              </p>
            </div>
          </Card>
        ))}
      </div>

      {plans.length === 0 && !plansData.isLoading && (
        <Card className='p-8 text-center'>
          <Icons.star color='#686868' width='48' height='48' />
          <p className='font-dm-sans text-[16px] text-[#686868]'>
            No plans available at the moment
          </p>
        </Card>
      )}

      <div className='flex justify-end gap-3 pt-4'>
        <Button
          onClick={handleUpgrade}
          disabled={!selectedPlan || mutation.isPending}
          className='font-dm-sans text-[14px] flex items-center gap-2 px-6 py-2 rounded-[8px] font-semibold text-white bg-[#198841] hover:bg-[#198841]/90 disabled:opacity-50 disabled:cursor-not-allowed'>
          {mutation.isPending ? (
            <>
              <div className='animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full' />
              <span>Updating...</span>
            </>
          ) : (
            <>
              <Icons.arrowCircleUp />
              <span>Update Plan</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default UpgradeAccount;
