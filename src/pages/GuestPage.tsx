import { ArrowRight, MapPinHouse, Search } from "lucide-react";
import Divider from "../components/common/Divider";
import ToolButton from "../features/tool/componenets/ToolButton";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../routes/routes";
import TextField from "../features/auth/components/TextField";
import { useEffect, useMemo, useState } from "react";
import ToolCategory from "../features/tool/componenets/ToolCategory";
import ToolCompoenet from "../features/tool/componenets/ToolCompoenet";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllTools, getToolCities } from "../features/tool/toolThunks";
import Loader from "../components/common/Loader";
import type { FailureResponse } from "../types/failureResoponse";
import toast from "react-hot-toast";
import { categories } from "../utilis/constants";
import ToolCitySelect from "../features/tool/componenets/ToolCitySelect";

export default function GuestPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("Toutes les villes");
  const [selectedCategory, setSelectedCategorie] = useState<string>(
    categories[0],
  );
  const [priceRange, setPriceRange] = useState<number>(50); // maximum price filter

  const selecCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setSelectedCity(city);
  };
  const hanldeSelectCategory = (category: string) => {
    setSelectedCategorie(category);
  };

  const hanldeSearch = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const dispatch = useAppDispatch();
  const { tools, isLoading, error, cities } = useAppSelector(
    (state) => state.tool,
  );

  useEffect(() => {
    try {
      (() => dispatch(getAllTools()).unwrap())();
      (() => dispatch(getToolCities()).unwrap())();
    } catch (error) {
      const err = error as FailureResponse;
      toast.error(err.message);
    }
  }, [dispatch]);

  const filterSearch = useMemo(() => {
    return tools.filter((tool) => {
      const matchsCategory =
        selectedCategory == tool.category ||
        selectedCategory.toLowerCase() == "tout";

      const matchsCity =
        selectedCity.toLowerCase() === "toutes les villes" ||
        selectedCity.toLowerCase() === tool.owner?.city.toLowerCase();

      const matchsQuery =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        searchQuery.trim() === "";

      const matchsPrice =
        priceRange <= tool.pricePerDay || priceRange >= tool.pricePerDay;

      return matchsQuery && matchsCategory && matchsCity && matchsPrice;
    });
  }, [searchQuery, selectedCity, selectedCategory, priceRange, tools]);

  return (
    <div className="">
      {isLoading && <Loader />}
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
        </div>

        <Divider padding="sm:pt-8 pt-5" />

        <div className="rounded-2xl p-10 border border-gray-400/20 bg-white shadow-md">
          <div
            className="flex flex-wrap flex-col sm:flex-row  
          items-center justify-between gap-2.5"
          >
            {/* tool Search */}
            <div className="flex-3 w-full sm:w-fit">
              <TextField
                value={searchQuery}
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
                onChangeHandler={(e) => hanldeSearch}
                placeHolder="Que rechercher-vous ? (ex:percese, scie, teneuse...)"
              />
            </div>

            {/* City filter */}
            <div className="flex-2 w-full sm:w-fit">
              <ToolCitySelect
                cities={cities}
                hanldeCityChange={selecCityChange}
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
              <div className=" flex flex-col justify-center px-2">
                <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                  <span>Budget max :</span>
                  <span className="text-blue-600 font-semibold font-mono">
                    {priceRange} € / jour
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>
          </div>

          <Divider padding="sm:pt-8 pt-5" />

          {/* Categories */}
          <ToolCategory
            hanldeSelectCategory={hanldeSelectCategory}
            selected={selectedCategory}
            categories={[...categories]}
          />
        </div>

        <Divider padding="sm:pt-8 pt-5" />

        <div className="">
          <h2 className="text-xl font-display font-semibold tracking-tight text-gray-900">
            Outils disponibles pour vous
          </h2>
          <p className="text-xs text-gray-500">
            {tools.length} outils trouvés dans notre catalogue
          </p>
        </div>

        <Divider padding="sm:pt-8 pt-5" />

        {/* tools area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSearch.length === 0
            ? tools.map((tool) => (
                <ToolCompoenet
                  key={tool._id}
                  category={tool.category}
                  description={tool.description}
                  depositAmount={tool.depositAmount}
                  name={tool.name}
                  pricePerDay={tool.pricePerDay}
                  image={tool.image}
                  owner={tool.owner}
                  toolStatus={tool.toolStatus}
                  _id={tool._id}
                />
              ))
            : filterSearch.map((tool) => (
                <ToolCompoenet
                  key={tool._id}
                  category={tool.category}
                  description={tool.description}
                  depositAmount={tool.depositAmount}
                  name={tool.name}
                  pricePerDay={tool.pricePerDay}
                  image={tool.image}
                  owner={tool.owner}
                  toolStatus={tool.toolStatus}
                  _id={tool._id}
                />
              ))}
        </div>
        <Divider padding="sm:pt-8 pt-5" />
      </div>
    </div>
  );
}
