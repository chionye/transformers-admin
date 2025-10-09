/** @format */

import { useEffect, useState } from "react";
import type {
  AlertData,
  AlertProps,
  CommentData,
  CommentsData,
  PostData,
  QueryProps,
} from "@/types";
import ApiRoutes from "@/services/api/api-routes";
import Query from "@/services/query/query";
import AlertCard from "@/components/cards/alert-cards";
import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { InnerPageContainer } from "@/components/innerpage-container";
import PostBox from "./components/ui/PostBox";
import Comments from "./components/ui/Comments";

const PostDetails = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState<PostData | null>(null);
  const [page] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [alerts, setAlerts] = useState<AlertProps | undefined>(undefined);
  const [comments, setComments] = useState<CommentsData | undefined>(undefined);

  const queries: { [key: string]: QueryProps } = {
    post: {
      id: `post-${id}`,
      url: ApiRoutes.FetchPostById(id as string),
      method: "GET",
      payload: null,
    },
    alerts: {
      id: "alerts",
      url: ApiRoutes.FetchAlerts(page, limit),
      method: "GET",
      payload: null,
    },
    comments: {
      id: `comments-${id}`,
      url: ApiRoutes.FetchCommentByPostId(id as string, page, limit),
      method: "GET",
      payload: null,
    },
  };

  const { queryData: postData } = Query(queries.post);
  const { queryData: alertsData } = Query(queries.alerts);
  const { queryData: commentsData } = Query(queries.comments);

  useEffect(() => {
    if (postData.data) {
      setPosts(postData.data.data.post);
    }
  }, [postData.data]);

  useEffect(() => {
    if (alertsData.data) {
      setAlerts(alertsData.data.data.alert);
    }
  }, [alertsData.data]);

  useEffect(() => {
    if (commentsData.data) {
      console.log(commentsData.data.data.comments);
      setComments(commentsData.data.data.comments);
    }
  }, [commentsData.data]);

  return (
    <InnerPageContainer title='Posts' hideTitle>
      <div className={`w-full grid lg:grid-cols-[1fr_350px] gap-6`}>
        <div>
          <PostBox post={posts} key={posts?._id} viewPost={false} />
          <div className='mt-5 flex flex-col gap-2'>
            <p className='text-[14px] font-medium text-[#1E1E1E]'>
              Comments ({comments?.totalDocument || 0})
            </p>
            {comments?.comments?.map((comment: CommentData) => (
              <Comments comment={comment} />
            ))}
          </div>
        </div>
        <div>
          <Card className='bg-white px-4 gap-2'>
            <div className='flex items-center justify-between mb-2'>
              <p className='text-[18px] font-semibold text-[#1E1E1E]'>
                Flagged Posts
              </p>
            </div>
            {alerts?.history.map((alert: AlertData) => (
              <AlertCard {...alert} />
            ))}
          </Card>
        </div>
      </div>
    </InnerPageContainer>
  );
};

export default PostDetails;
