import Link from "next/link";
import { Map } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        className="flex items-center justify-center text-xl font-bold hover:underline gap-1"
        href="/"
      >
        <Map className="h-6 w-6" />
        Landmine Map
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/methodology"
        >
          Methodology
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/about"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
