import { Check, PenLine, X } from "lucide-react";
import TextField from "../../auth/components/TextField";
import ProfileButton from "./ProfileButton";
import type { UserProfile } from "../profileTypes";
import { useState } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { updateUserProfile } from "../profileThunks";
export interface ProfileState {
  fullName: string;
  phone: string;
  bio?: string;
  city?: string;
  picture?: File | string | null;
}

export default function ProfileMofication({
  onclick,
  profile,
}: {
  profile: UserProfile;
  onclick: () => void;
}) {
  const { phone, fullName, bio, city } = profile;
  const [newProfile, setNewProfile] = useState<ProfileState>({
    fullName: fullName,
    phone: phone,
    bio: bio || "",
    city: city || "",
    picture: null,
  });
  const modifyProfileHandler = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const key = e.target.name;
    console.log("KEY", key);
    if (key == "picture") {
      const picture = e.target.files![0];
      setNewProfile((prev) => ({ ...prev, picture: picture }));
    }
    const value = e.target.value;
    setNewProfile((prev) => ({ ...prev, [key]: value }));
  };

  const dispatch = useAppDispatch();

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
        <div className="flex justify-between items-center gap-4">
          <TextField
            label="Nom complet"
            name="fullName"
            placeHolder="nom complete"
            type="text"
            value={newProfile.fullName}
            onChangeHandler={(e) => modifyProfileHandler(e)}
          />
          <TextField
            label="Téléphone"
            name="phone"
            placeHolder="Téléphone"
            type="text"
            value={newProfile.phone}
            onChangeHandler={(e) => modifyProfileHandler(e)}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <div>
            <TextField
              label="Ville"
              name="city"
              placeHolder="Ville"
              type="text"
              value={newProfile.city == null ? "" : newProfile.city}
              onChangeHandler={(e) => modifyProfileHandler(e)}
            />
          </div>
          <div className="w-1/2 rounded-2xl ml-auto mt-auto">
            <input
              onChange={(e) => modifyProfileHandler(e)}
              className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100 cursor-pointer "
              type="file"
              name="picture"
              id="picture"
              // value={newProfile.picture ? newProfile.picture : null}
            />
          </div>
        </div>
        {/* bio */}
        <TextField
          height="py-5"
          label="Biographie / À propos de vous"
          name="bio"
          placeHolder="Biographie"
          type="text"
          value={newProfile.bio == null ? "" : newProfile.bio}
          onChangeHandler={(e) => modifyProfileHandler(e)}
        />

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
            onclick={async () => {
              // check if required fields are existed such as : (fullName, phone)

              const formData = new FormData();
              formData.append("fullName", newProfile.fullName);
              formData.append("phone", newProfile.phone);
              if (newProfile.city) {
                formData.append("city", newProfile.city);
              }
              if (newProfile.bio) {
                formData.append("bio", newProfile.bio);
              }
              if (newProfile.picture && newProfile.picture instanceof File) {
                formData.append("picture", newProfile.picture);
              }
              await dispatch(updateUserProfile(formData));
              onclick();
            }}
          />
        </div>
      </div>
    </div>
  );
}
