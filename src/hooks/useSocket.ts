import { useEffect } from "react";
import { useAppDispatch } from "./reduxHooks";
import { socket } from "../config/socket";
import {
  NOTIFICATION,
  RENTAL_CREATED,
  RENTAL_UPDATED,
} from "../utilis/constants";
import type { Notification } from "../features/notification/notificationTypes";
import { addNotification } from "../features/notification/notificationSlice";

export const useSocketWsEvents = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    socket.on(NOTIFICATION, (notification: Notification) => {
      dispatch(addNotification(notification));
    });
    socket.on(RENTAL_CREATED, (rental) => {});
    socket.on(RENTAL_UPDATED, (rental) => {});
    return () => {
      socket.off(NOTIFICATION);
      socket.off(RENTAL_CREATED);
      socket.off(RENTAL_UPDATED);
    };
  }, [dispatch]);
};
