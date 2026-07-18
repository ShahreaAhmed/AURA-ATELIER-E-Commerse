import { Star, StarHalf } from "lucide-react";

const Rating = ({ rating, maxStars = 5 }) => {
  const floor = Math.floor(rating);
  const hasHalf = rating - floor >= 0.4;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }, (_, index) => {
        const star = index + 1;

        if (star <= floor) {
          return (
            <Star
              key={star}
              className="w-4 h-4 fill-primary text-primary"
            />
          );
        }

        if (star === floor + 1 && hasHalf) {
          return (
            <StarHalf
              key={star}
              className="w-4 h-4 fill-primary text-primary"
            />
          );
        }

        return (
          <Star
            key={star}
            className="w-4 h-4 text-neutral-200"
          />
        );
      })}
    </div>
  );
};

export default Rating;