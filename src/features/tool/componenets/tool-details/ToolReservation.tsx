import { Calendar } from "lucide-react";
import { useState } from "react";
import { numberRentalDays } from "../../../../utilis/dates";
import ToolButton from "../ToolButton";
import { ToolStatus, type Tool } from "../../toolTypes";
import { useAppSelector } from "../../../../hooks/reduxHooks";

export default function ToolReservation({ tool }: { tool?: Tool }) {
  const [toolReservation, setToolReservation] = useState({
    startDate: "",
    endDate: "",
  });
  const reservationHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const value = e.target.value;
    const key = e.target.name;
    setToolReservation({ ...toolReservation, [key]: value });
  };
  const rentDays = numberRentalDays(
    new Date(toolReservation.startDate),
    new Date(toolReservation.endDate),
  );

  const isAuthenticated = useAppSelector(
    (state) => state.authentication.isAuthenticated,
  );

  const rentTool = () => {};

  return (
    <div className="relative">
      <div
        className="bg-linear-to-r from-blue-600 via-emerald-400 to-blue-300
          absolute  -top-1.5 p-4 py-8 w-full rounded-2xl border 
        border-gray-100 shadow-lg space-y-3"
      ></div>
      <div
        className=" relative bg-white p-4 py-8 rounded-2xl border 
        border-gray-100 shadow-lg space-y-3 w-full "
      >
        <div className="flex items-center justify-between">
          <p className="uppercase tracking-wider text-gray-600/70 text-xs font-semibold ">
            Tarif Journalier
          </p>
          <div className="flex items-center gap-x-3">
            <span className="font-bold text-2xl">
              {tool?.pricePerDay} <span>€</span>
            </span>
            <span className="tracking-wider text-gray-600/70 text-xs font-semibold ">
              / jour
            </span>
          </div>
        </div>

        {rentDays ? (
          <div
            className="bg-white p-2.5 rounded-lg border 
        border-gray-100 shadow-sm space-y-3 
          transition-transform duration-300
        "
          >
            <div className="flex items-center justify-between text-xs text-gray-500">
              <p className="space-x-1">
                {tool?.pricePerDay} <span>€</span> x {rentDays}{" "}
                <span>jours</span>{" "}
              </p>
              <p>
                {tool ? tool!.pricePerDay * rentDays : ""} <span>€</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">Frais de service ToolRent</p>
              <p className="text-xs uppercase text-emerald-500">Offert</p>
            </div>
            <hr className="px-1.5 bg-red-200" />
            <div className="flex items-center justify-between">
              <p>Total à payer</p>
              <p>
                {tool ? tool.pricePerDay * rentDays : ""} <span>€</span>
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="grid grid-cols-2 gap-3 ">
          <div>
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Début
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                name="startDate"
                type="date"
                value={toolReservation.startDate}
                onChange={(e) => reservationHandler(e)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800 cursor-pointer"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Fin
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                name="endDate"
                type="date"
                value={toolReservation.endDate}
                onChange={(e) => reservationHandler(e)}
                min={
                  toolReservation.startDate ||
                  new Date().toISOString().split("T")[0]
                }
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border
                 border-gray-100 rounded-xl text-xs focus:outline-none 
                 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                  text-gray-800 cursor-pointer"
                required
              />
            </div>
          </div>
        </div>
        <button
          disabled={
            tool?.toolStatus == ToolStatus.RENTED || !isAuthenticated
              ? true
              : false
          }
          className="w-full"
          type="button"
        >
          <ToolButton
            onclick={() => {
              console.log("reserver un tool");
            }}
            prefix={true}
            icon={<Calendar size={20} />}
            title={
              tool?.toolStatus == ToolStatus.RENTED
                ? "demande une location"
                : "actuellement indisponible"
            }
            style={`uppercase rounded-md font-semibold text-white flex 
            justify-center items-center gap-1 p-3 w-full text-xs shadow-lg 
            ${tool?.toolStatus == ToolStatus.RENTED || !isAuthenticated ? "bg-gray-400" : "bg-blue-500"}  `}
          />
        </button>
        <div className="pt-6">
          <p className="text-xs text-center text-gray-700">
            🔒 Transaction 100% Sécurisée
          </p>
          <p className="text-[10px] text-center  text-gray-500">
            Aucun débit tant que le propriétaire n'a pas validé votre demande.
          </p>
        </div>
      </div>
    </div>
  );
}
