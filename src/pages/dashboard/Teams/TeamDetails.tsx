/** @format */
import Icons from "@/constants/icons";
import { InnerPageContainer } from "@/components/innerpage-container";
import { Link, useParams } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useMemo, useState } from "react";
import type {
  QueryProps,
  TeamDetailDataProp,
  TeamMember,
  TeamsDetailsTableData,
} from "@/types";
import { Button } from "@/components/ui/button";
import IconCircleBadge from "@/components/icon-circle-badge";
import { Card } from "@/components/ui/card";
import MetricsCard from "./components/ui/metrics-card";
import { DataTable } from "@/components/data-table";
import { TeamDetailsColumns } from "./utils/team-details-table-columns";
import { CustomDropdown } from "@/components/custom-dropdown";
import PageTitle from "@/components/page-title";

const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState<TeamDetailDataProp>({
    team: null,
    completedGoal: null,
    completedChallenges: 0,
    members: null,
    totalMembers: 0,
    reports: 0,
  });
  const [tableData, setTableData] = useState<TeamsDetailsTableData[]>([]);
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  const queries: { [key: string]: QueryProps } = {
    team: {
      id: `team-${id}`,
      url: ApiRoutes.FetchTeamDetails(id as string),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: teamData } = Query(queries.team);

  const metrics = useMemo(
    () => [
      {
        title: "Total Members",
        count: team.totalMembers || 0,
        icon: <Icons.users />,
        iconBg: "#F2EDFA",
        isLink: false,
      },
      {
        title: "Challenges Completed",
        count: team.completedChallenges || 0,
        icon: <Icons.trophy color='#7344AC' />,
        iconBg: "#F2EDFA",
        isLink: false,
      },
      {
        title: "Reports",
        count: team.reports || 0,
        icon: <Icons.flag color='#C8230D' />,
        iconBg: "#FFE3DF",
        isLink: false,
      },
      {
        title: "Teams Leader",
        count: `@${team.team?.owner.username.toLowerCase()}`,
        icon: <Icons.user width='16' height='16' color='#A17C07' />,
        iconBg: "#FEF0C3",
        isLink: true,
        linkText: "Downline",
        linkRef: `/dashboard/admin/users/user-profile/${team.team?.owner._id}`,
      },
    ],
    //eslint-disable-next-line
    [teamData.data]
  );

  useEffect(() => {
    if (teamData.data) {
      console.log(teamData.data.data.team.team);
      const data = teamData.data.data.team;
      setTeam(data);
      const transformDatatoFitTable = data.members.map((item: TeamMember) => ({
        _id: item._id,
        name: item.fullName,
        plan: item.plan,
        role: item._id === data.team.owner._id ? "leader" : "member",
        downline: item.downlines,
        challenges: item.challenges,
        createdAt: item.createdAt,
      }));
      setTableData(transformDatatoFitTable);
    }
  }, [teamData.data]);

  return (
    <InnerPageContainer
      title='Back to Teams'
      hideTitle
      child={
        <Button
          onClick={() => console.log("test")}
          className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#C8230D] shadow'>
          <span className='flex lg:gap-1'>Delete Team</span>
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
        <PageTitle
          title={`Team Members ${tableData.length}`}
          child={
            <div className='flex flex-row items-center gap-2'>
              <CustomDropdown
                triggerLabel='Filter'
                icon={<Icons.upNdownArrow />}
                iconPosition='right'
                items={[
                  { label: "My Profile" },
                  { label: "Settings" },
                  { type: "separator" },
                  { label: "Logout" },
                ]}
              />
              <Button className='font-dm-sans text-[14px] font-semibold text-[#686868] bg-white shadow'>
                <Icons.export />
                <span className='lg:block hidden'>Export</span>
              </Button>
              <Link
                to={`/dashboard/admin/team/${team.team?._id}/${team.team?.name}/new`}
                className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>Add Team Member</span>
              </Link>
            </div>
          }
        />
        <DataTable<TeamsDetailsTableData>
          columns={TeamDetailsColumns}
          data={tableData}
        />
      </Card>
    </InnerPageContainer>
  );
};

export default TeamDetails;
