import { isAxiosError } from "axios";
import { api } from "../../config/axios";
import type { SuccessResponse } from "../../types/successResponse";
import type {
  SignInParams,
  SignInResponse,
  SignUpParams,
  SignUpResponse,
} from "./authTypes";
import type { FailureResponse } from "../../types/failureResoponse";

export const registerApi = async (data: SignUpParams) => {
  try {
    const response: SuccessResponse<SignUpResponse> = await api.post(
      "/authentication/register",
      data,
    );
    return response;
  } catch (error) {
    if (isAxiosError<FailureResponse>(error)) {
      console.log(error.response?.data.message);
      throw error.response?.data;
    } else {
      throw error;
    }
  }
};

export const loginApi = async (data: SignInParams) => {
  try {
    const response: SuccessResponse<SignInResponse> = await api.post(
      "/authentication/login",
      data,
    );
    return response;
  } catch (error) {
    if (isAxiosError<FailureResponse>(error)) {
      throw error.response?.data;
    } else {
      throw error;
    }
  }
};
