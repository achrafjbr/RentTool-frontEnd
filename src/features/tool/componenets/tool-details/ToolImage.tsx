import pic from "../../../../assets/tool.jpeg";

export default function ToolImage() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-md space-y-3 ">
      <img
        src={pic}
        alt={pic}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
}
