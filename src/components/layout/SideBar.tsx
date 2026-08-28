import Divider from "../common/Divider";
import { authLinks } from "../common/Auth_Guest/AuthLinks";
import { guestLinks } from "../common/Auth_Guest/GuestLinks";
import NavigationBar from "../common/NavigationBar";
import { RoutePath } from "../../routes/routes";
import ProfileCard from "../ProfileCard";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { unReadNotification } from "../../features/notification/notificationThunks";
import Loader from "../common/Loader";
import logo from "../../assets/logo.png";
function SideBar() {
  const {
    isLoading: authLoading,
    isAuthenticated,
    user,
  } = useAppSelector((state) => state.authentication);

  const dispatch = useAppDispatch();

  const { isLoading: loadingNotification, unReadNotificationCount } =
    useAppSelector((state) => state.notification);

  const { isLoading: loadingOwnerData, ownerRentals } = useAppSelector(
    (state) => state.owner,
  );

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(unReadNotification());
    }
  }, [dispatch]);

  const notificationData = (path: RoutePath) => {
    switch (path) {
      case RoutePath.NOTIFICATIONPAGE:
        return unReadNotificationCount > 0 && unReadNotificationCount;
      case RoutePath.OWNERSPACEPAGE:
        return ownerRentals.length > 0 && ownerRentals.length;
      default:
        break;
    }
  };

  const links = isAuthenticated ? authLinks : guestLinks;
  return (
    <div
      className="bg-[#ffffff] shadow sm:h-full
       flex flex-wrap flex-col p-5 sm:p-5 "
    >
      {loadingNotification || loadingOwnerData || (authLoading && <Loader />)}

      {/* logo */}
      <div className="flex items-center justify-start gap-x-2 text-black">
        <div className="p-0 m-0 size-13">
          <img src={logo} alt={logo} />
        </div>
        <div>
          <div className="text-sm font-semibold text-blue-500 ">Tool Rent</div>
          <div className="text-xs font-extralight italic">Particuliers</div>
        </div>
      </div>

      {/* Home  */}
      <Divider padding="pt-6" />
      <NavigationBar {...links[0]} />

      {/* other links */}
      <div className="flex flex-col">
        {links.slice(1).map(({ ...link }) => (
          <NavigationBar
            key={link.path}
            {...link}
            // data={
            //   link.path == RoutePath.NOTIFICATIONPAGE &&
            //   unReadNotificationCount > 0 &&
            //   unReadNotificationCount
            // }
            data={notificationData(link.path)}
          />
        ))}
      </div>
      {/* profile */}
      {isAuthenticated && <ProfileCard />}
    </div>
  );
}

export default SideBar;
