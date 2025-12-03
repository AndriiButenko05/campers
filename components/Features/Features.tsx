import {
  CamperFeaturesProps,
  iconsFeatures,
} from "../CamperFeatures/CamperFeatures";

export default function Features({ camper }: CamperFeaturesProps) {
  const features = [
    {
      label: camper.transmission,
      icon: iconsFeatures.transmission,
      available: true,
    },
    {
      label: camper.engine,
      icon: iconsFeatures.engine,
      available: true,
    },
    {
      label: "Kitchen",
      icon: iconsFeatures.kitchen,
      available: camper.kitchen,
    },
    {
      label: "AC",
      icon: iconsFeatures.ac,
      available: camper.AC,
    },
    {
      label: "Bathroom",
      icon: iconsFeatures.shower,
      available: camper.bathroom,
    },

    {
      label: "TV",
      icon: iconsFeatures.tv,
      available: camper.TV,
    },
    {
      label: "Radio",
      icon: iconsFeatures.radio,
      available: camper.radio,
    },
    {
      label: "Fridge",
      icon: iconsFeatures.fridge,
      available: camper.refrigerator,
    },
    {
      label: "Microwave",
      icon: iconsFeatures.microwave,
      available: camper.microwave,
    },
    {
      label: "Gas",
      icon: iconsFeatures.gas,
      available: camper.gas,
    },
    {
      label: "Water",
      icon: iconsFeatures.water,
      available: camper.water,
    },
  ];
  return (
    <div>
      <ul className="flex flex-row flex-wrap gap-2">
        {features
          .filter((feature) => feature.available)
          .map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 px-4.5 py-4 bg-(--badges) rounded-full"
            >
              <svg width={20} height={20}>
                <use href={`/icons.svg#${feature.icon}`} />
              </svg>
              <span className="text-[16px] font-medium capitalize text-(--text)">
                {feature.label}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
