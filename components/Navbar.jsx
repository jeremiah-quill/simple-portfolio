import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter, router } from "next/router";

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
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useRouter();
  const currentRoute = routeConfig[pathname] || routeConfig.default;

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setCurrentPageIdx((currentPageIdx + 1) % Object.keys(routeConfig).length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setCurrentPageIdx(
        (currentPageIdx - 1 + Object.keys(routeConfig).length) % Object.keys(routeConfig).length
      );
    } else if (event.key === "Enter") {
      const path = Object.keys(routeConfig)[currentPageIdx];
      router.push(path);
    }
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [currentRoute]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setMenuOpen(false);
      }
    };
    const handleClick = (event) => {
      if (menuOpen && !event.target.closest("[aria-haspopup = 'true']")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleClick);
    };
  }, [menuOpen]);

  return (
    <div className="ml-auto relative">
      <button
        onKeyDown={handleKeyDown}
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
              {Object.keys(routeConfig).map((path, idx) => (
                <Link
                  aria-selected={idx === currentPageIdx}
                  href={path}
                  key={path}
                  onMouseEnter={() => setCurrentPageIdx(idx)}
                  className="active:bg-blue-500">
                  <div
                    className={`hover:bg-blue-500 active:bg-blue-500 rounded px-2 cursor-pointer ${
                      currentPageIdx === idx && "bg-blue-500"
                    }`}>
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
