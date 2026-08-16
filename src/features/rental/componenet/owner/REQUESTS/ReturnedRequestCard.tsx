import { useNavigate } from "react-router-dom";
import type { Rental } from "../../../rentalTypes";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { CircleCheck, MessageCircle, RotateCcw } from "lucide-react";
import { dateConvertor, numberRentalDays } from "../../../../../utilis/dates";
import { confirmReturnRentRequest } from "../../../rentalThunks";

export default function ReturnedRequestCard({ rental }: { rental: Rental }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
              Restitution Déclarée par le Locataire
            </p>
          </div>
          <p className="text-sm font-bold tracking-wider capitalize text-black">
            {rental!.tool.name}
          </p>
          <div className="flex items-center gap-3">
            <p className="text-gray-500 text-xs font-light">Locatair :</p>
            <span
              onClick={() => navigate(`/profile/${rental.renter?._id}`)}
              className="text-blue-500 text-xs font-bold cursor-pointer hover:underline"
            >
              {rental.renter?.fullName}
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
      {/* contact & return confirmation btns */}
      <div className="flex items-center justify-end gap-3.5 ml-auto w-full">
        {/* contact btn */}
        <div
          onClick={() => dispatch(confirmReturnRentRequest(rental._id))}
          className="w-fit cursor-pointer bg-green-400/10 border border-green-100 rounded-xl py-1.5 px-5 
          flex items-center gap-2"
        >
          <MessageCircle size={18} className="text-green-500" />
          <p className="text-xs font-semibold text-green-500">
            J'ai rendu l'outil
          </p>
        </div>

        {/* accept btn */}
        <div
          onClick={() => console.log("accept")}
          className="w-fit cursor-pointer bg-purple-400 rounded-xl 
          py-1.5 px-5 flex items-center gap-2 border-purple-100"
        >
          <CircleCheck size={18} className="text-white" />
          <p className="text-xs font-semibold text-white">
            Confirmer la restitution
          </p>
        </div>
      </div>
    </div>
  );
}
