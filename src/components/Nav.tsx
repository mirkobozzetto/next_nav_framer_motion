"use client";
import Link from "next/link";
import path from "path";
import { usePathname } from "next/navigation";
import cn from "classnames";

export default function Nav() {
  const links = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];
  const pathName = usePathname();
  return (
    <nav className="p-4">
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              className={cn(
                "font-medium rounded-md text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-slate-200",
                pathName === link.path ? "bg-slate-300" : ""
              )}
              href={link.path}
            >
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
