import { Award, CameraOff, MessageSquare, Phone } from "lucide-react";
import ContactCard from "./ContactCard";
import type { Owner } from "../../toolTypes";
import { useNavigate } from "react-router-dom";

export default function ToolOwnerCard({ owner }: { owner?: Owner }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white p-3 py-6 rounded-2xl border 
        border-gray-100 shadow-md "
    >
      <div className="flex items-center gap-3.5 h-full">
        <div
          onClick={() => navigate(`/profile/${owner?._id}`)}
          className="flex items-center gap-3.5 cursor-pointer "
        >
          {owner?.picture == null ? (
            <CameraOff className="size-16 rounded-full" />
          ) : (
            <img
              src={`${import.meta.env.VITE_SERVER_URL}/uploads/users/${owner!.picture}`}
              alt={owner!.picture}
              className="size-16 rounded-full"
            />
          )}
          <div>
            <div className="inline-flex gap-x-1.5 hover:text-blue-600  ">
              <div className="tracking-wide font-semibold text-sm ">
                {owner?.fullName}
              </div>
              <Award className="text-blue-400 mt-1" size={15} />
            </div>
            <p className="text-gray-500/70 font-extralight text-[12px]">
              {`inscrit(e) depuis ${owner?.createdAt.split("-")[0]}`}
            </p>
            <p className="text-gray-500/70 font-extralight text-[12px]">
              Voir le profil
            </p>
          </div>
        </div>

        <div className="ml-auto space-y-2">
          <ContactCard
            onClick={() => {
              console.log("Appeler");
            }}
            title="Appeler"
            bgColor="bg-gray-50"
            textColor="text-gray-400"
            icon={<Phone size={15} className="text-gray-500" />}
          />
          <ContactCard
            onClick={() => {
              console.log("WhatsApp");
            }}
            title="WhatsApp"
            bgColor="bg-emerald-50"
            textColor="text-emerald-500"
            icon={<MessageSquare size={15} className=" text-emerald-500" />}
          />
        </div>
      </div>
    </div>
  );
}
