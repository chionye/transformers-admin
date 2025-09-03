/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { HomeTableData } from "@/types";
import { HomeColumns } from "./utils/home-table-columns";
import PageTitle from "@/components/page-title";

const Users = () => {
  const tableData: HomeTableData[] = [
    {
      sn: "1",
      name: "John Doe",
      country: "USA",
      date: "2022-01-01",
      goals: "10",
      challenges: "5",
      teams: "2",
      status: "active",
      action: "View",
    },
    {
      sn: "2",
      name: "John Doe",
      country: "USA",
      date: "2022-01-01",
      goals: "10",
      challenges: "5",
      teams: "2",
      status: "active",
      action: "View",
    },
  ];
  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Users'
          subtitle='View and manage app user profiles, activity, and permissions.'
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
                <span className="lg:block hidden">Export</span>
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
        <DataTable<HomeTableData> columns={HomeColumns} data={tableData} />
      </Card>
    </div>
  );
};

export default Users;
