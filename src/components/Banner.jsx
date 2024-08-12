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
                <img src={BannerPng} className='w-[300px] md:max-w-[400px] h-full object-cover'/>
            </div>
            {/* brand info */}
            <div>
                
            </div>
        </div>
    </section>
  )
}

export default Banner
