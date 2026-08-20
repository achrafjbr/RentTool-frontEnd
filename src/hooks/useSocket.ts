import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { socket } from "../config/socket";
import {
  NOTIFICATION,
  RENTAL_CREATED,
  RENTAL_UPDATED,
} from "../utilis/constants";
import type { Notification } from "../features/notification/notificationTypes";
import { addNotification } from "../features/notification/notificationSlice";
import type { Rental } from "../features/rental/rentalTypes";
import { incomingRenterRentalRequests } from "../features/rental/rentalSlices/renterSlice";
import { incomingOwnerRentalRequests } from "../features/rental/rentalSlices/ownerSlice";

export const useSocketWsEvents = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authentication);
  useEffect(() => {
    socket.on(NOTIFICATION, (notification: Notification) => {
      dispatch(addNotification(notification));
    });
    socket.on(RENTAL_CREATED, (rental: Rental) => {
      if (rental.owner?._id == user?._id)
        dispatch(incomingOwnerRentalRequests(rental));
    });
    socket.on(RENTAL_UPDATED, (rental: Rental) => {
      if (rental.owner?._id == user?._id) {
        //owner
        dispatch(incomingOwnerRentalRequests(rental));
      }

      if (rental.renter?._id == user?._id) {
        //renter
        dispatch(incomingRenterRentalRequests(rental));
      }
    });
    return () => {
      socket.off(NOTIFICATION);
      socket.off(RENTAL_CREATED);
      socket.off(RENTAL_UPDATED);
    };
  }, [dispatch]);
};
