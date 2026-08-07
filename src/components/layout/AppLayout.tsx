import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Divider from "../common/Divider";
import { useFadeAnimation } from "../../hooks/useFadeAnimation";

function AppLayout() {
  const { paddingTop, opacity } = useFadeAnimation({
    paddingTop: "pt-50",
    opacity: "opacity-10",
  });
  return (
    <div className="h-screen grid grid-cols-1 sm:grid-cols-[280px_1fr]">
      <aside className=" sm:h-screen sm:sticky top-0">
        <SideBar />
      </aside>

      <main
        className={`sm:overflow-y-auto   transition-all 
          ease-in-out duration-100 ${paddingTop} ${opacity} `}
      >
        <Outlet />
        <Divider padding="pb-8 " />
      </main>
    </div>
  );
}

export default AppLayout;
