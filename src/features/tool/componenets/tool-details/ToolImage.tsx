export default function ToolImage({ image }: { image?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-md space-y-3 ">
      <img
        src={`${import.meta.env.VITE_SERVER_URL}/uploads/tools/${image}`}
        alt={image}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
}
