import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2 shrink-0">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
        DS
      </span>
      <span className="font-display text-lg font-bold text-ink">
        Dev <span className="text-gradient">Stack</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        {/* Mobile: hamburger — Desktop: brand */}
        <button
          type="button"
          className="focus-ring -ml-2 grid h-9 w-9 place-items-center rounded-md text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="hidden md:block">
          <BrandMark />
        </div>
        <div className="md:hidden">
          <BrandMark />
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href={i === 0 ? "#top" : `#${link.toLowerCase()}`}
                className="focus-ring text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="focus-ring hidden text-sm font-semibold text-ink sm:inline-block"
          >
            Sign In
          </button>
          <button
            type="button"
            className="focus-ring rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-pink-200 transition-transform hover:scale-[1.03] sm:px-5"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="border-t border-line bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href={i === 0 ? "#top" : `#${link.toLowerCase()}`}
                  className="focus-ring block rounded-md px-2 py-2 text-sm font-medium text-ink-soft hover:bg-surface-muted hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-3 border-t border-line pt-3">
              <button type="button" className="focus-ring text-sm font-semibold text-ink">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
