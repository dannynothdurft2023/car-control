import Link from "next/link";
import React from "react";

interface NaviProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navi: React.FC<NaviProps> = ({ setMenuOpen }) => {
  const closeNavi = () => {
    setMenuOpen(false);
  };
  return (
    <div className="cc-navi-ct">
      <Link href="/" onClick={closeNavi}>
        Dashboard
      </Link>
      <Link href="/info" onClick={closeNavi}>
        Fahrzeug Info
      </Link>
    </div>
  );
};

export default Navi;
