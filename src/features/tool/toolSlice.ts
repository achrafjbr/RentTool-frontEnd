import { createSlice } from "@reduxjs/toolkit";
import type { ToolState } from "./toolTypes";
import {
  deleteTool,
  getAllTools,
  getAllToolsWithOwners,
  getToolById,
  getToolCities,
  myTools,
  publishTool,
} from "./toolThunks";
import type { FailureResponse } from "../../types/failureResoponse";

const initialState: ToolState = {
  isLoading: false,
  error: null,
  tools: [],
  ownerTools: [],
  selectedTool: null,
  cities: [],
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
      })
      .addCase(getAllTools.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTools.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tools = action.payload?.data ?? [];
      })
      .addCase(getAllTools.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      .addCase(myTools.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(myTools.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownerTools = action.payload?.data ?? [];
      })
      .addCase(myTools.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      .addCase(getAllToolsWithOwners.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllToolsWithOwners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tools = action.payload?.data ?? [];
      })
      .addCase(getAllToolsWithOwners.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })
      //Tool cities
      .addCase(getToolCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getToolCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = action.payload?.data ?? [];
      })
      .addCase(getToolCities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      }) //Publish Tool
      .addCase(publishTool.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(publishTool.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tools.unshift(action.payload?.data);
        // state.ownerTools.unshift(action.payload?.data);
      })
      .addCase(publishTool.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      });
  },
});

export const actions = toolSlice.actions;
export default toolSlice.reducer;
