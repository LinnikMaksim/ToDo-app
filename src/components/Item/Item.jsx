import { React } from "react";
import Classes from "./Item.module.css";
import { ItemButton } from "../ItemButton/ItemButton";
import { motion } from "framer-motion";
const Item = ({ item, number, remove, completeFun }) => {
  const { complete, task } = item;
  let itemBg = {};
  if (complete) {
    itemBg = {
      backgroundColor: "rgb(40 159 102 / 50%)",
    };
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.li
      style={itemBg}
      className={Classes.wrap}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={itemVariants}
      transition={{ duration: 0.5 }}
    >
      <p className={Classes.id}>{number}</p>
      <div className={Classes.info}>
        <h5 className={Classes.task}>{task}</h5>
        <ItemButton
          remove={remove}
          completeFun={completeFun}
          item={item}
        ></ItemButton>
      </div>
    </motion.li>
  );
};

export default Item;
