import { createSlice } from "@reduxjs/toolkit";
import type { UserReviewState } from "./userReviewTypes";
import {
  addUserReview,
  deleteUserReview,
  getUserReviews,
  updateUserReview,
} from "./userReviewThunks";
import type { FailureResponse } from "../../../types/failureResoponse";

const initialState: UserReviewState = {
  error: null,
  isLoading: false,
  review: null,
  reviews: [],
};
export const UserReviewSlice = createSlice({
  initialState,
  name: "user/review",
  reducers: {},
  extraReducers(builder) {
    builder

      // get user Review.
      .addCase(getUserReviews.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload.data;
      })
      .addCase(getUserReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // add review
      .addCase(addUserReview.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(addUserReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.review = action.payload.data;
        state.reviews.unshift(action.payload.data);
      })
      .addCase(addUserReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // delete review.
      .addCase(deleteUserReview.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteUserReview.fulfilled, (state, action) => {
        state.isLoading = false;
        const reviewId = action.payload.data._id;
        state.reviews = state.reviews.filter(
          (review) => reviewId !== review._id,
        );
      })
      .addCase(deleteUserReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // update user review.
      .addCase(updateUserReview.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUserReview.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedReview = action.payload.data;
        const index = state.reviews.findIndex(
          (review) => review._id == updatedReview._id,
        );
        if (index !== -1) {
          state.reviews[index] = updatedReview;
        }
      })
      .addCase(updateUserReview.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      });
  },
});

export default UserReviewSlice.reducer;
