/** @format */

import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import Icons from "@/constants/icons";
import type { UserTeamsTableData } from "@/types";
import { TeamsColumns } from "../utils/teams-table-columns";
import SearchField from "@/components/search-field";

const Teams = () => {
  const teamsData: UserTeamsTableData[] = [
    {
      id: 1,
      team_name: "Team 1",
      role: "Team Leader",
      date: "2022-01-01",
      team_size: 10,
      action: "action",
    },
  ];

  return (
    <div>
      <div className='lg:col-span-7 p-4 shadow-none space-y-4'>
        <div className='flex items-center justify-between'>
          <p className='font-dm-sans text-xl font-semibold text-[#1E1E1E]'>
            All Teams <span className='text-[#686868]'>30</span>
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
