import { api } from "../../../../config/axios";
import type { FailureResponse } from "../../../../types/failureResoponse";
import type {
  UpdateUserReviewParams,
  UserReviewParams,
} from "./userReviewTypes";

export const addUserReviewApi = async (data: UserReviewParams) => {
  try {
    return (await api.post("/review/user", data)).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const getUserReviewsApi = async (userId: string) => {
  try {
    return (await api.get(`/review/user/${userId}`)).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const updateUserReviewApi = async ({
  userId,
  review,
}: UpdateUserReviewParams) => {
  try {
    return (await api.patch(`/review/user/${userId}`, { review: review })).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const deleteUserReviewApi = async (userId: string) => {
  try {
    return (await api.delete(`/review/user/${userId}`)).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
