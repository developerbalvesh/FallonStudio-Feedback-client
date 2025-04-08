import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PublicLayout({ children }) {
  return (
<>
    <Header />
      <main className="min-h-[100svh]">{children}</main>
      <Footer />
</>
  );
}
