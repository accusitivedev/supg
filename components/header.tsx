import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="mx-auto my-8 flex max-w-5xl flex-wrap px-4 tracking-tight">
      <Link
        href="/"
        className="font-display text-xl font-bold text-gray-900 hover:underline dark:text-gray-100 tablet:text-2xl"
      >
        supg
      </Link>
      <ThemeToggle />
      <nav className="text-lg tablet:ml-auto tablet:text-xl">
        <ul className="my-4 flex gap-2 tablet:m-0">
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
