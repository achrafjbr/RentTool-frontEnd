import { ArrowRight } from "lucide-react";

export default function AuthButton({
  title,
  disabled,
}: {
  title: string;
  disabled: boolean;
}) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className=" text-center cursor-pointer 
      rounded-2xl p-3 bg-blue-600 text-white w-full"
    >
      <div className="flex gap-x-1 justify-center items-center group ">
        <p className="text-center">{title}</p>
        <ArrowRight
          className="transition-all group-hover:translate-x-1"
          size={18}
        />
      </div>
    </button>
  );
}
