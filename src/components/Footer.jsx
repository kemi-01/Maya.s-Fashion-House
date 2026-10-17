import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import darkLogo from "../assets/logo/mayas-logo-dark.png";
import lightLogo from "../assets/logo/mayas-logo-light.png";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white text-black dark:border-white/10 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            {/* Light Theme Logo */}
            <img
              src={darkLogo}
              alt="Maya's Fashion House"
              className="block h-14 w-auto object-contain dark:hidden"
            />

            {/* Dark Theme Logo */}
            <img
              src={lightLogo}
              alt="Maya's Fashion House"
              className="hidden h-14 w-auto object-contain dark:block"
            />

            <p className="mt-6 max-w-md text-sm leading-7 text-black/60 dark:text-white/60">
              A fashion house built around individuality, expression,
              contemporary design, and a new perspective on style.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              Explore
            </p>

            <nav className="flex flex-col gap-3 text-sm">
              <Link
                to="/"
                className="transition-opacity hover:opacity-50"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="transition-opacity hover:opacity-50"
              >
                About
              </Link>

              <Link
                to="/collection"
                className="transition-opacity hover:opacity-50"
              >
                Collection
              </Link>

              <Link
                to="/academy"
                className="transition-opacity hover:opacity-50"
              >
                Academy
              </Link>

              <Link
                to="/contact"
                className="transition-opacity hover:opacity-50"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
              Connect
            </p>

            <div className="space-y-4 text-sm">
              <a
                href="mailto:hello@mayasfashionhouse.com"
                className="block transition-opacity hover:opacity-50"
              >
                hello@mayasfashionhouse.com
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-50"
              >
                Instagram
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-5 border-t border-black/10 pt-6 text-xs text-black/40 dark:border-white/10 dark:text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Maya&apos;s Fashion House.
            All rights reserved.
          </p>

          <p className="uppercase tracking-[0.18em]">
            A new chapter is coming.
          </p>

        </div>
      </div>
    </footer>
  );
}