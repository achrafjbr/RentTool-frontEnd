import { Clock11, Plus, RefreshCcwDot, TrendingUp, Wrench } from "lucide-react";
import { RoutePath } from "../../routes/routes";
import ToolButton from "../../features/tool/componenets/ToolButton";
import { useNavigate } from "react-router-dom";
import RentalStatisticsCard from "../../features/rental/componenet/RentalStatisticsCard";
import OwnerTabs from "../../features/rental/componenet/owner/OwnerTabs";
import Divider from "../../components/common/Divider";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from "react";
import {
  getRequestsReceivedByOwner,
  ownerGains,
} from "../../features/rental/rentalThunks";
import { useSelector } from "react-redux";
import {
  selectReceivedRentalRequests,
  selectReturnedRentalRequests,
} from "../../features/rental/rentalSlices/ownerSlice";
import Loader from "../../components/common/Loader";
import toast from "react-hot-toast";

export default function OwnerSpacePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRequestsReceivedByOwner());
    dispatch(ownerGains());
  }, [dispatch]);

  const receivedRentalRequests = useSelector(selectReceivedRentalRequests);
  const retrunedRentalRequests = useSelector(selectReturnedRentalRequests);
  const { isLoading, error, gains, toolsCount } = useAppSelector(
    (state) => state.owner,
  );

  return (
    <div>
      {isLoading && <Loader />}
      {error && toast.error(error.message)}
      <div className="sm:pl-12 pl-6 w-[95%] space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-display font-semibold tracking-tight text-gray-900">
              Espace Propriétaire
            </h1>
            <p className="text-xs text-gray-500">
              Validez les demandes, suivez vos locations en cours et confirmez
              la restitution des outils.
            </p>
          </div>
          <ToolButton
            onclick={() => navigate(RoutePath.ADDTOOLPAGE)}
            prefix={true}
            style=" rounded-xl py-2.5 px-3.5 font-semibold text-white bg-blue-500 shadow text-xs
           flex justify-center items-center gap-2 translate-all duration-500 hover:-translate-y-1 "
            title="Ajouter un outil"
            icon={<Plus size={18} className="text-white" />}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          <RentalStatisticsCard
            title="Mes Outils"
            data={toolsCount}
            icon={<Wrench className={`text-blue-400`} />}
            dataColor="text-blue-500"
            borderIconColor="border-blue-100"
            iconBackgroundColor="bg-blue-400/10"
          />

          <RentalStatisticsCard
            title="Demandes Reçues"
            data={receivedRentalRequests.length}
            icon={<Clock11 className={`text-amber-400`} />}
            dataColor="text-amber-500"
            borderIconColor="border-amber-100"
            iconBackgroundColor="bg-amber-400/10"
          />

          <RentalStatisticsCard
            title="Retours à Confirmer"
            data={retrunedRentalRequests.length}
            icon={<RefreshCcwDot className={`text-purple-400`} />}
            dataColor="text-purple-500"
            borderIconColor="border-purple-100"
            iconBackgroundColor="bg-purple-400/10"
          />

          <RentalStatisticsCard
            title="Gains Estimés"
            data={gains.totalRevenue}
            icon={<TrendingUp className={`text-green-400`} />}
            dataColor="text-green-500"
            borderIconColor="border-green-100"
            iconBackgroundColor="bg-green-400/10"
          />
        </div>
        <Divider padding="pt-1" />
        {/* Tabs */}
        <OwnerTabs />
      </div>
    </div>
  );
}
