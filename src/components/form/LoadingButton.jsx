import React from "react";
import { ScaleLoader } from "react-spinners";

export default function LoadingButton({ label = "", onClick }) {
  return (
    <button
      // onClick={onClick}
      disabled={true}
      className="mx-auto bg-blue-950 dark:bg-blue-900 text-white font-semibold px-12 rounded-[10px] py-2 flex items-center"
    >
      <ScaleLoader color="#ffffff" height={18} />
    </button>
  );
}
