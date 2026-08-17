import { api } from "../../config/axios";
import type { FailureResponse } from "../../types/failureResoponse";
import type { SuccessResponse } from "../../types/successResponse";
import type { Notification } from "./notificationTypes";

export const myNotificationApi = async () => {
  try {
    const notifications = (
      await api.get<SuccessResponse<Notification[]>>("/notification/me")
    ).data;
    return notifications;
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
    const notification = (
      await api.get<SuccessResponse<Notification>>(
        `/notification/${notificationId}`,
      )
    ).data;
    return notification;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const unReadNotificationApi = async () => {
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
    const response = (
      await api.patch<SuccessResponse<Notification>>(
        `/notification/${notificationId}/read`,
      )
    ).data;
    console.log("ui response", response);
    return response;
  } catch (error) {
    throw error as FailureResponse;
  }
};

export const markAllNotificationAsReadApi = async () => {
  try {
    return (await api.patch<SuccessResponse<number>>("/notification/read-all"))
      .data;
  } catch (error) {
    throw error as FailureResponse;
  }
};
