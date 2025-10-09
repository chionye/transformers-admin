import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const CollapsibleView = ({
  title,
  children,
  className = "",
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`rounded-xl bg-white border border-gray-200 w-full ${className}`}>
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors'>
        <div className='flex items-center gap-3'>
          {typeof title === "string" ? (
            <span className='font-medium text-[15px] text-gray-600'>
              {title}
            </span>
          ) : (
            title
          )}
        </div>
        {isOpen ? (
          <ChevronUp className='w-5 h-5' />
        ) : (
          <ChevronDown className='w-5 h-5' />
        )}
      </button>

      {isOpen && <div className='p-4 border-t border-gray-200'>{children}</div>}
    </div>
  );
};