"use client ";
import { Camper } from "@/types/camper";
import Image from "next/image";
import Link from "next/link";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import { useCampersStore } from "@/store/useCamperStore";
interface CampersListProps {
  campers: Camper[];
}
export default function CampersList({ campers }: CampersListProps) {
  const favorites = useCampersStore((state) => state.favorites);
  const toggleFavorite = useCampersStore((state) => state.toggleFavorite);

  return (
    <div>
      <ul className="flex flex-col gap-8 justify-center">
        {campers.map((camper) => {
          const isFavorite = favorites.includes(camper.id);
          console.log(isFavorite);
          return (
            <li
              key={camper.id}
              className="flex flex-row gap-6 p-6 border border-(--gray-light) rounded-[20px] w-[888px] h-[368px] "
            >
              <Image
                width="292"
                height="320"
                alt={camper.name}
                src={camper.gallery[0].thumb}
                className="rounded-[10px] object-cover"
              ></Image>
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center mb-2 ">
                  <p className="font-semibold text-2xl leading-[1.33] ">
                    {camper.name}
                  </p>
                  <div>
                    <div className="flex gap-[13px]">
                      <p className="font-semibold text-2xl leading-[1.33] ">
                        €{camper.price.toFixed(2)}
                      </p>
                      <button onClick={() => toggleFavorite(camper.id)}>
                        <svg
                          width={24}
                          height={24}
                          className={`transition-all ease-out ${
                            isFavorite ? "stroke-(--button)" : "stroke-(--main)"
                          }`}
                        >
                          <use href="/icons.svg#icon-heart"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center mb-6">
                  <div className="flex gap-1 items-center">
                    <svg width={16} height={16}>
                      <use href="/icons.svg#icon-star"></use>
                    </svg>
                    <p>
                      {camper.rating} ({camper.reviews.length} Reviews)
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <svg width={16} height={16}>
                      <use href="/icons.svg#icon-map"></use>
                    </svg>
                    <p>{camper.location}</p>
                  </div>
                </div>
                <p className="mb-6 font-normal  text-(--text)">
                  {camper.description.split(" ").slice(0, 15).join(" ")}
                  {camper.description.split(" ").length > 15 ? "..." : ""}
                </p>
                <div>
                  <CamperFeatures camper={camper}></CamperFeatures>
                </div>
                <Link
                  href={`/catalog/${camper.id}`}
                  className="mt-6 inline-block text-center bg-(--button) rounded-full py-4 px-10 w-[166px] h-14 font-medium text-base leading-6 tracking-tighter text-(--white) hover:bg-(--button-hover) transition-colors ease-out"
                >
                  Show more
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
