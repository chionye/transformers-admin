/** @format */

import type { ResponseHandlerProps } from "@/types";

export const responseHandler = <T,>({
  onSuccess,
  onError,
}: ResponseHandlerProps<T>) => ({
  onSuccess: (response: { data: T }) => {
    if (response?.data) {
      onSuccess(response.data);
    }
  },
  onError: (error: any) => {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "An unexpected error occurred";
    onError(errorMessage);
  },
});
