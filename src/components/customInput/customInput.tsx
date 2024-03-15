import React, { ChangeEvent, FC } from "react";

interface inputType {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  htmlFor?: string;
  placeholder?: string;
  innerHtml?: string;
  inputType?:string;
}

const CustomInput: FC<inputType> = ({
  label,
  value,
  onChange,
  error,
  htmlFor,
  placeholder,
  innerHtml,
  inputType,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[14px] font-normal">
        {label}
      </label>
      <input
        value={value}
        type={inputType}
        name={htmlFor}
        id={htmlFor}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-[#F1F2F5] rounded-[5px] w-full p-3 ${
          error ? " border  border-[#EE4B2B]" : " "
        } `}
      />
      {error && (
        <label htmlFor={htmlFor} className="text-[#EE4B2B]">
          {error}
        </label>
      )}
      {innerHtml && (
        <label
          dangerouslySetInnerHTML={{ __html: innerHtml }}
          htmlFor={htmlFor}
          className="text-[#EE4B2B]"
        ></label>
      )}
    </div>
  );
};

export default CustomInput;
