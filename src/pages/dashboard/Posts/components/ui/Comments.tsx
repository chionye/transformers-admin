/** @format */

import type { CommentData } from "@/types";
import moment from "moment";
import { Button } from "@/components/ui/button";
import Icons from "@/constants/icons";

const Comments = ({ comment }: { comment: CommentData }) => {
  return (
    <div className='flex items-center justify-between gap-2 w-full'>
      <div className='flex items-center gap-2'>
        <img
          src={`https://api.dicebear.com/9.x/initials/svg?radius=50&seed=${comment?.user?.username}`}
          alt=''
          className='w-8 h-8 rounded-full'
        />
        <div>
          <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
            {comment?.user?.fullName}{" "}
            <span className='text-[#686868] text-[14px] font-normal'>
              {moment(comment?.createdAt).fromNow()}
            </span>
          </p>
          <p className='font-dm-sans text-[#4B4B4B] text-[14px] font-normal'>
            {comment?.comment}
          </p>
        </div>
      </div>
      <Button variant='link' className='cursor-pointer'>
        <Icons.trash />
      </Button>
    </div>
  );
};

export default Comments;
