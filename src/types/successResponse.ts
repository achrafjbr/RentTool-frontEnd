import type { ApiResponse } from "./apiResponse";

export interface SuccessResponse<T> extends ApiResponse {
  data: T;
}
