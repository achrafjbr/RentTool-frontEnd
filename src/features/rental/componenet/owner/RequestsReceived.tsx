import { Calendar } from "lucide-react";
import Divider from "../../../../components/common/Divider";
import PendingOwnerRequestCard from "./REQUESTS/PendingOwnerRequestCard";
import { selectReceivedRentalRequests } from "../../rentalSlices/ownerSlice";
import { useSelector } from "react-redux";

export default function RequestsReceived() {
  const receivedRentalRequests = useSelector(selectReceivedRentalRequests);
  return (
    <div>
      <p className="font-semibold text-lg tracking-wider text-gray-400">
        Demandes en attente de décision (0)
      </p>

      <Divider padding="pt-5" />
      {receivedRentalRequests.length == 0 ? (
        <NoRentalRequestFound />
      ) : (
        receivedRentalRequests.map((rental) => (
          <PendingOwnerRequestCard key={rental._id} rental={rental} />
        ))
      )}
    </div>
  );
}

export function NoRentalRequestFound() {
  return (
    <div className="w-full p-20 rounded-lg border border-gray-200 border-dashed shadow ">
      <div className="flex justify-center flex-col items-center gap-3.5">
        <div className="border-gray-100 p-3 rounded-full bg-gray-400/10  ">
          <Calendar className={`text-gray-400`} />
        </div>
        <p className="font-bold text-sm text-center text-gray-400 space-y-1.5">
          Aucune nouvelle demande de location en attente.
        </p>
        <p className="font-light text-sm text-center text-gray-400">
          Lorsqu'un locataire formule une demande de réservation sur l'un de vos
          outils, elle apparaîtra directement ici.
        </p>
      </div>
    </div>
  );
}
