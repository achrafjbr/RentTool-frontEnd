import { isAxiosError } from "axios";
import { api } from "../../config/axios";
import type { SuccessResponse } from "../../types/successResponse";
import type {
  AuthenticationResponse,
  SignInParams,
  SignInResponse,
  SignUpParams,
} from "./authTypes";
import type { FailureResponse } from "../../types/failureResoponse";
import { getToken } from "../../utilis/tokenService";

export const registerApi = async (data: SignUpParams) => {
  try {
    const response = await api.post<SuccessResponse<AuthenticationResponse>>(
      "/authentication/register",
      data,
    );
    return response.data;
  } catch (error) {
    if (isAxiosError<FailureResponse>(error)) {
      throw error.response?.data;
    } else {
      throw error;
    }
  }
};

export const loginApi = async (data: SignInParams) => {
  try {
    const response = await api.post<SuccessResponse<SignInResponse>>(
      "/authentication/login",
      data,
    );
    return response.data;
  } catch (error) {
    if (isAxiosError<FailureResponse>(error)) {
      throw error.response?.data;
    } else {
      throw error;
    }
  }
};

export const meApi = async () => {
  const token = getToken();
  try {
    if (token) {
      const response =
        await api.get<SuccessResponse<AuthenticationResponse>>("/user/me");
      return response.data;
    }
  } catch (error) {
    if (isAxiosError<FailureResponse>(error)) {
      throw error.response?.data;
    } else {
      throw error;
    }
  }
};
