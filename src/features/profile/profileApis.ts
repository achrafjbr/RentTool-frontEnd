import { api } from "../../config/axios";
import type { FailureResponse } from "../../types/failureResoponse";
import type { SuccessResponse } from "../../types/successResponse";
import type { UserProfile } from "./profileTypes";

export const getUserByIdApi = async (userId: string) => {
  try {
    return (await api.get<SuccessResponse<UserProfile>>(`/user${userId}`)).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
