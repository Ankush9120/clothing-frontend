import React from 'react';
import OutlineButton from '../../../components/OutlineButton';

const Collection = ({ data, reverse = false }) => {
  return (
    <div className="text-sm py-[32px] px-[18px]">
      <div className={`flex ${reverse ? 'justify-end' : ''} relative before:[''] before:h-[1px] before:w-[70%] before:absolute before:bg-secondary-100 before:bottom-0`}>
        <p>
          <span className="text-[32px] leading-[44px]">{data?.title}</span>
          <span className="text-[18px] leading-[18px] ml-2">{data?.subtitle}</span>
        </p>
      </div>
      <p className="text-[12px] mt-2.5">{data?.description}</p>
      {reverse ? (
        <div className="flex justify-end relative my-6">
          <img src={data?.images[0]} alt="" className="h-[249px]" />
          <img src={data?.images[1]} alt="" className="absolute w-[263px] bottom-0 right-[90px]" />
        </div>
      ) : (
        <img src={data?.image} alt="" className="my-6" />
      )}
      {data?.content?.map((paragraph, index) => (
        <p key={index} className={index > 0 ? "mt-[15px]" : ""}>{paragraph}</p>
      ))}
      <div className="mt-6">
        <OutlineButton>Explore</OutlineButton>
      </div>
    </div>
  );
};

export default Collection;

