/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { UsersTableData } from "@/types";
import { UsersColumns } from "./utils/users-table-columns";
import PageTitle from "@/components/page-title";
import { Link } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useState } from "react";

const Users = () => {
  const [userList, setUserList] = useState<UsersTableData[]>([]);
  const [page, setPage] = useState(1);

  const { queryData: usersData } = Query({
    id: "users",
    url: ApiRoutes.FetchUsers(page, "10"),
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (usersData.data) {
      console.log(usersData.data.data.users, "works");
      const { list, totalDocument } = usersData.data.data.users;
      console.log(list, totalDocument, "list doc");
      const listWithSn = list.map((item: UsersTableData, index: number) => ({
        ...item,
        sn: index + 1,
      }));
      setUserList(listWithSn);
    }
  }, [usersData.data]);

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
                <span className='lg:block hidden'>Export</span>
              </Button>
              <Link
                to='/dashboard/admin/users/new'
                className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>Add New User</span>
              </Link>
            </div>
          }
        />
      </div>
      <Card className='lg:col-span-7 p-4'>
        <DataTable<UsersTableData> columns={UsersColumns} data={userList} />
      </Card>
    </div>
  );
};

export default Users;
