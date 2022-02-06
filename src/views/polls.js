import { useState } from 'react';
import styles from './css-modules/view-styles.module.css';
import Navbar from '../components/Navbar.js';
import ChapterTitle from '../components/ChapterTitle.js';
import SectionHeading from '../components/SectionHeading.js';
import PhotoContainer from '../components/PhotoContainer.js';
import QuotePhoto from '../components/QuotePhoto.js';
import ElectMap from '../components/map/map.js';
import Footer from '../components/Footer.js';
import PhotoSwitch from '../components/photoSwitch.js';


import chapter2_1 from '../resources/Chapter2/Chapter2_1.jpg';
import chapter2_2 from '../resources/Chapter2/Chapter2_2.jpg';
import chapter2_3 from '../resources/Chapter2/Chapter2_3.jpg';

import mujib_1966 from '../resources/Chapter2/Mujibur_Rahman_1966.jpg';
import mujib_sixP from '../resources/Chapter2/shMujibSixP.jpg';

import bhola1 from '../resources/Chapter2/Bhola_Aerial.jpg';
import bhola2 from '../resources/Chapter2/Bhola_Yahya.jpg';

import transfer1 from '../resources/Chapter2/power_transfer1.jpg';
import transfer2 from '../resources/Chapter2/power_transfer2.jpg';

import photoStory1 from '../resources/Chapter2/photoStory/photoStory1.jpg';
import photoStory2 from '../resources/Chapter2/photoStory/photoStory2.jpg';
import photoStory3 from '../resources/Chapter2/photoStory/photoStory3.jpg';
import photoStory4 from '../resources/Chapter2/photoStory/photoStory4.jpg';

import mapData from './election-scene-data/scene-data.js'


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

const newsImgArr = [
  {
    img: photoStory1,
    width: 650,
    ar: 1.46
  },
  {
    img: photoStory2,
    width: 620,
    ar: 1.50 
  },
  {
    img: photoStory3,
    width: 540,
    ar: 1.167
  },
  {
    img: photoStory4,
    width: 320,
    ar: 0.53
  }
];

