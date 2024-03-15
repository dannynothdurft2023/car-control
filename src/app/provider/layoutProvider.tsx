"use client";
import "@/styles/navigation.scss";
import React, { useState } from "react";
import BurgerButton from "@/components/burgerButton";
import Navi from "@/components/navi";

const LayoutProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <body>
      <header className="cc-header-ct">
        <BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen ? <Navi setMenuOpen={setMenuOpen} /> : null}
      </header>
      {children}
    </body>
  );
};

export default LayoutProvider;
