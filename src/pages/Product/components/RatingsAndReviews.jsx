import React from 'react';
import { StarIcon } from "../../../libs/icons";

const RatingsAndReviews = ({ rating, reviewCount }) => {
  return (
    <div className="p-[18px]">
      <h3 className="mb-2">Ratings & Reviews</h3>
      <div className="flex items-center gap-3 border-[1px] border-primary-200 rounded-[4px] py-3 px-5 text-secondary-100 bg-primary-300">
        <div className="text-[26px] flex items-center gap-2 grow">
          {rating} <StarIcon />
        </div>
        <div className="text-sm flex grow h-10 *:grow *:border-l-[1px] *:border-primary-200 *:px-5">
          <div>
            <div>{reviewCount}</div> <div>Ratings</div>
          </div>
          <div>
            <div>{Math.floor(reviewCount * 0.06)}</div> <div>Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;

