/** @format */

import { InnerPageContainer } from "@/components/innerpage-container";
import { Card } from "@/components/ui/card";
import { SmallContactCard } from "./component/ui/contact-card";
import Icons from "@/constants/icons";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/chip";

export const WithdrawalDetails = () => {
  const details = [
    {
      title: "Date",
      value: "May 13, 2025 · 10:42 AM",
    },
    {
      title: "Amount",
      value: "$120",
    },
    {
      title: "Account Name",
      value: "Chioma Johnson",
    },
    {
      title: "Bank Name",
      value: "Access Bank",
    },
    {
      title: "Account Number",
      value: "18287299299",
    },
  ];
  return (
    <div>
      <InnerPageContainer title='Back' hideTitle>
        <Card className='p-4'>
          <p className='font-dm-sans text-xl font-semibold text-[#1E1E1E]'>
            Withdrawal Request Details
          </p>
          <div className=' bg-[#F6F8F9] rounded-[8px] p-3 flex items-center justify-between gap-2'>
            <SmallContactCard
              name='Chioma Johnson'
              email='chioma.johnson@gmail.com'
            />
            <div>
              <Icons.arrowCircleRight />
            </div>
          </div>
          <div className='flex items-start justify-between gap-2'>
            <div className='flex flex-col  gap-4'>
              {details.map((detail, index) => (
                <div key={index}>
                  <p className='font-dm-sans text-[14px] font-normal text-[#686868]'>
                    {detail.title}
                  </p>
                  <p className='font-dm-sans text-[16px] font-semibold text-[#1E1E1E]'>
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
            <Chip
              variant='outline'
              size='sm'
              className='bg-[#FEF0C3] hover:bg-[#FEF0C3]/80'
              rounded>
              <p className='font-dm-sans text-[14px] font-medium text-[#A17C07]'>
                Pending
              </p>
            </Chip>
          </div>
          <div className='flex items-center gap-2'>
            <Button className='font-dm-sans text-[14px] font-medium text-white bg-[#198841] hover:bg-[#198841]/80 rounded-[8px] flex items-center gap-2 w-fit'>
              <Icons.check />
              <span>Approve</span>
            </Button>
            <Button className='font-dm-sans text-[14px] font-medium text-white bg-[#C8230D] hover:bg-[#C8230D]/80 rounded-[8px] flex items-center gap-2 w-fit'>
              <Icons.X />
              <span>Reject</span>
            </Button>
          </div>
        </Card>
      </InnerPageContainer>
    </div>
  );
};
