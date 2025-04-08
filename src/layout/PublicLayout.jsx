import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PublicLayout({ children }) {
  return (
<>
    <Header />
      <main className="min-h-[100svh] text-black dark:text-white bg-white dark:bg-black">{children}</main>
      <Footer />
</>
  );
}
