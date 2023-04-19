import React from "react";
import Classes from "./EmptyList.module.css";
import { motion } from "framer-motion";
export const EmptyList = ({ title }) => {
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.h2
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={itemVariants}
      transition={{ duration: 0.5 }}
      className={Classes.empty}
    >
      {title}
    </motion.h2>
  );
};
