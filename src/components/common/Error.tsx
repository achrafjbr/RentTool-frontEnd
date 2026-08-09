export default function Error({ error }: { error: string }) {
  return (
    <div className="relative">
      <div
        className=" text-black  sm:left-[60%] left-[50%] 
        translate-x-[-60%] top-[50%] z-40 shadow-2x fixed "
      >
        <div className="text-3xl text-center text-red-400">{error}</div>
      </div>
      <div className="bg-gray-300/200 fixed inset-0 z-50"></div>
    </div>
  );
}
