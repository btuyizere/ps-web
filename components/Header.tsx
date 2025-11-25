// components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Music } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Members", href: "/members" },
    { label: "Events", href: "/events" },
    { label: "Music", href: "/store" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="header-main">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo-link">
            <Music className="logo-icon" />
            <span className="logo-text">
              Chorale Pépinière du Seigneur
            </span>
          </Link>

          <nav className="nav-desktop">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mobile-nav">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
