import { useState } from "react";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import SectionHeading from "../components/SectionHeading.js";
import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import ElectMap from "../components/map/map.js";
import Footer from "../components/Footer.js";
import PhotoSwitch from "../components/photoSwitch.js";

import chapter3_1 from "../resources/Chapter3/Chapter3_1.jpg";
import chapter3_2 from "../resources/Chapter3/Chapter3_2.jpg";
import chapter3_3 from "../resources/Chapter3/Chapter3_3.jpg";

import photoStory1 from "../resources/Chapter3/photoStory/photoStory1.jpg";
import photoStory2 from "../resources/Chapter3/photoStory/photoStory2.jpg";
import photoStory3 from "../resources/Chapter3/photoStory/photoStory3.jpg";

import BhuttoQuote from "../resources/Chapter3/BhuttoQuote.jpg";

import muktiPosters from "../resources/Chapter3/Mukti_Bahini_posters.jpg";
import muktiMural from "../resources/Chapter3/MuktiMural.jpg";
import razakaarId from "../resources/Chapter3/RazakaarId.jpeg";

import solid1 from "../resources/Chapter3/solid1.jpg";
import solid2 from "../resources/Chapter3/solid2.jpg";
import solid3 from "../resources/Chapter3/solid3.jpg";

import joanDylan from "../resources/Chapter3/JoanDylan.jpg";

import timePeking from "../resources/Chapter3/pekingforpeace.jpg";
import yahKiss from "../resources/Chapter3/yahyaKissinger.jpg";
import nixon1 from "../resources/Chapter3/Nixon1.jpg";
import nixon2 from "../resources/Chapter3/Nixon2.jpg";

import localnews1 from "../resources/Chapter3/photoStory1/localnews_1.jpg";
import localnews2 from "../resources/Chapter3/photoStory1/localnews_2.png";
import localnews3 from "../resources/Chapter3/photoStory1/localnews_3.png";
import localnews4 from "../resources/Chapter3/photoStory1/localnews_4.jpg";
import localnews5 from "../resources/Chapter3/photoStory1/localnews_5.jpg";
import localnews6 from "../resources/Chapter3/photoStory1/localnews_6.jpg";
import AntArt from "../resources/Chapter3/AnthonyArticle.jpg";

import timeRefugees from "../resources/Chapter3/time_refugees.jpg";
import NYT from "../resources/Chapter3/NYT.jpg";
import WSJ from "../resources/Chapter3/WSJ.jpg";

import refugees1 from "../resources/Chapter3/refugees1.jpg";
import refugees2 from "../resources/Chapter3/refugees2.jpg";
import refugees3 from "../resources/Chapter3/refugees3.jpg";
import refugees4 from "../resources/Chapter3/refugees4.jpg";

import propPoster1 from "../resources/Chapter3/propaganda/Poster1.jpeg";
import propPoster2 from "../resources/Chapter3/propaganda/Poster2.jpeg";
import propPoster3 from "../resources/Chapter3/propaganda/Poster3.jpeg";
import propPoster4 from "../resources/Chapter3/propaganda/Poster4.jpeg";
import propPoster5 from "../resources/Chapter3/propaganda/Poster5.jpeg";

import hilalHead from "../resources/Chapter3/propaganda/HilalHeadlines.png";
import indra1 from "../resources/Chapter3/propaganda/indra1.jpg";
import indra2 from "../resources/Chapter3/propaganda/indra2.jpg";
import poem from "../resources/Chapter3/propaganda/poem.jpg";

import war0 from "../resources/Chapter3/general/war0.jpeg";
import war1 from "../resources/Chapter3/general/war1.jpeg";
import war2 from "../resources/Chapter3/general/war2.jpeg";
import war3 from "../resources/Chapter3/general/war3.jpeg";
import war4 from "../resources/Chapter3/general/war4.jpeg";
import war5 from "../resources/Chapter3/general/war5.jpeg";
import war6 from "../resources/Chapter3/general/war6.jpeg";
import war7 from "../resources/Chapter3/general/war7.jpeg";
import war8 from "../resources/Chapter3/general/war8.jpeg";
import war9 from "../resources/Chapter3/general/war9.jpeg";
import warsaw1 from "../resources/Chapter3/general/warsaw1.jpeg";
import warsaw2 from "../resources/Chapter3/general/warsaw2.jpeg";

