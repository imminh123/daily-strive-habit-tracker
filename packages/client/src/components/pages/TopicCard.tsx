import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const TopicCard = ({
  id,
  name,
  summary,
  image,
}: {
  id: string;
  name: string;
  summary: string;
  image: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02}}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        href={`/topic/${id}`}
        className="mb-3 flex w-full cursor-pointer items-center justify-between rounded-xl bg-purple bg-60% bg-right bg-no-repeat p-3"
      >
        <div>
          <p className=" font-medium text-white">{name}</p>
          <span className="mt-2 text-sm font-light text-white">{summary}</span>
        </div>
        <Image width={500} height={500} className="w-24" src={image} alt="Topic Image" />
      </Link>
    </motion.div>
  );
};
