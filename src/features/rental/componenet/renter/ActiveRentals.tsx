import { Wrench } from "lucide-react";
import ToolButton from "../../../tool/componenets/ToolButton";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../../routes/routes";
import Divider from "../../../../components/common/Divider";
import AprovedActiveRequstCard from "./REQUESTS/AprovedActiveRequstCard";
import { useAppSelector } from "../../../../hooks/reduxHooks";

export default function ActiveRentals() {
  const { activeRentals } = useAppSelector((state) => state.renter);
  return (
    <div>
      <div className=" flex justify-between items-center gap-0.5">
        <p className="font-semibold text-lg tracking-wider text-gray-400">
          {` Locations en cours (${activeRentals.length})`}
        </p>
        <p className="text-gray-400 text-xs">
          Déclarez la restitution de vos outils une fois votre travail terminé
        </p>
      </div>

      <Divider padding="pt-5" />
      {activeRentals.length > 0 ? (
        activeRentals.map((rental) => (
          <AprovedActiveRequstCard key={rental._id} rental={rental} />
        ))
      ) : (
        <NoRequestFound />
      )}
    </div>
  );
}

export function NoRequestFound() {
  const navigate = useNavigate();
  return (
    <div className="w-full p-20 rounded-md border border-gray-200 border-dashed shadow">
      <div className="flex justify-center flex-col items-center gap-3.5">
        <div className="border-green-100 p-3 rounded-full bg-green-400/10 ">
          <Wrench className={`text-green-400`} />
        </div>
        <p className="font-semibold text-xs text-center">
          Aucune location active actuellement
        </p>
        <p className="font-light text-xs text-center">
          Dès qu'un propriétaire approuve votre demande de location, l'outil
          apparaîtra ici et vous pourrez gérer sa restitution.
        </p>
        <ToolButton
          onclick={() => navigate(RoutePath.HOMEPAGE)}
          prefix={false}
          style=" rounded-2xl bg-blue-500 shadow-xl text-white p-2"
          title="Explorer le catalogue"
        />
      </div>
    </div>
  );
}
