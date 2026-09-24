import { createAsyncThunk } from "@reduxjs/toolkit";
import type { SignInParams, SignUpParams } from "./authTypes";
import { loginApi, meApi, registerApi } from "./authApi";
import type { FailureResponse } from "../../types/failureResoponse";

export const register = createAsyncThunk(
  "signUp",
  async (data: SignUpParams, { rejectWithValue }) => {
    try {
      return await registerApi(data);
    } catch (error) {
      return rejectWithValue(error as FailureResponse);
    }
  },
);

export const login = createAsyncThunk(
  "signIn",
  async (data: SignInParams, { rejectWithValue }) => {
    try {
      const response = await loginApi(data);
      return response;
    } catch (error) {
      return rejectWithValue(error as FailureResponse);
    }
  },
);

export const me = createAsyncThunk("me", async (_, { rejectWithValue }) => {
  try {
    const response = await meApi();
    return response;
  } catch (error) {
    return rejectWithValue(error as FailureResponse);
  }
});
