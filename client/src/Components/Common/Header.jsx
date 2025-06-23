import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext'
import { BsSun, BsMoon, BsBell, BsGear } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { IoExitOutline } from 'react-icons/io5';
import '../../styles/Header.css';
import { AuthContext } from '../../context/AuthContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useContext(AuthContext);

  if (!theme || !toggleTheme) {
    throw new Error("ThemeContext is not provided");
  }

  return (
    <header className={`header ${theme}`}>
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">W</span>
          <span className="logo-text">ealthSense</span>
        </div>
        
        <div className="nav-container">
          <nav className="nav-menu">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/analyse-stock" className="nav-item">Analyse Stock</Link>
            <Link to="/appendix" className="nav-item">Appendix</Link> 
            <Link to="/watchlist" className="nav-item">Watchlist</Link>

            <Link to="/about" className="nav-item">About</Link>
            
          </nav>
        </div>

        <div className="icons">
          <Link to="/notifications">
            <button className="icon-button"><BsBell /></button>
          </Link>
          <Link to="/profile">
            <button className="icon-button"><BiUser /></button>
          </Link>
          <Link to="/settings">
            <button className="icon-button"><BsGear /></button>
          </Link>
          <button className="icon-button" onClick={toggleTheme}>
            {theme === "light" ? <BsMoon /> : <BsSun />}
          </button>
          {user ? (
            <button className="logout" style={{ background: 'red', color: 'white' }} onClick={logout}>
              <IoExitOutline /> Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="login-button">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="signup-button">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
