"use client";
import { fetchCamperById } from "@/lib/api/clientapi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Image from "next/image";
import CamperFeatures from "@/components/CamperFeatures/CamperFeatures";
import Features from "@/components/Features/Features";
import { useState } from "react";
export default function CamperInfo() {
  const [isReviewsOpen, setIsReviewsOpen] = useState<boolean>(false);
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
        <p className="mb-6 font-normal  text-(--text) mb-15">
          {camper?.description}
        </p>
        <div className="mb-6">
          <ul className="flex gap-10">
            <li>
              <p className="font-semibold text-xl leading-[1.33]">Features</p>
            </li>
            <li>
              <p className="font-semibold text-xl leading-[1.33]">Reviews</p>
            </li>
          </ul>
        </div>
        <hr className="h-px border-(--gray) mb-6" />
        <div>
          {!isReviewsOpen && (
            <div className="bg-(--inputs) w-[613px] py-11 px-[52px]">
              {camper && <Features camper={camper}></Features>}
              <div className="mt-25">
                <h2 className="font-semibold text-xl leading-[1.33]">
                  Vehicle details
                </h2>
                <hr className="h-px border-(--gray) mb-6" />
                <ul className="flex flex-col gap-4">
                  <li className="flex justify-between">
                    <p className="font-medium text-[16px] leading-6">Form</p>
                    <p className="font-medium text-[16px] leading-6">
                      {camper?.form}
                    </p>
                  </li>
                  <li className="flex justify-between">
                    <p className="font-medium text-[16px] leading-6">Length</p>
                    <p className="font-medium text-[16px] leading-6">
                      {camper?.length}
                    </p>
                  </li>
                  <li className="flex justify-between">
                    <p className="font-medium text-[16px] leading-6">Width</p>
                    <p className="font-medium text-[16px] leading-6">
                      {camper?.width}
                    </p>
                  </li>
                  <li className="flex justify-between">
                    <p className="font-medium text-[16px] leading-6">Height</p>
                    <p className="font-medium text-[16px] leading-6">
                      {camper?.height}
                    </p>
                  </li>
                  <li className="flex justify-between">
                    <p className="font-medium text-[16px] leading-6">Tank</p>
                    <p className="font-medium text-[16px] leading-6">
                      {camper?.tank}
                    </p>
                  </li>
                  <li className="flex justify-between">
                    <p className="font-medium text-[16px] leading-6">
                      Consumption
                    </p>
                    <p className="font-medium text-[16px] leading-6">
                      {camper?.consumption}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div></div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
