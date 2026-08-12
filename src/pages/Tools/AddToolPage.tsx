import {
  Check,
  CheckCheck,
  CloudSync,
  DollarSign,
  ListFilter,
  MapPin,
  X,
} from "lucide-react";
import Divider from "../../components/common/Divider";
import TextField from "../../features/auth/components/TextField";
import { categories } from "../../utilis/constants";
import { useEffect, useState } from "react";
import ProfileButton from "../../features/profile/compoenent/ProfileButton";
import { RoutePath } from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { publishTool } from "../../features/tool/toolThunks";
import Loader from "../../components/common/Loader";

interface PublishToolState {
  name: string;
  category: string;
  description: string;
  city: string;
  pricePerDay: number;
  depositAmount: number;
  image: File | null;
}

export default function AddToolPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.tool);
  const [isImage, setIsImage] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [toolInfo, setToolInfo] = useState<PublishToolState>({
    name: "",
    category: categories[1],
    description: "",
    city: "",
    pricePerDay: 15,
    depositAmount: 20,
    image: null,
  });
  const handleToolInformation = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>,
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
    console.log("key", key);
  };

  const isImageSelected = () => {
    setIsImage((prev) => !prev);
  };

  useEffect(() => {
    if (isSuccess) {
      const waitTimer = setTimeout(() => {
        setIsSuccess(false);
      }, 1500);
      const backToHomePageTimer = setTimeout(() => {
        navigate(RoutePath.HOMEPAGE);
      }, 1000);
      return () => {
        clearTimeout(waitTimer);
        clearTimeout(backToHomePageTimer);
      };
    }
  }, [isSuccess]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        toast.error(error.message)
      ) : (
        <div className="relative">
          <div
            className={`absolute shadow-2xl z-10 left-[50%] translate-x-[-50%] transform transition-all duration-1000 ease-linear 
            bg-green-400 rounded-2xl w-1/3 h-1/3 flex flex-col justify-center
             items-center gap-3 ${isSuccess ? "translate-y-12 opacity-100" : "-translate-y-full opacity-0"}`}
          >
            <CheckCheck size={25} />
            <p className=" font-semibold  text-center tracking-widest italic  ">
              Votre tool été ajoutée avec succée
            </p>
          </div>

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
                    <div className="flex items-center gap-1.5">
                      <ListFilter size={16} className="text-gray-500" />
                      <p className="text-xs sm:text-sm uppercase text-gray-500">
                        CATEGORIE
                      </p>
                    </div>
                    <select
                      value={toolInfo.category}
                      onChange={(e) => handleToolInformation(e)}
                      className="w-full pl-9 pr-4 py-2.5 bg-gray-200 border
                    border-gray-100 rounded-xl text-sm focus:outline-none 
                    focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                  focus:bg-white transition-all
                  placeholder:text-gray-400 text-gray-800"
                      name="category"
                      id="category"
                    >
                      {categories.map(
                        (category) =>
                          category !== "Tout" && (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ),
                      )}
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign size={16} className="text-gray-500" />
                      <p className="text-xs sm:text-sm truncate uppercase text-gray-500">
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

                <div className=" grid grid-cols-2 gap-2.5">
                  {/* depositAmount */}
                  <div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign size={16} className="text-gray-500" />
                      <p className="text-xs sm:text-sm uppercase text-gray-500">
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
                  {/* city */}
                  <div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} className="text-gray-500" />
                      <p className="text-xs sm:text-sm uppercase text-gray-500">
                        Localisation (Ville)
                      </p>
                    </div>
                    <TextField
                      value={toolInfo.city}
                      label=""
                      name="city"
                      type="text"
                      placeHolder="Ville"
                      id="city"
                      onChangeHandler={(e) => handleToolInformation(e)}
                    />
                  </div>
                </div>
                <Divider padding="p-3" />

                {/* picture upload... */}
                <div>
                  <p className="tetext-smxt-xs sm:text-sm uppercase text-gray-500">
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
                        className="p-0.5 cursor-pointer right-1 rounded-md
                   bg-gray-100 absolute top-1 z-20"
                      />
                    </div>
                  ) : (
                    <div
                      className="p-5 relative cursor-pointer rounded-2xl
                 bg-gray-50 shadow flex flex-col border-dashed border-2 border-gray-300 items-center justify-center "
                    >
                      <CloudSync size={40} className="text-gray-400" />
                      <p className="text-gray-600 text-xs tracking-wider">
                        Glissez-déposez une image ici
                      </p>
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
                      navigate(RoutePath.HOMEPAGE);
                    }}
                  />

                  {/* save modifications. */}
                  <ProfileButton
                    prefix={false}
                    title="Publier l'annonce"
                    style="rounded-lg text-white bg-blue-500 flex justify-center
             items-center p-2 text-xs gap-1.5"
                    onclick={async () => {
                      if (
                        toolInfo.city == "" ||
                        !toolInfo.city ||
                        toolInfo.name == "" ||
                        !toolInfo.name ||
                        toolInfo.description == "" ||
                        !toolInfo.description ||
                        toolInfo.pricePerDay == 0 ||
                        !toolInfo.pricePerDay ||
                        toolInfo.depositAmount == 0 ||
                        !toolInfo.depositAmount ||
                        toolInfo.image == null
                      ) {
                        toast.error(
                          "Erreur : Doit remplir tous les champs d'un outil.",
                        );
                        return;
                      }
                      console.log("data validation...", toolInfo);
                      if (!toolInfo.image?.type.startsWith("image")) {
                        toast.error(
                          "Erreur : Veuillez sélectionner un fichier image valide.",
                        );
                        return;
                      }
                      const formData = new FormData();
                      formData.append("name", toolInfo.name);
                      formData.append("city", toolInfo.city);
                      formData.append("description", toolInfo.description);
                      formData.append("category", toolInfo.category);
                      formData.append(
                        "pricePerDay",
                        toolInfo.pricePerDay.toString(),
                      );
                      formData.append(
                        "depositAmount",
                        toolInfo.depositAmount.toString(),
                      );
                      formData.append("picture", toolInfo.image as File);
                      await dispatch(publishTool(formData));
                      setIsSuccess(true);
                    }}
                  />
                </div>
              </div>

              <Divider padding="p-3" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
