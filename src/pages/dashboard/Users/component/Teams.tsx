/** @format */

import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import Icons from "@/constants/icons";
import type { TeamsProp, UserTeamsTableData } from "@/types";
import { TeamsColumns } from "../utils/teams-table-columns";
import SearchField from "@/components/search-field";
import moment from "moment";

const Teams = ({ teams }: { teams: TeamsProp[] | null }) => {
  const convertToTeamsData = (teams: TeamsProp[]) => {
    return teams.map((team) => {
      return {
        id: Number(team._id),
        team_name: team.name,
        role: "Team Leader",
        date: moment(team?.createdAt).format("DD-MM-YYYY"),
        team_size: team.members.length,
        action: "action",
      };
    });
  };

  const teamsData = convertToTeamsData(teams || []);

  return (
    <div>
      <div className='lg:col-span-7 p-4 shadow-none space-y-4'>
        <div className='flex items-center justify-between'>
          <p className='font-dm-sans text-xl font-semibold text-[#1E1E1E]'>
            All Teams <span className='text-[#686868]'>{teams?.length}</span>
          </p>
          <div className='flex items-center gap-2'>
            <SearchField
              placeholder='Search...'
              onSubmit={() => console.log("test")}
            />
            <CustomDropdown
              triggerLabel='Filter'
              icon={<Icons.upNdownArrow />}
              iconPosition='right'
              items={[{ label: "Filter" }, { label: "Export" }]}
            />
          </div>
        </div>

        <DataTable<UserTeamsTableData>
          columns={TeamsColumns}
          data={teamsData}
        />
      </div>
    </div>
  );
};

export default Teams;
