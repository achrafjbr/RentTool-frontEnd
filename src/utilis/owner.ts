import type { Rental, RentalOwnerState } from "../features/rental/rentalTypes";

// This function works when owner do these action: (Approve, Reject, ReturnConfirmation request)
export const removeExecitedRental = (
  state: RentalOwnerState,
  rental: Rental,
) => {
  state.ownerRentals = state.ownerRentals.filter(
    (crental) => crental._id !== rental._id,
  );
};
