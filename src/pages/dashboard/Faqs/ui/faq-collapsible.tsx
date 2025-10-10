/** @format */

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FaqCollapsible = ({
  title,
  content,
  rightChild,
  className = "",
}: {
  title: React.ReactNode;
  rightChild: React.ReactNode;
  content: string;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(title, content);

  return (
    <div
      className={`rounded-xl bg-white border border-[#EBEEF2] w-full ${className}`}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors'>
        <div className='flex items-center justify-between w-full'>
          <div className="flex items-center gap-2">
            {isOpen ? (
              <ChevronUp className='w-5 h-5' />
            ) : (
              <ChevronDown className='w-5 h-5' />
            )}
            <span className='font-medium text-[15px] text-gray-600'>
              {title}
            </span>
          </div>

          {rightChild}
        </div>
      </div>

      {isOpen && <div className='p-4'>{content}</div>}
    </div>
  );
};
