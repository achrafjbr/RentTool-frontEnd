import { Clock11 } from "lucide-react";
import type { Rental } from "../../../rentalTypes";
import { useNavigate } from "react-router-dom";
import { dateConvertor, numberRentalDays } from "../../../../../utilis/dates";
export default function PendingRequestCard({ rental }: { rental: Rental }) {
  const navigate = useNavigate();
  return (
    <div className="rounded-lg shadow hover:shadow-md p-5 border border-gray-100">
      <div className="grid grid-cols-12 gap-2.5 ">
        <div className="col-span-1 rounded-md ">
          <img
            src={`${import.meta.env.VITE_SERVER_URL}/uploads/tools/${rental.tool.image}`}
            alt={"img"}
            className="size-15 rounded-xl shadow-md object-cover"
          />
        </div>
        <div className="col-span-8 ">
          <p
            className="rounded-md p-0.5 px-2 touch-pan-up w-fit text-xs  font-semibold 
          text-amber-600 bg-amber-400/10 border border-amber-200"
          >
            En attente
          </p>
          <p className="text-sm font-bold tracking-wider capitalize text-black">
            {rental.tool.name}
          </p>
          <div className="flex items-center gap-3">
            <p className="text-gray-500 text-xs font-light">Propriétaire :</p>
            <span
              onClick={() => navigate(`/profile/${rental.owner?._id}`)}
              className="text-blue-500 text-xs font-bold cursor-pointer hover:underline"
            >
              {rental.owner?.fullName}
            </span>
            <span>•</span>
            <span className="text-gray-500 text-xs">
              {`${dateConvertor(rental.startDate)} au ${dateConvertor(rental.endDate)} 
              (${numberRentalDays(new Date(rental.startDate), new Date(rental.endDate))})`}
            </span>
          </div>
        </div>
        <div className="col-span-3 flex flex-col justify-start gap-3.5 items-end">
          <p className="uppercase text-xs text-gray-500 font-semibold">
            Montant total
          </p>
          <span className="text-xl font-black text-black">{`${rental.totalPrice} €`}</span>
          <div
            className="w-fit text-amber-600 bg-amber-400/10 border 
          border-amber-200 rounded-md p-0.5 px-2 flex items-center gap-2"
          >
            <Clock11 size={18} className="text-amber-500" />
            <p className="text-xs font-semibold">En attente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
