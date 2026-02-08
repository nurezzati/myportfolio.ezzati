"use client";

import { motion } from "framer-motion";
import { Home, FolderKanban, Mail } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href}>
            <motion.span
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="h-4 w-4" aria-hidden />
              {label}
            </motion.span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
