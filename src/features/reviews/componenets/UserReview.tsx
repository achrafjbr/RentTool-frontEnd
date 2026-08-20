import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { CameraOff, Ellipsis, Pencil, Trash2 } from "lucide-react";
import TextField from "../../auth/components/TextField";
import { deleteToolReview } from "../toolReviews/toolReviewThunks";
import Loader from "../../../components/common/Loader";
import type { UserReviewResponse } from "../userReviews/userReviewTypes";
import { deleteUserReview } from "../userReviews/userReviewThunks";
import { diffFiveMinuts } from "../../../utilis/dates";

export default function UserReview({
  review,
}: {
  review?: UserReviewResponse;
}) {
  if (!review) {
    return null;
  }
  const user = useAppSelector((state) => state.authentication.user);
  const { isLoading } = useAppSelector((state) => state.toolReview);

  const isAuthor = review?.from?._id === user?._id;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState({
    updateOperation: false,
    reviewId: "",
  });

  const dispatch = useAppDispatch();
  return (
    <div>
      {isLoading && <Loader />}
      <div className="space-y-3">
        <div className="flex  justify-start items-center gap-x-2.5 ">
          {review.from?.picture == null ? (
            <CameraOff className="size-10 border border-gray-400 object-cover rounded-full" />
          ) : (
            <img
              src={`${import.meta.env.VITE_SERVER_URL}/uploads/users/${review.from.picture}`}
              alt={review.from.fullName || "User avatar"}
              className="size-10 border border-gray-400 object-cover  rounded-full"
            />
          )}

          <div>
            <p className="tracking-wide font-semibold text-sm ">
              {review.from?.fullName || "Utilisateur anonyme"}
            </p>
            <p className="text-gray-500 text-[10px]">
              {diffFiveMinuts(review.from?.createdAt)}
            </p>
          </div>
        </div>

        <div
          className="flex items-center justify-between rounded-xl border
                  border-gray-100/30 p-2"
        >
          {isUpdate.updateOperation && isUpdate.reviewId == review._id ? (
            <TextField
              value={review.review}
              name="review"
              type="text"
              onChangeHandler={() => {
                console.log("update review");
              }}
              label=""
              placeHolder=""
              id={review._id}
            />
          ) : (
            <p
              className="text-xs w-full leading-relaxed
         bg-gray-50/50 p-3 text-gray-600"
            >
              {review.review}
            </p>
          )}
          {isAuthor && (
            <div className="relative">
              <Ellipsis
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-lg cursor-pointer font-semibold"
              />

              {isMenuOpen && (
                <div
                  className="absolute right-0 top-7 z-50 w-36 rounded-lg border
               bg-white p-1 shadow-lg"
                >
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsUpdate({
                        reviewId: review._id,
                        updateOperation: true,
                      });
                      // update review
                    }}
                    className="flex w-full items-center gap-2 
                  rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    <Pencil size={15} />
                    Modifier
                  </button>

                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      dispatch(deleteUserReview(review._id));
                      // delete review
                    }}
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <Trash2 size={15} />
                    Supprimer
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
