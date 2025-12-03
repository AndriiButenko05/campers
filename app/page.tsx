import Link from "next/link";

export default function Home() {
  return (
    <section
      className="bg-[url(/images/bg.jpg)] bg-cover
      bg-no-repeat
      relative
      min-h-screen
      bg-center
      text-(--inputs)
      flex items-center"
    >
      <div className="container">
        <div className="mb-10">
          <h1 className="text-5xl font-semibold leading-8 mb-4">
            Campers of your dreams
          </h1>
          <p className="text-2xl font-semibold leading-8">
            You can find everything you want in our catalog
          </p>
        </div>
        <Link
          href="/catalog"
          className="inline-block text-center bg-(--button) rounded-full py-4 px-12 w-[173px] h-14 font-medium text-base leading-6 tracking-tighter text-(--white)
          hover:bg-(--button-hover) transition-colors ease-out"
        >
          View Now
        </Link>
      </div>
    </section>
  );
}
