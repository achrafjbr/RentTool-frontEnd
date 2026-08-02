import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteToolApi, getToolsApi } from "./toolApi";

export const getTools = createAsyncThunk(
  "tools/getAll",
  async () => await getToolsApi(),
);

export const deleteTool = createAsyncThunk(
  "tool/delete",
  async (id: string) => await deleteToolApi(id),
);
