import { CameraOffIcon, LogOut, PowerOffIcon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { logout } from "../features/auth/authSlice";
import { RoutePath } from "../routes/routes";
import { useNavigate } from "react-router-dom";

export default function ProfileCard() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAppSelector(
    (state) => state.authentication,
  );
  return (
    <div
      className="mt-auto flex flex-col justify-evenly h-30 
    rounded-lg p-2 shadow-2xl "
    >
      <div
        className="space-y-3 "
        onClick={() => {
          navigate(`/profile/${user?._id}`);
        }}
      >
        <div
          className="ease-in-out
         hover:scale-105 transition-transform duration-500
        cursor-pointer flex gap-x-2.5"
        >
          <div>
            {user?.picture == null ? (
              <CameraOffIcon color="black" className="size-11 rounded-full" />
            ) : (
              <img
                src={`${import.meta.env.VITE_SERVER_URL}/uploads/users/${user!.picture}`}
                alt={user!.picture}
                className="size-11 rounded-full"
              />
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-xs font-bold text-black truncate leading-snug hover:text-blue-600 transition-colors">
              {user?.fullName}
            </div>
            <div className="text-[10px] text-gray-400 truncate leading-none mt-0.5">
              Mon profil
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="flex gap-1 items-center justify-center">
            <PowerOffIcon size={15} color="purple" />
            <div className="text-xs  text-gray-900 truncate leading-snug">
              Compte particulier
            </div>
          </div>
          <div
            onClick={() => {
              dispatch(logout());
              navigate(RoutePath.SIGNINPAGE);
            }}
            className=" cursor-pointer flex gap-1 items-center justify-center"
          >
            <LogOut size={15} color="red" />
            <div className="text-xs hover:decoration-red-700 hover:decoration-2  hover:underline-offset-4 font-light text-red-700">
              Quitter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
