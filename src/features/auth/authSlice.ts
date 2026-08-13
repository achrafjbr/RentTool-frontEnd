import { createSlice } from "@reduxjs/toolkit";

import { login, me, register } from "./authThunk";
import type { FailureResponse } from "../../types/failureResoponse";
import { deleteToken, getToken } from "../../utilis/tokenService";
import { socket } from "../../config/socket";
import type { AutenticationState } from "./authTypes";

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
      state.isLoading = true;
      state.user = null;
      state.token = "";
      state.isAuthenticated = false;
      deleteToken();
      socket.disconnect();
      socket.auth = {};
      state.isLoading = false;
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
      })
      // Login.
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.data.token;
        state.user = action.payload.data.user;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // me
      .addCase(me.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(me.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload!.data;
        state.token = getToken();
        state.isAuthenticated = true;
      })
      .addCase(me.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
