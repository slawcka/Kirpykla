import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/paieska">
        Paieska
      </NavLink>
      <NavLink exact to="/klientas">
        Klientas
      </NavLink>
    </div>
  );
};

export default Header;
