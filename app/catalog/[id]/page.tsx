"use client";
import { fetchCamperById } from "@/lib/api/clientapi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";
import Features from "@/components/Features/Features";
import { useState } from "react";
import Details from "@/components/Details/Details";
import Reviews from "@/components/Reviews/Reviews";
import Booking from "@/components/Booking/Booking";
export default function CamperInfo() {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">(
    "features"
  );
  const params = useParams<{ id: string }>();
  const camperId = params.id;
  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => fetchCamperById(camperId),
  });

  return (
    <section className="my-12">
      <div className="container">
        <div className="mb-7">
          <h1 className="font-semibold text-2xl leading-[1.33] mb-2">
            {camper?.name}
          </h1>
          <div className="flex gap-4 items-center mb-4">
            <div className="flex gap-1 items-center">
              <svg width={16} height={16} className="fill-(--rating)">
                <use href="/icons.svg#icon-star"></use>
              </svg>
              <p>
                {camper?.rating} ({camper?.reviews.length} Reviews)
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <svg width={16} height={16}>
                <use href="/icons.svg#icon-map"></use>
              </svg>
              <p>{camper?.location}</p>
            </div>
          </div>
          <p className="font-semibold text-2xl leading-[1.33] ">
            € {camper?.price.toFixed(2)}
          </p>
        </div>
        <div className="mb-7">
          <ul className="flex gap-12 justify-between">
            {camper?.gallery.map((photo, index) => (
              <li key={index}>
                <Image
                  src={photo.original}
                  alt={camper.name}
                  width={292}
                  height={312}
                />
              </li>
            ))}
          </ul>
        </div>
        <p className="font-normal  text-(--text) mb-15">
          {camper?.description}
        </p>
        <div className="mb-6">
          <ul className="flex gap-10">
            <li>
              <button
                className={`font-semibold text-xl leading-[1.33] relative ${
                  activeTab === "features"
                    ? "after:content-[''] after:absolute after:left-0 after:bottom-[-25px] after:w-full after:h-0.5 after:bg-(--button)"
                    : ""
                }`}
                onClick={() => setActiveTab("features")}
              >
                Features
              </button>
            </li>
            <li>
              <button
                className={`font-semibold text-xl leading-[1.33] relative ${
                  activeTab === "reviews"
                    ? "after:content-[''] after:absolute after:left-0 after:bottom-[-25px] after:w-full after:h-0.5 after:bg-(--button)"
                    : ""
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </li>
          </ul>
        </div>
        <hr className="h-px border-(--gray-light) mb-11" />
        <div className="flex gap-10">
          <div>
            {activeTab === "features" && (
              <div className="w-[631px]">
                {camper && <Features camper={camper} />}
                {camper && <Details camper={camper} />}
              </div>
            )}
            {activeTab === "reviews" && camper && (
              <div className=" w-[631px] ">
                <Reviews camper={camper}></Reviews>
              </div>
            )}
          </div>
          <div>
            <Booking></Booking>
          </div>
        </div>
      </div>
    </section>
  );
}
