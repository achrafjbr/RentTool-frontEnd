import {
  ArrowRight,
  BadgeCheck,
  Clock11,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import ToolButton from "../../features/tool/componenets/ToolButton";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../routes/routes";
import RenterTabs from "../../features/rental/componenet/renter/RenterTabs";
import RentalStatisticsCard from "../../features/rental/componenet/RentalStatisticsCard";
import Divider from "../../components/common/Divider";

export default function RenterSpacePage() {
  const navigate = useNavigate();
  return (
    <div className="sm:pl-12 pl-6 w-[95%] space-y-3.5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-semibold tracking-tight text-gray-900">
            Espace Locataire
          </h1>
          <p className="text-xs text-gray-500">
            Gérez vos réservations actives, déclarez vos retours d'outils et
            suivez vos demandes.
          </p>
        </div>
        <ToolButton
          onclick={() => navigate(RoutePath.HOMEPAGE)}
          prefix={false}
          style=" rounded-xl py-2.5 px-3.5 font-semibold text-white bg-black shadow text-xs
           flex justify-center items-center gap-2 translate-all duration-500 hover:-translate-y-1"
          title="Trouver un outil"
          icon={<ArrowRight size={18} className="text-blue-400" />}
        />
      </div>

      {/* RentalCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        <RentalStatisticsCard
          title="Total Demandes"
          data={5}
          icon={<Wrench size-25 className={`text-blue-400`} />}
          dataColor="text-blue-500"
          borderIconColor="border-blue-100"
          iconBackgroundColor="bg-blue-400/10"
        />

        <RentalStatisticsCard
          title="Locations Actives"
          data={1}
          icon={<BadgeCheck size-25 className={`text-green-400`} />}
          dataColor="text-green-500"
          borderIconColor="border-green-100"
          iconBackgroundColor="bg-green-400/10"
        />

        <RentalStatisticsCard
          title="En attente"
          data={0}
          icon={<Clock11 size-25 className={`text-amber-400`} />}
          dataColor="text-amber-500"
          borderIconColor="border-amber-100"
          iconBackgroundColor="bg-amber-400/10"
        />

        <RentalStatisticsCard
          title="Locations Terminées"
          data={2}
          icon={<ShieldCheck size-25 className={`text-purple-400`} />}
          dataColor="text-purple-500"
          borderIconColor="border-purple-100"
          iconBackgroundColor="bg-purple-400/10"
        />
      </div>
      <Divider padding="pt-1" />

      {/* Tabs */}
      <RenterTabs />
    </div>
  );
}
