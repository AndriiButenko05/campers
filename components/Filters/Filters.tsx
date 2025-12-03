import { iconsFeatures } from "../CamperFeatures/CamperFeatures";

const features = [
  {
    label: "Transmission",
    icon: iconsFeatures.transmission,
  },
  {
    label: "Engine",
    icon: iconsFeatures.engine,
  },
  {
    label: "Kitchen",
    icon: iconsFeatures.kitchen,
  },
  {
    label: "AC",
    icon: iconsFeatures.ac,
  },
  {
    label: "Bathroom",
    icon: iconsFeatures.shower,
  },
  {
    label: "TV",
    icon: iconsFeatures.tv,
  },
  {
    label: "Radio",
    icon: iconsFeatures.radio,
  },
  {
    label: "Fridge",
    icon: iconsFeatures.fridge,
  },
  {
    label: "Microwave",
    icon: iconsFeatures.microwave,
  },
  {
    label: "Gas",
    icon: iconsFeatures.gas,
  },
  {
    label: "Water",
    icon: iconsFeatures.water,
  },
];

export default function Filters() {
  return (
    <div className="w-[360px]">
      <div>
        <p className="font-normal text-base leading-normal text-(--text) mb-2">
          Location
        </p>
        <div className="relative mb-10">
          <input
            type="text"
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
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center gap-2.5 w-28 h-24 border border-(--main) rounded-xl"
            >
              <svg width={32} height={32} className="">
                <use href={`/icons.svg#${feature.icon}`} />
              </svg>
              <span className="font-medium text-base leading-normal tracking-[-0.01em] text-center text-(--main)">
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-10">
        <p className="font-semibold text-xl leading-[1.2] text-(--main) mb-6">
          Vehicle type
        </p>
        <hr className="h-px border-(--gray) mb-6" />
        <ul className="flex flex-row flex-wrap gap-3">
          <li className="flex flex-col items-center justify-center gap-2.5 w-28 h-24 border border-(--main) rounded-xl">
            <svg width={32} height={32}>
              <use href={`/icons.svg#icon-van`} />
            </svg>
            <span className="font-medium text-base leading-normal tracking-[-0.01em] text-center text-(--main)">
              Van
            </span>
          </li>
          <li className="flex flex-col items-center justify-center gap-2.5 w-28 h-24 border border-(--main) rounded-xl">
            <svg width={32} height={32}>
              <use href={`/icons.svg#icon-integrated`} />
            </svg>
            <span className="font-medium text-base leading-normal tracking-[-0.01em] text-center text-(--main)">
              Fully Integrated
            </span>
          </li>
          <li className="flex flex-col items-center justify-center gap-2.5 w-28 h-24 border border-(--main) rounded-xl">
            <svg width={32} height={32}>
              <use href={`/icons.svg#icon-alcove`} />
            </svg>
            <span className="font-medium text-base leading-normal tracking-[-0.01em] text-center text-(--main)">
              Alcove
            </span>
          </li>
        </ul>
      </div>
      <button
        className="text-center bg-(--button) rounded-full py-4 px-12 w-[173px] h-14 font-medium text-base leading-6 tracking-tighter text-(--white)
          hover:bg-(--button-hover) transition-colors ease-out"
      >
        Search
      </button>
    </div>
  );
}
