import { useState } from "react";
import Divider from "../../../../components/common/Divider";
import ActiveRentals from "./ActiveRentals";
import RentalRequests from "./RentalRequests";

const ACTIVE_LOCATIONS = "requests received";
const MY_REQUESTS = "rentals & returns";

export default function RenterTabs() {
  const renterTabs = [
    { name: ACTIVE_LOCATIONS, label: `locations actives (${2})` },
    { name: MY_REQUESTS, label: `Toutes mes demandes (${1})` },
  ];
  const [tabActive, setTabActive] = useState<string>(renterTabs[0].name);

  return (
    <div>
      <div
        className=" flex justify-start items-center gap-x-3 rounded-2xl 
       p-1.5 px-2.5 bg-white shadow border border-gray-100 w-fit"
      >
        {renterTabs.map(({ label, name }) => (
          <p
            onClick={() => setTabActive(name)}
            className={`text-xs font-semibold capitalize px-8 py-2.5 tracking-wider cursor-pointer ${
              tabActive === name
                ? "text-white bg-black rounded-2xl"
                : "text-gray-500  "
            } `}
          >
            {label}
          </p>
        ))}
      </div>
      <Divider padding="pt-5" />
      <div className="text-gray-600 ">
        {tabActive === ACTIVE_LOCATIONS ? (
          <ActiveRentals />
        ) : (
          <RentalRequests />
        )}
      </div>
    </div>
  );
}
