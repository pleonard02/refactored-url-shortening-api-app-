import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/logo.svg'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="navbar-container">
        <Link to="/" aria-label="Shortly home">
            <img
                src={Logo}
                alt="Shortly"
                id="shortly-logo"
            />
        </Link>

        <nav
            className={`site-navigation ${isMenuOpen ? "is-open" : ""}`}
            id="primary-navigation"
            aria-label="Primary navigation"
        >
            <ul className="navbar">
            <li>
                <Link to="/features" onClick={closeMenu}>
                Features
                </Link>
            </li>

            <li>
                <Link to="/pricing" onClick={closeMenu}>
                Pricing
                </Link>
            </li>

            <li>
                <Link to="/resources" onClick={closeMenu}>
                Resources
                </Link>
            </li>
            </ul>

            <div className="button-container">
            <button type="button" id="login-btn">
                Login
            </button>

            <button type="button" id="signup-btn">
                Sign Up
            </button>
            </div>
        </nav>

        <button
            type="button"
            className="menu-toggle"
            aria-label={
            isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            id="mobile-menu-toggle"
            onClick={() => setIsMenuOpen((previous) => !previous)}
        >
            ☰
        </button>
        </header>
    );
}

export default Header;