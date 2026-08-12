import { api } from "../../config/axios";
import type { FailureResponse } from "../../types/failureResoponse";
import type { SuccessResponse } from "../../types/successResponse";
import type { Notification } from "./notificationTypes";

export const myNotificationApi = async () => {
  try {
    return (await api.get<SuccessResponse<Notification[]>>("/notification/me"))
      .data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const getNotificationByIdApi = async ({
  notificationId,
}: {
  notificationId: string;
}) => {
  try {
    return (
      await api.get<SuccessResponse<Notification>>(
        `"/notification/${notificationId}"`,
      )
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const unReadNotificationCountApi = async () => {
  try {
    return (await api.get<SuccessResponse<number>>("/notification/un-read"))
      .data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const markNotificationAsReadApi = async ({
  notificationId,
}: {
  notificationId: string;
}) => {
  try {
    return (
      await api.get<SuccessResponse<Notification>>(
        `/notification/${notificationId}/read`,
      )
    ).data;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const markAllNotificationAsReadApi = async () => {
  try {
    return (await api.get<SuccessResponse<number>>("/notification/read-all"))
      .data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
