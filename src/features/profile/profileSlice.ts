import { createSlice } from "@reduxjs/toolkit";
import type { UserProfileState } from "./profileTypes";
import { getUserById, updateUserProfile } from "./profileThunks";
import type { FailureResponse } from "../../types/failureResoponse";

const initialState: UserProfileState = {
  error: null,
  isLoading: false,
  profile: null,
};
export const profileSlice = createSlice({
  initialState,
  name: "profile",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload.data;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      // update profile
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload.data;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      });
  },
});

export default profileSlice.reducer;