import news1 from "../resources/Chapter3/propaganda/news1.jpeg";
import news2 from "../resources/Chapter3/propaganda/news2.jpeg";
import news3 from "../resources/Chapter3/propaganda/news3.jpeg";
import news4 from "../resources/Chapter3/propaganda/news4.jpeg";
import news5 from "../resources/Chapter3/propaganda/news5.jpeg";

const imgArrCh3 = [
  {
    image: chapter3_1,
    style: {
      width: "25%",
    },
  },
  {
    image: chapter3_2,
    style: {
      width: "50%",
    },
  },
  {
    image: chapter3_3,
    style: {
      width: "25%",
    },
  },
];

const newsImgArr = [
  {
    img: photoStory1,
    width: 560,
    ar: 1.17,
  },
  {
    img: photoStory2,
    width: 420,
    ar: 0.716,
  },
  {
    img: photoStory3,
    width: 320,
    ar: 0.634,
  },
];

const photoData = [
  {
    title: "Awami League is banned",
    description:
      "On March 26, 1971, Martial Law is proclaimed by President General Yahya Khan. The Presidents' statement calls Mujib's non obedience movement an act of treason. Reports of political leaders praising the Army's intervention are also seen. Bhutto famous statement 'Pakistan is saved' recorded in a deadline",
  },
  {
    title: "Army in control, Mujib house arrested",
    description:
      "states the Martial Law Administrators official statement published in Dawn, March 28, 1971. Bhutto's criticism of Mujib's aims to form an 'independent fascist and racist regime in East Pakistan' is reported in the news report to the left",
  },
  {
    title: "Awami Leagues' funds frozen",
    description:
      "A detailed martial law order banning all financial activity of the political party is reported in Dawn, March 29, 1971",
  },
];

const localNewsArr = [
  {
    img: localnews1,
    width: 600,
    ar: 1.28,
  },
  {
    img: localnews2,
    width: 500,
    ar: 1.17,
  },
  {
    img: localnews3,
    width: 500,
    ar: 0.88,
  },
  {
    img: localnews4,
    width: 600,
    ar: 1.28,
  },
  {
    img: localnews5,
    width: 350,
    ar: 0.73,
  },
  {
    img: localnews6,
    width: 420,
    ar: 1.05,
  },
  {
    img: AntArt,
    width: 420,
    ar: 0.75,
  }
];

const localNewsData = [
  {
    title: "News about returning stability after the operation",
    description:
      "are published in Pakistani Dailies. This issue of Dawn publishes a photo of Indian supporters of Sheikh Mujib ur Rehman demonstrating in front of Pakistani Embassy in New Delhi. A headline also criticizes the false reports published in ‘Anglo-American’ press about the political crisis",
  },
  {
    title: "While the coverage of Westen media is criticized, ",
    description:
      "international press coverage and statements of global leaders supporting the official narrative are lauded across headlines in various issues",
  },
  {
    title: "Photos showing Martial Law Admistration in control",
    description:
      "Presdient in a meeting with his team of Martial Law administrators in President House, Rawalpindi (Top). Martial Law Administrator (East Wing), Lt. Gen Tikka Khan speaking with non-Awami league political leaders from West Pakistan (Bottom). A headline celebrates the success of the military operation with support of the Air Force",
  },
  {
    title: "Interference of India",
    description:
      "in Pakistan’s domestic affairs becomes a key theme in English dailies from West Pakistan",
  },
  {
    title: "Headlines on improved situation in the East Wing",
    description:
      "Continue to be published. This clipping from Dawn shows bustling activity of shoppers in a Dacca market to indicate return of normalcy",
  },
  {
    title: "Bhutto becomes a spokesperson for the Martial Law Administration",
    description:
      "Here a news report publishes his statement saying that he demanded to share power at the center with Awami league as he did ‘not trust Mujib ur Rehman’s aims and intentions’",
  },
  {
    title: 'A Pakistan Journalist flees to publish an article titled "Genocide" in the Sunday Times',
    description:
      `Given the press censorship in West Pakistan, Karachi based Journalist Anthony Mascarenhas goes into self imposed exile to get his article "Genocode", published in the Sunday Times, Britain. This was the first report that exposed the excesses of the Pakitan army to the world`,
  }
];

