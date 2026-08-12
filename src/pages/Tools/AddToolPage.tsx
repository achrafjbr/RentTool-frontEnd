import { Check, CloudSync, DollarSign, ListFilter, X } from "lucide-react";
import Divider from "../../components/common/Divider";
import TextField from "../../features/auth/components/TextField";
import { categories } from "../../utilis/constants";
import { useState } from "react";
import ProfileButton from "../../features/profile/compoenent/ProfileButton";

interface PublishToolState {
  name: string;
  category: string;
  description: string;
  pricePerDay: number;
  depositAmount: number;
  image: File | null;
}

export default function AddToolPage() {
  const [isImage, setIsImage] = useState(false);
  const [toolInfo, setToolInfo] = useState<PublishToolState>({
    name: "",
    category: "",
    description: "",
    pricePerDay: 0,
    depositAmount: 0,
    image: null,
  });
  const handleToolInformation = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const key = e.target.name;
    if (key == "image") {
      const image = e.target.files?.[0];
      if (!image) return;
      isImageSelected();
      setToolInfo((prev) => ({ ...prev, image: image! }));
    } else {
      const value = e.target.value;
      setToolInfo((prev) => ({ ...prev, [key]: value }));
    }
  };

  const isImageSelected = () => {
    setIsImage((prev) => !prev);
  };

  return (
    <div className="text-black sm:pl-20 pl-8 sm:pt-10 w-[95%]">
      <div
        className="bg-white p-2 rounded-2xl border 
        border-gray-100 shadow-md space-y-3 sm:w-[85%]"
      >
        <div className="p-5">
          <TextField
            value={toolInfo.name}
            label="Nom de l'outil"
            name="name"
            type="text"
            placeHolder="ex: Scie sauteuse Bosh PST 700 ready"
            id="name"
            onChangeHandler={(e) => handleToolInformation(e)}
          />

          <Divider padding="p-3" />

          <TextField
            height="h-30"
            value={toolInfo.description}
            label="Description & État"
            name="description"
            type="text"
            placeHolder="Décriver pécisément l'usage, les characteristiques d'outil et les accessoires fournis..."
            id="description"
            onChangeHandler={(e) => handleToolInformation(e)}
          />

          <Divider padding="p-3" />
          <div className="grid items-center sm:grid-cols-2 gap-3 ">
            <div>
              <div className="flex items-center gap-3.5">
                <ListFilter size={16} className="text-gray-500" />
                <p className=" text-sm uppercase text-gray-500">CATEGORIE</p>
              </div>
              <select
                value={toolInfo.category}
                onChange={(e) => handleToolInformation}
                className="w-full pl-9 pr-4 py-2.5 bg-gray-200 border
                    border-gray-100 rounded-xl text-sm focus:outline-none 
                    focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                  focus:bg-white transition-all
                  placeholder:text-gray-400 text-gray-800"
                name="category"
                id="category"
              >
                {categories.slice(1).map((category) => (
                  <option key={category} value={toolInfo.category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex items-center gap-3.5">
                <DollarSign size={16} className="text-gray-500" />
                <p className=" truncate text-sm uppercase text-gray-500">
                  TARIF JOURNALIE(€ / JOUR)
                </p>
              </div>
              <TextField
                value={toolInfo.pricePerDay.toString()}
                label=""
                name="pricePerDay"
                type="nubmer"
                placeHolder="Décriver pécisément l'usage, les characteristiques d'outil et les accessoires fournis..."
                id="pricePerDay"
                onChangeHandler={(e) => handleToolInformation(e)}
              />
            </div>
          </div>

          <Divider padding="p-2" />

          <div>
            <div className="flex items-center gap-3.5">
              <DollarSign size={16} className="text-gray-500" />
              <p className=" text-sm uppercase text-gray-500">
                Garantie / Assurance
              </p>
            </div>
            <TextField
              value={toolInfo.depositAmount.toString()}
              label=""
              name="depositAmount"
              type="nubmer"
              placeHolder="Décriver pécisément l'usage, les characteristiques d'outil et les accessoires fournis..."
              id="depositAmount"
              onChangeHandler={(e) => handleToolInformation(e)}
            />
          </div>
          <Divider padding="p-3" />

          {/* picture upload... */}
          <div>
            <p className=" text-sm uppercase text-gray-500">
              Photos de l'outil
            </p>
            {isImage && toolInfo.image ? (
              <div className="relative">
                <div className="">
                  <img
                    src={URL.createObjectURL(toolInfo.image)}
                    alt="TOOL-IMAGE"
                    className="w-full h-80 rounded-2xl object-cover "
                  />
                </div>
                <X
                  onClick={() => isImageSelected()}
                  size={30}
                  className="p-0.5 right-1 rounded-md bg-gray-100 absolute top-1 z-20"
                />
              </div>
            ) : (
              <div
                className="p-5 relative cursor-pointer rounded-2xl
                 bg-blue-300 flex flex-col items-center justify-center "
              >
                <CloudSync size={40} />
                <p>Glissez-déposez une image ici</p>
                <input
                  onChange={(e) => handleToolInformation(e)}
                  // value={toolInfo.picture}
                  type="file"
                  accept="image/*"
                  name="image"
                  id="image"
                  className="w-full h-full absolute inset-0 opacity-0 "
                />
              </div>
            )}
          </div>
          <Divider padding="p-3" />

          <div className="flex justify-end items-center gap-x-3.5">
            {/* annuler */}
            <ProfileButton
              prefix={false}
              title="Annuler"
              style="rounded-lg text-gray-500 bg-gray-300 flex justify-center
             items-center p-2 text-xs gap-1.5"
              onclick={() => {
                // navigate to the home page.
              }}
            />

            {/* save modifications. */}
            <ProfileButton
              prefix={false}
              title="Publier l'annonce"
              style="rounded-lg text-white bg-blue-500 flex justify-center
             items-center p-2 text-xs gap-1.5"
              onclick={async () => {
                // check if required fields are existed such as : (fullName, phone)
                // const formData = new FormData();
                // formData.append("fullName", newProfile.fullName);
                // formData.append("phone", newProfile.phone);
                // if (newProfile.city) {
                //   formData.append("city", newProfile.city);
                // }
                // if (newProfile.bio) {
                //   formData.append("bio", newProfile.bio);
                // }
                // if (newProfile.picture && newProfile.picture instanceof File) {
                //   formData.append("picture", newProfile.picture);
                // }
                // await dispatch(updateUserProfile(formData));
                // await dispatch(me());
                // onclick();
              }}
            />
          </div>
        </div>

        <Divider padding="p-3" />
      </div>
    </div>
  );
}
