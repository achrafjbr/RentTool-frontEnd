import { Calendar } from "lucide-react";
import Divider from "../../../../components/common/Divider";
import PendingRequestCard from "./REQUESTS/PendingRequestCard";
import ApprovedRequestCard from "./REQUESTS/ApprovedRequestCard";
import RejectedRequestCard from "./REQUESTS/RejectedRequestCard";
import CompletedRequestCard from "./REQUESTS/CompletedRequestCard";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { RentalStatus } from "../../rentalTypes";
import ReturnedRequestCard from "./REQUESTS/ReturnedRequestCard";

export default function RentalRequests() {
  const { renterRentals } = useAppSelector((state) => state.renter);
  return (
    <div>
      <div className=" flex justify-between items-center gap-0.5">
        <p className="font-semibold text-lg tracking-wider text-gray-400">
          {`Historique complet des demandes (${renterRentals.length})`}
        </p>
      </div>
      <Divider padding="pt-5" />
      {/* REQUESTS : pending,rejected, approved, completed, */}
      {renterRentals.length > 0 ? (
        <div className=" flex flex-col items-center gap-y-5">
          {renterRentals.map((rental) => {
            console.log("rental", rental);
            if (rental.rentalStatus == RentalStatus.PENDING) {
              return <PendingRequestCard key={rental._id} rental={rental} />;
            } else if (rental.rentalStatus == RentalStatus.APPROVED) {
              return <ApprovedRequestCard key={rental._id} rental={rental} />;
            } else if (rental.rentalStatus == RentalStatus.REJECTED) {
              return <RejectedRequestCard key={rental._id} rental={rental} />;
            } else if (rental.rentalStatus == RentalStatus.COMPLETED) {
              return <CompletedRequestCard key={rental._id} rental={rental} />;
            } else if (rental.rentalStatus == RentalStatus.RETURN_REQUESTED) {
              return <ReturnedRequestCard key={rental._id} rental={rental} />;
            }
          })}
        </div>
      ) : (
        <NoLocationFound />
      )}
    </div>
  );
}

export function NoLocationFound() {
  return (
    <div className="w-full p-20 rounded-md border border-gray-200 border-dashed shadow">
      <div className="flex justify-center flex-col items-center gap-3.5">
        <div className="border-gray-100 p-3 rounded-full bg-gray-400/10 ">
          <Calendar className={`text-gray-400`} />
        </div>
        <p className="font-bold text-sm text-center text-gray-400">
          Aucune demande enregistrée.
        </p>
      </div>
    </div>
  );
}
