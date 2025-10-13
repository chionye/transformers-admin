/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { BlogProp } from "@/types";
import PageTitle from "@/components/page-title";
import { Link } from "react-router-dom";
import { BlogColumns } from "./utils/blog-table-columns";
import { useBlog } from "@/hooks/useBlog";

const Blog = () => {
  const { blogs } = useBlog();

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Blog'
          subtitle='Create, edit, and manage thought pieces and updates for the community'
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
                to='/dashboard/admin/blog/new'
                className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>Create Blog Post</span>
              </Link>
            </div>
          }
        />
      </div>
      <Card className='lg:col-span-7 p-4'>
        <DataTable<BlogProp> columns={BlogColumns} data={blogs.blogs} />
      </Card>
    </div>
  );
};

export default Blog;
