import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

export default function BreadCrub({ navs }) {
  return (
    <div>
      <ul className="font-semibold flex items-center p-3">
        {navs.length > 0 &&
          navs?.map((n, i) => (
            <li key={i} className="flex items-center">
              <Link to={n.link}>{n.name}</Link>
              {navs.length !== i + 1 && <FaAngleRight className="px-1 text-xl" />}
            </li>
          ))}
      </ul>
    </div>
  );
}
