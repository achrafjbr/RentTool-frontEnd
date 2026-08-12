import NotificationCard from "../features/notification/componenet/NotificationCard";
export default function NotificationPage() {
  return (
    <div className="text-black sm:pl-20 pl-8 sm:pt-10 w-[90%] space-y-3.5">
      <div
        className="flex lg:justify-between lg:items-center flex-col items-start gap-y-2 justify-start 
      lg:flex-row  w-[90%] cursor-pointer"
      >
        <div>
          <p className="text-2xl font-display font-semibold tracking-tight text-gray-900">
            Notifications
          </p>
          <p className="text-xs text-gray-500">
            Restez informé de l'activité de vos locations et des réponses des
            propriétaires.
          </p>
        </div>
        <div
          onClick={() => console.log("read notification")}
          className="rounded-lg bg-blue-50 py-1.5 px-2 text-center 
        text-xs   font-semibold text-blue-600 border border-blue-100"
        >{`Tout marquer comme lu (2)`}</div>
      </div>

      <div
        className="bg-white p-2 rounded-2xl border 
              border-gray-100 shadow-md space-y-3 sm:w-[90%]"
      >
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
}
