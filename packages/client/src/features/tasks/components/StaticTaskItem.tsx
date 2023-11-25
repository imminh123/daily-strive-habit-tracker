import { motion } from "framer-motion";
import React from "react";

export const StaticTaskItem = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <motion.li
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="mb-3 flex cursor-pointer items-center rounded-md bg-yellow px-2 py-3"
    >
      <div className="ml-2">
        <span className="text-lg font-medium">{name}</span>
        <p className=" text-gray-500">{description}</p>
      </div>
    </motion.li>
  );
};
