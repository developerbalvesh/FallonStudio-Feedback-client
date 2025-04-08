import React from "react";

export default function Button({ label = "Submit", onClick }) {
  return (
    <button
      onClick={onClick}
      className=" bg-blue-950 text-white font-semibold px-10 rounded-[10px] py-2"
    >
      {label}
    </button>
  );
}
