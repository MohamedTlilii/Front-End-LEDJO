import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./Swiperr.scss";

import BENZ from "../Assets/hero/p1.jpg";
import BENZZ from "../Assets/hero/p2.jpg";
import ledov from "../Assets/hero/1.jpg";
import ledovV from "../Assets/hero/5.jpg";
import BMW from "../Assets/hero/p3.jpg";
import BMWW from "../Assets/hero/p4.jpg";
import AUDI from "../Assets/hero/p5.webp";
import AUDII from "../Assets/hero/p6.webp";
import VIDEO from "../Assets/hero/vedio-hero.mp4"; // Path to your video file
// import VIDEO_HERO from "../Assets/hero/VD.mp4"; // Path to your video file

function Swiperr() {
  return (
    <div className="siwper-">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={
          // true
          {
            nextE1: ".button-next-slide",
            prevE1: ".button-prev-slide",
          }
        }
        modules={[Navigation
          // , Autoplay
        ]}
        autoplay={{ delay: 4000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* <SwiperSlide>
          <div className="video-content">
            <video autoPlay loop muted>
              <source src={VIDEO} type="video/mp4" />
            </video>
            <div className="content">
              <h3 className="title">LEDDJO</h3>
              <h3 className="custom-title">LEDDJO </h3>
              <p className="text">
              Professional ambient lighting
              </p>
            </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className="image ">
            <img
              src={BENZ}
              alt=""
              // style={{ width: "1900px", height: "758px" }}
            />
            <div className="content-img ">
              <h3 className="title-img">more luxury & trending</h3>
              <h3 className="custom-img">more luxury </h3>
              <p className="text-img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, assumenda.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="image">
            <img
              src={BMW}
              alt=""
              // style={{ width: "1900px", height: "758px" }}
            />
            <div className="content-img ">
              <h3 className="title-img">more luxury & trending</h3>
              <h3 className="custom-img">more luxury </h3>
              <p className="text-img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, assumenda.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img
              src={AUDI}
              alt=""
              // style={{ width: "1900px", height: "758px" }}
            />
           <div className="content-img ">
              <h3 className="title-img">more luxury & trending</h3>
              <h3 className="custom-img">more luxury </h3>
              <p className="text-img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, assumenda.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img
              src={ledovV}
              alt=""
              // style={{ width: "1900px", height: "758px" }}
            />
           <div className="content-img ">
              <h3 className="title-img">more luxury & trending</h3>
              <h3 className="custom-img">more luxury </h3>
              <p className="text-img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, assumenda.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img
              src={ledov}
              alt=""
              // style={{ width: "1900px", height: "758px" }}
            />
             <div className="content-img ">
              <h3 className="title-img">more luxury & trending</h3>
              <h3 className="custom-img">more luxury </h3>
              <p className="text-img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, assumenda.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swiperr;
