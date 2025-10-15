/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { UsersTableData } from "@/types";
import { AdminAccessColumns } from "../utils/admin-table-columns";
import PageTitle from "@/components/page-title";
import { Link } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useState } from "react";

const AdminAccess = () => {
  const [userList, setUserList] = useState<UsersTableData[]>([]);
  const [page] = useState(1);

  const { queryData: usersData } = Query({
    id: "admins",
    url: ApiRoutes.FilterUsers(page, "10", "admin"),
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
          title='Admin Access'
          subtitle='Assign roles, manage admin permissions, and control what different administrators can view or modify.'
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
                to='/dashboard/admin/settings/admin-access/new'
                className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>Add New Admin</span>
              </Link>
            </div>
          }
        />
      </div>
      <Card className='lg:col-span-7 p-4'>
        <DataTable<UsersTableData>
          columns={AdminAccessColumns}
          data={userList}
        />
      </Card>
    </div>
  );
};

export default AdminAccess;
