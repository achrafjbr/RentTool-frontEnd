import { createSlice } from "@reduxjs/toolkit";
import type { RentalOwnerState } from "../rentalTypes";

const initialState: RentalOwnerState = {
  isLoading: false,
  error: null,
  ownerRentals: [],
  toolsCount: 0,
  receivedRequests: 0,
  returnedRequests: 0,
  gains: 0,
};
export const ownerSlice = createSlice({
  name: "owner/space",
  initialState,
  reducers: {},
});
