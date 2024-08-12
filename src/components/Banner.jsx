import React from "react";
import BannerPng from "../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* banner image */}
        <div className="flex justify-center items-center">
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
              variants={FadeUp(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">
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
