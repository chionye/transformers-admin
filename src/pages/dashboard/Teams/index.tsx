/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { TeamsTableData } from "@/types";
import { HomeColumns } from "./utils/teams-table-columns";
import PageTitle from "@/components/page-title";

const Teams = () => {
  const tableData: TeamsTableData[] = [
    {
      id: 1,
      name: "John Doe",
      created_by: (
        <div>
          <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
            John Doe
          </p>
          <p className='font-dm-sans text-[#686868] text-[14px] font-normal'>
            sarahjohnson@gmail.com
          </p>
        </div>
      ),
      team_type: "Public",
      member_count: 10,
      date_created: "2022-01-01",
    },
    {
      id: 2,
      name: "John Doe",
      created_by: (
        <div>
          <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
            John Doe
          </p>
          <p className='font-dm-sans text-[#686868] text-[14px] font-normal'>
            sarahjohnson@gmail.com
          </p>
        </div>
      ),
      team_type: "Private",
      member_count: 10,
      date_created: "2022-01-01",
    },
  ];
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
              <Button className='font-dm-sans text-[14px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>Add New User</span>
              </Button>
            </div>
          }
        />
      </div>
      <Card className='lg:col-span-7 p-4'>
        <p className='font-dm-sans text-xl font-semibold text-[#1E1E1E]'>
          All Teams <span className='text-[#686868]'>30</span>
        </p>
        <DataTable<TeamsTableData> columns={HomeColumns} data={tableData} />
      </Card>
    </div>
  );
};

export default Teams;
