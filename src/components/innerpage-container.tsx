/** @format */

import Icons from "@/constants/icons";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const InnerPageContainer = ({
  title,
  hideTitle,
  children,
}: {
  title: string;
  hideTitle?: boolean;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant='ghost'
        onClick={() => navigate(-1)}
        className='w-fit flex items-center justify-start gap-2 mb-2'>
        <Icons.arrowLeft />
        <p
          className={`font-dm-sans text-lg font-medium text-[#686868] ${
            hideTitle ? "lg:block hidden" : ""
          }`}>
          {title}
        </p>
      </Button>
      {children}
    </div>
  );
};
