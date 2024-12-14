import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">"Food is not just about taste. It's about creating memories, sharing stories, and celebrating life's moments."</p>
        </div>
        <p className="p__opensans">
          At FoodieCapital, we believe that every meal should be a celebration of culture and flavor. Our team, led by renowned Chef Kevin Luo, focuses on crafting dishes that reflect both modern culinary techniques and traditional ingredients. From the freshest produce to exotic spices, every dish is an exploration of passion and creativity.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="Kevin Luo's signature" />
      </div>
    </div>
  </div>
);

export default Chef;
