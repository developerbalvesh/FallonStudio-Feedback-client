import React, { useState } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaChevronCircleUp } from "react-icons/fa";
import { formatDate } from "../../helper/dateFormatter";

export default function FeedbackCards({
  key,
  fullName,
  email,
  createdAt,
  feedbackMessage,
}) {
  const [show, setShow] = useState(false);
  return (
    <div key={key} className="flex flex-wrap shadow rounded my-3 p-3 border dark:border-gray-400">
      <div className="grow w-[25%] text-blue-900 dark:text-gray-300">{fullName}</div>
      <div className="grow w-[25%] text-blue-900 dark:text-gray-300">{email}</div>
      <div className="grow w-[25%] text-blue-900 dark:text-gray-300 hidden md:block ">
        {formatDate(createdAt)}
      </div>
      <div className="grow w-[20%] text-blue-900 dark:text-white text-xl m-1 flex justify-end md:justify-center items-center">
        {show ? (
          <FaChevronCircleUp
            className="cursor-pointer"
            onClick={() => setShow(false)}
          />
        ) : (
          <FaCircleChevronDown
            className="cursor-pointer"
            onClick={() => setShow(true)}
          />
        )}
      </div>
      <p
        className={`transition-all px-2 grow w-full overflow-hidden ${
          show ? "h-auto" : "h-0"
        }`}
      >
        <h6 className="block md:hidden">{formatDate(createdAt)}</h6>
        <span className="font-semibold">Message: </span> {feedbackMessage}
      </p>
    </div>
  );
}
