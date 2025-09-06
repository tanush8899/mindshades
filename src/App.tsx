import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function App() {
  const location = useLocation();
  const hideChrome = location.pathname.startsWith("/art/");

  // Smooth scroll-to-top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-black">
      {!hideChrome && <NavBar />}
      <main>
        <Outlet />
      </main>
      {!hideChrome && <Footer />}
    </div>
  );
}
