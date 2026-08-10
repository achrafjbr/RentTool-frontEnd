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
  "add/tool/review",
  async (data: UserReviewParams, { rejectWithValue }) => {
    try {
      return await addUserReviewApi(data);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const getUserReviews = createAsyncThunk(
  "tool/review",
  async (toolId: string, { rejectWithValue }) => {
    try {
      return await getUserReviewsApi(toolId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const updateUserReview = createAsyncThunk(
  "update/tool",
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
  "delete/tool",
  async (toolId: string, { rejectWithValue }) => {
    try {
      return await deleteUserReviewApi(toolId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);
