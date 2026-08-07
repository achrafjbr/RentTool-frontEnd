import { ShieldCheck } from "lucide-react";

export default function ToolDescription() {
  return (
    <div
      className="bg-white p-4 rounded-2xl border 
        border-gray-100 shadow-md space-y-3 "
    >
      <div className="space-y-4">
        <h2 className="text-lg font-display font-semibold text-gray-900">
          Description de l'outil
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
          desc: Perceuse visseuse à percussion puissante de 18V. Livrée avec 2
          batteries 5.0Ah et un chargeur rapide. Idéale pour le perçage du
          béton, brique, bois et métal. Mandrin autoserrant de 13 mm, couple de
          serrage maximal de 62 Nm.
        </p>
      </div>
      <div className="border-t border-gray-50 pt-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          Caractéristiques de l'offre
        </h3>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="bg-gray-50/50 p-3 rounded-xl border border-gray-100/50 flex flex-col justify-between">
            <span className="text-gray-400">Ville</span>
            <span className="font-semibold text-gray-800 mt-1">
              city: paris
            </span>
          </div>
          <div className="bg-gray-50/50 p-3 rounded-xl border border-gray-100/50 flex flex-col justify-between">
            <span className="text-gray-400">Catégorie</span>
            <span className="font-semibold text-gray-800 mt-1">
              Perçage & Vissage
            </span>
          </div>

          <div className="bg-gray-50/50 p-3 rounded-xl border border-gray-100/50 flex flex-col justify-between">
            <span className="text-gray-400">Caution</span>
            <span className="font-semibold text-gray-800 mt-1">
              Dépôt de garantie requis
            </span>
          </div>
        </div>
      </div>
      <div
        className="p-4 bg-emerald-50/50 border border-emerald-100/80 rounded-xl 
          flex items-start gap-3"
      >
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-semibold text-emerald-800">
            Garantie Casse & Vol Incluse
          </p>
          <p className="text-[11px] text-emerald-700/80 mt-1 leading-normal">
            Louez sereinement. ToolRent propose une assurance de couverture
            casse ou dysfonctionnement survenue durant votre contrat pour
            assurer une transaction en toute sérénité.
          </p>
        </div>
      </div>
    </div>
  );
}
