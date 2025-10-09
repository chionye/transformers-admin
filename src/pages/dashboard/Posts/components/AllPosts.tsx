/** @format */

import PostBox from "./ui/PostBox";
import type { PostData, PostsData } from "@/types";

const AllPosts = ({ posts }: { posts: PostsData | null }) => {
  return (
    <div className="flex flex-col gap-y-4">
      {posts?.posts?.map((post: PostData) => (
        <PostBox post={post} key={post?._id} />
      ))}
    </div>
  );
};

export default AllPosts;
