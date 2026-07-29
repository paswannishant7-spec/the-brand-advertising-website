import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open ? "bg-ink/95 backdrop-blur border-b border-paper/10" : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link
          to="/"
          className="font-display text-xl font-extrabold tracking-tightest text-paper"
          onClick={() => setOpen(false)}
        >
          THE BRAND<span className="text-signal">.</span>ADVERTISING
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-xs font-semibold uppercase tracking-widest2 transition-colors",
                  isActive ? "text-signal" : "text-paper/70 hover:text-paper"
                )
              }
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-1.5 border border-signal px-5 py-2.5 text-xs font-semibold uppercase tracking-widest2 text-signal transition-colors hover:bg-signal hover:text-ink"
          >
            Start a campaign <ArrowUpRight size={14} />
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-paper"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-paper/10 bg-ink"
          >
            <ul className="container flex flex-col gap-1 py-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block py-3 text-lg font-display font-bold",
                        isActive ? "text-signal" : "text-paper"
                      )
                    }
                    end={item.path === "/"}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
