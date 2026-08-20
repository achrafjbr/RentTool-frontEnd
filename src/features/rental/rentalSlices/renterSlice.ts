import { createSlice } from "@reduxjs/toolkit";
import {
  RentalStatus,
  type Rental,
  type RentalRenterState,
} from "../rentalTypes";
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
    incomingRenterRentalRequests: (state, action) => {
      const rental = action.payload as Rental;
      state.renterRentals = state.renterRentals.map((crental) =>
        crental._id === rental._id ? rental : crental,
      );
      if (rental.rentalStatus == RentalStatus.APPROVED) {
        if (state.activeRentals.length === 0) {
          state.activeRentals.push(rental);
        } else {
          state.activeRentals = state.activeRentals.map((crental) =>
            crental._id === rental._id ? rental : crental,
          );
        }
      }
      if (rental.rentalStatus === RentalStatus.COMPLETED) {
        state.completedRequests++;
      }
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
      // Get requests sent by the [renter]
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

        state.renterRentals = state.renterRentals.map((crental) =>
          crental._id == rental._id ? rental : crental,
        );

        state.activeRentals = state.activeRentals.filter((crental) => {
          return crental._id !== rental._id;
        });
      })
      .addCase(returnRentRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as FailureResponse;
      });
  },
});

export default renterSlice.reducer;
export const { incomingRenterRentalRequests } = renterSlice.actions;
