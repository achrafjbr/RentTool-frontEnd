import { api } from "../../../config/axios";
import type { FailureResponse } from "../../../types/failureResoponse";
import type { SuccessResponse } from "../../../types/successResponse";
import type {
  ToolReviewParams,
  ToolReviewResponse,
  UpdateToolReviewParams,
} from "./toolReviewTypes";

export const addToolReviewApi = async (data: ToolReviewParams) => {
  try {
    return (
      await api.post<SuccessResponse<ToolReviewResponse>>("/review/tool", data)
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const getToolReviewsApi = async (toolId: string) => {
  try {
    return (
      await api.get<SuccessResponse<ToolReviewResponse[]>>(
        `/review/tool/${toolId}`,
      )
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const updateToolReviewApi = async ({
  review,
  reviewId,
}: UpdateToolReviewParams) => {
  try {
    return (
      await api.patch<SuccessResponse<ToolReviewResponse>>(
        `/review/tool/${reviewId}`,
        { review: review },
      )
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const deleteToolReviewApi = async (reviewId: string) => {
  try {
    return (
      await api.delete<SuccessResponse<ToolReviewResponse>>(
        `/review/tool/${reviewId}`,
      )
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
