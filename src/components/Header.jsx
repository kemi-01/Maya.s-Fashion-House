import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

import darkLogo from "../assets/logo/mayas-logo-dark.png";
import lightLogo from "../assets/logo/mayas-logo-light.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Collection", path: "/collection" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 dark:border-white/10 dark:bg-black/95">

      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* LEFT NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          {menuOpen ? (
            <X size={21} strokeWidth={1.5} />
          ) : (
            <Menu size={21} strokeWidth={1.5} />
          )}
        </button>

        {/* CENTER LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3"
        >
          {/* Light theme logo */}
          <img
            src={darkLogo}
            alt="Maya's Fashion House"
            className="block h-11 w-auto object-contain dark:hidden"
          />

          {/* Dark theme logo */}
          <img
            src={lightLogo}
            alt="Maya's Fashion House"
            className="hidden h-11 w-auto object-contain dark:block"
          />

          <span className="hidden text-[10px] uppercase tracking-[0.2em] sm:block">
            Maya's Fashion House
          </span>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* ACADEMY */}
          <Link
            to="/academy"
            className="hidden text-[11px] font-medium uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:text-black/50 dark:text-white dark:hover:text-white/50 sm:block"
          >
            Academy
          </Link>

          <ThemeToggle />
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`overflow-hidden border-t border-black/10 bg-white transition-all duration-500 dark:border-white/10 dark:bg-black lg:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">

          {navLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `border-b border-black/10 py-5 text-sm uppercase tracking-[0.2em] transition-colors dark:border-white/10 ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-black/50 dark:text-white/50"
                }`
              }
            >
              <span className="mr-4 text-[10px] opacity-40">
                0{index + 1}
              </span>

              {link.name}
            </NavLink>
          ))}

          {/* ACADEMY */}
          <NavLink
            to="/academy"
            onClick={closeMenu}
            className={({ isActive }) =>
              `border-b border-black/10 py-5 text-sm uppercase tracking-[0.2em] transition-colors dark:border-white/10 ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-black/50 dark:text-white/50"
              }`
            }
          >
            <span className="mr-4 text-[10px] opacity-40">
              04
            </span>

            Academy
          </NavLink>

        </nav>
      </div>
    </header>
  );
}