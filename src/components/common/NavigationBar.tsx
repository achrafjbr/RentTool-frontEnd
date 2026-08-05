import React from "react";
import { NavLink } from "react-router-dom";
import type { RoutePath } from "../../routes/routes";
export interface NavigationProps {
  bgColor?: string;
  textColor?: string;
  icon?: React.JSX.Element;
  title: string;
  horizontalAlignment: HorizontalAlignment;
  data?: any;
  path: RoutePath;
  style?: string;
}
export enum HorizontalAlignment {
  "START" = "justify-start",
  "CENTRE" = "justify-center",
}

function NavigationBar({
  title,
  horizontalAlignment,
  bgColor,
  icon,
  textColor,
  data,
  path,
  style,
}: NavigationProps) {
  return (
    <div className="my-1.5 w-full rounded-xl p-1 text-xs font-semibold transition-all hover:bg-gray-100">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `
        flex items-center gap-x-3 rounded-xl p-2.5
        ${horizontalAlignment}
        ${textColor}
        ${bgColor}
                ${style}

        ${isActive ? "bg-black text-white" : "text-gray-500 hover:text-black"}
      `
        }
      >
        {icon}

        <span>{title}</span>

        {data && (
          <span
            className="
          ml-auto flex h-5 w-5 items-center justify-center
          rounded-full bg-red-500 text-[10px] text-white
        "
          >
            {data}
          </span>
        )}
      </NavLink>
    </div>
  );
}

export default NavigationBar;
