import {
  ArrowUpDown,
  Clock4,
  Hammer,
  ImageOff,
  SquareCheckBig,
  StarCheck,
  UserStar,
} from "lucide-react";
import { useState } from "react";
import { NotificationType, type Notification } from "../notificationTypes";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { markNotificationAsRead } from "../notificationThunks";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/common/Loader";
import toast from "react-hot-toast";

export default function NotificationCard({
  notification,
}: {
  notification: Notification;
}) {
  const renderNotificationIcon = () => {
    switch (notification.type) {
      case NotificationType.RENT_APPROVED:
      case NotificationType.RENT_RETURN_CONFIRMED:
        return <SquareCheckBig className="text-green-400 size-5" />;

      case NotificationType.RENT_REQUEST:
        return <Hammer className="text-blue-500 size-5" />;

      case NotificationType.RENT_REJECTED:
        return <Clock4 className="text-blue-500 size-5" />;

      case NotificationType.RENT_RETURN:
        return <ArrowUpDown className="text-blue-500 size-5" />;

      case NotificationType.TOOL_REVIEW:
        return <StarCheck className="text-blue-500 size-5" />;

      default:
        return <UserStar className="text-blue-500 size-5" />;
    }
  };
  const [isToolBar, setIsToolBar] = useState<boolean>(false);
  const { isLoading, error } = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="p-5">
      {isLoading && <Loader />}
      {error && toast.error(error.message)}

      <div className="grid grid-cols-12 w-full gap-3.5">
        <div
          className="lg:col-span-1 col-span-2 rounded-2xl bg-gray-50 border
           border-gray-100 p-1
        flex items-start justify-center"
        >
          {renderNotificationIcon()}
        </div>

        <div className="lg:col-span-9 py-2.5 col-span-7 flex flex-col gap-y-1">
          <p
            className="text-gray-800 text-xs  flex items-center 
          gap-x-1.5 font-semibold"
          >
            {notification.title}
            {!notification.isRead && (
              <span className="rounded-full size-2.5 bg-blue-700"></span>
            )}
          </p>
          <p className="text-gray-500 text-xs font-light ">
            {notification.message}
          </p>
          <p className="text-gray-400 text-xs font-mono ">
            {notification.createdAt == Date.now().toString()
              ? "À l'instant"
              : notification.createdAt.split("T")[0]}
          </p>
        </div>

        <div
          className="lg:col-span-2 col-span-3 w-full  ml-auto flex flex-col
         items-center justify-between  py-2.5"
        >
          {!notification.isRead && (
            <p
              className="text-xs bg-gray-100 size-fit
           rounded-md text-center cursor-pointer p-1  text-blue-600"
              onClick={async () =>
                await dispatch(
                  markNotificationAsRead({ notificationId: notification._id }),
                )
              }
            >
              Savoir lu
            </p>
          )}

          <div className="relative">
            {isToolBar && (
              <div
                className="left-[90%] w-max bottom-[85%] z-10 absolute
                 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl
                text-xs shadow-2xl text-gray-600 p-0.5 bg-gray-200"
              >
                {notification.sender?.fullName}
              </div>
            )}
            <div
              onMouseOut={() => setIsToolBar(false)}
              onMouseOver={() => setIsToolBar(true)}
              onClick={() => navigate(`/profile/${notification.sender?._id}`)}
            >
              {notification.sender?.picture ? (
                <img
                  src={`${import.meta.env.VITE_SERVER_URL}/uploads/users/${notification.sender.picture}`}
                  alt={notification.createdAt}
                  className=" cursor-pointer size-9 rounded-full"
                />
              ) : (
                <ImageOff
                  className="cursor-pointer size-10 rounded-full border
               border-gray-200 p-2 text-gray-500"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
