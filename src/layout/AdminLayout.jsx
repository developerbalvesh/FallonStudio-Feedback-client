import React, { useState } from "react";
import Button from "../components/form/Button";
import { FaBarsProgress } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { MdFeedback } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import DarkModeToggle from "../components/DarkModeToggle";

const Navs = () => {
  return (
    <div className="w-[200px] h-[calc(100svh-70px)] md:h-[100svh] fixed md:sticky top-[70px] md:top-0 bg-white shadow z-10 dark:bg-gray-800">
      <div className="p-5">
        <img className="w-1/2 mx-auto" src="/adminLogo.png" alt="admin logo" />
      </div>
      <nav className="p-5 flex flex-col gap-3">
        <NavLink
          to={"#"}
          className="flex items-center justify-start gap-2 text-xl"
        >
          <MdAutoGraph /> <span className="pb-1">Dashboard</span>
        </NavLink>
        <NavLink
          to={"#"}
          className="flex items-center justify-start gap-2 text-xl"
        >
          <BiTask /> <span className="pb-1">Orders</span>
        </NavLink>
        <NavLink
          to={"/admin/feedback-list"}
          className="flex items-center justify-start gap-2 text-xl text-blue-900 dark:text-gray-400"
        >
          <MdFeedback /> <span className="pb-1">Feedbacks</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default function AdminLayout({ children }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex bg-white dark:bg-black dark:text-white">
      <div className="hidden md:block">
        <Navs />
      </div>
      <div
        className={`block md:hidden fixed transition ${
          show ? "" : "translate-x-[-500px]"
        }`}
      >
        <Navs />
      </div>
      <div className="flex flex-col w-full">
        <header className="p-3 bg-white dark:bg-gray-800 shadow h-[70px] w-[100%] sticky top-0 z-0 flex items-center text-right justify-between">
          <div className="flex gap-3">
            <div className="hidden md:block">
              <FaBarsProgress className="text-2xl cursor-pointer" />
            </div>
            <div className="block md:hidden">
              {show ? (
                <ImCross
                  onClick={() => setShow(false)}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <FaBarsProgress
                  onClick={() => setShow(true)}
                  className="text-2xl cursor-pointer"
                />
              )}
            </div>
            Welcome to Admin Panel!
          </div>
          <div className="flex gap-3">
            <DarkModeToggle />
            <Link to="/">
              <Button label="Logout" />
            </Link>
          </div>
        </header>
        <main className="p-3">{children}</main>
      </div>
    </div>
  );
}
