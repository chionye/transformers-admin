import Icons from "@/constants/icons";
import { Link } from "react-router-dom";
import { InnerPageContainer } from "@/components/innerpage-container";
import { ContactCard } from "./component/ui/contact-card";
import MetricsCard from "./component/ui/metrics-card";
import { Chip } from "@/components/chip";
import { Card } from "@/components/ui/card";
import UserDetails from "./component/UserDetails";
import Goals from "./component/Goals";
import Points from "./component/Points";
import Wallet from "./component/Wallet";
import Teams from "./component/Teams";
import Referrals from "./component/Referrals";
import Subscription from "./component/Subscription";
import { useParams } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useMemo, useState } from "react";
import type {
  EarningHistoryProp,
  GoalsTableData,
  PointHistoryProp,
  QueryProps,
  UserProfileProp,
  UserTeamsProp,
} from "@/types";
import moment from "moment";
import Mutation from "@/services/query/mutation";
import { responseHandler } from "@/services/response";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { convertToTitleCase } from "@/utils/helpers";
import CustomModal from "@/components/custom-modal";
import { PageTabs } from "@/components/navigation/custom-tab";

const UserProfile = () => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState<UserProfileProp>({
    profile: null,
    progress: null,
    posts: null,
    teams: null,
  });
  const [goals, setGoals] = useState<{
    goals: GoalsTableData[];
    totalDocuments: number;
  }>({
    goals: [],
    totalDocuments: 0,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState<boolean>(false);
  const [earningHistory, setEarningHistory] = useState<EarningHistoryProp>({
    history: [],
    balance: 0,
    totalDocuments: 0,
  });
  const [pointHistory, setPointHistory] = useState<PointHistoryProp>({
    history: [],
    balance: 0,
    totalDocuments: 0,
  });
  const [userTeams, setUserTeams] = useState<UserTeamsProp>({
    teams: [],
    totalDocuments: 0,
  });
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isDeactivated, setIsDeactivated] = useState<boolean>(false);
  const { mutation } = Mutation();

  const queries: { [key: string]: QueryProps } = {
    goals: {
      id: `goals-${id}`,
      url: ApiRoutes.GetGoals(page, limit, `&user=${id}`),
      method: "GET",
      payload: null,
    },
    userProfile: {
      id: `user-profile-${id}`,
      url: ApiRoutes.FetchUserProfile(id as string),
      method: "GET",
      payload: null,
    },
    pointHistory: {
      id: `point-history-${id}`,
      url: ApiRoutes.FetchPointHistory(id as string, page, limit),
      method: "GET",
      payload: null,
    },
    earnings: {
      id: `earnings-${id}`,
      url: ApiRoutes.FetchEarningHistory(id as string, page, limit),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: goalsData } = Query(queries.goals);
  const { queryData: userProfileData } = Query(queries.userProfile);
  const { queryData: pointHistoryData } = Query(queries.pointHistory);
  const { queryData: earningsData } = Query(queries.earnings);

  const metrics = useMemo(
    () => [
      {
        title: "Current Streak",
        count: 5,
        icon: <Icons.fire />,
        iconBg: "#F2EDFA",
        isLink: false,
      },
      {
        title: "Goals Completed",
        count: userProfile?.progress?.completedGoals || 0,
        icon: <Icons.clipboard />,
        iconBg: "#E0EEF9",
        isLink: false,
      },
      {
        title: "Followers",
        count: userProfile?.profile?.followers || 0,
        icon: <Icons.userPlus />,
        iconBg: "#FEF0C3",
        isLink: false,
      },
      {
        title: "Teams Created",
        count: userProfile?.teams?.length || 0,
        icon: <Icons.team width='16' height='16' color='#C8230D' />,
        iconBg: "#FFE3DF",
        isLink: true,
        linkText: "Downline",
        linkRef: `/dashboard/admin/users/user-profile/${id}`,
      },
    ],
    [userProfileData.data]
  );

  useEffect(() => {
    if (goalsData.data) {
      console.log(goalsData.data.data.goals.goals);
      setGoals(goalsData.data.data.goals);
    }
  }, [goalsData.data]);

  useEffect(() => {
    if (userProfileData.data) {
      console.log(userProfileData.data.data.user);
      setUserProfile(userProfileData.data.data.user);
    }
  }, [userProfileData.data]);

  useEffect(() => {
    if (pointHistoryData.data) {
      console.log(pointHistoryData.data.data.history);
      setPointHistory(pointHistoryData.data.data.history);
    }
  }, [pointHistoryData.data]);

  useEffect(() => {
    if (earningsData.data) {
      console.log(earningsData.data.data.history);
      setEarningHistory(earningsData.data.data.history);
    }
  }, [earningsData.data]);

  const handleActivateDeactivateUser = () => {
    mutation.mutate(
      {
        url: ApiRoutes.ActivateDeactivateUser(id as string),
        data: {},
        requestType: "patch",
      },
      responseHandler({
        onSuccess: (response: any) => {
          console.log(response, "activate");
          toast.success("User activated successfully");
          setIsOpen(false);
        },
        onError: (error: any) => {
          console.log(error, "activate");
          toast.error(error || "Something went wrong");
        },
      })
    );
  };

  return (
    <InnerPageContainer
      title='Back to Users'
      hideTitle
      child={
        <div className='flex flex-row items-center gap-2'>
          {isDeactivated ? (
            <div className='font-dm-sans text-[14px] flex items-center gap-2 px-3 py-2 rounded-[8px] font-semibold text-[#C8230D] bg-[#FFE3DF] shadow'>
              <span className='flex lg:gap-1'>Account Deactivated </span>
              <Icons.cancel color='#C8230D' />
            </div>
          ) : (
            <Link
              to='/dashboard/admin/users/new'
              className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
              <Icons.arrowCircleUp />
              <span className='flex lg:gap-1'>
                Upgrade <span className='lg:block hidden'>User</span>
              </span>
            </Link>
          )}
          <Button
            onClick={() => setIsOpen(true)}
            className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#C8230D] shadow'>
            <span className='flex lg:gap-1'>
              {isDeactivated ? "Reactivate Account" : "Deactivate"}{" "}
              <span className='lg:block hidden'>Account</span>
            </span>
          </Button>
        </div>
      }>
      <div className='w-full flex flex-col gap-4'>
        <Card className='p-4'>
          <div className='flex items-center justify-between'>
            <ContactCard
              name={userProfile?.profile?.fullName || ""}
              email={userProfile?.profile?.email || ""}
              since={
                moment(userProfile?.profile?.createdAt).format("YYYY-MM-DD") ||
                ""
              }
            />
            <Chip
              variant='default'
              size='lg'
              rounded
              className='ml-2 bg-[#F2EDFA] hover:bg-[#F2EDFA]'>
              <div className='flex items-center gap-2'>
                <span className='font-dm-sans text-[#7344AC] text-[14px] font-medium'>
                  {convertToTitleCase(userProfile?.profile?.role || "Unknown")}
                </span>
                <Icons.star color='#7344AC' />
              </div>
            </Chip>
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
        <Card className='p-4'>
          <PageTabs
            defaultValue='user_details'
            tabList={[
              {
                value: "user_details",
                label: "User Details",
              },
              {
                value: "goals",
                label: "Goals",
              },
              {
                value: "wallet",
                label: "Wallet",
              },
              {
                value: "points",
                label: "Points",
              },
              {
                value: "teams",
                label: "Teams",
              },
              {
                value: "referrals",
                label: "Referrals",
              },
              {
                value: "subscription",
                label: "Subscription",
              },
            ]}
            tabContent={[
              {
                key: "user_details",
                children: <UserDetails userProfile={userProfile} />,
              },
              {
                key: "goals",
                children: <Goals goals={goals} />,
              },
              {
                key: "wallet",
                children: (
                  <Wallet
                    userId={id as string}
                    earningHistory={earningHistory}
                    earnings={userProfile?.profile?.earnings || 0}
                    balance={userProfile?.profile?.points || 0}
                  />
                ),
              },
              {
                key: "points",
                children: <Points history={pointHistory} />,
              },
              {
                key: "teams",
                children: <Teams teams={userProfile.teams} />,
              },
              {
                key: "referrals",
                children: <Referrals />,
              },
              {
                key: "subscription",
                children: <Subscription />,
              },
            ]}
          />
        </Card>
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showCloseButton={false}
        title='Deactivate User?'
        footer={
          <div className='flex justify-end space-x-3'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
              Cancel
            </button>
            <button
              onClick={() => {
                handleActivateDeactivateUser();
              }}
              className='px-4 py-2 text-sm font-medium text-white bg-[#C8230D] rounded-md hover:bg-[#C8230D]/80'>
              Deactivate User
            </button>
          </div>
        }>
        <p>
          You are about to deactivate this user’s account. They will no longer
          be able to log in or access any app features until reactivated. This
          action is reversible.
        </p>
      </CustomModal>
      <CustomModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        showCloseButton={false}
        title='Upgrade User Access'
        footer={
          <div className='flex justify-end space-x-3'>
            <button
              onClick={() => setIsUpgradeModalOpen(false)}
              className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
              Cancel
            </button>
            <button
              onClick={() => {
                handleActivateDeactivateUser();
              }}
              className='px-4 py-2 text-sm font-medium text-white bg-[#198841] rounded-md hover:bg-[#198841]/80'>
              Upgrade Access
            </button>
          </div>
        }>
        <p>
          You are about to upgrade this user’s subscription. You will not
          receive any payment for the upgrade and can be revoked at any time.
        </p>
      </CustomModal>
    </InnerPageContainer>
  );
};

export default UserProfile;
