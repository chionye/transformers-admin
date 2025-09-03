/** @format */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icons from "@/constants/icons";

const DataCountCard = ({ count, title }: { count: number; title: string }) => {
  return (
    <Card className='bg-white border-0 w-[48%] px-5 py-2'>
      <CardHeader className='p-0 w-full flex justify-end'>
        <CardTitle className='text-[#2F2F30] text-[32px] font-semibold font-maven p-0'>
          {count}
        </CardTitle>
      </CardHeader>
      <div>
        <Icons.candleSticks />
        <CardContent className='text-[#2F2F30] text-[16px] font-maven text-left p-0'>
          {title}
        </CardContent>
      </div>
    </Card>
  );
};

export default DataCountCard;
