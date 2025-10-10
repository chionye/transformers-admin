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
      className='bg-[#7344AC] hover:bg-[#7344AC]/80 flex items-center gap-2 w-fit'>
      {showIcon && <Icons.bulb color='white' />}
      <p className='font-dm-sans text-[14px] font-medium text-white'>{type}</p>
    </Chip>
  ) : type === Category.Leadership ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className='bg-[#C8230D] hover:bg-[#C8230D]/80 flex items-center gap-2 w-fit'>
      {showIcon && <Icons.medal color='white' />}
      <p className='font-dm-sans text-[14px] font-medium text-white'>{type}</p>
    </Chip>
  ) : type === Category.Relationship ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className='bg-[#FEF0C3] hover:bg-[#FEF0C3]/80 flex items-center gap-2 w-fit'>
      {showIcon && <Icons.relationship color='white' />}
      <p className='font-dm-sans text-[14px] font-medium text-[#A17C07]'>
        {type}
      </p>
    </Chip>
  ) : type === Category.Other ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className='bg-[#198841] hover:bg-[#198841]/80 flex items-center gap-2 w-fit'>
      {showIcon && <Icons.openBook color='white' />}
      <p className='font-dm-sans text-[14px] font-medium text-white'>{type}</p>
    </Chip>
  ) : type === Category.Systems ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className='bg-[#3662AE] hover:bg-[#3662AE]/80 flex items-center gap-2 w-fit'>
      {showIcon && <Icons.cogs color='white' />}
      <p className='font-dm-sans text-[14px] font-medium text-white'>{type}</p>
    </Chip>
  ) : type === Category.People ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className='bg-[#A17C07] hover:bg-[#A17C07]/80 flex items-center gap-2 w-fit'>
      {showIcon && <Icons.people color='white' />}
      <p className='font-dm-sans text-[14px] font-medium text-white'>{type}</p>
    </Chip>
  ) : null;
};
