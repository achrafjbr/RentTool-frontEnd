import { useNavigate } from "react-router-dom";
import type { Rental } from "../../../rentalTypes";
import { RotateCcw } from "lucide-react";
import { dateConvertor, numberRentalDays } from "../../../../../utilis/dates";

export default function ReturnedRequestCard({ rental }: { rental: Rental }) {
  const navigate = useNavigate();
  return (
    <div className="rounded-lg shadow hover:shadow-md p-5 border border-gray-100">
      <div className="grid grid-cols-12 gap-2.5 ">
        <div className="col-span-1 rounded-md ">
          <img
            src={`${import.meta.env.VITE_SERVER_URL}/uploads/tools/${rental!.tool.image}`}
            alt={"user!.picture"}
            className="size-15 rounded-xl shadow-md object-cover"
          />
        </div>
        <div className="col-span-8">
          <div
            className="rounded-md p-0.5 px-2 w-fit animate-bounce
             bg-purple-400/10 border border-purple-200 flex items-center gap-x-1.5"
          >
            <RotateCcw size={16} className="text-purple-500" />
            <p className="text-xs font-semibold text-purple-600">
              En cours de confirmation de retour
            </p>
          </div>
          <p className="text-sm font-bold tracking-wider capitalize text-black">
            {rental!.tool.name}
          </p>
          <div className="flex items-center gap-3">
            <p className="text-gray-500 text-xs font-light">Demander par :</p>
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
          <p className="uppercase text-xs text-gray-500 font-semibold">Total</p>
          <span className="text-xl font-black text-black">{`${rental.totalPrice} €`}</span>
        </div>
      </div>
    </div>
  );
}
