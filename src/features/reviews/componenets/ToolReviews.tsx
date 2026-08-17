import { useState } from "react";
import Divider from "../../../components/common/Divider";
import TextField from "../../auth/components/TextField";
import type { ToolReviewResponse } from "../toolReviews/toolReviewTypes";
import ToolButton from "../../tool/componenets/ToolButton";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { addToolReview } from "../toolReviews/toolReviewThunks";
import toast from "react-hot-toast";
import Loader from "../../../components/common/Loader";
import Error from "../../../components/common/Error";
import ToolReview from "./ToolReview";
import { useParams } from "react-router-dom";

export default function ToolReviews({
  reviews,
}: {
  reviews: ToolReviewResponse[];
}) {
  const { id: tool } = useParams();
  console.log("toolid", tool);
  const [comment, setComment] = useState<string>("");

  const commentHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const comment = e.target.value;
    setComment(comment);
  };
  const addComment = async ({ review }: { review: string }) => {
    if (!review || review == "") {
      toast.error("Tool should be valid...!");
    }
    review.trim();
    await dispatch(addToolReview({ review: review, tool: tool! }));
  };

  const isAuthenticated = useAppSelector(
    (state) => state.authentication.isAuthenticated,
  );

  const { isLoading, error } = useAppSelector((state) => state.toolReview);

  const dispatch = useAppDispatch();

  return (
    <div>
      {isLoading && <Loader />}
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
                <ToolReview key={review._id} review={review} />
              ))}
            </div>
          )}

          <Divider padding="sm:pt-3 pt-2" />

          {!isAuthenticated ? (
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
