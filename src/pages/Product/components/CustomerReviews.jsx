import React from 'react';
import { ThumbsUpIcon, ThumbsDownIcon } from "../../../libs/icons";

const CustomerReviews = ({ reviews }) => {
  const reviewTags = [
    { icon: ThumbsUpIcon, text: "Nice product quality", positive: true },
    { icon: ThumbsUpIcon, text: "Great fit", positive: true },
    { icon: ThumbsUpIcon, text: "Lightweight", positive: true },
    { icon: ThumbsDownIcon, text: "Not worth the money", positive: false },
  ];

  return (
    <div className="p-[18px]">
      <h3 className="mb-3">Customer Reviews ({reviews.length})</h3>
      <div className="flex gap-1.5 flex-wrap mb-4 *:py-2.5 *:px-3 *:border-[1px] *:border-primary-400 *:flex *:items-center *:gap-1.5 *:font-albert *:font-medium">
        {reviewTags.map((tag, index) => (
          <span key={index} className="px-2 py-1 rounded-full text-[12px]">
            <tag.icon className={tag.positive ? "text-green-100" : "text-red-100"} /> {tag.text}
          </span>
        ))}
      </div>

      {reviews.map((review, index) => (
        <div key={index} className="border rounded-md font-albert mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-green-100 text-white px-2 py-1 rounded-md text-[12px]">{review.rating} ★</div>
            <span className="text-secondary-100 text-[12px]">{review.date}</span>
          </div>
          <p className="text-secondary-100 text-sm mb-2">
            {review.content}
            {review.content.length > 100 && (
              <span className="text-secondary-100 cursor-pointer"> read more</span>
            )}
          </p>
          <div className="text-secondary-100 text-sm bg-primary-300 rounded-[5px] px-[7px] py-[3px] w-max">
            <span className="font-semibold">Size bought:</span> {review.sizeBought}
          </div>
        </div>
      ))}
      <button className="text-primary-100 font-semibold mt-3 text-sm font-albert">
        View all {reviews.length} reviews
      </button>
    </div>
  );
};

export default CustomerReviews;

