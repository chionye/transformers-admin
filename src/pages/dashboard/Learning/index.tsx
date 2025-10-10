/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type { LearningDataProp, LearningProp } from "@/types";
import PageTitle from "@/components/page-title";
import { Link } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useState } from "react";
import { LearningColumns } from "./utils/learning-table-columns";

const Learning = () => {
  const [learning, setLearning] = useState<LearningDataProp>({
    totalDocument: 0,
    learning: [],
  });
  const [page] = useState(1);
  const [limit] = useState(1);

  const { queryData: learningData } = Query({
    id: "learning",
    url: ApiRoutes.FetchLearning(page, limit),
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (learningData.data) {
      const response = learningData.data.data.events;
      setLearning(response);
    }
  }, [learningData.data]);

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Learning'
          subtitle='Manage educational content and resources to help users grow and improve.'
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
                to='/dashboard/admin/learning/new'
                className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>Upload Course</span>
              </Link>
            </div>
          }
        />
      </div>
      <Card className='lg:col-span-7 p-4'>
        <DataTable<LearningProp>
          columns={LearningColumns}
          data={learning.learning}
        />
      </Card>
    </div>
  );
};

export default Learning;
