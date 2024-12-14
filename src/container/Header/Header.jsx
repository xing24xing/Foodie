import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Welcome to FoodieCapital</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        At FoodieCapital, we believe in bringing the finest culinary experiences to your plate. From gourmet delicacies to authentic street food, we’ve got something for everyone. Join us in exploring the world of flavors, where every dish tells a unique story.
      </p>
      {/* <p className="p__opensans" style={{ marginBottom: '2rem' }}>
        Indulge in our specially crafted menu, made with the freshest ingredients and prepared with love. Whether you're here for a quick bite or a grand feast, we promise a memorable dining experience.
      </p> */}
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="FoodieCapital Restaurant" />
    </div>
  </div>
);

export default Header;
