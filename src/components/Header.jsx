import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navs = ({setShow}) => {
  return (
    <>
      <nav className="flex gap-3 items-center flex-col md:flex-row p-5 md:p-0 fixed md:relative right-0 top-0 w-[90%] md:w-full bg-white shadow md:shadow-none h-[100svh] md:h-auto">
        <div className="cursor-pointer flex md:hidden justify-end w-full">
          <ImCross onClick={()=>setShow(false)} />
        </div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/feedback"}>Feedback</NavLink>
        <NavLink to={"/admin/feedback-list"}>
          <button className="rounded-[10px] bg-blue-950 text-white p-2 flex">
            Admin Login
          </button>
        </NavLink>
      </nav>
    </>
  );
};

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="flex p-3 justify-between shadow">
      <div className="px-4 rounded-[10px] py-2 bg-blue-950 text-white flex align-middle items-center">
        Logo
      </div>
      <div className="flex md:hidden items-center cursor-pointer">
        <FaBars onClick={() => setShow((prev) => !prev)} className="text-xl" />
      </div>
      <div className="hidden md:block">
        <Navs />
      </div>
      <div
        className={`md:hidden transition fixed 
          ${
          show ? "" : "translate-x-[100%]"
        }
         top-0 w-[90%]`}
      >
        <Navs setShow={setShow} />
      </div>
    </header>
  );
}
