import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-(--inputs) pt-6 pb-6 ">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/" className="">
            <svg width={136} height={16}>
              <use href="/icons.svg#icon-logo"></use>
            </svg>
          </Link>
          <ul className="flex row gap-8 text-[16px] font-medium text-(--main) leading-6 ">
            <li className="hover:text-(--button-hover) transition-colors ease-out">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-(--button-hover) transition-colors ease-out">
              <Link href="/catalog">Catalog</Link>
            </li>
          </ul>
          <div className=""></div>
        </div>
      </div>
    </header>
  );
}
