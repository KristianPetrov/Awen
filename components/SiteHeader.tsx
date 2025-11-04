"use client";

import { useState } from "react";

const navItems = [
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-20 bg-brown border-b border-maroon/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between md:justify-end px-6 py-3">
        <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-maroon/30 text-maroon transition hover:border-maroon/50 focus:outline-none focus:ring-2 focus:ring-maroon/40 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >{isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        <div className="flex items-center gap-3">



          <nav className="hidden items-center gap-6 text-sm font-medium text-maroon md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:opacity-90"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#book"
            className="rounded-full bg-maroon px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book Now
          </a>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-maroon/20 bg-brown md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-base text-maroon">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

