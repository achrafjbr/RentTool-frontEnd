import { api } from "../../config/axios";
import type { FailureResponse } from "../../types/failureResoponse";
import type { SuccessResponse } from "../../types/successResponse";
import type { Tool } from "./toolTypes";

export const publishToolApi = () => {};

export const getToolByIdApi = async ({ toolId }: { toolId: string }) => {
  try {
    const response = await api.get<SuccessResponse<Tool>>(`/tool/${toolId}`);
    return response.data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
export const deleteToolApi = async ({ toolId }: { toolId: string }) => {
  try {
    const response = await api.delete<SuccessResponse<Tool>>(`/tool/${toolId}`);
    return response.data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
export const getAllToolsApi = async () => {
  // i'll use it for geust
  try {
    const response = await api.get<SuccessResponse<Tool[]>>(`/tool`);
    return response.data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
export const myToolsApi = async () => {
  try {
    const response = await api.get<SuccessResponse<Tool[]>>(`/tool/my-tools`);
    return response.data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
// get all tools excluding the coonneted user(current user)-> i'll use it in home page.
export const getAllToolsWithOwnersApi = async () => {
  try {
    const response =
      await api.get<SuccessResponse<Tool[]>>(`/tool/owner/tools`);
    return response.data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
