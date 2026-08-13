import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "../pages/Auth/SignInPage";
import SignUpPage from "../pages/Auth/SignUpPage";
import AppLayout from "../components/layout/AppLayout";
import AuthLayout from "../components/layout/AuthLayout";
import { RoutePath } from "./routes";
import ToolDetailsPage from "../pages/Tools/ToolDetailsPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import OwnerSpacePage from "../pages/Spaces/OwnerSpacePage";
import RenterSpacePage from "../pages/Spaces/RenterSpacePage";
import NotificationPage from "../pages/NotificationPage";
import AddToolPage from "../pages/Tools/AddToolPage";
import GuestPage from "../pages/GuestPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={RoutePath.HOMEPAGE} element={<HomePage />} />
          <Route
            path={RoutePath.TOOLDETAILSPAGE}
            element={<ToolDetailsPage />}
          />
          <Route path={RoutePath.PROFILEPAGE} element={<ProfilePage />} />
          <Route path={RoutePath.OWNERSPACEPAGE} element={<OwnerSpacePage />} />
          <Route
            path={RoutePath.RENTERSPACEPAGE}
            element={<RenterSpacePage />}
          />
          <Route
            path={RoutePath.NOTIFICATIONPAGE}
            element={<NotificationPage />}
          />

          <Route path={RoutePath.ADDTOOLPAGE} element={<AddToolPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={RoutePath.GUESTPAGE} element={<GuestPage />} />
          <Route path={RoutePath.SIGNINPAGE} element={<SignInPage />} />
          <Route path={RoutePath.SIGNUPPAGE} element={<SignUpPage />} />
          <Route
            path={RoutePath.TOOLDETAILSPAGE}
            element={<ToolDetailsPage />}
          />
          <Route path={RoutePath.PROFILEPAGE} element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
