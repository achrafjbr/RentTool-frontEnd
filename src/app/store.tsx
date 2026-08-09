import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import toolReducer from "../features/tool/toolSlice";
import ToolReview from "../features/reviews/toolReviews/toolReviewSlice";

export const store = configureStore({
  reducer: {
    authentication: authReducer,
    tool: toolReducer,
    toolReview: ToolReview,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
