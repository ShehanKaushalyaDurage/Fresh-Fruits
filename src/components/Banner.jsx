import React from "react";
import BannerPng from "../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp, FadeRight } from "../utility/animation";
import { IoBagHandleOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <section>
      <div className="container">
        {/* banner image */}
        <div>
          <img
            src={BannerPng}
            className="w-[300px] md:max-w-[400px] h-full object-cover"
          />
        </div>
        {/* brand info */}
        <div>
          <div>
            <h1> Brand Info</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              eaque delectus? Velit molestias consectetur voluptates facere
              pariatur! Consequuntur officia, laboriosam voluptate nobis libero
              mollitia expedita a dolorum commodi natus nam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ratione minima delectus earum eius temporibus expedita autem
              beatae, saepe sequi facilis optio porro impedit ipsa tempora
              aliquam incidunt quam voluptatem.
            </p>
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <IoBagHandleOutline />{" "}
                </span>
                Learn more
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
