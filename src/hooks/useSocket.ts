import { useEffect } from "react";
import { useAppDispatch } from "./reduxHooks";
import { socket } from "../config/socket";
import { NOTIFICATION } from "../utilis/constants";
import type { Notification } from "../features/notification/notificationTypes";
import { addNotification } from "../features/notification/notificationSlice";

export const useSocketWsEvents = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    socket.on(NOTIFICATION, (notification: Notification) => {
      console.log("notification", notification);
      dispatch(addNotification(notification));
    });

    return () => {
      socket.off(NOTIFICATION);
    };
  }, [dispatch]);
};
