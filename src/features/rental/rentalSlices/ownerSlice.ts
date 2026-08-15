import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RentalStatus, type RentalOwnerState } from "../rentalTypes";
import {
  approveRentRequest,
  confirmReturnRentRequest,
  getRequestsReceivedByOwner,
  ownerGains,
  rejectRentRequest,
} from "../rentalThunks";
import type { FailureResponse } from "../../../types/failureResoponse";

const initialState: RentalOwnerState = {
  isLoading: false,
  error: null,
  ownerRentals: [],
  toolsCount: 0,
  receivedRentalRequests: [],
  returnedRentalRequests: [],
  gains: 0,
};
export const ownerSlice = createSlice({
  name: "owner/space",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRequestsReceivedByOwner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRequestsReceivedByOwner.fulfilled, (state, action) => {
        state.isLoading = false;
        const rentals = action.payload.data;
        state.ownerRentals = rentals;
        for (const rental of rentals) {
          switch (rental.rentalStatus) {
            case RentalStatus.PENDING:
              state.receivedRentalRequests.unshift(rental);
              break;
            case RentalStatus.RETURN_REQUESTED:
              state.returnedRentalRequests.unshift(rental);
              break;

            default:
              break;
          }
        }
      })
      .addCase(getRequestsReceivedByOwner.rejected, (state, action) => {
        state.isLoading = false;
        action.error = action.payload as FailureResponse;
      })
      //Approve rental
      .addCase(approveRentRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(approveRentRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        const rental = action.payload.data;
      })
      .addCase(approveRentRequest.rejected, (state, action) => {
        state.isLoading = false;
        action.error = action.payload as FailureResponse;
      })
      //Reject rental
      .addCase(rejectRentRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(rejectRentRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        const rentals = action.payload.data;
        // i'll delete the rejected rental.
      })
      .addCase(rejectRentRequest.rejected, (state, action) => {
        state.isLoading = false;
        action.error = action.payload as FailureResponse;
      }) //Confirm return of rental to be completed.
      .addCase(confirmReturnRentRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmReturnRentRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        const rentals = action.payload.data;
      })
      .addCase(confirmReturnRentRequest.rejected, (state, action) => {
        state.isLoading = false;
        action.error = action.payload as FailureResponse;
      })
      // owner gains.
      .addCase(ownerGains.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ownerGains.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gains = action.payload.data;
      })
      .addCase(ownerGains.rejected, (state, action) => {
        state.isLoading = false;
        action.error = action.payload as FailureResponse;
      });
  },
});

export const selectOwnerRentals = (state: RentalOwnerState) =>
  state.ownerRentals;

export const selectReceivedRentalRequests = createSelector(
  [selectOwnerRentals],
  (rentals) =>
    rentals.filter((rental) => rental.rentalStatus == RentalStatus.PENDING),
);

export const selectReturnedRentalRequests = createSelector(
  [selectOwnerRentals],
  (rentals) =>
    rentals.filter(
      (rental) => rental.rentalStatus == RentalStatus.RETURN_REQUESTED,
    ),
);

export default ownerSlice.reducer;
