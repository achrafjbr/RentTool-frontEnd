import { useEffect } from "react";
import NotificationCard from "../features/notification/componenet/NotificationCard";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
  markAllNotificationAsRead,
  myNotification,
} from "../features/notification/notificationThunks";
import Loader from "../components/common/Loader";
import { BellOff } from "lucide-react";
import toast from "react-hot-toast";
import { useSocketWsEvents } from "../hooks/useSocket";
export default function NotificationPage() {
  const dispatch = useAppDispatch();
  const { notifications, error, isLoading, unReadNotificationCount } =
    useAppSelector((state) => state.notification);
  useEffect(() => {
    dispatch(myNotification());
  }, [dispatch]);
  // useSocketWsEvents();

  return (
    <div className="relative">
      {isLoading && <Loader />}
      {error && toast.error(error.message)}
      <div className="text-black sm:pl-20 pl-8 sm:pt-10 w-[90%] space-y-3.5">
        <div
          className="flex lg:justify-between lg:items-center flex-col items-start gap-y-2 justify-start 
                        lg:flex-row w-[90%] cursor-pointer"
        >
          <div>
            <p className="text-2xl font-display font-semibold tracking-tight text-gray-900">
              Notifications
            </p>
            <p className="text-xs text-gray-500">
              Restez informé de l'activité de vos locations et des réponses des
              propriétaires.
            </p>
          </div>
          <div
            onClick={async () => {
              await dispatch(markAllNotificationAsRead());
            }}
            className="rounded-lg bg-blue-50 py-1.5 px-2 text-center border-blue-100
                        text-xs font-semibold text-blue-600 border "
          >{`Tout marquer comme lu (${unReadNotificationCount})`}</div>
        </div>

        <div
          className="bg-white p-2 rounded-2xl border 
              border-gray-100 shadow-md space-y-3 sm:w-[90%]"
        >
          {notifications.length == 0 ? (
            <div className="flex flex-col justify-center items-center gap-6 p-4 h-1/2">
              <BellOff size={30} className="text-gray-500" />
              <p className="font-semibold text-gray-500">Aucune notification</p>
              <p className="text-xs text-gray-400">
                Vous n'avez pas encore de message ou d'alerte sur votre compte
                ToolRent.
              </p>
            </div>
          ) : (
            notifications.map((notification) => (
              <NotificationCard
                key={notification._id}
                notification={notification}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
