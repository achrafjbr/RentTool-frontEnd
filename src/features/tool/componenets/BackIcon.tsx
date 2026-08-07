import { ArrowLeft } from "lucide-react";
import type { RoutePath } from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
export type PathProp = {
  path: RoutePath;
};
export default function BackIcon({ path }: PathProp) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(path)}
      className="flex justify-center items-center 
     rounded-lg shadow-lg bg-white size-10 border border-gray-400/10
      hover:bg-gray-400/50  "
    >
      <ArrowLeft className="text-gray-400  hover:text-gray-600" />
    </div>
  );
}
