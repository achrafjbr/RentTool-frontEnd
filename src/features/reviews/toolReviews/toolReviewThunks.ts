import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  ToolReviewParams,
  UpdateToolReviewParams,
} from "./toolReviewTypes";
import {
  addToolReviewApi,
  deleteToolReviewApi,
  getToolReviewsApi,
  updateToolReviewApi,
} from "./toolReviewApi";
import type { FailureResponse } from "../../../types/failureResoponse";

export const addToolReview = createAsyncThunk(
  "add/tool/review",
  async (data: ToolReviewParams, { rejectWithValue }) => {
    try {
      return await addToolReviewApi(data);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const getToolReviews = createAsyncThunk(
  "tool/review",
  async ({ toolId }: { toolId: string }, { rejectWithValue }) => {
    try {
      return await getToolReviewsApi(toolId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const updateToolReview = createAsyncThunk(
  "update/tool",
  async (
    updateToolReviewParams: UpdateToolReviewParams,
    { rejectWithValue },
  ) => {
    try {
      return await updateToolReviewApi(updateToolReviewParams);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const deleteToolReview = createAsyncThunk(
  "delete/tool",
  async (reviewId: string, { rejectWithValue }) => {
    try {
      return await deleteToolReviewApi(reviewId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);
