import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.fc} alt="F_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About FoodieCapital</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to FoodieCapital, where culinary dreams come true! At FoodieCapital, we believe in crafting dishes that blend tradition and innovation. With a focus on fresh ingredients, our chefs bring you an unforgettable dining experience that delights the senses and satisfies the soul.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded in 2004, FoodieCapital started as a small, family-run restaurant with a big vision: to create a place where food brings people together. Over the years, we've grown into a beloved local gem, known for our innovative menus and impeccable service. Our history is rooted in passion, and we’re dedicated to serving delicious meals that will make you feel right at home.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
