"use client";

import { useEffect, useState } from "react";
import { FlagMark } from "@/components/ui/flag-mark";
import { site } from "@/lib/site";
import { navigation } from "@/lib/navigation";
import { whatsapp } from "@/lib/whatsapp";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={scrolled ? "site-nav is-scrolled" : "site-nav"} id="top">
      <div className="wrap nav-bar">
        <a className="brand" href="/#top" onClick={() => setOpen(false)}>
          <FlagMark width={32} height={16} className="flag-mark brand-flag" />
          <span>
            {site.name}
            <small>AUSTRALIA</small>
          </span>
        </a>

        <nav className="nav-center" aria-label="Primary">
          <ul className="nav-links">
            {navigation.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-end">
          <a className="btn btn-primary nav-cta" href="/#plans" onClick={() => setOpen(false)}>
            Choose a plan
          </a>
          <button
            className={open ? "nav-toggle is-open" : "nav-toggle"}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle-bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={open ? "mobile-menu is-open" : "mobile-menu"}
        aria-hidden={!open}
      >
        <div className="mobile-menu-panel">
          <nav aria-label="Mobile">
            <ul className="mobile-menu-links">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu-actions">
            <a className="btn btn-primary" href="/#plans" onClick={() => setOpen(false)}>
              Choose a plan
            </a>
            <a
              className="btn btn-line"
              href={whatsapp.href}
              title="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
