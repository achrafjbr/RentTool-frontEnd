import type React from "react";
export type ContactCard = {
  bgColor: string;
  textColor: string;
  icon: React.JSX.Element;
  title: string;
  onClick: () => void;
};
function ContactCard({
  onClick,
  title,
  bgColor,
  icon,
  textColor,
}: ContactCard) {
  return (
    <div
      onClick={onClick}
      className={` flex justify-center items-center gap-x-1 py-1 px-1.5
     rounded-sm shadow ${bgColor} cursor-pointer`}
    >
      {icon}
      <p className={`text-xs font-light ${textColor}`}>{title}</p>
    </div>
  );
}

export default ContactCard;
