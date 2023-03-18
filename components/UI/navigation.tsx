import Link from "next/link";
import ThemeToggle from "../theme-toggle";

import APP_ROUTE from '../../lib/constant/route'

export default function Header() {
  return (
    <header className="mx-auto my-8 flex max-w-5xl flex-wrap px-4 tracking-tight">
      <Link
        href="/"
        className="font-display text-xl font-bold text-gray-900 hover:underline dark:text-gray-100 tablet:text-2xl"
      >
        Supg
      </Link>
      <ThemeToggle />
      <nav className="text-lg tablet:ml-auto tablet:text-xl">
        <ul className="my-4 flex gap-2 tablet:m-0">
          {APP_ROUTE.map((route) => (
            <li key={route.label}>
              <Link href={route.path} className="hover:text-slate-300 mx-2">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
