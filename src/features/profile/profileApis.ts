import { isAxiosError } from "axios";
import { api } from "../../config/axios";
import type { FailureResponse } from "../../types/failureResoponse";
import type { SuccessResponse } from "../../types/successResponse";
import type { UserProfile } from "./profileTypes";

export const getUserByIdApi = async (userId: string) => {
  try {
    return (await api.get<SuccessResponse<UserProfile>>(`/user/${userId}`))
      .data;
  } catch (error) {
    if (isAxiosError<FailureResponse>(error)) {
      throw error.response?.data ?? { message: error.message };
    } else {
      throw error;
    }
  }
};

export const updateUserProfileApi = async ({
  profile,
}: {
  profile: FormData;
}) => {
  try {
    return (
      await api.patch<SuccessResponse<UserProfile>>("user/profile", profile)
    ).data;
  } catch (error) {
    if (isAxiosError<FailureResponse>(error)) {
      throw error.response?.data ?? { message: error.message };
    } else {
      throw error;
    }
  }
};
