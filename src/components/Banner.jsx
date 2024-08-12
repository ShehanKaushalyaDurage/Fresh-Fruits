import React from 'react';
import BannerPng from "../assets/fruits-splash.png";
import { motion } from 'framer-motion';
import { FadeUp } from '../utility/animation';

const Banner = () => {
  return (
    <section>
        <div className='container'>
            {/* banner image */}
            <div>
                <img src={BannerPng} />
            </div>
            {/* brand info */}
        </div>
    </section>
  )
}

export default Banner
