import { CamperFeaturesProps } from "../CamperFeatures/CamperFeatures";

export default function Details({ camper }: CamperFeaturesProps) {
  return (
    <div className="mt-25">
      <h2 className="font-semibold text-xl leading-[1.33]">Vehicle details</h2>
      <hr className="h-px border-(--gray) mb-6" />
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between">
          <p className="font-medium text-[16px] leading-6">Form</p>
          <p className="font-medium text-[16px] leading-6">{camper?.form}</p>
        </li>
        <li className="flex justify-between">
          <p className="font-medium text-[16px] leading-6">Length</p>
          <p className="font-medium text-[16px] leading-6">{camper?.length}</p>
        </li>
        <li className="flex justify-between">
          <p className="font-medium text-[16px] leading-6">Width</p>
          <p className="font-medium text-[16px] leading-6">{camper?.width}</p>
        </li>
        <li className="flex justify-between">
          <p className="font-medium text-[16px] leading-6">Height</p>
          <p className="font-medium text-[16px] leading-6">{camper?.height}</p>
        </li>
        <li className="flex justify-between">
          <p className="font-medium text-[16px] leading-6">Tank</p>
          <p className="font-medium text-[16px] leading-6">{camper?.tank}</p>
        </li>
        <li className="flex justify-between">
          <p className="font-medium text-[16px] leading-6">Consumption</p>
          <p className="font-medium text-[16px] leading-6">
            {camper?.consumption}
          </p>
        </li>
      </ul>
    </div>
  );
}
