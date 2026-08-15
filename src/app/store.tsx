import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import toolReducer from "../features/tool/toolSlice";
import toolReviewReducer from "../features/reviews/toolReviews/toolReviewSlice";
import userReviewReducer from "../features/reviews/userReviews/userReviewSlice";
import profileReducer from "../features/profile/profileSlice";
import notificationReducer from "../features/notification/notificationSlice";
import renterReducer from "../features/rental/rentalSlices/renterSlice";
export const store = configureStore({
  reducer: {
    authentication: authReducer,
    tool: toolReducer,
    toolReview: toolReviewReducer,
    profile: profileReducer,
    userReview: userReviewReducer,
    notification: notificationReducer,
    renter: renterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["meta.arg"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
