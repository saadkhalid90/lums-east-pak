import { useState } from 'react';
import styles from './css-modules/view-styles.module.css';
import Navbar from '../components/Navbar.js';
import ChapterTitle from '../components/ChapterTitle.js';
import SectionHeading from '../components/SectionHeading.js';
import PhotoContainer from '../components/PhotoContainer.js';
import QuotePhoto from '../components/QuotePhoto.js';

import chapter1_1 from '../resources/Chapter1/Chapter1_1.png';
import chapter1_2 from '../resources/Chapter1/Chapter1_2.png';
import chapter1_3 from '../resources/Chapter1/Chapter1_3.png';

import mural from '../resources/Chapter1/images/Mural.png';
import museam from '../resources/Chapter1/images/museam.png';

const imgArrCh1 = [
  {
    image: chapter1_1,
    style: {
      width: '20%'
    }
  },
  {
    image: chapter1_2,
    style: {
      width: '50%'
    }
  },
  {
    image: chapter1_3,
    style: {
      width: '20%'
    }
  }
];

function Background(){
  return (
    <div className={styles.view_container}>
      <Navbar/>
      <ChapterTitle
        number="1"
        imgArr={imgArrCh1}
        title="Background"
        subtitle="1947 - 1969"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />

      <div className={styles.view_content_wrapper}>
        <div className={styles.view_content_container}>
          <SectionHeading heading='Political Differences emerge between the east and the west wings of a newborn state'/>
          <p className={styles.view_para}>
            The emergence of Pakistan in 1947 created an anomaly of a geographically fractured state. The two wings of the country – the majority Bengali population of East Bengal/East Pakistan and the multiethnic provincial units, tribal areas, and formerly princely states comprising West Pakistan – were divided by a 1600-miles stretch of Indian territory.
          </p>
          <p className={styles.view_para}>
            Economically, East Bengal was a rural hinterland, which had suffered immensely because of losing connection with Calcutta's commercial and intellectual hub, which the British government had awarded to India. Protesting against this decision, Jinnah described it as forcing a man to live without his lungs.
          </p>
          <p className={styles.view_para}>
            Politically, the two wings disagreed on the constitutional future of the country. Despite being the numerical majority, the East Bengalis felt marginalized and excluded. Due to Pakistan's failure to develop a viable democratic structure, the political power was wielded by the Military and bureaucracy mainly recruited from Punjab and the North-Indian Muslim migrant elite. In a democratic setting, Bengali numerical superiority would have diluted the disproportionate power held by Punjab and North Indian Muslim elite. The political elite was reluctant to give up this power.
          </p>
          <p className={styles.view_para}>
            What resulted was a prolonged deadlock on the making of a constitution. It was in 1956 that a constitution was finally adopted. Much of the Bengali opposition rejected it.
          </p>

          <SectionHeading heading='Identity Politics and the Bengali Language Movement'/>
          <p className={styles.view_para}>
            Other than political disagreements about representation, the Bengali leadership was generally campaigning for a more inclusive and egalitarian form of national identity. They opposed the attempts of the state to impose a homogenized Islam-based identity. As part of this statist project, Urdu was projected as the only national language, much to the chagrin of Bengali leaders who, for a good reason, saw it as discriminatory against the Bengali majority.
          </p>

          <PhotoContainer
            noScroll
            imgArr = {[
              {image: mural, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", widthID: "fiftyFive"},
              {image: museam, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", widthID: "fortyFive"},
            ]}
          />

          <p className={styles.view_para}>
            Other than political disagreements about representation, the Bengali leadership was generally campaigning for a more inclusive and egalitarian form of national identity. They opposed the attempts of the state to impose a homogenized Islam-based identity. As part of this statist project, Urdu was projected as the only national language, much to the chagrin of Bengali leaders who, for a good reason, saw it as discriminatory against the Bengali majority.
          </p>
        </div>
      </div>

      <div className={styles.view_fw_content}>
        <QuotePhoto/>
      </div>

    </div>
  )
}

export default Background;
