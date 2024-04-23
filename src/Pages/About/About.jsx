import React from "react";
import "./About.scss";
import p1 from "../../Components/Assets/offers/99.png";
// import p2 from "../Assets/offers/p2.jpg";
// import p3 from "../Assets/offers/p3.jpg";
// import p4 from "../Assets/offers/p4.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about">
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-left"
      >
        <h1>LEDJO</h1>
        <h1>Professional ambient lighting</h1>
        {/* <p>Professional ambient lighting</p>
        <button> Check Now</button> */}
      </motion.div>
      <motion.div
        className="about-righet"
        initial={{ opacity: 0, scale: 0.5, x: 1000, y: 0 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-righet-cont">
  <h1>Since 2024</h1>
  <a href="https://www.instagram.com/ledjo.tn/" target="_blank" rel="noopener noreferrer">
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABOFBMVEVHcExxF/13F/1zFf2AFv2MCu+iBOmyAuLEAd7SANraBMzwHpedI+XeANfmANHmAr+PF/6fD/vxAL7qArV7GP21FvnRVurnZ+P2Z9roQeDzGtXzB8v7AqvWiPn+7fn////7ftv/A7z0BKH3v/H+3fT+ruj+AJr/9/r/RcD/bMDKFff/Bo3iG+r8GrX/AIH+H5r/yeP+BHj/t9n/V5r+Am7+H37+BGT/ssX/Imz/RXv/ucz+e4z+JFT/XI3/MGL+LUf/u7f/yc7/Alr+OUf+MSz+QzT+R0T+iHD+SRj+VzH+WQX+AkL+c2L/0sT+aCX+cBL/7+j+aQL+eRv/oUX/fwL+iBD/wXz+jgD/3rr/1rn+dgz+nAP9FpT+lw7+qgH+tQD+vQD/w1f9kwf/xAD9PFn9ogj/ywD9uAfgLZLBAAAAaHRSTlMAW9H+////////xEsC///N////zFz/////////////////uP////7///////////7////////////////////////////////////////////////////////F/7VQ///+/87/vsj/uqL0GQwAAAHcSURBVHgBRMlFehwxEEDhV1VS04yZ7U04m+AmcBjfLLscJ4xLHyA0YGqSlJ7P9MT6BRC52EEQuDjlFITx2eWvXJsDQWYIKgJj4VQW5gBJAg75K5vTgZDTFUEu/kUEzqGaiC6DMBbhpqQyoyKTNYD1Hp+Ui6J0ZH1HhXNA0RfzyRIZl5WprroK3BZwwvx0aUGdB87HCIN5VBUVP9i468ZLxWLv+pg6vJmDaSiSW2eyIRNg84/HxfVJmTD3DxFWGmWjrosRpxMNGr3iIqYbG7IGK5lKvZE3jVuTynsDzHRoD3xpxaTQvIKumGBWgCouM9bPKEisJg0VTV4X0aBqQEuXQ2kGlmVmZCtgCoxBJfeAz0b8NQbWI7wOAKCZMgbn9E6tItG1HFTKRQ4jgSYpiiPu6BFJW1fW9J7oDFWWgpf0MH09YnB6yIEYnIJhLhqkpw3aC4OuUJ4QlDzX55/Um5m4Ue6dmXr59LwkBM0xy/ieVNV7zSSTZMU3fs8UNBomr+v3jQx5X1XmB7tdgnNu1JqDl+0nbnp+HpLp+WM5bB0mIMJFc/ouSgjd+U99O1qYONOhFEMonPcZCZ6eGp9eRcSwhWkSRCIxKnfeIMBh1WRcFOhTaENo/096OTA7AACDzKODDThakgAAAABJRU5ErkJggg=="
      alt=""
    />
  </a>
</div>

        <p>
        Modern ambient lighting for your interior - from the number one provider. Your current ambient lighting is too boring for you or you don't have any but would like to equip your car with one? No problem. We upgrade vehicles of all kinds with high-quality LEDs and ensure astonished passengers, a luxurious atmosphere in the interior and make night driving in your car a real color experience - better than the original! up to 64 colors Professional and clean installation Premium quality and long service life Better than factory LEDs can be controlled via the original system or original button
        </p>
        
        {/* <img
          className="offerimage"
          src={p1}
          alt=""
          // style={{
          //   width: "250px",
          //   height: "250px",
          //   borderRadius: "10px",
          //   cursor: "pointer",
          // }}
        /> */}
      </motion.div>
    </div>
  );
}

export default About;
