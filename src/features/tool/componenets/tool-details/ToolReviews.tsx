import pic from "../../../../assets/tool.jpeg";

export default function ToolReviews() {
  return (
    <div
      className="bg-white p-3 rounded-2xl border 
        border-gray-100 shadow-md space-y-3  "
    >
      <div className="space-y-4">
        <h2 className="text-lg font-display font-semibold text-gray-900">
          Avis pour cet outil (2)
        </h2>

        {/* This (div) w'll hold list of reviews. */}
        <div className="reviews space-y-6">
          {/* review 1 */}
          <div className="space-y-3">
            <div className="flex  justify-start items-center gap-x-2.5 ">
              <img
                src={pic}
                alt={pic}
                className="size-9 rounded-full shadow border border-gray-100 "
              />
              <div>
                <p className="tracking-wide font-semibold text-sm ">
                  Sophie Dubois
                </p>
                <p className="text-gray-500 text-[10px]">30 Juin 2026</p>
              </div>
            </div>

            <p
              className="text-xs text-gray-600  
              leading-relaxed bg-gray-50/50 p-3
             rounded-xl border border-gray-100/30"
            >
              Matériel en parfait état de fonctionnement ! La Makita a fait des
              merveilles pour percer mes murs en béton armé. Thomas est super
              réactif et donne de très bons conseils.
            </p>
          </div>

          {/* review 2*/}
          <div className="space-y-3">
            <div className="flex  justify-start items-center gap-x-2.5 ">
              <img
                src={pic}
                alt={pic}
                className="size-9 rounded-full shadow border border-gray-100 "
              />
              <div>
                <p className="tracking-wide font-semibold text-sm ">
                  Sophie Dubois
                </p>
                <p className="text-gray-500 text-[10px]">30 Juin 2026</p>
              </div>
            </div>

            <p
              className="text-xs text-gray-600  
              leading-relaxed bg-gray-50/50 p-3
             rounded-xl border border-gray-100/30"
            >
              Matériel en parfait état de fonctionnement ! La Makita a fait des
              merveilles pour percer mes murs en béton armé. Thomas est super
              réactif et donne de très bons conseils.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
