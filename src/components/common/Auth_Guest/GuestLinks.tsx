import { Cog } from "lucide-react";
import { RoutePath } from "../../../routes/routes";
import { HorizontalAlignment, type NavigationProps } from "../NavigationBar";

export const guestLinks: NavigationProps[] = [
  {
    path: RoutePath.GUESTPAGE,
    title: "Explorer les outils",
    horizontalAlignment: HorizontalAlignment.START,
    icon: <Cog size={15} />,
  },
  {
    path: RoutePath.SIGNINPAGE,
    title: "Connexion",
    horizontalAlignment: HorizontalAlignment.CENTRE,
    style: "border border-gray-100 text-center",
  },
  {
    path: RoutePath.SIGNUPPAGE,
    title: "S'enregistrer",
    horizontalAlignment: HorizontalAlignment.CENTRE,
    bgColor: "bg-blue-500",
    textColor: "text-white",
    style: "text-center",
  },
];