function Operation() {
  return (
    <div className={styles.view_container}>
      <Navbar type="chapter_title" />
      <ChapterTitle
        number="3"
        imgArr={imgArrCh3}
        title="Military Operation"
        subtitle="March 25, 1971 - ..."
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="As the negotiations to transfer power fall apart, Awami League is outlawed" />
            <p className={styles.view_para}>
              By the third week of March, the negotiations had reached a
              dead-end. There was a back-and-forth between the negotiating teams
              led by Awami League’s lawyers and economists and the
              constitutional wizards of the military junta. But as Yahya Khan
              left Dhaka on the night of 24 March (check), everyone knew that
              the negotiations had fallen apart. They were never meant to reach
              an agreement. As accounts provided by Khadim Husain Raja show, the
              Eastern Command had been given the task of planning a military
              operation weeks ago. Given the secrecy and general distrust of
              Bengalis, the planners made sure that no Bengali officers were
              involved in these consultations.
            </p>
            <p className={styles.view_para}>
              The Operational Searchlight started on the midnight of 24-25
              March. West Pakistani newspapers flashed celebratory headlines,
              saluting Yahya Khan for doing the right thing and saving Pakistan.
            </p>
          </div>
        </div>
        <div className={styles.view_content_wrapper}>
          <PhotoSwitch photoData={photoData} imgArr={newsImgArr} />
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={BhuttoQuote}
            photoClassName={"ch2Q_6points"}
            quoteTxt="By the grace of Almighty God, Pakistan has at last been saved"
            quoteAlign="center"
            color="white"
            fontSize="big"
            rotation="rotate2"
            quoterText={
              "Zulfiqar Ali Bhutto | On his return to Karachi from Dacca - 25 March 1971"
            }
            quotationMark={true}
          />
        </div>
      </section>

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Operation searchlight begins" />
            <p className={styles.view_para}>
              What followed after 25 March 1971 was a bloodbath. The Military
              moved quickly to regain control in major cities and ports by
              taking over key installations like Radio, TV, and government
              offices. The human toll of ‘establishing the writ’ was
              innumerable. In all autobiographical accounts penned by military
              officers taking part in the operation and the weekly situation
              reports published in Military’s mouthpiece – Hilal – along with
              major Urdu dailies in West Pakistan, and even English dailies in
              Dhaka – the success of the operation was described in terms of
              ‘neutralizing,’ ‘taking control,’ ‘eliminating’ or ‘clearing’ the
              areas. Such language helped mask the brutality of the operation
              that targeted civilians along with the band of Bengali separatists
              – Mukti Bahini.
            </p>
            <SectionHeading heading="Emergence of Paramilitary forces - Mukti Bahini, Al-Badr and Al-Shams" />
            <p className={styles.view_para}>
              The widespread massacre and the fact that the Military had
              resorted to violence instead of handing over power to Sheikh Mujib
              proved to be the proverbial last nail in the coffin. Except for
              the Biharis living in East Pakistan and a handful of Bengali
              Islamists, no significant section of the Bengali community
              supported the idea of a united Pakistan anymore. So much so that a
              substantial chunk of the Bengali military, mainly comprising of
              units in the East Pakistan Rifles, defected to join the freedom
              fighters. The entire diplomatic staff of the Pakistani consulate
              in Calcutta defected to join the government in exile. Mujib was in
              Montgomery jail (present-day Sahiwal), where he was being tried
              for treason. (news items about his trial) His associates had
              managed to escape when the operation started and crossed the
              border into India to establish the government in exile. Some of
              the leading figures ended up in London and other major capitals of
              the world to garner support for the cause of the Bangladeshi
              liberation movement. (news items about government in exile)
            </p>
            <PhotoContainer
              imgArr={[
                {
                  image: muktiPosters,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: razakaarId,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: muktiMural,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirtyfive",
                },
              ]}
            />
            <p className={styles.view_para}>
              To garner local support against the overwhelming popularity of
              Mukti Bahini, the Pakistani Military raised a volunteer corps of
              Al-Badar and Al-Shams. Mainly comprising young Bengalis belonging
              to the Jamat-i-Islami, these volunteers served as a vital source
              in providing logistic support to the Military in identifying
              critical targets for its operations. (Use Salim Mansoor Khalid’s
              book for membership cards, oath of allegiance; news items in Hilal
              about their ‘activities,’ General Niazi’s address to their cadres)
            </p>
          </div>
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="International Solidarity for the Bangladeshi Struggle" />
            <p className={styles.view_para}>
              One such aspect of international solidarity for the Bangladeshi
              cause was the Concert for Bangladesh, where iconic artists like
              Ravi Shankar and George Harrison performed.
            </p>
            <PhotoContainer
              noScroll
              imgArr={[
                {
                  image: solid1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: solid2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: solid3,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={joanDylan}
            photoClassName={"ch2Q_6points"}
            quoteTxt={
              <p>
                <p>
                  Bangladesh Bangladesh, Bangladesh Bangladesh
                  <br />
                  When the sun sinks in the west, Die a million people of the
                  Bangladesh
                  <br />
                  The story of Bangladesh, Is an ancient one again made fresh
                  <br />
                  By blind men who carry out commands
                  <br />
                  Which flow out of the laws upon which nation stands
                  <br />
                  Which say to sacrifice a people for a land
                </p>

                <p>
                  Once again we stand aside, And watch the families crucified
                  <br />
                  See a teenage mother's vacant eyes, As she watches her feeble
                  baby try
                  <br />
                  To fight the monsoon rains and the cholera flies
                  <br />
                  And the students at the university, Asleep at night quite
                  peacefully
                  <br />
                  The soldiers came and shot them in their beds,
                  <br />
                  And terror took the dorm awakening shrieks of dread
                  <br />
                  And silent frozen forms and pillows drenched in red
                </p>

                <p>
                  Did you read about the army officer's plea, For donor's blood
                  it was given willingly
                  <br />
                  By boys who took the needles in their veins,
                  <br />
                  And from their bodies every drop of blood was drained
                  <br />
                  No time to comprehend and there was little pain
                  <br />
                  And so the story of Bangladesh, Is an ancient one again made
                  fresh
                  <br />
                  By all who carry out commands,
                  <br />
                  Which flow out of the laws upon which nations stand
                  <br />
                  Which say to sacrifice a people for a land
                </p>
              </p>
            }
            quoteAlign="left"
            color="white"
            fontSize="smaller"
            rotation="rotate2"
            quoterText={"Joan Baez | Lyrics to the 'Song for Bangladesh'"}
            quotationMark={true}
          />
        </div>
        <div class={styles.video_contain_center}>
            <div>
              <iframe
                width="650"
                height="365"
                src="https://www.youtube.com/embed/stkcP5xl1C0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
      </section>

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Influence of US Foreign Policy" />
            <p className={styles.view_para}>
              However, at the official level, the US government led by Nixon and
              his infamous national security advisor, Henry Kissinger, were
              miffed at these developments. They viewed Pakistan as a
              significant ally that had helped establish a diplomatic thaw
              between China and the US. The Pakistani Military facilitated this
              exchange at the expense of considerable cost, i.e., open Soviet
              hostility. Soviets responded by signing a friendship treaty with
              India, supplying them with a large cache of arms and ammunition,
              which was eventually used in the decisive battle against Pakistan
              in November-December 1971. (Use Nixon-Kissinger transcripts)
            </p>
            <PhotoContainer
              imgArr={[
                {
                  image: timePeking,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: yahKiss,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: nixon1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: nixon2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
              ]}
            />
            <p className={styles.view_para}>
              Though Nixon and Kissinger held a soft spot for Pakistan, they
              realized the impossibility of Pakistan’s task. At best, despite
              pressure at home and from its diplomatic staff, the US
              administration could only take a mitigated stance rather than open
              support for India. In particular, the US looked at India’s role in
              the East Pakistan crisis with suspicion. At one point [can’t
              remember if it was an encounter after ’71 or before that; need to
              check], Henry Kissinger’s wife asked the Bangladeshi delegation to
              accept support from India, Pakistan’s arch-rival. Nurul Islam
              responded that it was for the same logic that the American
              founding fathers took financial and military support from France
              in their fight against British tyranny.
            </p>
            <SectionHeading heading="Coverage by West Pakistani Press" />
            <p className={styles.view_para}>
              Throughout the military operation, the people in West Pakistan
              were largely oblivious of the excesses committed in the name of
              national security. The political parties – especially Bhutto’s PPP
              – were scared to voice opposition against and found it suitable as
              it paved the way for Bhutto to assume the role of leadership in
              the country. He served as the military junta’s spokesperson to the
              international community.
            </p>
            <p className={styles.view_para}>
              Domestically, the Pakistani reader was fed with news about the
              successes of the military operation and the situation returning to
              normal. There were frequent reports about Indian agents being
              caught and their attempts to carry out acts of sabotage being
              foiled.
            </p>
          </div>
        </div>
        <div className={styles.view_content_wrapper}>
          <PhotoSwitch photoData={localNewsData} imgArr={localNewsArr} />
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Coverage by International Press" />
            <p className={styles.view_para}>
              The international press, however, was critical of Pakistan. There
              were numerous reports (cite from international press) about the
              humanitarian crisis emerging from the military operation. In
              particular, the international community focused on the burgeoning
              numbers of refugees – close to 10 million – who had assembled at
              various border crossings between East Bengal and India.
            </p>
            <PhotoContainer
              noScroll
              imgArr={[
                {
                  image: timeRefugees,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: NYT,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: WSJ,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
              ]}
            />
            <SectionHeading heading="Refugee Crisis" />
            <p className={styles.view_para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <PhotoContainer
              imgArr={[
                {
                  image: refugees1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: refugees2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: refugees3,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: refugees4,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
              ]}
            />
            <SectionHeading heading="War propaganda in West Pakistan" />
            <p className={styles.view_para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <PhotoContainer
              imgArr={[
                {
                  image: hilalHead,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: indra2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: indra1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirtyfive",
                },
                {
                  image: poem,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
              ]}
            />
            <p className={styles.view_para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <PhotoContainer
              imgArr={[
                {
                  image: propPoster5,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: propPoster1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: propPoster2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: propPoster3,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: propPoster4,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
              ]}
            />
            <p className={styles.view_para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <PhotoContainer
              imgArr={[
                {
                  image: news1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: news2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: news3,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: news4,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: news5,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
              ]}
            />
            <SectionHeading heading="Archived Photos of the War" />
            <p className={styles.view_para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <PhotoContainer
              imgArr={[
                {
                  image: war0,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: war1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: war2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: war3,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: war4,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: war5,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: war6,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: war7,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: war8,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: war9,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: warsaw1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: warsaw2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <Footer
        projectName="Bangladesh’s Liberation War"
        projectSubTitle="A visual history"
        projectDescription="The LUMS Digital Archive is a research repository that aims at collecting, cataloging and preserving rare material (books, pamphlets, newspapers and other items) of
      historical signifiance and making them available to researchers. In particular, the archive focuses on events, groups, movements and personalities relating to broader
      historical, political and cultural trends in South Asia, with an emphasis on preserving the accounts of marginalized and subaltern groups."
        prevLink="/ch2"
        nextLink="/ch3"
        chapterID={3}
      />
    </div>
  );
}

export default Operation;
