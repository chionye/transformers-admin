/** @format */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icons from "@/constants/icons";
import moment from "moment";
import { Link } from "react-router-dom";
import type { PostData } from "@/types";

const PostBox = ({
  post,
  isFlagged = false,
  viewPost = true,
}: {
  post: PostData | null;
  isFlagged?: boolean;
  viewPost?: boolean;
}) => {
  return (
    <Card className='bg-white px-4 py-6'>
      <div className='flex items-center gap-2'>
        <img
          src={
            post?.user?.avatar ||
            `https://api.dicebear.com/9.x/initials/svg?radius=0&seed=${post?.user?.username}`
          }
          alt=''
          className='w-8 h-8 rounded-full'
        />
        <div>
          <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
            {post?.user?.fullName}
          </p>
          <p className='font-dm-sans text-[#686868] text-[14px] font-normal'>
            {moment(post?.createdAt).fromNow()}
          </p>
        </div>
      </div>
      {isFlagged && (
        <div className='bg-[#FDF7E6] p-3 rounded-lg'>
          <div className='flex items-center gap-2'>
            <Icons.triangleWarning />
            <p className='font-dm-sans text-[#85680E] text-[16px] font-medium'>
              Flagged for review
            </p>
          </div>
          <p className='font-dm-sans text-[#686868] text-[14px] font-normal'>
            Inappropriate Content
          </p>
        </div>
      )}
      <p className='font-dm-sans text-[#4B4B4B] text-[16px] font-normal'>
        {post?.caption}
      </p>
      {post?.image && (
        <div className='w-full overflow-hidden rounded-lg'>
          <img src={post?.image} alt={post?.caption} className='w-full' />
        </div>
      )}
      <div className='h-[1px] bg-[#E5E5E5] w-full' />
      <div className='w-full flex items-center justify-between'>
        <Button
          variant={"link"}
          className='text-[#C8230D] font-dm-sans text-[16px] font-medium flex items-center gap-2'>
          <span>Delete Post</span>
          <Icons.trash />
        </Button>
        {viewPost ? (
          <Link
            to={`/dashboard/admin/posts/${post?._id}`}
            className='flex items-center gap-2'>
            <span className='text-[#198841] font-dm-sans text-[16px] font-medium'>
              View Post
            </span>
            <Icons.arrowRight color='#198841' />
          </Link>
        ) : (
          <Link
            to={`/dashboard/admin/users/user-profile/${post?.user._id}`}
            className='flex items-center gap-2'>
            <span className='text-[#198841] font-dm-sans text-[16px] font-medium'>
              View Profile
            </span>
            <Icons.arrowRight color='#198841' />
          </Link>
        )}
      </div>
    </Card>
  );
};

export default PostBox;
