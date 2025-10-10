/** @format */

import PostBox from "./ui/PostBox";
import type { PostData, PostsData } from "@/types";

const ReportedPosts = ({ posts }: { posts: PostsData | null }) => {
  return (
    <div className='flex flex-col gap-y-4'>
      {posts?.posts?.map((post: PostData) => {
        return (
          post.reported && (
            <PostBox post={post} key={post?._id} isFlagged={post.reported} />
          )
        );
      })}
    </div>
  );
};

export default ReportedPosts;
