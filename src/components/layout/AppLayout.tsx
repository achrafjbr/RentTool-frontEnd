import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Divider from "../common/Divider";
import { useFadeAnimation } from "../../hooks/useFadeAnimation";
import { useAppSelector } from "../../hooks/reduxHooks";
import { RoutePath } from "../../routes/routes";
import { AnimatePresence, motion } from "motion/react";
import { useSocketWsEvents } from "../../hooks/useSocket";

function AppLayout() {
  const { isAuthenticated } = useAppSelector((state) => state.authentication);
  // const { paddingTop, opacity } = useFadeAnimation({
  //   paddingTop: "pt-50",
  //   opacity: "opacity-10",
  // });

  useSocketWsEvents();

  return (
    <div className="h-screen grid grid-cols-1 sm:grid-cols-[280px_1fr]">
      <aside className=" sm:h-screen sm:sticky top-0">
        <SideBar />
      </aside>
      {isAuthenticated ? (
        <motion.main
          initial={{
            paddingTop: "12.5rem",
            opacity: "10%",
            translate: "all ease-in-out 200ms",
          }}
          animate={{ paddingTop: "5rem", opacity: "100%" }}
          transition={{
            duration: 200,
            ease: "circInOut",
            animation: { bounce: 2 },
          }}
          exit={{ opacity: "10%", paddingTop: "12.5rem" }}
          className={`sm:overflow-y-auto  transition-all 
          ease-in-out duration-100 `}
        >
          <Outlet />
          <Divider padding="pb-8 " />
        </motion.main>
      ) : (
        <Navigate to={RoutePath.GUESTPAGE} replace />
      )}
    </div>
  );
}

export default AppLayout;
