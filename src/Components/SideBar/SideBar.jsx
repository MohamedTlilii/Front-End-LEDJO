import "./SideBar.scss";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      satisfies: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      satisfies: 400,
      damping: 40,
    },
  },
};
function SideBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="displayside">
    <motion.div  className="sideBar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
    </div>
  );
}

export default SideBar;