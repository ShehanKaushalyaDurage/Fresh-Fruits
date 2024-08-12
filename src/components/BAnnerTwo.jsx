import React from "react";
import BannerPng from "../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/animation";

const BAnnerTwo = () => {
  return (
    <section className="mt-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24 overflow-x-hidden overflow-y-hidden">
        
        {/* brand info */}
        <div className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1 
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            className="text-3xl lg:text-5xl font-bold uppercase"> Brand Info</motion.h1>
            <motion.p
             variants={FadeUp(0.7)}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              eaque delectus? Velit molestias consectetur voluptates facere
              pariatur! Consequuntur officia, laboriosam voluptate nobis libero
              mollitia expedita a dolorum commodi natus nam.
            </motion.p>
            <motion.p
             variants={FadeUp(0.9)}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              eaque delectus? Velit molestias consectetur voluptates facere
              pariatur! Consequuntur officia, laboriosam voluptate nobis libero
              mollitia expedita a dolorum commodi natus nam.
            </motion.p>
            
            <motion.div
              variants={FadeUp(1.1)}
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
        {/* banner image */}
        <div className="flex justify-center items-center">
          <motion.img
          initial={{opacity:0, x:200 , rotate:75}}
          whileInView={{opacity:1,x:0,rotate:0}}
          transition={{duration:1, delay:0.2}}
          viewport={{once:true}}
            src={BannerPng}
            className="w-[400px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  )
}

export default BAnnerTwo
