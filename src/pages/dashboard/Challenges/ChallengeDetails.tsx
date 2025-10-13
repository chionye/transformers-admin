/** @format */

import Icons from "@/constants/icons";
import { InnerPageContainer } from "@/components/innerpage-container";
import type { LeaderboardData } from "@/types";
import { Button } from "@/components/ui/button";
import IconCircleBadge from "@/components/icon-circle-badge";
import { Card } from "@/components/ui/card";
import MetricsCard from "./components/ui/metrics-card";
import Leaderboard from "./components/leaderboard";
import Participants from "./components/participants";
import CustomModal from "@/components/custom-modal";
import { PageTabs } from "@/components/navigation/custom-tab";
import { useChallengeDetails } from "@/hooks/useChallengeDetails";

const ChallengeDetails = () => {
  const { challenge, metrics, isOpen, setIsOpen, handleDeleteChallenge } =
    useChallengeDetails();

  return (
    <InnerPageContainer
      title='Back to Challenges'
      hideTitle
      child={
        <Button
          onClick={() => setIsOpen(true)}
          className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#C8230D] shadow'>
          <span className='flex lg:gap-1'>Delete Challenge</span>
        </Button>
      }>
      <Card className='p-4'>
        <div className='flex items-center justify-between'>
          <IconCircleBadge
            icon={<Icons.target />}
            size={64}
            bgColor='#e0f2fe'
            iconColor='#0369a1'
          />
        </div>
        <div>
          <p className='font-dm-sans text-xl text-[#1E1E1E] font-semibold'>
            Growth Champions
          </p>
          <p className='text-[#4B4B4B] font-dm-sans text-[16px] font-normal'>
            A team dedicated to building better morning routines and increasing
            daily productivity.
          </p>
        </div>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
          {metrics.map((metric, index) => (
            <MetricsCard
              key={index}
              title={metric.title}
              count={metric.count}
              icon={metric.icon}
              iconBg={metric.iconBg}
              isLink={metric.isLink}
              linkText={metric.linkText}
              linkRef={metric.linkRef}
            />
          ))}
        </div>
      </Card>
      <Card className='p-4 mt-5'>
        <PageTabs
          tabList={[
            {
              value: "leaderboard",
              label: "Leaderboard",
            },
            {
              value: "participants",
              label: "Participants",
            },
          ]}
          defaultValue='leaderboard'
          tabContent={[
            {
              key: "leaderboard",
              children: (
                <Leaderboard
                  leaderboard={
                    (challenge?.leaderboard as LeaderboardData[]) || []
                  }
                />
              ),
            },
            {
              key: "participants",
              children: (
                <Participants
                  participants={
                    (challenge?.leaderboard as LeaderboardData[]) || []
                  }
                />
              ),
            },
          ]}
          rghtPositionedChild={null}
          onValueChange={(value) => console.log(value)}
        />
      </Card>
      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showCloseButton={false}
        title='Delete Challenge?'
        footer={
          <div className='flex justify-end space-x-3'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
              Cancel
            </button>
            <button
              onClick={() => {
                handleDeleteChallenge();
              }}
              className='px-4 py-2 text-sm font-medium text-white bg-[#C8230D] rounded-md hover:bg-[#C8230D]/80'>
              Delete Challenge
            </button>
          </div>
        }>
        <p>
          You are about to delete this challenge. This action is irreversible.
        </p>
      </CustomModal>
    </InnerPageContainer>
  );
};

export default ChallengeDetails;
