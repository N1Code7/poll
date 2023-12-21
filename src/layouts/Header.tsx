import Logo from "@/assets/Logo";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="right">
        <Button>Je me connecte</Button>
      </div>
    </header>
  );
};

export default Header;
