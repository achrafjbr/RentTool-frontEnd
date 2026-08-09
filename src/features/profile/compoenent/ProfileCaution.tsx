import { ShieldCheck } from "lucide-react";

export default function ProfileCaution() {
  return (
    <div
      className="bg-emerald-50/40 border border-emerald-100 p-4 
        rounded-2xl flex items-start gap-3"
    >
      <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
      <div>
        <p className="text-xs font-semibold text-emerald-900">
          Identité & Coordonnées validées
        </p>
        <p className="text-[10px] text-emerald-700/80 mt-1 leading-normal">
          ToolRent certifie que cet utilisateur a vérifié son numéro de
          téléphone, son adresse e-mail et ses détails de facturation pour des
          locations sereines.
        </p>
      </div>
    </div>
  );
}
