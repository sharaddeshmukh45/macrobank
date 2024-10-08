import React from "react";

function InputField({ label, type, name }) {
  return (
    <div className="pt-6">
      <div>
        <label htmlFor={name} className="text-sm font-bold  ">
          {label}
        </label>
      </div>
      <input
        className="bg-[#E8E8E8]  mt-2 w-[320px] h-[50px] rounded-xl px-3"
        type={type ? type : "text"}
        name={name}
      />
    </div>
  );
}

export default InputField;
