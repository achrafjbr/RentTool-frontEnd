import Divider from "../../components/common/Divider";
import BackIcon from "../../features/tool/componenets/BackIcon";
import { RoutePath } from "../../routes/routes";
import ToolOwnerCard from "../../features/tool/componenets/tool-details/ToolOwnerCard";
import ToolImage from "../../features/tool/componenets/tool-details/ToolImage";
import ToolDescription from "../../features/tool/componenets/tool-details/ToolDescription";
import ToolReservation from "../../features/tool/componenets/tool-details/ToolReservation";
import ToolReviews from "../../features/reviews/componenets/ToolReviews";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import { getToolReviews } from "../../features/reviews/toolReviews/toolReviewThunks";
import type { FailureResponse } from "../../types/failureResoponse";
import toast from "react-hot-toast";
import { getToolById } from "../../features/tool/toolThunks";
import Loader from "../../components/common/Loader";

export default function ToolDetailsPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      if (!id) {
        return;
      }
      dispatch(getToolReviews({ toolId: id })).unwrap();
      dispatch(getToolById({ toolId: id })).unwrap();
    } catch (error) {
      const err = error as FailureResponse;
      toast.error(err.message);
    }
  }, [dispatch]);
  const tool = useAppSelector((state) => state.tool);
  const toolReviews = useAppSelector((state) => state.toolReview);
  const isAuthenticated = useAppSelector(
    (state) => state.authentication.isAuthenticated,
  );

  return (
    <div>
      {tool.isLoading || (toolReviews.isLoading && <Loader />)}

      <div className="sm:pl-13 pl-8 sm:pt-10 w-[95%]">
        <div className="flex items-center gap-x-3.5">
          <BackIcon
            path={isAuthenticated ? RoutePath.HOMEPAGE : RoutePath.GUESTPAGE}
          />
          <div className="">
            <div className="text-gray-400 text-xs tracking-wide uppercase">
              {tool.selectedTool?.category}
            </div>
            <div className="text-black font-semibold ">
              {tool.selectedTool?.name}
            </div>
          </div>
        </div>

        <Divider padding="sm:pt-8 pt-5" />

        <div className="grid gap-x-7 gap-y-10 text-black grid-cols-1 lg:grid-cols-7">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <ToolImage image={tool.selectedTool?.image} />
            <ToolDescription
              category={tool.selectedTool?.category}
              city={tool.selectedTool?.owner.city}
              description={tool.selectedTool?.description}
            />
            <ToolReviews
              reviews={
                toolReviews.reviews.length === 0 ? [] : toolReviews.reviews
              }
            />
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4 gap-y-6">
            <ToolOwnerCard owner={tool.selectedTool?.owner} />
            {tool && <ToolReservation tool={tool.selectedTool!} />}
          </div>
        </div>
      </div>
    </div>
  );
}
