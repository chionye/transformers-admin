/** @format */

import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { Requests } from "../api";
import type { MutationPayload, MutationResponse, RequestsType } from "@/types";

const Mutation = () => {
  const request: RequestsType = Requests;

  const mutation: UseMutationResult<MutationResponse, Error, MutationPayload> =
    useMutation({
      mutationFn: async (payload: MutationPayload) => {
        switch (payload.requestType) {
          case "post":
            return request.post(payload.url, {
              data: payload.data,
              tokenOrHeaders: payload.tokenOrHeaders,
            });
          case "patch":
            return request.patch(payload.url, {
              data: payload.data,
              tokenOrHeaders: payload.tokenOrHeaders,
            });
          case "delete":
            return request.del(payload.url, {
              tokenOrHeaders: payload.tokenOrHeaders,
            });

          default:
            throw new Error(
              `Unhandled request type: ${
                (payload as MutationPayload).requestType
              }`
            );
        }
      },
    });

  return { mutation };
};

export default Mutation;
