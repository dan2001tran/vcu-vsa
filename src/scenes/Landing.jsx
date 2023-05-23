import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import merchVid from '../assets/Untitled.mp4';
import React, { userRef, useEffect } from 'react';

const Landing = ({ setSelectedPage }) => {
  return (
    <section id="home" className="">
      <div className="object-cover">
        {/* <video class="mt-0 " src={merchVid} autoPlay loop muted /> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline>
      <source src=${merchVid} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}
        />
      </div>
    </section>
  );
};

export default Landing;
