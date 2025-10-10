/** @format */
import { CustomDropdown } from "@/components/custom-dropdown";
import Icons from "@/constants/icons";
import type {
  FaqProp,
  FaqResponse,
} from "@/types";
import PageTitle from "@/components/page-title";
import { Link } from "react-router-dom";
import Query from "@/services/query/query";
import ApiRoutes from "@/services/api/api-routes";
import { useEffect, useState } from "react";
import { FaqCollapsible } from "./ui/faq-collapsible";
import ActionButtons from "./ui/action-buttons";

const Faqs = () => {
  const [faqs, setFaqs] = useState<FaqResponse>({
    question: [],
  });
  
  const { queryData: faqsData } = Query({
    id: "faqs",
    url: ApiRoutes.FetchFaqs,
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (faqsData.data) {
      const response = faqsData.data.data;
      console.log(response);
      setFaqs(response);
    }
  }, [faqsData.data]);

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-row items-center justify-between gap-4'>
        <PageTitle
          title='FAQs'
          subtitle='Answer common user questions to reduce support load and improve clarity.'
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
                to='/dashboard/admin/faqs/new'
                className='font-dm-sans text-[14px] flex items-center gap-2 px-4 py-2 rounded-[8px] font-semibold text-white bg-[#198841] shadow'>
                <Icons.plus />
                <span>Add FAQ</span>
              </Link>
            </div>
          }
        />
      </div>
      {faqs?.question?.map((faq: FaqProp) => {
        return (
          <FaqCollapsible
            title={faq.question}
            rightChild={<ActionButtons id={faq._id} />}
            content={faq.answer}
          />
        );
      })}
    </div>
  );
};

export default Faqs;
