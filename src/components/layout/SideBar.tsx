import Divider from "../common/Divider";
import { authLinks } from "../common/Auth_Guest/AuthLinks";
import { guestLinks } from "../common/Auth_Guest/GuestLinks";
import NavigationBar from "../common/NavigationBar";
import { RoutePath } from "../../routes/routes";
import ProfileCard from "../ProfileCard";
import { useAppSelector } from "../../hooks/reduxHooks";

function SideBar() {
  const { isAuthenticated, user } = useAppSelector(
    (state) => state.authentication,
  );
  const links = isAuthenticated ? authLinks : guestLinks;
  return (
    <div
      className="bg-[#ffffff] shadow sm:h-full
       flex flex-wrap flex-col p-5 sm:p-5 "
    >
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
            data={link.path == RoutePath.NOTIFICATIONPAGE ? "2" : undefined}
          />
        ))}
      </div>
      {/* profile */}
      {isAuthenticated && <ProfileCard />}
    </div>
  );
}

export default SideBar;
