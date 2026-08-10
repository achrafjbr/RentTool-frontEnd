import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserByIdApi } from "./profileApis";
import type { FailureResponse } from "../../types/failureResoponse";

export const getUserById = createAsyncThunk(
  "user/profile",
  async (userId: string, { rejectWithValue }) => {
    try {
      return await getUserByIdApi(userId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);
