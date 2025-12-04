import { CamperFeaturesProps } from "../CamperFeatures/CamperFeatures";

const StarIcon = () => (
  <svg width={16} height={16} className="fill-(--rating)">
    <use href="/icons.svg#icon-star"></use>
  </svg>
);

export default function Reviews({ camper }: CamperFeaturesProps) {
  const reviews = camper.reviews;
  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index} className="mb-11">
          <div className="mb-4 flex flex-row  gap-4 items-center">
            <div className="bg-(--badges) w-[60px] h-[60px] rounded-full flex items-center justify-center">
              <p className="text-(--button) font-semibold text-2xl leading-8">
                {review.reviewer_name.charAt(0)}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-medium">{review.reviewer_name}</p>
              <div className="flex">
                {[...Array(review.reviewer_rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>
          </div>
          <p className="font-normal  text-(--text) ">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
