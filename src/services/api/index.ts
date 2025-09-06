/** @format */

import type { RequestsType } from "@/types";
import {
  postRequest,
  getRequest,
  patchRequest,
  deleteRequest,
} from "./api-clients";

// Instantiate the request functions
const get = getRequest();
const post = postRequest();
const patch = patchRequest();
const del = deleteRequest();

export const Requests: RequestsType = {
  get,
  post,
  patch,
  del,
};
