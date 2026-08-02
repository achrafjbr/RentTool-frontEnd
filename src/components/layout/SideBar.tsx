import Divider from "../common/Divider";
import { authLinks } from "../common/Auth_Guest/AuthLinks";
import { guestLinks } from "../common/Auth_Guest/GuestLinks";
import NavigationBar from "../common/NavigationBar";
import { RoutePath } from "../../routes/routes";
import { LogOut, PowerOffIcon } from "lucide-react";

function SideBar() {
  const isAuthenticated = true;
  const links = isAuthenticated ? authLinks : guestLinks;
  return (
    <div className="bg-[#1b1c1c] shadow-2xl  flex flex-wrap flex-col p-5 ">
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
      <div className=" mt-auto flex flex-col justify-evenly bg-[#142023] h-30 rounded-lg p-2 ">
        <div className=" cursor-pointer flex gap-x-2.5">
          <div className="size-12 bg-amber-700 rounded-full ease-in-out hover:scale-110 transition-all duration-100 items-center justify-center"></div>

          <div className="flex flex-col justify-center">
            <div className="text-balance  font-thin hover:text-blue-500">
              Achraf El jabbar
            </div>
            <div className="text-xs font-light text-gray-400">Mon profil</div>
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="flex gap-1 items-center justify-center">
            <PowerOffIcon size={15} color="pink" />
            <div className="text-xs font-light text-gray-400">
              Compte particulier
            </div>
          </div>
          <div className=" cursor-pointer flex gap-1 items-center justify-center">
            <LogOut size={15} color="red" />
            <div className="text-xs hover:decoration-red-700 decoration-2  underline-offset-4 font-light text-red-700">
              Quitter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
