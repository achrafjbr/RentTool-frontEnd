import { createAsyncThunk } from "@reduxjs/toolkit";
import type { SignInParams, SignUpParams } from "./authTypes";
import { loginApi, registerApi } from "./authApi";
import type { FailureResponse } from "../../types/failureResoponse";

export const register = createAsyncThunk(
  "signUp",
  async (data: SignUpParams, { rejectWithValue }) => {
    try {
      return await registerApi(data);
    } catch (error) {
      const err = error as FailureResponse;
      return rejectWithValue(err);
    }
  },
);

export const login = createAsyncThunk(
  "signIn",
  async (data: SignInParams, { rejectWithValue }) => {
    try {
      return await loginApi(data);
    } catch (error) {
      const err = error as FailureResponse;
      return rejectWithValue(err);
    }
  },
);
