import { createAsyncThunk } from "@reduxjs/toolkit";
import type { FailureResponse } from "../../types/failureResoponse";
import {
  getNotificationByIdApi,
  markAllNotificationAsReadApi,
  markNotificationAsReadApi,
  myNotificationApi,
  unReadNotificationCountApi,
} from "./notificationApis";

export const myNotification = createAsyncThunk(
  "myNotifications",
  async (_, { rejectWithValue }) => {
    try {
      return await myNotificationApi();
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const getNotificationById = createAsyncThunk(
  "notification",
  async (
    {
      notificationId,
    }: {
      notificationId: string;
    },
    { rejectWithValue },
  ) => {
    try {
      return await getNotificationByIdApi({ notificationId });
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const unReadNotificationCount = createAsyncThunk(
  "notifications/count",
  async (_, { rejectWithValue }) => {
    try {
      return await unReadNotificationCountApi();
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const markNotificationAsRead = createAsyncThunk(
  "read/signal/notification",
  async (
    {
      notificationId,
    }: {
      notificationId: string;
    },
    { rejectWithValue },
  ) => {
    try {
      return await markNotificationAsReadApi({ notificationId });
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const markAllNotificationAsRead = createAsyncThunk(
  "read/all/notifications",
  async (_, { rejectWithValue }) => {
    try {
      return await markAllNotificationAsReadApi();
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);
