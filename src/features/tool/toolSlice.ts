import { createSlice } from "@reduxjs/toolkit";
import type { ToolState } from "./toolTypes";
import { deleteTool, getToolById } from "./toolThunks";
import type { FailureResponse } from "../../types/failureResoponse";

const initialState: ToolState = {
  isLoading: false,
  error: null,
  tools: [],
  ownerTools: [],
  selectedTool: null,
};

export const toolSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getToolById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getToolById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedTool = action.payload?.data ?? null;
      })
      .addCase(getToolById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      .addCase(deleteTool.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTool.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownerTools = state.ownerTools.filter(
          (tool) => tool._id !== action.payload!.data._id,
        );
      })
      .addCase(deleteTool.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      });
  },
});
