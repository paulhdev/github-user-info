import React from "react";
import { Link } from "react-router-dom";

import { HeaderStyle } from "./styles";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>GetUser</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
