// import React from 'react';

// const Rating = () => {

//     const stars = [];
//   const floor = Math.floor(rating);
//   const hasHalf = rating - floor >= 0.4;
//   for (let i = 1; i <= maxStars; i++) {
//     if (i <= floor) {
//       stars.push(<Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold shrink-0" />);
//     } else if (i === floor + 1 && hasHalf) {
//       stars.push(<StarHalf key={i} className="w-4 h-4 fill-brand-gold text-brand-gold shrink-0" />);
//     } else {
//       stars.push(<Star key={i} className="w-4 h-4 text-neutral-200 shrink-0" />);
//     }
//   }
//     return (
//         <div className="flex items-center gap-0.5">
//       {stars}
//       <span className="ml-1 text-xs text-neutral-500 font-medium">{rating}</span>
//     </div>
//     );
// };

// export default Rating;



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
              className="w-4 h-4 fill-brand-gold text-brand-gold"
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