import { Check, PenLine, X } from "lucide-react";
import TextField from "../../auth/components/TextField";
import ProfileButton from "./ProfileButton";
import type { UserProfile } from "../profileTypes";
import { useState } from "react";

export default function ProfileMofication({
  onclick,
  profile,
}: {
  profile: UserProfile;
  onclick: () => void;
}) {
  const { phone, fullName, bio, city, picture } = profile;
  const [newProfile, setNewProfile] = useState({
    fullName: fullName,
    phone: phone,
    bio: bio,
    city: city,
    picture: picture,
  });

  const modifyProfileHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const value = e.target.value;
    const key = e.target.name;
    console.log("KEY", key);
    setNewProfile((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div
      className=" bg-white p-4  rounded-2xl border 
        border-gray-100 shadow-md space-y-3  "
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <PenLine className="text-blue-700" />
          <p className="font-semibold">Modifier vos informations</p>
        </div>
        <X
          onClick={onclick}
          className="p-1 rounded-md bg-gray-100 cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <TextField
            label="Nom complet"
            name="fullName"
            placeHolder=""
            type="text"
            value={fullName}
            onChangeHandler={(e) => modifyProfileHandler(e)}
          />
          <TextField
            label="Téléphone"
            name="phone"
            placeHolder=""
            type="text"
            value={phone}
            onChangeHandler={(e) => modifyProfileHandler(e)}
          />
        </div>
        <div className="flex justify-between items-center">
          <TextField
            label="Ville"
            name="city"
            placeHolder=""
            type="text"
            value={city == null ? "" : city}
            onChangeHandler={(e) => modifyProfileHandler(e)}
          />
        </div>
        <TextField
          height="py-5"
          label="Biographie / À propos de vous"
          name="bio"
          placeHolder=""
          type="text"
          value={bio == null ? "" : bio}
          onChangeHandler={(e) => modifyProfileHandler(e)}
        />
        <input type="file" name="picture" id="picture" />
        <div className="flex justify-end items-center gap-x-3.5">
          {/* annuler */}
          <ProfileButton
            prefix={false}
            title="Annuler"
            style="rounded-lg text-gray-500 bg-gray-300 flex justify-center
             items-center p-2 text-xs gap-1.5"
            onclick={() => {
              onclick();
            }}
          />

          {/* save modifications. */}
          <ProfileButton
            prefix={true}
            title="Enregistrer"
            style="rounded-lg text-white bg-blue-500 flex justify-center
             items-center p-2 text-xs gap-1.5"
            icon={<Check size={18} className="text-white" />}
            onclick={() => {
              // check if required fields are existed such as : (fullName, phone)
              console.log("Enregistrer");
              onclick();
            }}
          />
        </div>
      </div>
    </div>
  );
}
