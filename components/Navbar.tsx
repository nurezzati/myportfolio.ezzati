"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-[var(--border)] bg-white/[0.03] px-5 py-3 backdrop-blur-xl sm:px-6"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}
      >
        <Link
          href="#home"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Web Design and Development
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <motion.span
                className="rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <motion.button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((o) => !o)}
          whileTap={{ scale: 0.95 }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </nav>

      {/* Mobile dropdown */}
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col py-2">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
