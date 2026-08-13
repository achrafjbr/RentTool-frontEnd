import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Divider from "../common/Divider";
import { useFadeAnimation } from "../../hooks/useFadeAnimation";
import { useAppSelector } from "../../hooks/reduxHooks";
import { RoutePath } from "../../routes/routes";
import { motion } from "motion/react";
function AuthLayout() {
  const { isAuthenticated } = useAppSelector((state) => state.authentication);

  // const { paddingTop, opacity } = useFadeAnimation({
  //   paddingTop: "pt-50",
  //   opacity: "opacity-10",
  // });

  return (
    <div className=" h-screen grid grid-cols-1 sm:grid-cols-[280px_1fr]">
      <aside className=" sm:h-screen sm:sticky top-0">
        <SideBar />
      </aside>

      {!isAuthenticated ? (
        <motion.main
          animate={{ paddingTop: "5rem", opacity: "100%" }}
          initial={{
            paddingTop: "12.5rem",
            opacity: "10%",
            translate: "all ease-in-out 200ms ",
          }}
          className={`sm:overflow-y-auto transition-all ease-in-out 
          duration-100 `}
        >
          <Outlet />
          <Divider padding="pb-8" />
        </motion.main>
      ) : (
        <Navigate to={RoutePath.HOMEPAGE} replace />
      )}
    </div>
  );
}

export default AuthLayout;
