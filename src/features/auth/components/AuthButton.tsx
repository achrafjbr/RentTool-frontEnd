import { ArrowRight } from "lucide-react";

export default function AuthButton({ title }: { title: string }) {
  return (
    <div
      className=" text-center cursor-pointer rounded-2xl p-3 bg-blue-600
   text-white"
    >
      <div className="flex gap-x-1 justify-center items-center ">
        <p className="text-center">{title}</p>
        <ArrowRight className="transition-all hover:translate-x-1" size={18} />
      </div>
    </div>
  );
}
