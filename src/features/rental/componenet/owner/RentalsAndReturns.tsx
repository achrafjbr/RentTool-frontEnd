import { Calendar } from "lucide-react";
import Divider from "../../../../components/common/Divider";
import ReturnedRequestCard from "./REQUESTS/ReturnedRequestCard";

export default function RentalsAndReturns() {
  return (
    <div>
      <p className="font-semibold text-lg tracking-wider text-gray-400">
        Locations en cours & déclarations de retour (0)
      </p>
      <Divider padding="pt-5" />
      {/* <ReturnedRequestCard rental={} /> */}
      <NoReturedRequestFound />
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