const photoData = [
  {
    title: "abc",
    description: "xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc"
  },
  {
    title: "abc",
    description: "xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc"
  },
  {
    title: "abc",
    description: "xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc"
  },
  {
    title: "abc",
    description: "xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc xyz-abc"
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

      <div className={styles.view_content_wrapper}>
        <div className={styles.view_content_container}>
          <SectionHeading heading='First general elections in Pakistan based on adult franchise'/>
          <p className={styles.view_para}>
            The new military dictator, General Yahya Khan, promised to hold the first-ever general elections in Pakistan based on adult franchise. The announcement, and the issuance of the Legal Framework Order (LFO) to provide the basis for the upcoming elections and framing of the subsequent constitution, generated a flurry of political activities. As political parties galvanized to harness support, Mujib conducted his campaign on the famous six points as part of his party’s manifesto for the elections and the blueprint for the country’s future constitution.
          </p>
        </div>
      </div>
      <div className={styles.view_fw_content}>
        <QuotePhoto
              quote
              addedMargin
              photo={mujib_1966}
              photoClassName={'ch2Q_6points'}
              quoteTxt={
                <ol>
                  <li>A form of federal government, a parliamentary system directly elected via one-person-one-vote</li>
                  <li>Two separate reserve banks and currencies for the two wings of Pakistan</li>
                  <li>Other than defence and foreign policy all issues will be dealt by the federal provinces</li>
                  <li>A paramilitary force for East Pakistan</li>
                  <li>Fiscal affairs, much as taxation and resources allocation, will be state responsibility</li>
                  <li>Monetary and trade policies, such as foreign reserve maintenance and establishing trade links, will be handled separately by the two wings</li>
                </ol>
              }
              quoteAlign="left"
              color="white"
              fontSize="small"
        />
      </div>
      <div className={styles.view_content_wrapper}>
        <div className={styles.view_content_container}>
          <SectionHeading heading='Bhola cyclone ravages East Pakistan'/>
          <p className={styles.view_para}>
            Meanwhile, East Pakistan continued to slide into chaos. The Bhola cyclone wreaked havoc in East Pakistan, killing thousands of people and displacing millions of others. The indifference of the Pakistani military elite towards the devastation of the Bengalis further alienated the people of East Pakistan. (Modern Asian Studies article about Bhola Cyclone)
          </p>
          <PhotoContainer
            noScroll
            imgArr = {[
              {image: bhola1, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", widthID: "fiftyFive"},
              {image: bhola2, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", widthID: "fortyFive"},
            ]}
          />
        </div>
      </div>

      <div className={styles.view_content_wrapper}>
        <div className={styles.view_content_container}>
          <SectionHeading heading='Poll outcomes take the Military Junta by surprise'/>
          <p className={styles.view_para}>
            In Yahya Khan’s calculus, the elections were going to give a split mandate. He aimed to contrive a coalition government where he would continue to wield power as the country’s president. The Military and its secret service generously funded religious and conservative parties to offset the rising crescendo of socialist rhetoric in Pakistani politics.
          </p>
          <p className={styles.view_para}>
            But Yahya and the military junta had miscalculated badly. The election results gave a massive, almost unanimous, decision for Sheikh Mujib in East Pakistan. The Awami League grabbed 158 out of 160 seats. Zulfiqar Ali Bhutto’s Pakistan Peoples’ Party was a clear winner in West Pakistan, winning 82 out of 130(?) seats. None of the West Pakistan parties had been able to win a single seat in East Pakistan. The two winning parties – Awami League and PPP – had not even fielded a candidate in West and East Pakistan. The electoral split that started with the provincial elections of 1954 reached political fruition in 1970.
          </p>
        </div>
      </div>
      <div className={styles.view_fw_content}>
        <QuotePhoto
              quote
              addedMargin
              photo={mujib_sixP}
              photoClassName={'ch2Q_6points'}
              quoteTxt="The election results gave a massive, almost unanimous, decision for Sheikh Mujib in East Pakistan. The Awami League grabbed 158 out of 160 seats. Zulfiqar Ali Bhutto’s Pakistan Peoples’ Party was a clear winner in West Pakistan, winning 82 out of 130(?) seats."
              quoteAlign="center"
              color="yellow"
              fontSize="big"
        />
      </div>
      <div className={styles.view_content_wrapper}>
        <ElectMap mapData={mapData}/>
      </div>
      <div className={styles.view_content_wrapper}>
        <div className={styles.view_content_container}>
          <SectionHeading heading='The Military Junta delays transfer of power'/>
          <p className={styles.view_para}>
            What followed was a frantic attempt on the part of the military junta to delay the convening of the National Assembly session. They started discussions with the Awami League to iron out differences over contentious aspects of the six points. During these negotiations, the Military propped up Zulfiqar Ali Bhutto to play the role of a spoiler. Bhutto warned against ignoring the PPP, which had emerged as a clear winner in West Pakistan – the bastion of power in Pakistan, as Bhutto put it. Hiding behind Bhutto’s theatrics, the military junta feigned helplessness. In the meanwhile, there was an increase in military buildup in East Pakistan.
          </p>
          <PhotoContainer
            noScroll
            imgArr = {[
              {image: transfer1, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", widthID: "fiftyFive"},
              {image: transfer2, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", widthID: "fortyFive"},
            ]}
          />
          <p className={styles.view_para}>
            The situation in East Pakistan was tense. There was heightened anxiety about the delaying tactics used by Yahya’s negotiating team, Bhutto’s intransigence, and the military buildup in and around Dhaka.  Sensing this palpable tension as the convening of the national assembly was delayed once again, Mujib-ur-Rehman decided to assert authority by addressing a public gathering. The Military was anxious that Rehman might go all the way and declare independence. He was told in no uncertain terms that this would be intolerable and warned him of dire consequences. So, while Mujib addressed a mammoth gathering at the Ramna Race Course in Dhaka, he stopped short of declaring independence. He did, however, end his speech by asserting that the struggle this time was for freedom. (find YouTube video of the address)
          </p>  
        </div>
      </div>

      <div className={styles.view_content_wrapper}>
        <PhotoSwitch photoData={photoData} imgArr={newsImgArr}/>
      </div>

      <Footer
        projectName="Bangladesh’s Liberation War"
        projectSubTitle="A visual history"
        projectDescription="The LUMS Digital Archive is a research repository that aims at collecting, cataloging and preserving rare material (books, pamphlets, newspapers and other items) of
        historical significance and making them available to researchers. In particular, the archive focuses on events, groups, movements and personalities relating to broader
        historical, political and cultural trends in South Asia, with an emphasis on preserving the accounts of marginalized and subaltern groups."
        prevLink="/ch1"
        nextLink="/ch3"
        chapterID={2}
      />
    </div>
  )
}

export default Polls;
