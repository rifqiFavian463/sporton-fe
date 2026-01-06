import React from "react";
import { Header } from "./components/layouts/header";

function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default LandingLayout;
