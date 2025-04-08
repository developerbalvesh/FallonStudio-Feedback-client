import React from "react";

export default function Input({
  type = "text",
  placeholder,
  label,
  required = true,
  register,
  errorMessage
}) {
  if (type === "text" || type === "email") {
    return (
      <label className="grid p-2 px-5">
        <span className="md:text-xl">{label} {required && <span className="text-red-600">*</span>}</span>
        <input
          type={type}
          placeholder={placeholder}
          // required={required}
          {...register}
          className="border-b p-1 outline-none"
        />
        <p className="text-red-600">{errorMessage}</p>
      </label>
    );
  }

  if (type === "textarea") {
    return (
      <label className="grid p-2 px-5">
        <span className="md:text-xl">{label} {required && <span className="text-red-600">*</span>}</span>
        <textarea
          type={type}
          placeholder={placeholder}
          // required={required}
          {...register}
          className="border-b p-1 outline-none"
        />
        <p className="text-red-600">{errorMessage}</p>
      </label>
    );
  }
  return <div></div>;
}
