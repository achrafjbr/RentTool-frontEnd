import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  RentalStatus,
  type Rental,
  type RentalOwnerState,
} from "../rentalTypes";
import {
  approveRentRequest,
  confirmReturnRentRequest,
  getRequestsReceivedByOwner,
  ownerGains,
  rejectRentRequest,
} from "../rentalThunks";
import type { FailureResponse } from "../../../types/failureResoponse";
import {
  removeExecutedRental,
  updateExecutedRental,
} from "../../../utilis/owner";
import type { RootState } from "../../../app/store";

const initialState: RentalOwnerState = {
  isLoading: false,
  error: null,
  ownerRentals: [],
  toolsCount: 0,
  gains: { totalRevenue: 0 },
};
export const ownerSlice = createSlice({
  name: "owner/space",
  initialState,
  reducers: {
    incomingOwnerRentalRequests: (state, action) => {
      const rental = action.payload as Rental;
      if (
        rental.rentalStatus == RentalStatus.PENDING ||
        rental.rentalStatus == RentalStatus.RETURN_REQUESTED
      ) {
        // state.ownerRentals.push(rental);
        updateExecutedRental(state, rental);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRequestsReceivedByOwner.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRequestsReceivedByOwner.fulfilled, (state, action) => {
        state.isLoading = false;
        const rentals = action.payload.data;
        state.ownerRentals = rentals;
        // for (const rental of rentals) {
        //   switch (rental.rentalStatus) {
        //     case RentalStatus.PENDING:
        //       state.receivedRentalRequests.unshift(rental);
        //       break;
        //     case RentalStatus.RETURN_REQUESTED:
        //       state.returnedRentalRequests.unshift(rental);
        //       break;

        //     default:
        //       break;
        //   }
        // }
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
        updateExecutedRental(state, rental);
        // removeExecitedRental(state, rental);
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
        const rental = action.payload.data;
        removeExecutedRental(state, rental);
      })
      .addCase(rejectRentRequest.rejected, (state, action) => {
        state.isLoading = false;
        action.error = action.payload as FailureResponse;
      })
      //Confirm return of rental to be completed.
      .addCase(confirmReturnRentRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmReturnRentRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        const rental = action.payload.data;
        state.gains.totalRevenue += rental.totalPrice;
        removeExecutedRental(state, rental);
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

export const selectOwnerRentals = (state: RootState) =>
  state.owner.ownerRentals;

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

export const selectApprovedRentalRequests = createSelector(
  [selectOwnerRentals],
  (rentals) =>
    rentals.filter((rental) => rental.rentalStatus === RentalStatus.APPROVED),
);

export default ownerSlice.reducer;
export const { incomingOwnerRentalRequests } = ownerSlice.actions;
