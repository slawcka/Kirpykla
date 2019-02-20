import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/kirpyklai">
        Kirpyklai
      </NavLink>
      <NavLink exact to="/klientui">
        Klientui
      </NavLink>
    </div>
  );
};

export default Header;
