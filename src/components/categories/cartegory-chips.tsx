/** @format */

import { Chip } from "@/components/chip";
import Icons from "@/constants/icons";
import { Category } from "@/constants/enums";

export const CategoryChips = ({
  type,
  showIcon,
}: {
  type: string;
  showIcon?: boolean;
}) => {
  return type === Category.Purpose ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className='bg-[#F2EDFA] hover:bg-[#F2EDFA]/80 flex items-center gap-2'>
      {showIcon && <Icons.bulb />}
      <p className='font-dm-sans text-[14px] font-medium text-[#7344AC]'>
        {type}
      </p>
    </Chip>
  ) : type === Category.Leadership ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className='bg-[#F2EDFA] hover:bg-[#F2EDFA]/80 flex items-center gap-2'>
      {showIcon && <Icons.medal />}
      <p className='font-dm-sans text-[14px] font-medium text-[#C8230D]'>
        {type}
      </p>
    </Chip>
  ) : type === Category.Relationship ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className='bg-[#FEF0C3] hover:bg-[#FFE3DF]/80 flex items-center gap-2'>
      {showIcon && <Icons.relationship />}
      <p className='font-dm-sans text-[14px] font-medium text-[#A17C07]'>
        {type}
      </p>
    </Chip>
  ) : type === Category.Other ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className='bg-[#FEF0C3] hover:bg-[#FFE3DF]/80 flex items-center gap-2'>
      {showIcon && <Icons.openBook />}
      <p className='font-dm-sans text-[14px] font-medium text-[#A17C07]'>
        {type}
      </p>
    </Chip>
  ) : type === Category.Systems ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className='bg-[#FEF0C3] hover:bg-[#FFE3DF]/80 flex items-center gap-2'>
      {showIcon && <Icons.cogs />}
      <p className='font-dm-sans text-[14px] font-medium text-[#A17C07]'>
        {type}
      </p>
    </Chip>
  ) : null;
};
