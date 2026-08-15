import { createSlice } from "@reduxjs/toolkit";
import { RentalStatus, type RentalRenterState } from "../rentalTypes";
import {
  getRequestsSentByRenter,
  renteTool,
  returnRentRequest,
} from "../rentalThunks";
import type { FailureResponse } from "../../../types/failureResoponse";

const initialState: RentalRenterState = {
  isLoading: false,
  error: null,
  renterRentals: [],
  totalRequests: 0,
  activeRentals: [],
  pendingRequests: 0,
  completedRequests: 0,
};
export const renterSlice = createSlice({
  name: "renter/space",
  initialState,
  reducers: {
    // i'll use it with socket.
    incomingRentalsToRenter: (state, action) => {
      const rental = action.payload.data;
      state.renterRentals.unshift(rental);
    },
  },
  extraReducers(builder) {
    builder
      // Rent a tool.
      .addCase(renteTool.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(renteTool.fulfilled, (state, action) => {
        state.isLoading = false;
        const rentals = action.payload.data;
        state.renterRentals.unshift(rentals);
        state.totalRequests++;
        state.pendingRequests++;
      })
      .addCase(renteTool.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })

      // requests sent by the [renter]
      .addCase(getRequestsSentByRenter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRequestsSentByRenter.fulfilled, (state, action) => {
        state.isLoading = false;
        const rentals = action.payload.data;
        state.renterRentals = rentals;
        state.totalRequests = rentals.length;
        state.pendingRequests = 0;
        state.completedRequests = 0;
        state.activeRentals = [];
        for (const rental of state.renterRentals) {
          switch (rental.rentalStatus) {
            case RentalStatus.APPROVED:
              state.activeRentals.unshift(rental);
              break;
            case RentalStatus.PENDING:
              state.pendingRequests++;
              break;
            case RentalStatus.COMPLETED:
              state.completedRequests++;
              break;
          }
        }
      })
      .addCase(getRequestsSentByRenter.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      })

      .addCase(returnRentRequest.pending, (state) => {
        state.isLoading = true;
      })
      // Return request and wait the owner to accept the return,
      // then the transation will be completed.
      .addCase(returnRentRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        const rental = action.payload.data;
        // dispear approved request from these lists.
        state.renterRentals = state.renterRentals.filter((rent) => {
          rent._id !== rental._id;
        });
        state.activeRentals = state.activeRentals.filter((rent) => {
          rent._id !== rental._id;
        });
      })
      .addCase(returnRentRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      });
  },
});

export default renterSlice.reducer;
export const { incomingRentalsToRenter } = renterSlice.actions;
