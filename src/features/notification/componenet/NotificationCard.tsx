import { SquareCheckBig } from "lucide-react";
import pic from "../../../assets/charaf.jpg";
import { useState } from "react";
export default function NotificationCard() {
  const [isToolBar, setIsToolBar] = useState<boolean>(false);
  return (
    <div className="p-5">
      <div className="grid grid-cols-12 w-full gap-3.5  ">
        <div
          className="lg:col-span-1 col-span-2 rounded-2xl bg-gray-50 border
           border-gray-100 p-2 
        flex items-start justify-center"
        >
          <SquareCheckBig className="text-green-400 size-5" />
        </div>

        <div className="lg:col-span-9  col-span-7 flex flex-col gap-1">
          <p
            className="text-gray-800 text-xs  flex items-center 
          gap-x-1.5 font-semibold"
          >
            Demande acceptée ! 🎉
            <div className="rounded-full size-2.5 bg-blue-700"></div>
          </p>
          <p className="text-gray-500 text-xs font-light ">
            Sophie Dubois a approuvé votre demande de location pour "Tondeuse
            Thermique Autotractée Honda". Prenez contact pour la remise de
            l'outil.
          </p>
          <p className="text-gray-400 text-xs font-mono ">À l'instant</p>
        </div>

        <div className="lg:col-span-2 col-span-3 w-full  ml-auto flex flex-col items-center justify-between ">
          <p
            className="text-xs bg-gray-100 size-fit
           rounded-md text-center cursor-pointer p-1  text-blue-600"
            onClick={() => console.log("Mark as read")}
          >
            Savoir lu
          </p>
          <div className="relative  ">
            {isToolBar && (
              <div
                className="left-[90%] w-max bottom-[85%] z-10 absolute
                 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl
                text-xs shadow-2xl text-gray-600 p-0.5 bg-gray-200"
              >
                Voir son profile
              </div>
            )}
            <img
              onMouseOut={() => setIsToolBar(false)}
              onMouseOver={() => setIsToolBar(true)}
              onClick={() => console.log("show his profile")}
              src={`${pic}`}
              alt={"img"}
              className=" cursor-pointer size-9 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
