import type { Rental, RentalOwnerState } from "../features/rental/rentalTypes";

// This function works when owner do these action: (Approve, Reject, ReturnConfirmation request)
export const removeExecutedRental = (
  state: RentalOwnerState,
  rental: Rental,
) => {
  state.ownerRentals = state.ownerRentals.filter(
    (crental) => crental._id !== rental._id,
  );
};

export const updateExecutedRental = (
  state: RentalOwnerState,
  rental: Rental,
) => {
  if (state.ownerRentals.length == 0) {
    state.ownerRentals.push(rental);
  } else {
    state.ownerRentals = state.ownerRentals.map((crental) =>
      crental._id == rental._id ? rental : crental,
    );
  }
};
