import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/Nature Wise Logo Transparent.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Destinations", path: "/destinations" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-all duration-500
          ${scrolled ? "backdrop-blur-xl bg-black/70 shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
  <div className="logo-wrap">
    <img src={logo} alt="Nature Wise Tours" />
  </div>
</NavLink>


          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `
                  relative text-sm tracking-wide
                  transition-all duration-300
                  ${isActive ? "text-[var(--brand-gold)]" : "text-gray-200 hover:text-white"}
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                  after:bg-[var(--brand-gold)]
                  after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <NavLink
              to="/booking"
              className="
                px-6 py-3 rounded-full
                bg-[var(--brand-gold)] text-black font-semibold
                hover:scale-105 transition
                shadow-lg shadow-yellow-500/20
              "
            >
              Book Safari
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex flex-col">
          <div className="flex justify-between items-center px-6 h-28">
            <img src={logo} className="h-15 w-auto object-contain scale-[1.2] origin-left"/>

            <button
              onClick={() => setOpen(false)}
              className="text-3xl text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center gap-8">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-2xl text-gray-200 hover:text-[var(--brand-gold)] transition"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/booking"
              onClick={() => setOpen(false)}
              className="
                mt-10 px-10 py-4 rounded-full
                bg-[var(--brand-gold)] text-black font-semibold
              "
            >
              Book Safari
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
