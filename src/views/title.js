import { useState } from 'react';
import styles from './css-modules/view-styles.module.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Landing from '../components/Landing.js';

import landing_1 from '../resources/Home/Land1.jpg';
import landing_2 from '../resources/Home/Land2.jpg';
import landing_3 from '../resources/Home/Land3.jpg';
import landing_4 from '../resources/Home/Land4.jpg';
import landing_5 from '../resources/Home/Land5.jpg';

const imgArrCh1 = [
  {
    image: landing_1,
    style: {
      width: '20%'
    }
  },
  {
    image: landing_2,
    style: {
      width: '20%'
    }
  },
  {
    image: landing_3,
    style: {
      width: '20%'
    }
  },
  {
    image: landing_4,
    style: {
      width: '20%'
    }
  },
  {
    image: landing_5,
    style: {
      width: '20%'
    }
  }
];

function Title(){
  return (
    <div className={styles.view_container}>
      <Navbar type="landing"/>
      <Landing
        imgArr={imgArrCh1}
        title="Bangladesh’s Liberation War"
        subtitle="A visual history"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
    </div>
  )
}

export default Title;
