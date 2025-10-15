/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { TeamsTableData, UserTeams, UserTeamsProp } from "@/types";
import { TeamsTableColumns } from "./utils/teams-table-columns";
import PageTitle from "@/components/page-title";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import type { QueryProps } from "@/types";
import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Teams = () => {
  const [page] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [teamsData, setTeamsData] = useState<UserTeamsProp>({
    totalDocuments: 0,
    teams: [],
  });

  const queries: { [key: string]: QueryProps } = {
    teams: {
      id: `teams`,
      url: ApiRoutes.FetchAllTeams(page, limit),
      method: "GET",
      payload: null,
    },
  };
  const { queryData } = Query(queries.teams);

  useEffect(() => {
    if (queryData.data) {
      console.log(queryData.data.data.teams);
      const teamsData = queryData.data.data.teams;
      setTeamsData(teamsData);
    }
  }, [queryData.data]);

  const convertToTeamsData = (teams: UserTeams[]) => {
    return teams.map((team) => {
      return {
        id: team._id,
        name: team.name,
        created_by: (
          <div>
            <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
              {team.owner.fullName}
            </p>
            <p className='font-dm-sans text-[#686868] text-[14px] font-normal'>
              {team.owner.fullName}
            </p>
          </div>
        ),
        team_type: "Public",
        member_count: team.members.length,
        date_created: moment(team.createdAt).format("DD-MM-YYYY"),
      };
    });
  };

  const tableData: TeamsTableData[] = convertToTeamsData(teamsData.teams);

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Team'
          subtitle='Coordinate and manage team structures and collaboration.'
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
                to='/dashboard/admin/team/new'
                className='font-dm-sans text-[14px] font-semibold text-white bg-[#198841] shadow flex items-center gap-2 px-4 py-2 rounded'>
                <Icons.plus />
                <span>Create Team</span>
              </Link>
            </div>
          }
        />
      </div>
      <Card className='lg:col-span-7 p-4'>
        <p className='font-dm-sans text-xl font-semibold text-[#1E1E1E]'>
          All Teams{" "}
          <span className='text-[#686868]'>{teamsData.totalDocuments}</span>
        </p>
        <DataTable<TeamsTableData>
          columns={TeamsTableColumns}
          data={tableData}
        />
      </Card>
    </div>
  );
};

export default Teams;
