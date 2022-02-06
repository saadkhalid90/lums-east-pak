import { useState } from 'react';
import styles from './css-modules/view-styles.module.css';
import Navbar from '../components/Navbar.js';
import ChapterTitle from '../components/ChapterTitle.js';
import Footer from '../components/Footer.js';

import chapter3_1 from '../resources/Chapter3/Chapter3_1.jpg';
import chapter3_2 from '../resources/Chapter3/Chapter3_2.jpg';
import chapter3_3 from '../resources/Chapter3/Chapter3_3.jpg';

const imgArrCh3 = [
  {
    image: chapter3_1,
    style: {
      width: '25%'
    }
  },
  {
    image: chapter3_2,
    style: {
      width: '50%'
    }
  },
  {
    image: chapter3_3,
    style: {
      width: '25%'
    }
  }
];

function Operation(){
  return (
    <div className={styles.view_container}>
      <Navbar type="chapter_title"/>
      <ChapterTitle
        number="3"
        imgArr={imgArrCh3}
        title="Military Operation"
        subtitle="March 25, 1971 - ..."
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />

      <Footer
        projectName="Bangladesh’s Liberation War"
        projectSubTitle="A visual history"
        projectDescription="The LUMS Digital Archive is a research repository that aims at collecting, cataloging and preserving rare material (books, pamphlets, newspapers and other items) of
        historical significance and making them available to researchers. In particular, the archive focuses on events, groups, movements and personalities relating to broader
        historical, political and cultural trends in South Asia, with an emphasis on preserving the accounts of marginalized and subaltern groups."
        prevLink="/ch2"
        nextLink="/ch3"
        chapterID={3}
      />
    </div>
  )
}

export default Operation;
