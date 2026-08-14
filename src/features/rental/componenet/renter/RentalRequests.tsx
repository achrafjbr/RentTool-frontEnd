import { Calendar } from "lucide-react";
import Divider from "../../../../components/common/Divider";
import PendingRequestCard from "./REQUESTS/PendingRequestCard";
import ApprovedRequestCard from "./REQUESTS/ApprovedRequestCard";
import RejectedRequestCard from "./REQUESTS/RejectedRequestCard";
import CompletedRequestCard from "./REQUESTS/CompletedRequestCard";

export default function RentalRequests() {
  return (
    <div>
      <div className=" flex justify-between items-center gap-0.5">
        <p className="font-semibold text-lg tracking-wider text-gray-400">
          Historique complet des demandes (3)
        </p>
      </div>
      <Divider padding="pt-5" />
      {/* REQUESTS : rejected, approved, completed, */}
      <div className=" flex flex-col items-center gap-y-5">
        <PendingRequestCard />
        <ApprovedRequestCard />
        <RejectedRequestCard />
        <CompletedRequestCard />
      </div>
      {/* If there's no approved request found i'll apply this componenet. */}
      {/* <NoLocationFound /> */}
    </div>
  );
}

export function NoLocationFound() {
  return (
    <div className="w-full p-20 rounded-md border border-gray-200 border-dashed shadow">
      <div className="flex justify-center flex-col items-center gap-3.5">
        <div className="border-gray-100 p-3 rounded-full bg-gray-400/10 ">
          <Calendar size-25 className={`text-gray-400`} />
        </div>
        <p className="font-bold text-sm text-center text-gray-400">
          Aucune demande enregistrée.
        </p>
      </div>
    </div>
  );
}
