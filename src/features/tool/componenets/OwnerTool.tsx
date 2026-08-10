import { ToolStatus, type Tool } from "../toolTypes";
import Divider from "../../../components/common/Divider";
import { MapPin } from "lucide-react";
import ToolButton from "./ToolButton";
import { useNavigate } from "react-router-dom";
export default function OwnerTool({
  description,
  name,
  owner,
  image,
  pricePerDay,
  toolStatus,
  category,
  _id,
}: Tool) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-2xl border border-gray-100
         hover:border-gray-200/80 shadow-sm hover:shadow-md
          transition-all overflow-hidden flex flex-col group"
    >
      <div className="relative aspect-video bg-gray-100 overflow-hidden shrink-0">
        {/* image */}
        <img
          src={`${import.meta.env.VITE_SERVER_URL}/uploads/tools/${image}`}
          alt={image}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* availabilty */}
        <div className="absolute top-3 left-3">
          {toolStatus == ToolStatus.RENTED ? (
            <div
              className="inline-flex items-center gap-x-1.5  gap-1.5 px-2.5 py-1 bg-[#ecfdf5] text-[10px] 
            font-semibold uppercase tracking-wider shadow-sm rounded-full"
            >
              <span className="size-2 rounded-full text-amber-700 "></span>
              <span
                className="bg-amber-50  border-amber-100'
                          : 'bg-rose-50 text-rose-700 border border-rose-100' "
              >
                en cours
              </span>
            </div>
          ) : (
            <div
              className="inline-flex items-center gap-x-1.5 gap-1.5 px-2.5 py-1 bg-[#ecfdf5] text-[10px] 
            font-semibold uppercase tracking-wider shadow-sm rounded-full"
            >
              <span className="size-2 rounded-full bg-green-500"></span>
              <span className="text-green-500 text-md tracking-tight leading-relaxed ">
                disponible
              </span>
            </div>
          )}
        </div>

        {/* tool name */}
        <div className="absolute bottom-3 left-3">
          <span
            className="bg-white/80 backdrop-blur-md text-gray-800 text-[10px] 
            font-medium px-2 py-0.5 rounded-md border border-white/20"
          >
            {category}
          </span>
        </div>
      </div>

      <Divider padding="sm:pt-6 pt-3" />

      <div className="p-5 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{owner.city}</span>
            <span>•</span>
            <span>{`Propriétaire : ${owner.fullName}`}</span>
          </div>

          <h3 className="font-display font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1 leading-snug">
            {name}
          </h3>

          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 leading-none">
              Prix par jour
            </p>
            <p className="text-lg font-bold text-gray-900 font-mono mt-1">
              <span className="text-xs font-normal text-gray-500">{`${pricePerDay}€/j`}</span>
            </p>
          </div>

          <ToolButton
            onclick={() => navigate(`/tool-details/${_id}`)}
            prefix
            title="Voir les détails"
            style="bg-gray-950 hover:bg-blue-600 text-white font-medium 
            text-xs rounded-xl px-4 py-2 transition-all shadow-sm 
            hover:shadow-md cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
