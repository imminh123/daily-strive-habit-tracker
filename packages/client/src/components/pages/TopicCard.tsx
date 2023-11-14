import React from "react";
import Image from "next/image";

export const TopicCard = ({
  name,
  summary,
  image,
}: {
  name: string;
  summary: string;
  image?: string;
}) => {
  return (
    <div
      className={`bg-60% mb-3 w-full rounded-xl bg-purple bg-right bg-no-repeat p-3`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className=" text-white font-medium">{name}</p>
          <span className="mt-2 text-sm font-light text-white">{summary}</span>
        </div>
        <Image className="w-24" src={image as any} alt="Topic Image" />
      </div>
    </div>
  );
};
