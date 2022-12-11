import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="grid grid-cols-3 px-14 py-4">
      <label
        className="text-lg text-black font-semibold mx-auto col-span-1"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        ref={ref}
        className="border border-gray-400 focus:border-blue-500 focus:outline-none px-2 py-1 rounded-md col-span-2"
        type={props.type}
        name={props.name}
        id={props.name}
      />
    </div>
  );
});

export default Input;
