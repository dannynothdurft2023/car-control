import React, { FC, useState } from "react";
import "@/styles/input.scss";

type InputProps = {
  type?: string;
  label: string;
  value: string;
  name: string;
  onChange: any;
};

const Input: FC<InputProps> = ({
  type = "text",
  label,
  value,
  name,
  onChange,
}) => {
  const [isFocused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (e: any) => {
    if (!e.target.value) {
      setFocused(false);
    }
  };

  return (
    <div className={`input-container ${isFocused ? "focused" : ""}`}>
      <input
        placeholder={label}
        className="input-field"
        type={type}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        onChange={onChange}
      />
      <label htmlFor="input-field" className="input-label">
        {label}
      </label>
      <span className="input-highlight"></span>
    </div>
  );
};

export default Input;
