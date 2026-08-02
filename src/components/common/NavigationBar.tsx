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
    <NavLink
      to={path}
      style={({ isActive }) => ({
        color: isActive ? "white" : "gray",
        backgroundColor: isActive ? "black" : "transparent",
      })}
      className={` ${style} w-full transition-all text-xs font-semibold
        rounded-xl flex flex-col my-1.5 p-2.5 
      ${horizontalAlignment} 
      ${textColor} ${bgColor} 
      ${textColor} `}
    >
      <div className="flex gap-x-3 items-center">
        {icon}
        <div>{title}</div>
        {data && (
          <div
            className=" ml-auto bg-red-500 text-xs p-1 h-4 w-4
           text-white flex justify-center items-center 
           rounded-full"
          >
            {data}
          </div>
        )}
      </div>
    </NavLink>
  );
}

export default NavigationBar;
