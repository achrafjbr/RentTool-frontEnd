import Divider from "../components/common/Divider";
import ProfileCard from "../features/profile/compoenent/ProfileCard";
import ProfileDescription from "../features/profile/compoenent/ProfileDescription";
import BackIcon from "../features/tool/componenets/BackIcon";
import { useAppSelector } from "../hooks/reduxHooks";
import { RoutePath } from "../routes/routes";
import ProfileCaution from "../features/profile/compoenent/ProfileCaution";
import OwnerTools from "../features/profile/compoenent/OwnerTools";
import ToolReviews from "../features/reviews/componenets/ToolReviews";
import { useState } from "react";

export default function ProfilePage() {
  const isAuthenticated = useAppSelector(
    (state) => state.authentication.isAuthenticated,
  );
  const back = isAuthenticated ? RoutePath.HOMEPAGE : RoutePath.GUESTPAGE;
  const [isProfileModificationOpend, setIsProfileModificationOpend] =
    useState<boolean>(false);
  const isOpenProfile = () => {
    console.log(isProfileModificationOpend);
    setIsProfileModificationOpend((prev) => !prev);
  };
  return (
    <div className="text-black sm:pl-13 pl-8 sm:pt-10 w-[95%]">
      <div className="flex items-center justify-between ">
        <BackIcon path={back} />
        <div className="rounded-2xl border bg-gray-50 border-gray-100 text-gray-500 py-0.5 px-2">
          Profil #u1
        </div>
      </div>

      <Divider padding="sm:pt-8 pt-5" />

      <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
        <div className="lg:col-span-3 flex flex-col gap-4">
          <ProfileCard onclick={isOpenProfile} />
          <ProfileCaution />
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          {isProfileModificationOpend ? (
            <div>Modification</div>
          ) : (
            <div className="lg:col-span-5 flex flex-col gap-4">
              <ProfileDescription />
              <OwnerTools />
              <ToolReviews reviews={[]} />
            </div>
          )}
        </div>
      </div>

      <Divider padding="sm:pt-5 pt-3" />
    </div>
  );
}
