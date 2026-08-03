import { createAsyncThunk } from "@reduxjs/toolkit";
import type { SignInParams, SignUpParams } from "./authTypes";
import { loginApi, registerApi } from "./authApi";

export const register = createAsyncThunk(
  "signUp",
  async (data: SignUpParams) => {
    return await registerApi(data);
  },
);

export const login = createAsyncThunk("signIn", async (data: SignInParams) => {
  return await loginApi(data);
});
