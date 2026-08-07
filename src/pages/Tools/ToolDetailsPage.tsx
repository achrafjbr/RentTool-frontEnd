import Divider from "../../components/common/Divider";
import BackIcon from "../../features/tool/componenets/BackIcon";
import { RoutePath } from "../../routes/routes";
import ToolOwnerCard from "../../features/tool/componenets/tool-details/ToolOwnerCard";
import ToolImage from "../../features/tool/componenets/tool-details/ToolImage";
import ToolDescription from "../../features/tool/componenets/tool-details/ToolDescription";
import ToolReservation from "../../features/tool/componenets/tool-details/ToolReviews";
import ToolReviews from "../../features/tool/componenets/tool-details/ToolReservation";
export default function ToolDetailsPage() {
  return (
    <div className="sm:pl-13 pl-8 sm:pt-10 w-[95%] ">
      <div className="flex items-center  gap-x-3.5">
        <BackIcon path={RoutePath.GUESTPAGE} />
        <div className="">
          <div className="text-gray-400 text-xs tracking-wide uppercase">
            Perçage & Vissage
          </div>
          <div className="text-black font-semibold ">
            Perceuse à Percussion Makita DHP482Z
          </div>
        </div>
      </div>
      <Divider padding="sm:pt-8 pt-5" />

      <div className="grid gap-x-7 gap-y-10 text-black grid-cols-1 lg:grid-cols-7 ">
        <div className="lg:col-span-4 flex flex-col gap-4">
          <ToolImage />
          <ToolDescription />
          <ToolReservation />
        </div>

        <div className="lg:col-span-3 flex flex-col gap-4 gap-y-6">
          <ToolOwnerCard />
          <ToolReviews />
        </div>
      </div>
    </div>
  );
}
