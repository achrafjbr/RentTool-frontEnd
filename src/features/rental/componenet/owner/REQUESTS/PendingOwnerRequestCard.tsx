import { Check, CircleCheck, X } from "lucide-react";
import type { Rental } from "../../../rentalTypes";
import { useNavigate } from "react-router-dom";
import { dateConvertor, numberRentalDays } from "../../../../../utilis/dates";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { approveRentRequest, rejectRentRequest } from "../../../rentalThunks";
export default function PendingOwnerRequestCard({
  rental,
}: {
  rental: Rental;
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  console.log("rental", rental);
  return (
    <div className="rounded-lg shadow hover:shadow-md p-5 border border-gray-100">
      <div className="grid grid-cols-12 gap-2.5 ">
        <div className="col-span-1 rounded-md ">
          <div className="relative h-full">
            {rental.renter?.picture && (
              <div className="absolute bottom-0 right-0 border border-green-500 ">
                <img
                  src={`${import.meta.env.VITE_SERVER_URL}/uploads/users/${rental!.renter?.picture}`}
                  alt={"img"}
                  className=" size-10 rounded-full shadow-md object-cover"
                />
              </div>
            )}

            <img
              src={`${import.meta.env.VITE_SERVER_URL}/uploads/tools/${rental!.tool.image}`}
              alt={"user!.picture"}
              className=" size-15 rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
        <div className="col-span-8">
          <div
            className="rounded-md p-0.5 px-2 w-fit
             bg-amber-400/10 border border-amber-200 flex items-center gap-x-1.5"
          >
            <CircleCheck size={16} className="text-amber-500" />
            <p className="text-xs font-semibold text-amber-600">En attente</p>
          </div>
          <p className="text-sm font-bold tracking-wider capitalize text-black">
            {rental!.tool.name}
          </p>
          <div className="flex items-center gap-3">
            <p className="text-gray-500 text-xs font-light">Demander por :</p>
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
          <p className="uppercase text-xs text-gray-500 font-semibold">
            Montant total
          </p>
          <span className="text-xl font-black text-black">{`${rental.totalPrice} €`}</span>
        </div>
      </div>
      {/* refuse & accept btns */}
      <div className="flex items-center justify-end gap-3.5 ml-auto w-full">
        {/* refuse btn */}
        <div
          onClick={() => dispatch(rejectRentRequest(rental._id))}
          className="w-fit cursor-pointer bg-red-400/10 rounded-xl py-1.5 px-5 
          flex items-center gap-2"
        >
          <X size={18} className="text-red-600" />
          <p className="text-xs font-semibold text-red-500">Refuser</p>
        </div>

        {/* accept btn */}
        <div
          onClick={() => dispatch(approveRentRequest(rental._id))}
          className="w-fit cursor-pointer bg-green-400 rounded-xl 
          py-1.5 px-5 flex items-center gap-2"
        >
          <Check size={18} className="text-white" />
          <p className="text-xs font-semibold text-white">Approver</p>
        </div>
      </div>
    </div>
  );
}
