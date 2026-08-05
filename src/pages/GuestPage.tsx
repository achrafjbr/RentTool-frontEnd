import { ArrowRight, MapPinHouse, Search } from "lucide-react";
import Divider from "../components/common/Divider";
import ToolButton from "../features/tool/componenets/ToolButton";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../routes/routes";
import TextField from "../features/auth/components/TextField";
import { useState } from "react";
import ToolSelect from "../features/tool/componenets/ToolSelect";
import ToolCategory from "../features/tool/componenets/ToolCategory";

export default function GuestPage() {
  // dummy data, (I'll filter and remove duplicated cities from api)
  const cities: string[] = [
    "Toutes les villes",
    "Paris",
    "Nice",
    "Marseille",
    "Toulouse",
    "Mulhouse",
  ];
  const [selectedCity, setSelectedCity] = useState<string>(cities[0]);

  const hanldeCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    console.log("City :", city);
    setSelectedCity(city);
  };

  // dummy data, (I'll filter and remove duplicated categories from api)
  const categories: string[] = [
    "Tout",
    "Perçage & Vissage",
    "Sciage & Découpe",
    "Jardinage & Extérieur",
    "Nettoyage & Entretien",
    "Ponçage & Polissage",
  ];
  const [selectedCategory, setSelectedCategorie] = useState<string>(
    categories[0],
  );

  const hanldeSelectCategory = (category: string) => {
    console.log("Category :", category);
    setSelectedCategorie(category);
  };
  const navigate = useNavigate();
  return (
    <div className="sm:pl-13 pl-8 sm:pt-10 w-[95%]">
      <div className=" bg-linear-to-br from-gray-500 to-gray-400 p-5 rounded-2xl ">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight">
          Louez le bon outil,
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
            au bon moment.
          </span>
        </div>

        <Divider padding="sm:pt-15 pt-10" />
        <div className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans max-w-lg">
          La plateforme de confiance pour louer vos outils entre voisins.
          Économisez de l'argent, libérez de l'espace, et réalisez tous vos
          projets.
        </div>
        <Divider padding="sm:pt-8 pt-5" />

        <ToolButton
          onclick={() => navigate(RoutePath.ADDTOOLPAGE)}
          prefix={false}
          title="Proposer un outil"
          style="p-2 rounded-md w-fit flex justify-center 
          items-center gap-x-1.5 text-sm sm:text-base cursor-pointer bg-white text-black"
          icon={<ArrowRight />}
        />
      </div>
      <Divider padding="sm:pt-8 pt-5" />
      <div className="rounded-2xl p-10 border border-gray-400/20 bg-white shadow-md">
        <div className="flex flex-wrap flex-col sm:flex-row  items-center justify-between gap-2.5">
          {/* tool Search */}
          <div className="flex-3 w-full sm:w-fit">
            <TextField
              value=""
              type="text"
              id="search"
              icon={
                <Search
                  className="absolute left-3 text-gray-500 pointer-events-none"
                  size={16}
                />
              }
              name="search"
              label=""
              onChangeHandler={() => {}}
              placeHolder="Que rechercher-vous ? (ex:percese, scie, teneuse...)"
            />
          </div>

          {/* City filter */}
          <div className="flex-2 w-full sm:w-fit">
            <ToolSelect
              cities={cities}
              hanldeCityChange={hanldeCityChange}
              value={selectedCity}
              id="cities"
              name="cities"
              icon={
                <MapPinHouse
                  size={18}
                  className="absolute left-3 text-gray-500 pointer-events-none"
                />
              }
            />
          </div>

          {/* Budget slider */}
          <div className="w-full sm:w-fit">
            <TextField
              value=""
              type="text"
              id="search"
              icon={
                <Search
                  className="absolute left-3 text-gray-500 pointer-events-none"
                  size={16}
                />
              }
              name="search"
              label=""
              onChangeHandler={() => {}}
              placeHolder="Que rechercher-vous ? (ex:percese, scie, teneuse...)"
            />
          </div>
        </div>

        <Divider padding="sm:pt-8 pt-5" />

        {/* Categories */}
        <ToolCategory
          hanldeSelectCategory={hanldeSelectCategory}
          selected={selectedCategory}
          categories={categories}
        />
      </div>

      <Divider padding="sm:pt-8 pt-5" />

      <div className="">
        <h2 className="text-xl font-display font-semibold tracking-tight text-gray-900">
          Outils disponibles pour vous
        </h2>
        <p className="text-xs text-gray-500">
          6 outils trouvés dans notre catalogue
        </p>
      </div>
    </div>
  );
}
