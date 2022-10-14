import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn }) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__logo"></div>
      {location.pathname === '/sign-in' && (
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
      )}
      {location.pathname === '/sign-up' && (
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      )}
      {loggedIn && (
        <nav className="header__nav">
          <span>email@email.ru</span>
          <Link className="header__sign-out" to="/sign-in">
            Выйти
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
