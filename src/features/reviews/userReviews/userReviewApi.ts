import { api } from "../../../config/axios";
import type { FailureResponse } from "../../../types/failureResoponse";
import type { SuccessResponse } from "../../../types/successResponse";
import type {
  UserReviewResponse,
  UpdateUserReviewParams,
  UserReviewParams,
} from "./userReviewTypes";

export const addUserReviewApi = async (data: UserReviewParams) => {
  try {
    return (
      await api.post<SuccessResponse<UserReviewResponse>>("/review/user", data)
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const getUserReviewsApi = async (userId: string) => {
  try {
    return (
      await api.get<SuccessResponse<UserReviewResponse[]>>(
        `/review/user/${userId}`,
      )
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const updateUserReviewApi = async ({
  userId,
  review,
}: UpdateUserReviewParams) => {
  try {
    return (
      await api.patch<SuccessResponse<UserReviewResponse>>(
        `/review/user/${userId}`,
        { review: review },
      )
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const deleteUserReviewApi = async (userId: string) => {
  try {
    return (
      await api.delete<SuccessResponse<UserReviewResponse>>(
        `/review/user/${userId}`,
      )
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
