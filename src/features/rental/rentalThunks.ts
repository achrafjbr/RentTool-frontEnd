import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  approveRentRequestApi,
  confirmReturnRentRequestApi,
  getRequestsReceivedByOwnerApi,
  getRequestsSentByRenterApi,
  ownerGainsApi,
  rejectRentRequestApi,
  renteToolApi,
  returnRentRequestApi,
} from "./rentalApis";
import type { RentToolParams } from "./rentalTypes";
import type { FailureResponse } from "../../types/failureResoponse";

// Locataire / Renter
export const renteTool = createAsyncThunk(
  "rent/tool",
  async (
    { toolId, startDate, endDate }: RentToolParams,
    { rejectWithValue },
  ) => {
    try {
      return await renteToolApi({ toolId, startDate, endDate });
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const getRequestsSentByRenter = createAsyncThunk(
  "myrequests",
  async (_, { rejectWithValue }) => {
    try {
      return await getRequestsSentByRenterApi();
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const returnRentRequest = createAsyncThunk(
  "return/rent",
  async (rentalId: string, { rejectWithValue }) => {
    try {
      return await returnRentRequestApi(rentalId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

// Propiétaire / Owner
export const getRequestsReceivedByOwner = createAsyncThunk(
  "owner/requests",
  async (_, { rejectWithValue }) => {
    try {
      return await getRequestsReceivedByOwnerApi();
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const approveRentRequest = createAsyncThunk(
  "approved/rent",
  async (rentalId: string, { rejectWithValue }) => {
    try {
      return await approveRentRequestApi(rentalId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const rejectRentRequest = createAsyncThunk(
  "reject/rent",
  async (rentalId: string, { rejectWithValue }) => {
    try {
      return await rejectRentRequestApi(rentalId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const confirmReturnRentRequest = createAsyncThunk(
  "confirm/rent",
  async (rentalId: string, { rejectWithValue }) => {
    try {
      return await confirmReturnRentRequestApi(rentalId);
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);

export const ownerGains = createAsyncThunk(
  "owner/gains",
  async (_, { rejectWithValue }) => {
    try {
      return await ownerGainsApi();
    } catch (error) {
      throw rejectWithValue(error as FailureResponse);
    }
  },
);
