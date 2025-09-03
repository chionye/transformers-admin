/** @format */

import ScoreCard from "@/components/cards/data-count-card";
import { Card } from "@/components/ui/card";
import bg from "@/assets/images/bg-properties.png";
import ActionButton from "@/components/buttons/action-button";

const Properties = () => {
  const cardData = [
    {
      count: 120,
      title: "Active Leases",
    },
    {
      count: 50,
      title: "Expiring Leases",
    },
    {
      count: 100,
      title: "Active Contracts",
    },
    {
      count: 101,
      title: "Expiring Contracts",
    },
  ];

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex flex-col lg:flex-row items-stretch lg:items-stretch justify-between gap-4 w-full min-h-fit'>
        <Card className='bg-white border-0 gap-0 py-0 w-full lg:w-[40%] pt-5 flex flex-col lg:h-auto'>
          <div className='flex flex-col lg:flex-row items-stretch lg:items-center justify-between w-full h-full flex-1'>
            <div className='px-2 lg:px-5 flex flex-col w-full'>
              <ActionButton />
            </div>
            <div className='w-full mt-4 lg:mt-0 lg:w-[30%] h-full flex flex-col justify-end'>
              <img
                src={bg}
                alt=''
                className='w-full lg:object-contain object-cover max-h-[180px] lg:max-h-none'
              />
            </div>
          </div>
        </Card>
        <div className='flex flex-row flex-wrap items-stretch sm:items-center lg:justify-start justify-between gap-2 lg:gap-3 w-full lg:w-[39%]'>
          {cardData.map((card) => (
            <ScoreCard key={card.title} count={card.count} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
