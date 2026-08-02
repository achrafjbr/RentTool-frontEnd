import { createSlice } from "@reduxjs/toolkit";
import type { ToolState } from "./toolTypes";
import { deleteTool, getTools } from "./toolThunks";

const initialState: ToolState = {
  loading: false,
  tools: [],
  error: null,
};

export const toolSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getTools.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTools.fulfilled, (state, action) => {
        state.loading = false;
        state.tools = action.payload;
      })
      .addCase(getTools.rejected, (state) => {
        state.loading = false;
        state.error = "failier";
      })
      .addCase(deleteTool.fulfilled, (state, action) => {
        state.tools = state.tools.filter((tool) => tool._id !== action.payload);
      });
  },
});
