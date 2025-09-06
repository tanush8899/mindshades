import { Link, NavLink } from "react-router-dom";
import { seriesList } from "../data/artworks";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="w-full px-[10vw] py-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="block leading-tight">
          <div className="font-semibold text-3xl">Mindshades</div>
          <div className="text-sm md:text-base font-normal opacity-70">by Roshna Sanjay</div>
        </Link>

        {/* Right-side nav */}
        <nav className="hidden sm:flex items-center gap-12">
          <NavLink to="/about" className="text-xl hover:underline">About</NavLink>

          {/* HOVER dropdown — text only, no boxes */}
          <div className="relative inline-block group">
            <button className="text-xl leading-none select-none">Series</button>

            {/* Hover bridge (keeps menu open while you move the cursor down) */}
            <span className="absolute left-0 top-full h-2 w-full"></span>

            {/* Text-only menu */}
            <ul
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
                  <Link
                    to={`/series/${s.slug}`}
                    className="block py-2 text-lg leading-tight hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile: keep simple */}
        <div className="sm:hidden flex items-center gap-6">
          <NavLink to="/about" className="text-lg underline">About</NavLink>
        </div>
      </div>
    </header>
  );
}
