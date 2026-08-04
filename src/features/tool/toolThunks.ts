import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteToolApi,
  getAllToolsApi,
  getAllToolsWithOwnersApi,
  getToolByIdApi,
  myToolsApi,
} from "./toolApi";
import type { FailureResponse } from "../../types/failureResoponse";

export const getToolById = createAsyncThunk(
  "get/tool",
  async ({ toolId }: { toolId: string }, { rejectWithValue }) => {
    try {
      const response = await getToolByIdApi({ toolId: toolId });
      return response;
    } catch (error) {
      rejectWithValue(error as FailureResponse);
    }
  },
);

export const deleteTool = createAsyncThunk(
  "del/tool",
  async ({ toolId }: { toolId: string }, { rejectWithValue }) => {
    try {
      const response = await deleteToolApi({ toolId: toolId });
      return response;
    } catch (error) {
      rejectWithValue(error as FailureResponse);
    }
  },
);

export const getAllTools = createAsyncThunk(
  "all/tools",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllToolsApi();
      return response;
    } catch (error) {
      rejectWithValue(error as FailureResponse);
    }
  },
);

export const myTools = createAsyncThunk(
  "my/tools",
  async (_, { rejectWithValue }) => {
    try {
      const response = await myToolsApi();
      return response;
    } catch (error) {
      rejectWithValue(error as FailureResponse);
    }
  },
);

// using it when user connected & excluding his tools
export const getAllToolsWithOwners = createAsyncThunk(
  "tools/owners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllToolsWithOwnersApi();
      return response;
    } catch (error) {
      rejectWithValue(error as FailureResponse);
    }
  },
);
