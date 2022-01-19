import { useState } from 'react';
import styles from './css-modules/view-styles.module.css';
import Navbar from '../components/Navbar.js';
import ChapterTitle from '../components/ChapterTitle.js';
import Footer from '../components/Footer.js';

import chapter2_1 from '../resources/Chapter2/Chapter2_1.jpg';
import chapter2_2 from '../resources/Chapter2/Chapter2_2.jpg';
import chapter2_3 from '../resources/Chapter2/Chapter2_3.jpg';

const imgArrCh2 = [
  {
    image: chapter2_1,
    style: {
      width: '25%'
    }
  },
  {
    image: chapter2_2,
    style: {
      width: '50%'
    }
  },
  {
    image: chapter2_3,
    style: {
      width: '25%'
    }
  }
];

function Polls(){
  return (
    <div className={styles.view_container}>
      <Navbar type="chapter_title"/>
      <ChapterTitle
        number="2"
        imgArr={imgArrCh2}
        title="National Polls"
        subtitle="1970"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />

      <Footer
        projectName="Bangladesh’s Liberation War"
        projectSubTitle="A visual history"
        projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
    </div>
  )
}

export default Polls;
