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
    <div className="bg-[#1b1c1c] shadow-2xl flex flex-wrap flex-col p-5 ">
      <div className="flex items-center gap-x-2">
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
      <ProfileCard />
    </div>
  );
}

export default SideBar;
