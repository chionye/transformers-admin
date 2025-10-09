/** @format */

import { DataTable } from "@/components/data-table";
import { GoalsColumns } from "../utils/goals-table-columns";
import type { GoalsTableData } from "@/types";
import { goalsData } from "../constants/data";
import { CustomDropdown } from "@/components/custom-dropdown";
import Icons from "@/constants/icons";
import Query from "@/services/query/query";
import { useEffect, useState } from "react";

const Goals = ({
  goals,
}: {
  goals: { goals: GoalsTableData[]; totalDocuments: number };
}) => {
  return (
    <div>
      <div className='lg:col-span-7 p-4 shadow-none space-y-4'>
        <div className='flex items-center justify-between'>
          <p className='font-dm-sans text-xl font-semibold text-[#1E1E1E]'>
            All Goals{" "}
            <span className='text-[#686868]'>{goals.totalDocuments}</span>
          </p>
          <div className='flex items-center gap-2'>
            <CustomDropdown
              triggerLabel='Filter'
              icon={<Icons.upNdownArrow />}
              iconPosition='right'
              items={[{ label: "Filter" }, { label: "Export" }]}
            />
            <CustomDropdown
              triggerLabel='Sort by'
              icon={<Icons.arrowDown />}
              iconPosition='right'
              items={[{ label: "Name" }, { label: "Date" }]}
            />
          </div>
        </div>

        <DataTable<GoalsTableData> columns={GoalsColumns} data={goals.goals} />
      </div>
    </div>
  );
};

export default Goals;
