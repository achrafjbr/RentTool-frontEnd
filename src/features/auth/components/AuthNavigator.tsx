import { NavLink } from "react-router-dom";
import { RoutePath } from "../../../routes/routes";

export default function AuthNavigator({
  to,
  title,
}: {
  to: RoutePath;
  title: string;
}) {
  return (
    <NavLink
      className={"text-blue-700 text-center text-xs truncate"}
      to={to}
      replace
    >
      {title}
    </NavLink>
  );
}
