import React from "react";

export type FieldType = {
  icon?: React.JSX.Element;
  value: string;
  placeHolder: string;
  type: string;
  id?: string;
  label: string;
  name: string;
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
  onChangeHandler,
}: FieldType) {
  return (
    <label className="text-gray-400/50 text-sm truncate" htmlFor={id}>
      {label}

      <div className="relative flex items-center w-full">
        {icon}
        <input
          id={id}
          onChange={(e) => onChangeHandler(e)}
          placeholder={placeHolder}
          className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border
           border-gray-100 rounded-xl text-sm focus:outline-none 
          focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
        focus:bg-white transition-all
         placeholder:text-gray-400 text-gray-800"
          required
          name={name}
          type={type}
        />
      </div>
    </label>
  );
}
