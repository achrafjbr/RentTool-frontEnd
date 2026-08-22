import type React from "react";
import { ToolStatus } from "../toolTypes";
import { motion } from "motion/react";
export type ButtonProps = {
  onclick: () => void;
  title: string;
  icon?: React.JSX.Element;
  style: string;
  prefix: boolean;
  toolStatus?: ToolStatus;
};
export default function ToolButton({
  onclick,
  style,
  title,
  icon,
  prefix,
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 0.95,
        y: -2,
      }}
      transition={{
        type: "spring",
        duration: 1000,
        stiffness: 150,
      }}
      onClick={onclick}
      className={`${style} cursor-pointer`}
    >
      {icon && prefix && icon}
      {title}
      {icon && !prefix && icon}
    </motion.div>
  );
}
