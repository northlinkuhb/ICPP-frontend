import React from "react";

type CustomRadioProps = {
  id: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  value: string;
};

export default function CustomRadio({
  id,
  name,
  checked,
  onChange,
  value,
}: CustomRadioProps) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        id={String(id)}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      <div
        className={`clamp-[size,1rem,1.25rem] shrink-0 border-2 border-black rounded-full flex items-center justify-center ${
          checked ? "bg-transparent" : "bg-transparent"
        }`}
      >
        {checked && (
          <div className="clamp-[size,0.5rem,0.625rem] bg-black rounded-full"></div>
        )}
      </div>
    </label>
  );
}
