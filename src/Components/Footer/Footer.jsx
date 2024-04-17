import React from "react";
import "./Footer.scss"; // Assuming you have defined styles in Footer.scss
import logo from "../Assets/navbar/logoo.jpg";
import instagram_icon from "../Assets/footer/instagram_icon.png";
import pintester_icon from "../Assets/footer/pintester_icon.png";
import whatsapp_icon from "../Assets/footer/whatsapp_icon.png";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
      className="footer"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: -1000 }} // Animation for the logo
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="footer-logo"
      >
        <motion.img className="logo" src={logo} alt="logo" />
        <p>Ledjo</p>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, x: -1000 }} // Animation for the ul (list items)
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="footer-links"
      >
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, x: 1000 }} // Animation for the social icons container
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="footer-social-icon"
      >
        <motion.div className="footer-icons-container" initial={{ x: -1000 }} animate={{ x: 0 }}>
          <img src={instagram_icon} alt="Instagram" />
        </motion.div>
        <motion.div className="footer-icons-container" initial={{ x: 1000 }} animate={{ x: 0 }}>
          <img src={pintester_icon} alt="Pinterest" />
        </motion.div>
        <motion.div className="footer-icons-container" initial={{ x: 1000 }} animate={{ x: 0 }}>
          <img src={whatsapp_icon} alt="WhatsApp" />
        </motion.div>
      </motion.div>

      <div className="footer-coyright">
        <hr
          style={{
            width: "80%",
            border: "none",
            borderRadius: "10px",
            height: "3px",
          }}
        />
        <p>Copyright @ 2024 - All Right Reserved </p>
      </div>
    </motion.div>
  );
}
export default Footer;
