export default function ProfileDescription() {
  return (
    <div
      className=" bg-white p-4  rounded-2xl border 
        border-gray-100 shadow-md space-y-3  "
    >
      <h2 className="space-y-3.5 font-bold tracking-widest">
        À propos de Alexandre
      </h2>
      <p className="tracking-wider italic text-[0.9rem] text-gray-500">
        ToolRent certifie que cet utilisateur a vérifié son numéro de téléphone,
        son adresse e-mail et ses détails de facturation pour des locations
        sereines.
      </p>
    </div>
  );
}
