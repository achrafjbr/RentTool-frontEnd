import {
  Bell,
  CircleFadingPlus,
  CircleUserRound,
  Cog,
  Wrench,
} from "lucide-react";
import { RoutePath } from "../../../routes/routes";
import { HorizontalAlignment, type NavigationProps } from "../NavigationBar";

export const authLinks: NavigationProps[] = [
  {
    path: RoutePath.HOMEPAGE,
    title: "Explorer les outils",
    horizontalAlignment: HorizontalAlignment.START,
    icon: <Cog size={15} />,
  },

  {
    path: RoutePath.OWNERSPACEPAGE,
    title: "Espace Propriétaire",
    horizontalAlignment: HorizontalAlignment.START,
    icon: <CircleUserRound size={15} />,
  },

  {
    path: RoutePath.RENTERSPACEPAGE,
    title: "Espace Locataire",
    horizontalAlignment: HorizontalAlignment.START,
    icon: <Wrench size={15} />,
  },
  {
    path: RoutePath.ADDTOOLPAGE,
    title: "Proposer un outil",
    horizontalAlignment: HorizontalAlignment.START,
    icon: <CircleFadingPlus size={15} />,
  },

  {
    path: RoutePath.NOTIFICATIONPAGE,
    title: "Notification",
    horizontalAlignment: HorizontalAlignment.START,
    icon: <Bell size={15} />,
  },
];
