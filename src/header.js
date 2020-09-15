import React from "react";
import Troll from "./trollface.png";
function Header() {
  return (
    <header className="header">
      <img src={Troll} alt="meme-troll" />
      <h1 className="header__title">Meme Generator</h1>
    </header>
  );
}

export default Header;
