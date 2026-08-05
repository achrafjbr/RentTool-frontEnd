import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="relative">
      <div
        className=" text-black  sm:left-[60%] left-[50%] 
        translate-x-[-60%]  top-[50%] z-40 shadow-2x fixed animate-spin "
      >
        <Loader2 color="blue" size={50} />
      </div>
      <div className="bg-gray-300/200 fixed inset-0 z-50"></div>
    </div>
  );
}
