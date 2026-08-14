import { CircleCheck, MessageCircle, RotateCcw } from "lucide-react";
import tool from "../../../../../assets/charaf.jpg";

export default function AprovedActiveRequstCard() {
  return (
    <div className="rounded-lg shadow hover:shadow-md p-5 border border-gray-100">
      <div className="grid grid-cols-12 gap-2.5 ">
        <div className="col-span-1 rounded-md ">
          <img
            // src={`${import.meta.env.VITE_SERVER_URL}/uploads/users/${user!.picture}`}
            src={tool}
            alt={"user!.picture"}
            className="size-15 rounded-xl shadow-md object-cover"
          />
        </div>
        <div className="col-span-8 ">
          <div
            className="rounded-md p-0.5 px-2 w-fit
             bg-green-400/10 border border-green-200 flex items-center gap-x-1.5"
          >
            <CircleCheck size={16} className="text-green-500" />
            <p className="text-xs font-semibold text-green-600">
              Location Approuvées
            </p>
          </div>
          <p className="text-sm font-bold tracking-wider capitalize text-black">
            Scie Circulaire Bosch Professional GKS 190
          </p>
          <div className="flex items-center gap-3">
            <p className="text-gray-500 text-xs font-light">Propriétaire :</p>
            <span
              onClick={() => {
                console.log("go to profile...");
              }}
              className="text-blue-500 text-xs font-bold cursor-pointer hover:underline"
            >
              Thomas Bernard
            </span>
            <span>•</span>
            <span className="text-gray-500 text-xs">
              2026-07-22 au 2026-07-24 (2j)
            </span>
          </div>
        </div>
        <div className="col-span-3 flex flex-col justify-start gap-3.5 items-end">
          <p className="uppercase text-xs text-gray-500 font-semibold">
            Montant total
          </p>
          <span className="text-xl font-black text-black">40 €</span>
        </div>
      </div>
      {/* rendu  & contact btns */}
      <div className="flex items-center justify-end gap-3.5 ml-auto w-full">
        {/* return tool btn */}
        <div
          onClick={() => console.log("rendu")}
          className="w-fit cursor-pointer bg-blue-600 rounded-xl py-1.5 px-5 flex items-center gap-2"
        >
          <RotateCcw size={18} className="text-white" />
          <p className="text-xs font-semibold text-white">J'ai rendu l'outil</p>
        </div>
        {/* contact btn */}
        <div
          onClick={() => console.log("contact")}
          className="w-fit cursor-pointer bg-green-400/10 rounded-xl py-1.5 px-5 flex items-center gap-2"
        >
          <MessageCircle size={18} className="text-green-400" />
          <p className="text-xs font-semibold text-green-500">Contacter</p>
        </div>
      </div>
    </div>
  );
}
