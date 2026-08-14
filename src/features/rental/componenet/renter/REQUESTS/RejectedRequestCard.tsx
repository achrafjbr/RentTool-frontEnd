import tool from "../../../../../assets/charaf.jpg";

export default function RejectedRequestCard() {
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
          <p
            className="rounded-md p-0.5 px-2 touch-pan-up w-fit text-xs  font-semibold 
          text-red-600 bg-red-400/10 border border-red-200"
          >
            Refusé
          </p>
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
          <div
            className="w-fit text-red-600 bg-red-400/10 border 
          border-red-200 rounded-md p-0.5 px-2 flex items-center gap-2"
          >
            <p className="text-xs font-semibold">Refusé</p>
          </div>
        </div>
      </div>
    </div>
  );
}
