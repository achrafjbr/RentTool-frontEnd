import React from "react";

export type FieldType = {
  icon?: React.JSX.Element;
  value: string;
  placeHolder: string;
  type: string;
  id?: string;
  label: string;
  name: string;
  height?: string;

  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
};

export default function TextField({
  icon,
  type,
  placeHolder,
  id,
  label,
  name,
  height,
  value,
  onChangeHandler,
}: FieldType) {
  return (
    <label
      className=" text-xs sm:text-sm uppercase text-gray-500 truncate"
      htmlFor={id}
    >
      {label}

      <div className="relative flex  items-center justify-start w-full">
        {icon}
        <input
          value={value}
          id={id}
          onChange={(e) => onChangeHandler(e)}
          placeholder={placeHolder}
          className={`w-full pl-9 pr-4 py-2.5 text-wrap bg-gray-200 border
           border-gray-100 rounded-xl text-sm focus:outline-none 
          focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
        focus:bg-white transition-all
        placeholder:text-wrap 
        placeholder: tracking-wide
         placeholder:text-gray-400 text-gray-800  
         ${height}`}
          required
          name={name}
          type={type}
        />
      </div>
    </label>
  );
}
