export type SelectType = {
  icon?: React.JSX.Element;
  value: string;
  // placeHolder: string;
  // type: string;
  id?: string;
  // label: string;
  name: string;
  cities: string[];
  hanldeCityChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function ToolSelect({
  name,
  hanldeCityChange,
  value,
  icon,
  id,
  cities,
}: SelectType) {
  return (
    <div className="relative  flex items-center w-full">
      {icon}
      <select
        value={value}
        onChange={hanldeCityChange}
        className="w-full pl-9 pr-4 py-2.5 bg-gray-200 border
           border-gray-100 rounded-xl text-sm focus:outline-none 
          focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
        focus:bg-white transition-all
         placeholder:text-gray-400 text-gray-800"
        name={name}
        id={id}
      >
        {/* <option value={value}>{value}</option> */}

        {cities.map((city) => (
          <option key={city} value={city[0].toLowerCase() + city.substring(1)}>
            {city.at(0)?.toUpperCase() + city.substring(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
