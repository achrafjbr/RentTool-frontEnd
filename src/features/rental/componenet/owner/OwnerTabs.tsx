import { useState } from "react";
import Divider from "../../../../components/common/Divider";
import RequestsReceived from "./RequestsReceived";
import RentalsAndReturns from "./RentalsAndReturns";
import MyTools from "./MyTools";
import { useSelector } from "react-redux";
import {
  selectReceivedRentalRequests,
  selectReturnedRentalRequests,
} from "../../rentalSlices/ownerSlice";

const REQUESTS_RECEIVED = "requests received";
const RENTALS_RETURNS = "rentals & returns";
const MY_TOOLS = "my tools";

export default function OwnerTabs() {
  const receivedRentalRequests = useSelector(selectReceivedRentalRequests);
  const retrunedRentalRequests = useSelector(selectReturnedRentalRequests);
  const renterTabs = [
    {
      name: REQUESTS_RECEIVED,
      label: `demandes reçues (${receivedRentalRequests.length})`,
    },
    {
      name: RENTALS_RETURNS,
      label: `Locations & Retours (${retrunedRentalRequests.length})`,
    },
    { name: MY_TOOLS, label: `mes outils (${0})` },
  ];
  const [tabActive, setTabActive] = useState<string>(renterTabs[0].name);

  return (
    <div>
      <div
        className=" flex justify-start items-center gap-x-3 rounded-2xl 
         p-1.5 px-2.5 bg-white shadow border border-gray-200 w-fit"
      >
        {renterTabs.map(({ label, name }) => (
          <p
            key={name}
            onClick={() => setTabActive(name)}
            className={`text-xs font-semibold capitalize px-8 py-3 tracking-wider cursor-pointer ${
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
      <div className="text-gray-600">
        {tabActive === REQUESTS_RECEIVED ? (
          <RequestsReceived />
        ) : tabActive === RENTALS_RETURNS ? (
          <RentalsAndReturns />
        ) : (
          <MyTools />
        )}
      </div>
    </div>
  );
}
