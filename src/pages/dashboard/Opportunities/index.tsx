/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import { DataTable } from "@/components/data-table";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import type {
  OpportunitiesProp,
  OpportunitiesPropData
} from "@/types";
import PageTitle from "@/components/page-title";
import { Link } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useState } from "react";
import { OpportunityColumns } from "./utils/opportunity-table-columns";

const Opportunities = () => {
  const [opportunities, setOppportunities] = useState<OpportunitiesPropData>({
    totalDocument: 0,
    opportunities: [],
  });
  const [page] = useState(1);
  const [limit] = useState(1);

  const { queryData: opportunintiesData } = Query({
    id: "opportunities",
    url: ApiRoutes.FetchOpportunities(page, limit),
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (opportunintiesData.data) {
      console.log(opportunintiesData.data.data.opportunity, "works");
      const response = opportunintiesData.data.data.opportunity;
      setOppportunities(response);
    }
  }, [opportunintiesData.data]);

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='Opportunities'
          subtitle='Share curated jobs, internships, and opportunities relevant to your users.'
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
                to='/dashboard/admin/opportunity/new'
                className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>New Opportunity</span>
              </Link>
            </div>
          }
        />
      </div>
      <Card className='lg:col-span-7 p-4'>
        <DataTable<OpportunitiesProp> columns={OpportunityColumns} data={opportunities.opportunities} />
      </Card>
    </div>
  );
};

export default Opportunities;
