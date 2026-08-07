import { Award, MessageSquare, Phone } from "lucide-react";
import pic from "../../../../assets/tool.jpeg";
import ContactCard from "./ContactCard";

export default function ToolOwnerCard() {
  return (
    <div
      className="bg-white p-3 py-6 rounded-2xl border 
        border-gray-100 shadow-md  "
    >
      <div className="flex items-center gap-3.5 h-full">
        <img src={pic} alt={pic} className="size-16 rounded-full " />

        <div>
          <div className="inline-flex gap-x-1.5 ">
            <div className="tracking-wide font-semibold text-sm ">
              Sophie Dubois
            </div>
            <Award className="text-blue-400 mt-1" size={15} />
          </div>
          <p className="text-gray-500/70 font-extralight text-[12px]">
            inscrit(e) depuis 2025
          </p>
          <p className="text-gray-500/70 font-extralight text-[12px]">
            Voir le profil
          </p>
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
