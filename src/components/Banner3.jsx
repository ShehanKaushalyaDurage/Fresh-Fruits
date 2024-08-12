import BannerPng from "../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../utility/animation";

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const Banner3 = () => {
  return (
    <section>
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl overflow-y-hidden"
      >
        {/* blank div */}
        <div></div>
        {/* brand info */}
        <div className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold uppercase"
            >
              {" "}
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              eaque delectus? Velit molestias consectetur voluptates facere
              pariatur! Consequuntur officia, laboriosam voluptate nobis libero
              mollitia expedita a dolorum commodi natus nam.
            </motion.p>
            <motion.p
              variants={FadeLeft(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              eaque delectus? Velit molestias consectetur voluptates facere
              pariatur! Consequuntur officia, laboriosam voluptate nobis libero
              mollitia expedita a dolorum commodi natus nam.
            </motion.p>

            <motion.div
              variants={FadeLeft(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Learn more</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
