import React from "react";

type InputComponentProps = {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputComponent: React.FC<InputComponentProps> = ({
  name,
  type,
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <div className="w-full flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-black">
      <input
        type={type}
        name={name}
        className={`block w-full flex-1 border-0 custom-input bg-transparent py-1.5 pl-2 content-text ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
