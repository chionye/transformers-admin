/** @format */
import Icons from "@/constants/icons";
import { Link } from "react-router-dom";
import { InnerPageContainer } from "@/components/innerpage-container";
import { ContactCard } from "./component/ui/contact-card";
import MetricsCard from "./component/ui/metrics-card";
import { Chip } from "@/components/chip";
import { Card } from "@/components/ui/card";
import { UserTabs } from "./component/ui/user-tab";
import UserDetails from "./component/UserDetails";
import Goals from "./component/Goals";
import Points from "./component/Points";
import Wallet from "./component/Wallet";
import Teams from "./component/Teams";
import Referrals from "./component/Referrals";
import Subscription from "./component/Subscription";

const UserProfile = () => {
  const metrics = [
    {
      title: "Current Streak",
      count: 5,
      icon: <Icons.fire />,
      iconBg: "#F2EDFA",
      isLink: false,
    },
    {
      title: "Goals Completed",
      count: 4,
      icon: <Icons.clipboard />,
      iconBg: "#E0EEF9",
      isLink: false,
    },
    {
      title: "Followers",
      count: 46,
      icon: <Icons.userPlus />,
      iconBg: "#FEF0C3",
      isLink: false,
    },
    {
      title: "Teams Created",
      count: 5,
      icon: <Icons.team width='16' height='16' color='#C8230D' />,
      iconBg: "#FFE3DF",
      isLink: true,
      linkText: "Downline",
      linkRef: "/dashboard/admin/users/user-profile",
    },
  ];
  return (
    <InnerPageContainer
      title='Back to Users'
      hideTitle
      child={
        <div className='flex flex-row items-center gap-2'>
          <Link
            to='/dashboard/admin/users/new'
            className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
            <Icons.arrowCircleUp />
            <span className='flex lg:gap-1'>
              Upgrade <span className='lg:block hidden'>User</span>
            </span>
          </Link>
          <Link
            to='/dashboard/admin/users/new'
            className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#C8230D] shadow'>
            <span className='flex lg:gap-1'>
              Deactivate <span className='lg:block hidden'>Account</span>
            </span>
          </Link>
        </div>
      }>
      <div className='w-full flex flex-col gap-4'>
        <Card className='p-4'>
          <div className='flex items-center justify-between'>
            <ContactCard
              name='Chioma Johnson'
              email='chioma.j@example.com'
              since='Jan 15, 2024'
            />
            <Chip
              variant='default'
              size='lg'
              rounded
              className='ml-2 bg-[#F2EDFA] hover:bg-[#F2EDFA]'>
              <div className='flex items-center gap-2'>
                <span className='font-dm-sans text-[#7344AC] text-[14px] font-medium'>
                  Premium
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
          <UserTabs
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
                children: <UserDetails />,
              },
              {
                key: "goals",
                children: <Goals />,
              },
              {
                key: "wallet",
                children: <Wallet />,
              },
              {
                key: "points",
                children: <Points />,
              },
              {
                key: "teams",
                children: <Teams />,
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
    </InnerPageContainer>
  );
};

export default UserProfile;
