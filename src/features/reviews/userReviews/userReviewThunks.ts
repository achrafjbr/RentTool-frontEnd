import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addUserReviewApi,
  deleteUserReviewApi,
  getUserReviewsApi,
  updateUserReviewApi,
} from "./userReviewApi";
import type {
  UpdateUserReviewParams,
  UserReviewParams,
} from "./userReviewTypes";
import type { FailureResponse } from "../../../types/failureResoponse";

export const addUserReview = createAsyncThunk(
  "add/user/review",
  async (data: UserReviewParams, { rejectWithValue }) => {
    try {
      return await addUserReviewApi(data);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const getUserReviews = createAsyncThunk(
  "user/review",
  async (toolId: string, { rejectWithValue }) => {
    try {
      return await getUserReviewsApi(toolId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const updateUserReview = createAsyncThunk(
  "update/review",
  async (
    updateUserReviewParams: UpdateUserReviewParams,
    { rejectWithValue },
  ) => {
    try {
      return await updateUserReviewApi(updateUserReviewParams);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const deleteUserReview = createAsyncThunk(
  "delete/review",
  async (toolId: string, { rejectWithValue }) => {
    try {
      return await deleteUserReviewApi(toolId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);
