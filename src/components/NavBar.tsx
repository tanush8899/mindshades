import { Link, NavLink, useLocation } from "react-router-dom";
import { seriesList } from "../data/artworks";
import { useEffect, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react"; // type-only import ✅
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isSeriesActive = location.pathname.startsWith("/series/");

  // Close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Make "same-page" clicks do something (scroll to top & close menu)
  const handleSameOrNewNav = (e: ReactMouseEvent, to: string) => {
    const current = location.pathname;
    if (current === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    } else {
      // allow normal navigation AND close the menu
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="w-full px-[10vw] py-6 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="block leading-tight"
          onClick={(e) => handleSameOrNewNav(e, "/")}
        >
          <div className="font-semibold text-3xl">Mindshades</div>
          <div className="text-sm md:text-base font-normal opacity-70">
            by Roshna Sanjay
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-12">
          {/* About: underline when active */}
          <NavLink
            to="/about"
            className={({ isActive }) => `text-xl ${isActive ? "underline" : ""}`}
            onClick={(e) => handleSameOrNewNav(e, "/about")}
          >
            About
          </NavLink>

          {/* Series trigger: underline when any series route is active */}
          <div className="relative inline-block group">
            <button
              className={`text-xl leading-none select-none ${
                isSeriesActive ? "underline" : "hover:underline"
              }`}
              aria-haspopup="true"
              aria-expanded={isSeriesActive}
              aria-controls="series-menu-desktop"
            >
              Series
            </button>

            {/* Hover bridge */}
            <span className="absolute left-0 top-full h-2 w-full" />

            {/* Text-only dropdown */}
            <ul
              id="series-menu-desktop"
              className="
                absolute left-0 top-full z-50
                opacity-0 translate-y-1
                group-hover:opacity-100 group-hover:translate-y-0
                transition duration-150
                pointer-events-none group-hover:pointer-events-auto
                space-y-1
              "
            >
              {seriesList.map((s) => (
                <li key={s.slug}>
                  <NavLink
                    to={`/series/${s.slug}`}
                    className={({ isActive }) =>
                      `block py-2 text-lg leading-tight ${
                        isActive ? "underline" : "hover:underline"
                      }`
                    }
                    onClick={(e) => handleSameOrNewNav(e, `/series/${s.slug}`)}
                  >
                    {s.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile: Hamburger */}
        <button
          type="button"
          className="sm:hidden relative h-8 w-10 -mr-1 inline-flex items-center justify-center"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute inset-x-2 top-2 h-[2px] rounded-full bg-black transition-transform duration-300 ease-out ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute inset-x-2 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-black transition-opacity duration-300 ease-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute inset-x-2 bottom-2 h-[2px] rounded-full bg-black transition-transform duration-300 ease-out ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel (no backdrop, no rounding) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="sm:hidden fixed left-0 right-0 top-[100px] z-40"
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white border-t border-black/10">
              <ul className="py-2">
                {/* Gallery */}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block px-5 py-4 text-lg ${isActive ? "underline" : ""} active:opacity-60`
                    }
                    onClick={(e) => handleSameOrNewNav(e, "/")}
                  >
                    Gallery
                  </NavLink>
                </li>

                {/* About */}
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block px-5 py-4 text-lg ${isActive ? "underline" : ""} active:opacity-60`
                    }
                    onClick={(e) => handleSameOrNewNav(e, "/about")}
                  >
                    About
                  </NavLink>
                </li>

                {/* Divider */}
                <li className="px-5 py-2">
                  <div className="h-px bg-black/10" />
                </li>

                {/* Series label */}
                <li className="px-5 pb-1 pt-0">
                  <span className="text-xs uppercase tracking-wider text-black/50">
                    Series
                  </span>
                </li>

                {/* Series items */}
                {seriesList.map((s) => (
                  <li key={s.slug}>
                    <NavLink
                      to={`/series/${s.slug}`}
                      className={({ isActive }) =>
                        `block px-5 py-4 text-lg ${isActive ? "underline" : ""} active:opacity-60`
                      }
                      onClick={(e) => handleSameOrNewNav(e, `/series/${s.slug}`)}
                    >
                      {s.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
