import { createSlice } from "@reduxjs/toolkit";
import type { NotificationState } from "./notificationTypes";
import {
  getNotificationById,
  markAllNotificationAsRead,
  markNotificationAsRead,
  myNotification,
  unReadNotification,
} from "./notificationThunks";
import type { FailureResponse } from "../../types/failureResoponse";

const initialState: NotificationState = {
  error: null,
  isLoading: false,
  notifications: [],
  notification: null,
  unReadNotificationCount: 0,
};
export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      console.log("action.payload NOtificagtion", action.payload);

      state.notifications.unshift(action.payload);
      state.unReadNotificationCount += 1;
    },
  },
  extraReducers(builder) {
    builder
      // get notification of connected user
      .addCase(myNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(myNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notifications = action.payload.data;
      })
      .addCase(myNotification.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // get signle notification of connected user
      .addCase(getNotificationById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotificationById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notification = action.payload.data;
      })
      .addCase(getNotificationById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // read signale notification.
      .addCase(markNotificationAsRead.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        state.isLoading = false;
        const readnotification = action.payload.data;
        const notification = state.notifications.find(
          (notification) => notification._id == readnotification._id,
        );
        if (notification) {
          notification.isRead = true;
        }
        state.unReadNotificationCount -= 1;
      })
      .addCase(markNotificationAsRead.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // read all notifications.
      .addCase(markAllNotificationAsRead.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(markAllNotificationAsRead.fulfilled, (state, action) => {
        state.isLoading = false;
        const result = action.payload.data;
        if (result === 1) {
          // state.Notifications = state.Notifications.map((notification) => {
          //   if (!notification.isRead) {
          //     notification.isRead = true;
          //     return notification;
          //   }
          //   return notification;
          // });
          state.notifications = state.notifications.filter((notification) =>
            !notification.isRead
              ? { ...notification, isRead: true }
              : notification,
          );
          state.unReadNotificationCount = 0;
        }
      })
      .addCase(markAllNotificationAsRead.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // unRead notifications count
      .addCase(unReadNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(unReadNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.unReadNotificationCount = action.payload.data;
      })
      .addCase(unReadNotification.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      });
  },
});

export default notificationSlice.reducer;

export const { addNotification } = notificationSlice.actions;
