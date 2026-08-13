import Divider from "../components/common/Divider";
import ProfileCard from "../features/profile/compoenent/ProfileCard";
import ProfileDescription from "../features/profile/compoenent/ProfileDescription";
import BackIcon from "../features/tool/componenets/BackIcon";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { RoutePath } from "../routes/routes";
import ProfileCaution from "../features/profile/compoenent/ProfileCaution";
import OwnerTools from "../features/profile/compoenent/OwnerTools";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileMofication from "../features/profile/compoenent/ProfileMofication";
import { getUserById } from "../features/profile/profileThunks";
import { getUserReviews } from "../features/reviews/userReviews/userReviewThunks";
import type { FailureResponse } from "../types/failureResoponse";
import toast from "react-hot-toast";
import Loader from "../components/common/Loader";
import { myTools } from "../features/tool/toolThunks";
import UserReviews from "../features/reviews/componenets/UserReviews";

export default function ProfilePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.authentication);
  const back = isAuthenticated ? RoutePath.HOMEPAGE : RoutePath.GUESTPAGE;

  const [isProfileModificationOpend, setIsProfileModificationOpend] =
    useState<boolean>(false);
  const isOpenProfile = () => setIsProfileModificationOpend((prev) => !prev);

  useEffect(() => {
    try {
      if (!id) {
        return;
      }
      dispatch(getUserById(id)).unwrap();
      dispatch(getUserReviews(id)).unwrap();
      dispatch(myTools(id)).unwrap();
    } catch (error) {
      const err = error as FailureResponse;
      toast.error(err.message);
    }
  }, [dispatch]);

  const profile = useAppSelector((state) => state.profile);
  const userReview = useAppSelector((state) => state.userReview);
  const tool = useAppSelector((state) => state.tool);

  return (
    <div>
      {profile.isLoading ||
        tool.isLoading ||
        (userReview.isLoading && <Loader />)}
      <div className="text-black sm:pl-13 pl-8 sm:pt-10 w-[95%]">
        <div className="flex items-center justify-between ">
          <BackIcon path={back} />
          <div
            className="rounded-2xl border bg-gray-50 border-gray-100
           text-gray-500 py-0.5 px-2"
          >
            Profil #u1
          </div>
        </div>

        <Divider padding="sm:pt-8 pt-5" />

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
          <div className="lg:col-span-3 flex flex-col gap-4">
            <ProfileCard
              profile={profile.profile ?? undefined}
              onclick={isOpenProfile}
            />
            <ProfileCaution />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            {isProfileModificationOpend ? (
              <ProfileMofication
                profile={profile.profile!}
                onclick={isOpenProfile}
              />
            ) : (
              <div className="lg:col-span-5 flex flex-col gap-4">
                <ProfileDescription profile={profile.profile!} />
                <OwnerTools tools={tool.ownerTools} />
                <UserReviews
                  profile={profile.profile ?? undefined}
                  reviews={userReview.reviews}
                />
              </div>
            )}
          </div>
        </div>

        <Divider padding="sm:pt-5 pt-3" />
      </div>
    </div>
  );
}
