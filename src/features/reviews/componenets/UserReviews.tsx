import { useState } from "react";
import Divider from "../../../components/common/Divider";
import TextField from "../../auth/components/TextField";
import ToolButton from "../../tool/componenets/ToolButton";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import toast from "react-hot-toast";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";
import type { UserReviewResponse } from "../userReviews/userReviewTypes";
import UserReview from "./UserReview";
import { addUserReview } from "../userReviews/userReviewThunks";

export default function UserReviews({
  userId,
  reviews,
}: {
  userId?: string;
  reviews: UserReviewResponse[];
}) {
  const [comment, setComment] = useState<string>("");

  const commentHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const comment = e.target.value;
    setComment(comment);
  };
  const addComment = async ({ review }: { review: string }) => {
    if (!review || review == "" || !userId) {
      toast.error("should be valid review ...!");
    }
    review.trim();
    await dispatch(addUserReview({ review: review, to: userId! }));
  };

  const authentication = useAppSelector((state) => state.authentication);
  const { isLoading, error } = useAppSelector((state) => state.toolReview);
  const dispatch = useAppDispatch();
  console.log("owner", userId);
  console.log("connected - user", authentication.user?._id);

  return (
    <div>
      {isLoading || (authentication.isLoading && <Loader />)}
      {error && <Error error={error.message} />}
      <div
        className="bg-white p-3 rounded-2xl border 
        border-gray-100 shadow-md space-y-3"
      >
        <div className="space-y-4">
          <h2 className="text-lg font-display font-semibold text-gray-900">
            {`Avis pour cet outil (${reviews.length})`}
          </h2>

          {reviews.length == 0 ? (
            <div className="text-gray-400 flex justify-center items-center">
              Y'a aucun Avis
            </div>
          ) : (
            <div className="reviews space-y-6">
              {reviews.map((review) => (
                <UserReview key={review._id} review={review} />
              ))}
            </div>
          )}

          <Divider padding="sm:pt-3 pt-2" />

          {!authentication.isAuthenticated ? (
            <div className=" text-xs text-center text-gray-500">
              Veuillez vous connecter pour laisser une évaluation.
            </div>
          ) : (
            <div className="space-y-2">
              <p className="uppercase text-xs font-mono text-gray-500">
                Votre commentaire
              </p>
              <TextField
                height="h-24 pb-10"
                label=""
                name="commentaire"
                type="text"
                id="commentaire"
                placeHolder="Commentaire s'est passée à l'utilisateur de cet outil? (état de fonctionement, ergonomie, praticité...)"
                onChangeHandler={commentHandler}
                value={comment}
              />

              <Divider padding="sm:pt-3 pt-2" />
              <div className="w-fit ml-auto">
                <ToolButton
                  onclick={async () => await addComment({ review: comment })}
                  title="Publier Commetaire"
                  style="bg-blue-500 p-2 text-white rounded-lg text-xs"
                  prefix={false}
                />
              </div>
              <Divider padding="sm:pt-6 pt-3" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
