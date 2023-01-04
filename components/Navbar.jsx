import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { RxCaretDown } from "react-icons/rx";

const routeConfig = {
  "/": {
    title: "Home",
  },
  "/projects": {
    title: "Projects",
  },
  default: {
    title: "",
  },
};

export function Navbar() {
  const { pathname } = useRouter();
  const currentRoute = routeConfig[pathname] || routeConfig.default;

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [currentRoute]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (menuOpen && event.keyCode === 27) {
        setMenuOpen(false);
      }
    };
    const handleClick = (event) => {
      if (menuOpen && !event.target.closest("[aria-haspopup = 'true']")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, [menuOpen]);

  return (
    <div className="ml-auto relative">
      <button
        onClick={() => toggleMenu()}
        aria-haspopup="true"
        aria-label="menu-buton"
        aria-expanded={menuOpen}
        className={`flex gap-2 p-1 rounded items-center text-white font-bold hover:bg-slate-900 ${
          menuOpen && "bg-slate-900"
        }`}>
        <h1>{currentRoute.title}</h1>
        <RxCaretDown className="text-xl" />
      </button>
      {menuOpen && (
        <div
          role="menu"
          aria-labelledby="menu-button"
          className="absolute top-9 w-[300px] rounded p-1 backdrop-blur-sm bg-slate-500/50">
          <section>
            <ul>
              {Object.keys(routeConfig).map((path) => (
                <Link href={path} key={path} className="active:bg-blue-500">
                  <div className="hover:bg-blue-500 active:bg-blue-500 rounded px-2 cursor-pointer">
                    {routeConfig[path].title}
                  </div>
                </Link>
              ))}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
