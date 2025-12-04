"use client";
import { features, vehicleTypes } from "@/const/consts";
import { useCampersStore } from "@/store/useCamperStore";
import { useState } from "react";

export default function Filters() {
  const setGlobalFilters = useCampersStore((state) => state.setFilters);
  const [location, setLocation] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [vehicleType, setVehicleType] = useState("");
  const handleFeatureClick = (apiKey: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(apiKey)
        ? prev.filter((item) => item !== apiKey)
        : [...prev, apiKey]
    );
  };
  const handleTypeClick = (value: string) => {
    setVehicleType((prev) => (prev === value ? "" : value));
  };
  const handleSearch = () => {
    setGlobalFilters({
      location: location,
      form: vehicleType,
      features: selectedFeatures,
    });
  };
  const resetFilters = () => {
    setLocation("");
    setSelectedFeatures([]);
    setVehicleType("");
    setGlobalFilters({
      location: "",
      form: "",
      features: [],
    });
  };
  return (
    <div className="w-[360px]">
      <div>
        <p className="font-normal text-base leading-normal text-(--text) mb-2">
          Location
        </p>
        <div className="relative mb-10">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City"
            className="w-full h-14 rounded-xl py-[18px] pl-10 pr-5 font-normal text-base leading-normal text-(--main) placeholder:text-(--main) focus:border-none"
          />
          <svg
            width={18}
            height={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <use href="/icons.svg#icon-map"></use>
          </svg>
        </div>
      </div>
      <p className="font-normal text-base leading-normal text-(--text) mb-8">
        Filters
      </p>
      <div className="mb-8">
        <p className="font-semibold text-xl leading-[1.2] text-(--main) mb-6">
          Vehicle equipment
        </p>
        <hr className="h-px border-(--gray) mb-6" />
        <ul className="flex flex-row flex-wrap gap-x-3 gap-y-2">
          {features.map((feature) => {
            const isSelected = selectedFeatures.includes(feature.api);
            return (
              <li
                key={feature.api}
                onClick={() => handleFeatureClick(feature.api)}
                className={`flex flex-col items-center justify-center gap-2.5 w-28 h-24 border rounded-xl cursor-pointer transition-all
                  ${isSelected ? "border-(--button)" : "border-(--gray)"}`}
              >
                <svg width={32} height={32}>
                  <use href={`/icons.svg#${feature.icon}`} />
                </svg>
                <span className="font-medium text-base leading-normal text-center text-(--main)">
                  {feature.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-10">
        <p className="font-semibold text-xl leading-[1.2] text-(--main) mb-6">
          Vehicle type
        </p>
        <hr className="h-px border-(--gray) mb-6" />
        <ul className="flex flex-row flex-wrap gap-3">
          {vehicleTypes.map((type) => {
            const isSelected = vehicleType === type.value;
            return (
              <li
                key={type.value}
                onClick={() => handleTypeClick(type.value)}
                className={`flex flex-col items-center justify-center gap-2.5 w-28 h-24 border rounded-xl cursor-pointer transition-all
                  ${isSelected ? "border-[#E44848]" : "border-(--gray)"}`}
              >
                <svg width={32} height={32}>
                  <use href={`/icons.svg#${type.icon}`} />
                </svg>
                <span className="font-medium text-base leading-normal text-center text-(--main)">
                  {type.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        onClick={handleSearch}
        className="text-center bg-(--button) rounded-full py-4 px-12 w-[173px] h-14 font-medium text-base leading-6 tracking-tighter text-(--white)
          hover:bg-(--button-hover) transition-colors ease-out mr-3.5"
      >
        Search
      </button>
      <button
        onClick={resetFilters}
        className="text-center bg-(--button) rounded-full py-4 px-12 w-[173px] h-14 font-medium text-base leading-6 tracking-tighter text-(--white)
          hover:bg-(--button-hover) transition-colors ease-out"
      >
        Reset
      </button>
    </div>
  );
}
