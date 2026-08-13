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

function SideBar() {
  const {
    isLoading: authLoading,
    isAuthenticated,
    user,
  } = useAppSelector((state) => state.authentication);

  const dispatch = useAppDispatch();

  const { unReadNotificationCount, isLoading } = useAppSelector(
    (state) => state.notification,
  );

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(unReadNotification());
    }
  }, [dispatch]);

  const links = isAuthenticated ? authLinks : guestLinks;
  return (
    <div
      className="bg-[#ffffff] shadow sm:h-full
       flex flex-wrap flex-col p-5 sm:p-5 "
    >
      {isLoading || (authLoading && <Loader />)}

      {/* logo */}
      <div className="flex items-center gap-x-2 text-black">
        <div>LOGO</div>
        <div>
          <div>TOOLRENT</div>
          <div>Particuliers</div>
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
            data={
              link.path == RoutePath.NOTIFICATIONPAGE &&
              unReadNotificationCount > 0 &&
              unReadNotificationCount
              // link.path == RoutePath.NOTIFICATIONPAGE && 1
            }
          />
        ))}
      </div>
      {/* profile */}
      {isAuthenticated && <ProfileCard />}
    </div>
  );
}

export default SideBar;
