/** @format */

import ApiRoutes from "@/services/api/api-routes";
import Query from "@/services/query/query";
import type { BlogsProp } from "@/types";
import { useEffect, useState } from "react";

export const useBlog = () => {
  const [blogs, setBlogs] = useState<BlogsProp>({
    totalDocument: 0,
    blogs: [],
  });
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

  const { queryData: blogData } = Query({
    id: "blog",
    url: ApiRoutes.FetchBlog(page, limit),
    method: "GET",
    payload: null,
  });

  useEffect(() => {
    if (blogData.data) {
      const response = blogData.data.data.events;
      setBlogs(response);
    }
  }, [blogData.data]);

  return {
    blogs,
    setLimit,
    setPage,
  };
};
