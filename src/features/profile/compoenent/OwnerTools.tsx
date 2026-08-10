import { ShoppingBag } from "lucide-react";
import OwnerTool from "../../tool/componenets/OwnerTool";
import type { Tool } from "../../tool/toolTypes";
import Divider from "../../../components/common/Divider";

export default function OwnerTools(tools: { tools: Tool[] }) {
  return (
    <div
      className=" bg-white p-5 rounded-2xl border border-gray-100
             shadow-md space-y-3 "
    >
      <div className="flex items-center gap-x-2.5">
        <ShoppingBag className="text-blue-500" />
        <p className="tracking-wider uppercase font-semibold leading-relaxed">{`Outils proposés (${tools.tools.length})`}</p>
      </div>
      <Divider padding="pt-0.5 lg:pt-1" />
      {tools.tools.length == 0 ? (
        <div className="flex justify-center flex-col items-center">
          <ShoppingBag className="text-blue-500" />
          <p className="tracking-wider font-semibold leading-relaxed">
            Y'a pas d'outils
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
          {tools.tools.map((tool) => (
            <OwnerTool key={tool._id} {...tool} />
          ))}
        </div>
      )}
    </div>
  );
}
