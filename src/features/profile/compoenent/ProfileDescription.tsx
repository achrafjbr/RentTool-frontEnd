import type { UserProfile } from "../profileTypes";

export default function ProfileDescription(profile?: { profile: UserProfile }) {
  return (
    <div
      className=" bg-white p-4  rounded-2xl border 
        border-gray-100 shadow-md space-y-3  "
    >
      <h2 className="space-y-3.5 font-bold tracking-widest">
        {`À propos de ${profile?.profile?.fullName}`}
      </h2>
      <p className="tracking-wider italic text-[0.9rem] text-gray-500">
        {profile?.profile?.bio ?? "Aucune biographie rédigée pour le moment."}
      </p>
    </div>
  );
}
