"use client";
import "@/styles/burgerbutton.scss";
import React, { useState } from "react";

interface BurgerButtonProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  const menuBtn = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      onClick={menuBtn}
      className={`menu-btn model-1 ${menuOpen ? "open" : ""}`}
    >
      <div className="menu-btn_burger"></div>
    </div>
  );
};

export default BurgerButton;
