import { createSlice } from "@reduxjs/toolkit";
import type { ToolReviewState } from "./toolReviewTypes";
import {
  addToolReview,
  deleteToolReview,
  getToolReviews,
  updateToolReview,
} from "./toolReviewThunks";
import type { FailureResponse } from "../../../types/failureResoponse";

const initialState: ToolReviewState = {
  error: null,
  isLoading: false,
  reviews: [],
  review: null,
};
export const toolReviewSlice = createSlice({
  initialState,
  name: "Tool/Reviews",
  reducers: {},
  extraReducers(builder) {
    builder
      // create review.
      .addCase(addToolReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToolReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.review = action.payload.data;
        state.reviews.unshift(action.payload.data);
      })
      .addCase(addToolReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // get reviews
      .addCase(getToolReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getToolReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data;
      })
      .addCase(getToolReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // delete review
      .addCase(deleteToolReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteToolReview.fulfilled, (state, action) => {
        state.isLoading = false;
        const review = action.payload.data;
        state.reviews = state.reviews.filter(({ _id }) => review._id !== _id);
      })
      .addCase(deleteToolReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // update Review.
      .addCase(updateToolReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateToolReview.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedReview = action.payload.data;
        const index = state.reviews.findIndex(
          ({ _id }) => _id == updatedReview._id,
        );
        if (index != -1) {
          state.reviews[index] = updatedReview;
        }
      })
      .addCase(updateToolReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      });
  },
});

export const actions = toolReviewSlice.actions;
export default toolReviewSlice.reducer;
