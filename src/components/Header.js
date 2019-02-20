import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
    <div className="container header__navigation">
      <h1 className="header__logo">Barber<span><i class="fas fa-cut"></i></span>graber</h1>
      <div className="header__links">

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

    </div>
    </div>
  );
};

export default Header;
