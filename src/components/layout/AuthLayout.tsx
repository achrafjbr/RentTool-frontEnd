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
          initial={{
            y: "12.5rem",
            opacity: 0,
          }}
          animate={{ y: "5rem", opacity: 1 }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            animation: { bounce: 2 },
          }}
          exit={{ opacity: 0, y: "12.5rem" }}
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
