import { Calendar } from "lucide-react";
import Divider from "../../../../components/common/Divider";
import ReturnedRequestCard from "./REQUESTS/ReturnedRequestCard";
import { useSelector } from "react-redux";
import {
  selectApprovedRentalRequests,
  selectReturnedRentalRequests,
} from "../../rentalSlices/ownerSlice";
import { RentalStatus } from "../../rentalTypes";
import ApprovedRequestsCard from "./REQUESTS/ApprovedRequestCard";

export default function RentalsAndReturns() {
  const retrunedRentalRequests = useSelector(selectReturnedRentalRequests);
  const approvedRentalRequests = useSelector(selectApprovedRentalRequests);
  const requests = [...retrunedRentalRequests, ...approvedRentalRequests];

  return (
    <div>
      <p className="font-semibold text-lg tracking-wider text-gray-400">
        {`Locations en cours & déclarations de retour (${requests.length})`}
      </p>
      <Divider padding="pt-5" />
      {requests.length == 0 ? (
        <NoReturedRequestFound />
      ) : (
        requests.map((rental) =>
          rental.rentalStatus == RentalStatus.RETURN_REQUESTED ? (
            <ReturnedRequestCard key={rental._id} rental={rental} />
          ) : (
            <ApprovedRequestsCard key={rental._id} rental={rental} />
          ),
        )
      )}
    </div>
  );
}

export function NoReturedRequestFound() {
  return (
    <div className="w-full p-20 rounded-lg border border-gray-200 border-dashed shadow ">
      <div className="flex justify-center flex-col items-center gap-3.5">
        <div className="border-gray-100 p-3 rounded-full bg-gray-400/10  ">
          <Calendar className={`text-gray-400`} />
        </div>
        <p className="font-bold text-sm text-center text-gray-400 space-y-1.5">
          Aucune location en cours pour le moment.
        </p>
        <p className="font-light text-sm text-center text-gray-400">
          Les réservations validées apparaîtront ici.
        </p>
      </div>
    </div>
  );
}
