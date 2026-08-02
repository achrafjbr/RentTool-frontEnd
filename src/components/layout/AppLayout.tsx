import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function AppLayout() {
  return (
    <aside className="h-screen grid grid-cols-1 sm:grid-cols-[1fr_4fr] gap-6">
      <SideBar />
      <main>
        <Outlet />
      </main>
    </aside>
  );
}
