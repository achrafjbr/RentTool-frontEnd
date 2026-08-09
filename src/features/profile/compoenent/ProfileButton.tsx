import type React from "react";
export type ButtonProps = {
  onclick: () => void;
  title: string;
  icon?: React.JSX.Element;
  style: string;
  prefix: boolean;
};
export default function ProfileButton({
  onclick,
  style,
  title,
  icon,
  prefix,
}: ButtonProps) {
  return (
    <div onClick={onclick} className={`${style} cursor-pointer`}>
      {icon && prefix && icon}
      {title}
      {icon && !prefix && icon}
    </div>
  );
}
