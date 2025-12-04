"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-(--inputs) pt-6 pb-6 ">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/" className="">
            <svg width={136} height={16} className="fill-(--main)">
              <use href="/icons.svg#icon-logo"></use>
            </svg>
          </Link>
          <ul className="flex row gap-8 text-[16px] font-medium text-(--main) leading-6 ">
            <li
              className={`hover:text-(--button-hover) transition-colors ease-out ${
                pathname === "/" ? "text-(--button)" : "text-(--main)"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`hover:text-(--button-hover) transition-colors ease-out ${
                pathname === "/catalog" ? "text-(--button)" : "text-(--main)"
              }`}
            >
              <Link href="/catalog">Catalog</Link>
            </li>
          </ul>
          <div className=""></div>
        </div>
      </div>
    </header>
  );
}
