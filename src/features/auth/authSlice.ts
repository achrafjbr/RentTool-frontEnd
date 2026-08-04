import { createSlice } from "@reduxjs/toolkit";
import type {
  AutenticationState,
  SignInResponse,
  SignUpResponse,
} from "./authTypes";
import type { SuccessResponse } from "../../types/successResponse";
import { login, register } from "./authThunk";
import type { State } from "../../types/State";
import type { FailureResponse } from "../../types/failureResoponse";

const initialState: AutenticationState = {
  isLoading: false,
  error: null,
  isAuthenticated: false,
  token: "",
  user: null,
};

export const authSlice = createSlice({
  initialState,
  name: "authentication",
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = "";
      state.isAuthenticated = false;
    },
  },
  extraReducers(builder) {
    builder
      // Register.
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
        console.log("state.erro", state.error);
      })
      // Login.
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
