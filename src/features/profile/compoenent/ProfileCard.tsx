import {
  Award,
  Calendar,
  CameraOff,
  Edit,
  Mail,
  MapPin,
  Phone,
  UserRoundPen,
} from "lucide-react";
import Divider from "../../../components/common/Divider";
import ProfileButton from "./ProfileButton";
import { useAppSelector } from "../../../hooks/reduxHooks";
import type { UserProfile } from "../profileTypes";
export default function ProfileCard({
  onclick,
  profile,
}: {
  profile?: UserProfile;
  onclick: () => void;
}) {
  const { isAuthenticated, user } = useAppSelector(
    (state) => state.authentication,
  );
  return (
    <div className="relative">
      <div
        className="bg-linear-to-r from-blue-600 via-emerald-400 to-blue-300
          absolute z-0  -top-1.5 p-3 py-8 w-full rounded-2xl border 
        border-gray-100 shadow-lg space-y-3"
      ></div>
      <div
        className=" relative bg-white p-2 rounded-2xl border 
        border-gray-100 shadow-md space-y-3"
      >
        <Divider padding="sm:pt-5 pt-3" />
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="relative p-2 size-26 bg-gray-100 shadow-2xl shadow-white rounded-full">
            {isAuthenticated && user?._id == profile?._id && (
              <div
                onClick={onclick}
                className="cursor-pointer absolute bg-blue-500 bottom-0 right-1 p-1 rounded-full"
              >
                <UserRoundPen size={20} color="white" />
              </div>
            )}

            {profile?.picture == null ? (
              <CameraOff className="size-24 rounded-full" />
            ) : (
              <img
                src={`${import.meta.env.VITE_SERVER_URL}/uploads/users/${profile!.picture}`}
                alt={profile!.picture}
                className="size-24 object-cover textc rounded-full"
              />
            )}
          </div>

          <div className="inline-flex gap-x-1.5 hover:text-blue-600">
            <div className="tracking-wider font-semibold text-lg ">
              {profile?.fullName}
            </div>
            <Award className="text-blue-400 mt-1" size={20} />
          </div>
        </div>
        <div className="flex pl-3 flex-col items-start gap-3.5">
          <div className="flex shrink-0 items-center gap-3.5">
            <MapPin size={20} className="text-gray-400" />{" "}
            <p className="text-xs text-gray-600">
              {profile?.city ?? "Non spécifiée"}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3.5">
            <Calendar size={20} className="text-gray-400" />{" "}
            <p className="text-xs text-gray-600">{`Membre depuis  ${profile?.createdAt.split("T")[0]}`}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3.5">
            <Phone size={20} className="text-gray-400" />{" "}
            <p className="text-xs text-gray-600">{profile?.phone}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3.5">
            <Mail size={20} className="text-gray-400" />{" "}
            <p className="text-xs text-gray-600">{profile?.email}</p>
          </div>
        </div>
        <Divider padding="sm:pt-2.5 pt-1.5" />

        {isAuthenticated && user?._id == profile?._id && (
          <div className="flex justify-center items-center">
            <ProfileButton
              prefix={true}
              onclick={onclick}
              title="Modifier mon profil"
              style="bg-white text-gray-500 text-xs w-[70%] gap-3 
          rounded-lg shadow-md
         border border-gray-200
         flex items-center justify-center p-2"
              icon={<Edit size={20} className="text-gray-300 " />}
            />
          </div>
        )}
        <Divider padding="sm:pt-2.5 pt-1.5" />
      </div>
    </div>
  );
}
