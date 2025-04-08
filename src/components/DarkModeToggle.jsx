import React, { useState, useEffect } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for saved preference or default to light
    const storedMode = localStorage.getItem('darkMode');
    return storedMode === 'dark' || (!storedMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
    >
      {darkMode ? (
       <IoSunnyOutline />
      ) : (
        <FaRegMoon />
      )}
    </button>
  );
}

export default DarkModeToggle;