import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserByIdApi, updateUserProfileApi } from "./profileApis";
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

export const updateUserProfile = createAsyncThunk(
  "update/profile",
  async (profile: FormData, { rejectWithValue }) => {
    console.log(Object.fromEntries(profile.entries()));

    try {
      return await updateUserProfileApi({ profile: profile });
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);
