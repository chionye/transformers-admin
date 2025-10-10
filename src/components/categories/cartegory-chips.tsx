/** @format */

import { Chip } from "@/components/chip";
import Icons from "@/constants/icons";
import { Category } from "@/constants/enums";
import { icons } from "@/constants/data";

export const CategoryChips = ({
  type,
  showIcon,
  showText = true,
  className,
  icon,
  bgColor,
  textColor,
}: {
  type: string;
  showIcon?: boolean;
  showText?: boolean;
  className?: string;
  icon?: string;
  bgColor?: string;
  textColor?: string;
}) => {
  return type === Category.Purpose ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className={`${className} bg-[${bgColor}] hover:bg-[${bgColor}/80] flex items-center gap-2 w-fit`}>
      {showIcon && <Icons.bulb color={textColor} />}
      {showText && (
        <p
          className={`font-dm-sans text-[14px] font-medium text-[${textColor}]`}>
          {type}
        </p>
      )}  
    </Chip>
  ) : type === Category.Leadership ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className={`${className} bg-[${bgColor}] hover:bg-[${bgColor}/80] flex items-center gap-2 w-fit`}>
      {showIcon && <Icons.medal color={textColor} />}
      {showText && (
        <p
          className={`font-dm-sans text-[14px] font-medium text-[${textColor}]`}>
          {type}
        </p>
      )}
    </Chip>
  ) : type === Category.Relationship ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className={`${className} bg-[${bgColor}] hover:bg-[${bgColor}/80] flex items-center gap-2 w-fit`}>
      {showIcon && <Icons.relationship color={textColor} />}
      {showText && (
        <p
          className={`font-dm-sans text-[14px] font-medium text-[${textColor}]`}>
          {type}
        </p>
      )}
    </Chip>
  ) : type === Category.Other ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className={`${className} bg-[${bgColor}] hover:bg-[${bgColor}/80] flex items-center gap-2 w-fit`}>
      {showIcon && <Icons.openBook1 color={textColor} />}
      {showText && (
        <p
          className={`font-dm-sans text-[14px] font-medium text-[${textColor}]`}>
          {type}
        </p>
      )}
    </Chip>
  ) : type === Category.Systems ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className={`${className} bg-[${bgColor}] hover:bg-[${bgColor}/80] flex items-center gap-2 w-fit`}>
      {showIcon && <Icons.cogs color={textColor} />}
      {showText && (
        <p
          className={`font-dm-sans text-[14px] font-medium text-[${textColor}]`}>
          {type}
        </p>
      )}
    </Chip>
  ) : type === Category.People ? (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className={`${className} bg-[${bgColor}] hover:bg-[${bgColor}/80] flex items-center gap-2 w-fit`}>
      {showIcon && <Icons.people color={textColor} />}
      {showText && (
        <p
          className={`font-dm-sans text-[14px] font-medium text-[${textColor}]`}>
          {type}
        </p>
      )}
    </Chip>
  ) : (
    <Chip
      variant='outline'
      size='sm'
      rounded
      className={`${className} bg-[${bgColor}] hover:bg-[${bgColor}/80] flex items-center gap-2 w-fit`}>
      {showIcon &&
        icons.find((item) => item.title === icon)?.icon(textColor || "")}
      {showText && (
        <p
          className={`font-dm-sans text-[14px] font-medium text-[${textColor}]`}>
          {type}
        </p>
      )}
    </Chip>
  );
};
