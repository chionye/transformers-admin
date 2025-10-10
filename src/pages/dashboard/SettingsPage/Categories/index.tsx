/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type {
  Category,
} from "@/types";
import PageTitle from "@/components/page-title";
import { Link } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useState } from "react";
import { CategoriesColumns } from "../utils/categories-table-columns";

const CategoriesSettings = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const { queryData: categoryData } = Query({
    id: "categories",
    url: ApiRoutes.FetchCategories,
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (categoryData.data) {
      console.log(categoryData.data.data.category, "works");
      const response = categoryData.data.data.category;
      setCategories(response);
    }
  }, [categoryData.data]);

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Manage Categories'
          subtitle='Create, edit, or remove goal and challenge categories.'
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
              <Link
                to='/dashboard/admin/settings/categories/new'
                className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>Add New Category</span>
              </Link>
            </div>
          }
        />
      </div>
      <Card className='lg:col-span-7 p-4'>
        <DataTable<Category> columns={CategoriesColumns} data={categories} />
      </Card>
    </div>
  );
};

export default CategoriesSettings;
