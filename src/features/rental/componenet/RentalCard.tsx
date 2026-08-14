import { ShieldCheck } from "lucide-react";
import type React from "react";

export type RentalCardProps = {
  title: string;
  data: number;
  dataColor: string;
  icon: React.JSX.Element;
  iconBackgroundColor: string;
  borderIconColor: string;
};
function RentalCard({
  data,
  title,
  icon,
  dataColor,
  borderIconColor,
  iconBackgroundColor,
}: RentalCardProps) {
  return (
    <div
      className="rounded-2xl border border-gray-100
                bg-white shadow p-4 flex justify-start items-center gap-4"
    >
      <div
        className={`p-2 rounded-xl border ${iconBackgroundColor} ${borderIconColor}`}
      >
        {icon}
      </div>

      <div className="space-y-0.5">
        <p className="uppercase  text-gray-400/60 font-semibold text-[0.71rem] ">
          {title}
        </p>
        <p className={`font-semibold text-xl ${dataColor}`}>{data}</p>
      </div>
    </div>
  );
}

export default RentalCard;
