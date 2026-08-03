import type { ApiResponse } from "./apiResponse";

export interface FailureResponse extends ApiResponse {
  timestamp: string;
}
