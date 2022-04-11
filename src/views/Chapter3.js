import { useEffect, useState } from "react";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import SectionHeading from "../components/SectionHeading.js";
import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import Footer from "../components/Footer.js";
import ResponsivePhotoSwitch from "../components/responsivePhotoSwitch.js";
import Overlay from "../components/Overlay";

import Dec0304 from "./sub-views/dates/dec0304.js";
import Dec0506 from "./sub-views/dates/dec0506.js";
import Dec0708 from "./sub-views/dates/dec0708.js";
import Dec0910 from "./sub-views/dates/dec0910.js";
import Dec1112 from "./sub-views/dates/dec1112.js";
import Dec1314 from "./sub-views/dates/dec1314.js";
import Dec1516 from "./sub-views/dates/dec1516.js";

import chapter3_1 from "../resources/Chapter3/Chapter3_1.jpg";
import chapter3_2 from "../resources/Chapter3/Chapter3_2.jpg";
import chapter3_3 from "../resources/Chapter3/Chapter3_3.jpg";

import transcript from "../resources/Chapter3/documents/Transcript.pdf";

import photoStory1 from "../resources/Chapter3/photoStory1/photoStory1.jpg";
import photoStory2 from "../resources/Chapter3/photoStory1/photoStory2.jpg";
import photoStory3 from "../resources/Chapter3/photoStory1/photoStory3.jpg";

import BhuttoQuote from "../resources/Chapter3/others/BhuttoQuote.jpg";
import Martyrs from "../resources/Chapter3/others/Martyrs.jpg";

import lootedChests from "../resources/Chapter3/others/looted_chests.jpg";
import muktiRailway from "../resources/Chapter3/others/Mukti_ damage_railways.jpg";
import noticeMNA from "../resources/Chapter3/others/notices_Awami League_MNAs.jpg";

import blood from "../resources/Chapter3/blood telegram/blood.jpg";
import bloodTel from "../resources/Chapter3/blood telegram/blood telegram.jpg";
import bloodTelSupp from "../resources/Chapter3/blood telegram/blood_support.jpg";
import bloodTelBook from "../resources/Chapter3/blood telegram/blood telegram book.jpg";

import muktiPosters from "../resources/Chapter3/others/Mukti_Bahini_posters.jpg";
import muktiPractice from "../resources/Chapter3/others/Mukti_Practice.jpg";
import muktiMural from "../resources/Chapter3/others/MuktiMural.jpg";
import razakaarId from "../resources/Chapter3/others/RazakaarId.jpeg";
import razakaarOrd from "../resources/Chapter3/others/RazOrd.png";
import intellectuals from "../resources/Chapter3/others/intellectuals_bodies.jpg";

import solid1 from "../resources/Chapter3/others/solid1.jpg";
import solid2 from "../resources/Chapter3/others/solid2.jpg";
import solid3 from "../resources/Chapter3/others/solid3.jpg";

import joanDylan from "../resources/Chapter3/others/JoanDylan.jpg";

import timePeking from "../resources/Chapter3/others/pekingforpeace.jpg";
import yahKiss from "../resources/Chapter3/others/yahyaKissinger.jpg";
import nixon1 from "../resources/Chapter3/others/Nixon1.jpg";
import nixon2 from "../resources/Chapter3/others/Nixon2.jpg";

import localnews1 from "../resources/Chapter3/photoStory2/localnews_1.jpg";
import localnews2 from "../resources/Chapter3/photoStory2/localnews_2.png";
import localnews3 from "../resources/Chapter3/photoStory2/localnews_3.png";
import localnews4 from "../resources/Chapter3/photoStory2/localnews_4.jpg";
import localnews5 from "../resources/Chapter3/photoStory2/localnews_5.jpg";
import localnews6 from "../resources/Chapter3/photoStory2/localnews_6.jpg";
import AntArt from "../resources/Chapter3/others/AnthonyArticle.jpg";

import timeRefugees from "../resources/Chapter3/others/time_refugees.jpg";
import NYT from "../resources/Chapter3/others/NYT.jpg";
import WSJ from "../resources/Chapter3/others/WSJ.jpg";

import refugees1 from "../resources/Chapter3/others/refugees1.jpg";
import refugees2 from "../resources/Chapter3/others/refugees2.jpg";
import refugees3 from "../resources/Chapter3/others/refugees3.jpg";
import refugees4 from "../resources/Chapter3/others/refugees4.jpg";

import propPoster1 from "../resources/Chapter3/propaganda/Poster1.jpeg";
import propPoster2 from "../resources/Chapter3/propaganda/Poster2.jpeg";
import propPoster3 from "../resources/Chapter3/propaganda/Poster3.jpeg";
import propPoster4 from "../resources/Chapter3/propaganda/Poster4.jpeg";
import propPoster5 from "../resources/Chapter3/propaganda/Poster5.jpeg";

import hilalHead from "../resources/Chapter3/propaganda/HilalHeadlines.png";
import indra1 from "../resources/Chapter3/propaganda/indra1.jpg";
import indra2 from "../resources/Chapter3/propaganda/indra2.jpg";
import poem from "../resources/Chapter3/propaganda/poem.jpg";

import bengalPaper1 from "../resources/Chapter3/photoStory3/bengalPaper1.jpg";
import bengalPaper2 from "../resources/Chapter3/photoStory3/bengalPaper2.jpg";
import bengalPaper3 from "../resources/Chapter3/photoStory3/bengalPaper3.jpg";
import bengalPaper4 from "../resources/Chapter3/photoStory3/bengalPaper4.jpg";
import bengalPaper5 from "../resources/Chapter3/photoStory3/bengalPaper5.jpg";
import bengalPaper6 from "../resources/Chapter3/photoStory3/bengalPaper6.jpg";
import bengalPaper7 from "../resources/Chapter3/photoStory3/bengalPaper7.jpg";
import bengalPaper8 from "../resources/Chapter3/photoStory3/bengalPaper8.jpg";
import bengalPaper9 from "../resources/Chapter3/photoStory3/bengalPaper9.jpg";

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
      "The president's statement calls Mujib's non-obedience movement an act of treason. Reports of political leaders praising the Army's intervention are also seen. Bhutto's famous statement 'Pakistan is saved' recorded in a deadline",
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
  },
];

const localNewsData = [
  {
    title: "News about returning stability after the operation",
    description:
      "are published in Pakistani Dailies. This issue of Dawn publishes a photo of Indian supporters of Sheikh Mujib ur Rehman demonstrating in front of the Pakistani Embassy in New Delhi. A headline also criticizes the false reports published in ‘Anglo-American’ press about the political crisis",
  },
  {
    title: "While the coverage of Westen media is criticized,",
    description:
      "International press coverage and statements of global leaders supporting the official narrative are lauded across headlines in various issues",
  },
  {
    title: "Photos showing Martial Law Administration in control",
    description:
      "President in a meeting with his team of Martial Law administrators in President House, Rawalpindi (Top). Martial Law Administrator (East Wing), Lt. Gen Tikka Khan speaking with non-Awami league political leaders from West Pakistan (Bottom). A headline celebrates the success of the military operation with support of the Air Force",
  },
  {
    title: "Interference of India",
    description:
      "in Pakistan’s domestic affairs becomes a key theme in English dailies from West Pakistan",
  },
  {
    title: "Headlines on the improved situation in the East Wing",
    description:
      "continue to be published. This clipping from Dawn shows the bustling activity of shoppers in a Dacca market to indicate the return to normalcy",
  },
  {
    title: "Bhutto becomes a spokesperson for the Martial Law Administration",
    description:
      "Here a news report publishes his statement saying that he demanded to share power at the center with Awami league as he did ‘not trust Mujib ur Rehman’s aims and intentions’",
  },
  {
    title:
      'A Pakistan Journalist flees to publish an article titled "Genocide" in the Sunday Times',
    description: `Given the press censorship in West Pakistan, Karachi based Journalist Anthony Mascarenhas goes into self-imposed exile to get his article "Genocide", published in the Sunday Times, Britain. This was the first report that exposed the excesses of the Pakitan army to the world`,
  },
];

const datesArr = [
  "Dec 03 - 04",
  "Dec 05 - 06",
  "Dec 07 - 08",
  "Dec 09 - 10",
  "Dec 11 - 12",
  "Dec 13 - 14",
  "Dec 15 - 16",
];

function Operation() {
  const [month, setMonth] = useState("Dec 03 - 04");
  const [overlayClosed, setOverlayClosed] = useState(false);
  const [displayedOverlay, setDisplayedOverlayState] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function closeOverlay() {
    setDisplayedOverlayState(["", 0]);
  }

  function setDisplayedOverlay(oId, slideIndex) {
    setDisplayedOverlayState([oId, slideIndex]);
  }

  return (
    <div className={styles.view_container}>
      <Navbar type="chapter_title" />
      <ChapterTitle
        number="3"
        imgArr={imgArrCh3}
        title="Military Operation"
        subtitle="March 25 - Dec 16, 1971"
        desc="Delay in the transfer of power and failed negotiations lead to a political deadlock. The military orchestrates an all-out offensive in the East Wing taking complete control of the region"
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="As the negotiations to transfer power fall apart, Awami League is outlawed" />
            <p className={styles.view_para}>
              By the third week of March, the negotiations had reached a
              dead-end. There was a back-and-forth between the negotiating teams
              led by Awami League’s lawyers and economists, and the
              constitutional wizards of the military junta. But as Yahya Khan
              left Dhaka on the night of 24 March, everyone knew that the
              negotiations had fallen apart. They were never meant to reach an
              agreement. As accounts provided by Khadim Husain Raja show, the
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
          <ResponsivePhotoSwitch photoData={photoData} imgArr={newsImgArr} />
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
            <SectionHeading heading="Operation Searchlight begins" />
            <p className={styles.view_para}>
              What followed after 25 March 1971 was a bloodbath. The Military
              moved quickly to regain control in major cities and ports by
              taking over key installations like Radio, TV, and government
              offices. The human toll of ‘establishing the writ’ was innumerable
              as confirmed by autobiographical accounts penned by various
              military officers taking part in the operation. The weekly
              situation reports published in Military’s mouthpiece – Hilal –
              along with major Urdu dailies in West Pakistan, and even English
              dailies in Dhaka – described the success of the operation in terms
              of ‘neutralizing,’ ‘taking control,’ ‘eliminating’ or ‘clearing’
              the areas. These euphemisms helped mask the brutality of the
              operation that targeted civilians along with the band of Bengali
              separatists – Mukti Bahini.
            </p>
            <div className={styles.video_contain_center}>
              <div className={styles.video_contain}>
                <iframe
                  src="https://www.youtube.com/embed/TLyU7uffO6o"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.video_caption}>
                  Major Khaled Musharrof, a commander of the Mukti Bahini leads
                  the fighters in taking oath
                </p>
              </div>
            </div>
            <p className={styles.view_para}>
              The military operation marked the end of the political process.
              The military had refused to accept the almost unanimous electoral
              verdict in Sheikh Mujib’s demands for maximum political autonomy.
              From 25 March onwards, the Bengalis viewed the military as an
              occupying force formally issued a declaration of independence, and
              started fighting what they thought was a legitimate liberation
              war.
            </p>
            <p className={styles.view_para}>
              One of the most brutal encounters took place in Dhaka University.
              M B Naqvi, a Pakistani journalist, shares his account of what he
              witnessed at the Jaganath Hall - the main residential building for
              Hindu students at Dhaka University. A partial{" "}
              <a
                className={styles.clickLink}
                href={transcript}
                target="_blank"
                rel="noopener noreferrer"
              >
                transcript
              </a>{" "}
              of military units engaged in the operation at Dhaka University has
              also survived.
            </p>
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={Martyrs}
            photoClassName={"ch2Q_6points"}
            quoteTxt="My original conception was that the Pakistan army had indiscriminately shot and killed God knows how many students in those halls that night. I went there 43 days after the event and the places had been washed. The vertical part of the staircases carried tell-tale spots and discolourings, showing that the dead bodies had been dragged down with blood still oozing out of them. There were even a few bits of human bodies — hair, fingers, ears, noses, etc — sticking to the vertical spaces, while the horizontal steps had been cleared, though they all had darks spots of blood still visible"
            quoteAlign="center"
            color="white"
            fontSize="small"
            rotation="rotate2"
            quoterText={"M.B.Naqvi | Excerpt from an article published in 2006"}
            quotationMark={true}
          />
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <p className={styles.view_para}>
              Once there was some semblance of ‘normalcy’, the military issued a
              warning to teachers for their alleged ‘anti-state’ activities. It
              also sent notices to Awami League’s member elects - most of whom
              had already crossed the border to enter India - for their alleged
              atrocities and acts of arson, looting and violence in East
              Pakistan.
            </p>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"1"}
              noScroll
              imgArr={[
                {
                  image: lootedChests,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: muktiRailway,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: noticeMNA,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
              ]}
            />
            <div className={styles.video_contain_center}>
              <div className={styles.video_contain}>
                <iframe
                  src="https://www.youtube.com/embed/J9NcosVnOMo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.video_caption}>
                  Major Zia, a commander of the Mukti Bahini declares
                  independence
                </p>
              </div>
            </div>
            <SectionHeading heading="Blood Telegram" />
            <p className={styles.view_para}>
              Silences are often weapons of oppression. And if one document
              could provide quintessential testimony to this statement, it would
              be the Blood Telegram. Sent to Washington DC by the then American
              Consul General to Dhaka, Archer Blood, the telegram carries
              imminent warnings and indications of an undergoing genocide in
              East Pakistan. The response from DC was abysmal or as Blood
              writes:
            </p>
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={blood}
            photoClassName={"ch2Q_6points"}
            quoteTxt="Our government has failed to denounce the suppression of democracy. Our government has failed to denounce atrocities…… Our government has evidenced what many will consider moral bankruptcy"
            quoteAlign="center"
            color="white"
            fontSize="big"
            rotation="rotate2"
            quoterText={"Archer Blood | American Consul General to Dhaka 1971"}
            quotationMark={true}
          />
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"2"}
              noScroll
              imgArr={[
                {
                  image: bloodTelBook,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: bloodTel,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: bloodTelSupp,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
              ]}
            />
            <p className={styles.view_para}>
              In 2013, Gary J. Bass, Assistant Professor of Politics and
              International Relations at Princeton, authored{" "}
              <i>
                The Blood Telegram: Nixon, Kissinger, and a Forgotten Genocide
              </i>
              , analyzing the American position on the Bangladesh LIberation war
              of 1971. There are numerous declassified conversations between
              Nixon, Kissinger, and other stakeholders.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Emergence of Paramilitary forces - Mukti Bahini, Al-Badr and Al-Shams" />
            <p className={styles.view_para}>
              The widespread massacre and the fact that the Military had
              resorted to violence instead of handing over power to Sheikh Mujib
              proved to be the proverbial last nail in the coffin. Except for
              the Biharis living in East Pakistan and a handful of Bengali
              Islamists, no significant section of the Bengali community
              supported the idea of a united Pakistan anymore. So much so that a
              substantial chunk of the Bengali military, mainly units in the
              East Pakistan Rifles, defected to join the freedom fighters. The
              entire diplomatic staff of the Pakistani consulate in Calcutta
              defected to join the government in exile. Mujib was in a jail in
              Punjab, where he was being tried for treason. His associates had
              managed to escape when the operation started and crossed the
              border into India to establish the government in exile. Some of
              the leading figures ended up in London and other major capitals of
              the world to garner support for the cause of the Bangladeshi
              liberation movement.
            </p>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"3"}
              disclaimer={true}
              imgArr={[
                {
                  image: muktiPosters,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: muktiPractice,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: razakaarId,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: razakaarOrd,
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
                {
                  image: intellectuals,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
              ]}
            />
            <p className={styles.view_para}>
              To garner local support against the overwhelming popularity of
              Mukti Bahini, the Pakistani Military raised a volunteer corps of
              Al-Badar and Al-Shams. Mainly comprising young Bengalis belonging
              to the Jamat-i-Islami, these volunteers served as a vital source
              in providing logistic support to the Military in identifying
              critical targets for its operations.
            </p>
            <p className={styles.view_para}>
              The volunteer corps of Al-Badr and Al-Shams were complicit in the
              war crimes committed during the military operation. Towards the
              end of the war, as defeat seemed imminent, the Pakistani military
              and their collaborators killed hundreds of Bengali intellectuals,
              journalists, and lawyers, with the intention to bleed the country
              to devastation.
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
            <div className={styles.video_contain_center}>
              <div className={styles.video_contain}>
                <iframe
                  src="https://www.youtube.com/embed/Tby39qh9Lts"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.video_caption}>
                  George Harrison organized the ‘Concert for Bangladesh’ where
                  iconic musicians including Ravi Shankar, Bob Dylan, Eric
                  Clapton and Ringo Starr performed
                </p>
              </div>
            </div>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"4"}
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
            <div className={styles.video_contain_center}>
              <div className={styles.video_contain}>
                <iframe
                  src="https://www.youtube.com/embed/stkcP5xl1C0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.video_caption}>
                  Famous American singer, Joan Baez performs ‘Song of
                  Bangladesh’
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={joanDylan}
            photoClassName={"ch2Q_6points"}
            quoteTxt={
              <div>
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
              </div>
            }
            quoteAlign="left"
            color="white"
            fontSize="smaller"
            rotation="rotate2"
            quoterText={"Joan Baez | Lyrics to the 'Song for Bangladesh'"}
            quotationMark={true}
          />
        </div>
      </section>

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <p className={styles.view_para}>
              Pakistan tried to sway the international opinion in its favor by
              producing counter-propaganda material. Here is a short clip from a
              documentary that the official Pakistani television produced to
              give a background to the East Pakistan crisis and the rationale
              for conducting a military operation.
            </p>
            <div className={styles.video_contain_center}>
              <div className={styles.video_contain}>
                <iframe
                  src="https://www.youtube.com/embed/AETYaUKT__0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.video_caption}>
                  A propaganda film aimed to sway global opinion on the
                  Bangladeshi struggle
                </p>
              </div>
            </div>
            <SectionHeading heading="Influence of US Foreign Policy" />
            <p className={styles.view_para}>
              However, at the official level, the US government led by Nixon and
              his infamous national security advisor, Henry Kissinger, were
              miffed at these developments. They viewed Pakistan as a
              significant ally that had helped establish a diplomatic thaw
              between China and the US. The Pakistani Military facilitated this
              exchange at the expense of considerable cost, i.e., open Soviet
              hostility. The Soviets responded by signing a friendship treaty
              with India, supplying them with a large cache of arms and
              ammunition, which was eventually used in the decisive battle
              against Pakistan in November-December 1971.
            </p>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"5"}
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
              the East Pakistan crisis with suspicion.
            </p>
            <SectionHeading heading="Coverage by West Pakistani Press" />
            <p className={styles.view_para}>
              Throughout the military operation, the people in West Pakistan
              were largely oblivious of the excesses committed in the name of
              national security. The political parties – especially Bhutto’s PPP
              – were scared to voice opposition and found it suitable as it
              paved the way for Bhutto to assume the role of leadership in the
              country. He served as the military junta’s spokesperson to the
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
          <ResponsivePhotoSwitch
            photoData={localNewsData}
            imgArr={localNewsArr}
          />
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Coverage by International Press" />
            <p className={styles.view_para}>
              The international press, however, was critical of Pakistan. There
              were numerous reports about the humanitarian crisis emerging from
              the military operation. In particular, the international community
              focused on the burgeoning numbers of refugees – close to 10
              million – who had assembled at various border crossings between
              East Bengal and India.
            </p>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"6"}
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
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"7"}
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
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"8"}
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
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"9"}
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
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"10"}
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
            <p className={styles.view_para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"11"}
              imgArr={[
                {
                  image: bengalPaper1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: bengalPaper2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: bengalPaper3,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: bengalPaper4,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: bengalPaper5,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: bengalPaper6,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: bengalPaper7,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: bengalPaper8,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: bengalPaper9,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Archived Photos of the War" />
            <p className={styles.view_para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"12"}
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

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Timeline of events during the war" />
            <p className={styles.view_para}>
              The material on the timeline of events during the war (December
              03, 1971 - December 16, 1971) has been taken from Bangladeshi
              journalist, Shamsuddoza Sajen’s compilation for the Daily{" "}
              <i>Star</i>
            </p>
          </div>
          <div className={`${styles.selectPrompt} ${styles.margin2}`}>
            Select Dates
          </div>
          <ul className={styles.monthNav}>
            {datesArr.map((monthName, idx) => (
              <li
                className={styles.monthBut}
                id={monthName}
                key={monthName}
                onClick={(e) => setMonth(e.target.id)}
                style={{
                  border:
                    month === monthName
                      ? "2px solid #1a489dff"
                      : "2px solid #1a489d00",
                  borderRadius: "4px",
                }}
              >
                {monthName}
              </li>
            ))}
          </ul>
          <div className={styles.currMonthContain}>
            <div key={month} className={styles.currMonthFade}></div>
            <h2 className={styles.currMonth}>{`${month} '71`.toUpperCase()}</h2>
          </div>
          {month === "Dec 03 - 04" ? (
            <Dec0304 />
          ) : month === "Dec 05 - 06" ? (
            <Dec0506 />
          ) : month === "Dec 07 - 08" ? (
            <Dec0708 />
          ) : month === "Dec 09 - 10" ? (
            <Dec0910 />
          ) : month === "Dec 11 - 12" ? (
            <Dec1112 />
          ) : month === "Dec 13 - 14" ? (
            <Dec1314 />
          ) : (
            <Dec1516 />
          )}
        </div>
      </section>

      <Footer
        projectName="Bangladesh’s Liberation War"
        projectSubTitle="A visual history"
        projectDescription="The LUMS Digital Archive is a research repository that aims at collecting, cataloging and preserving rare material (books, pamphlets, newspapers and other items) of
      historical signifiance and making them available to researchers. In particular, the archive focuses on events, groups, movements and personalities relating to broader
      historical, political and cultural trends in South Asia, with an emphasis on preserving the accounts of marginalized and subaltern groups."
        prevLink="/ch2"
        nextLink="/ch4"
        chapterID={3}
      />
      <Overlay
        oId="1"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "Bangladesh Documents",
            description: (
              <span>
                A government document listing looted items by the{" "}
                <i>Mukti Bahini</i>
              </span>
            ),
            title: "",
            width: "55",
            render: () => (
              <img
                alt={
                  "A government document listing looted items by the Mukti Bahini"
                }
                className={""}
                src={lootedChests}
              ></img>
            ),
          },
          {
            source: "Bangladesh Documents",
            description: (
              <span>
                Government documents report damage caused by the{" "}
                <i>Mukti Bahini</i> to the railway lines
              </span>
            ),
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "Government documents report damage caused by the Mukti Bahini to the railway lines"
                }
                className={""}
                src={muktiRailway}
              ></img>
            ),
          },
          {
            source: "Bangladesh Documents",
            description:
              "Martial Law government's notice to Awami league's parliamentarians",
            title: "",
            width: "45",
            render: () => (
              <img
                alt={
                  "Martial Law government's notice to Awami league parliamentarians"
                }
                className={""}
                src={noticeMNA}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="2"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "Amazon",
            description:
              "2013 book by American journalist and academic Gary J. Bass about The Blood telegram",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "2013 book by American journalist and academic Gary J. Bass about The Blood telegram"
                }
                className={""}
                src={bloodTelBook}
              ></img>
            ),
          },
          {
            source: "Wikimedia Commons",
            description:
              "Archived copy of the telegram by Archer Blood, US High Commissioner in Dhaka, notifying the US State department of the excesses committed by Pakistan army",
            title: "",
            width: "45",
            render: () => (
              <img
                alt={
                  "Archived copy of the telegram by Archer Blood, US High Commissioner in Dhaka, notifying the US State department of the excesses committed by Pakistan army"
                }
                className={""}
                src={bloodTel}
              ></img>
            ),
          },
          {
            source: "Flickr",
            description:
              "Telegram sent by US foreign officers (South Asia region) in supporting the views expressed in the Blood Telegram",
            title: "",
            width: "45",
            render: () => (
              <img
                alt={
                  "Telegram sent by US foreign officers (South Asia region) in supporting the views expressed in the Blood Telegram"
                }
                className={""}
                src={bloodTelSupp}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="3"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "Wikimedia Commons",
            description: (
              <span>
                A <i>Mukti Bahini</i> Poster
              </span>
            ),
            title: "",
            width: "40",
            render: () => (
              <img alt={""} className={""} src={muktiPosters}></img>
            ),
          },
          {
            source: "Flickr",
            description: (
              <span>
                <i>Mukti Bahini</i> fighters training
              </span>
            ),
            title: "",
            width: "70",
            render: () => (
              <img
                alt={"Mukti Bahini fighters training"}
                className={""}
                src={muktiPractice}
              ></img>
            ),
          },
          {
            source: "Bangladesh Tribune",
            description:
              "ID cards of a Razakaar (member of the Pakistani government’s paramilitary force)",
            title: "",
            width: "55",
            render: () => (
              <img
                alt={
                  "ID cards of a Razakaar (member of the Pakistani government’s paramilitary force)"
                }
                className={""}
                src={razakaarId}
              ></img>
            ),
          },
          {
            source: "docstrangelove",
            description:
              "Headline about the East Pakistan Razakaar Ordinance promulgated by Tikka Khan",
            title: "",
            width: "55",
            render: () => (
              <img
                alt={
                  "Headline about the East Pakistan Razakaar Ordinance promulgated by Tikka Khan "
                }
                className={""}
                src={razakaarOrd}
              ></img>
            ),
          },
          {
            source: "",
            description: (
              <span>
                A mural celebrating <i>Mukti Bahini</i>
              </span>
            ),
            title: "",
            width: "75",
            render: () => (
              <img
                alt={"A mural celebrating Mukti Bahini "}
                className={""}
                src={muktiMural}
              ></img>
            ),
          },
          {
            source: "Flickr",
            description: "Bodies of Bengali Intellectuals dumped in the river",
            title: "",
            width: "50",
            render: () => (
              <img
                alt={"Bodies of Bengali Intellectuals dumped in the river"}
                className={""}
                src={intellectuals}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="4"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "Amazon",
            description: `Famous American singer ‘Joan Baez’  wrote "The Song of Bangladesh" based on the army’s crackdown on unarmed sleeping Bengali students`,
            title: "",
            width: "40",
            render: () => (
              <img
                alt={`Famous American singer ‘Joan Baez’  wrote "The Song of Bangladesh" based on the army’s crackdown on unarmed sleeping Bengali students`}
                className={""}
                src={solid1}
              ></img>
            ),
          },
          {
            source: "Pinterest",
            description:
              "George Harrison along with many other eminent musicians played a series of concerts at the Madison Square Garden (New York) in solidarity of the Bangladeshi cause",
            title: "",
            width: "35",
            render: () => (
              <img
                alt={
                  "George Harrison along with many other eminent musicians played a series of concerts at the Madison Square Garden (New York) in solidarity of the Bangladeshi cause"
                }
                className={""}
                src={solid2}
              ></img>
            ),
          },
          {
            source: "Wikimedia Commons",
            description:
              "George Harrison along with many other eminent musicians played a series of concerts at the Madison Square Garden (New York) in solidarity of the Bangladeshi cause",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "George Harrison along with many other eminent musicians played a series of concerts at the Madison Square Garden (New York) in solidarity of the Bangladeshi cause"
                }
                className={""}
                src={solid3}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="5"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "TIME Magazine Online Archives",
            description:
              "Peking for Peace: a caricature on the cover of Time magazine suggests President Nixon and Henry Kissinger’s keenness to establish diplomatic ties with China",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "Peking for Peace: a caricature on the cover of Time magazine suggests President Nixon and Henry Kissinger’s keenness to establish diplomatic ties with China"
                }
                className={""}
                src={timePeking}
              ></img>
            ),
          },
          {
            source: "The Atlantic",
            description:
              "US Secretary of State Henry Kissinger talks with Presdent Yahya Khan",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "US Secretary of State Henry Kissinger talks with Presdent Yahya Khan"
                }
                className={""}
                src={yahKiss}
              ></img>
            ),
          },
          {
            source: "George Washington University Archives",
            description:
              "A handwritten letter by Presedent Nixon thanking President Yahya for his support in improving ties between the US and China (1)",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "A handwritten letter by Presedent Nixon thanking President Yahya for his support in improving ties between the US and China (1)"
                }
                className={""}
                src={nixon1}
              ></img>
            ),
          },
          {
            source: "George Washington University Archives",
            description:
              "A handwritten letter by Presedent Nixon thanking President Yahya for his support in improving ties between the US and China (2)",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "A handwritten letter by Presedent Nixon thanking President Yahya for his support in improving ties between the US and China (2)"
                }
                className={""}
                src={nixon2}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="6"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "TIME Magazine Online Archives",
            description: "Cover of the Time Magazine (August 2, 1971)",
            title: "",
            width: "35",
            render: () => (
              <img
                alt={"Cover of the Time Magazine (August 2, 1971)"}
                className={""}
                src={timeRefugees}
              ></img>
            ),
          },
          {
            source: "",
            description: (
              <span>
                <a
                  className={styles.rerouteLink}
                  href="http://www.docstrangelove.com/uploads/1971/foreign/19710329_nyt_sticks_and_spears_against_tanks.pdf"
                  target="_blank"
                >
                  Sticks and Spears against Tanks
                </a>{" "}
                by Sydney H. Schanberg published in the New York Times
              </span>
            ),
            title: "",
            width: "35",
            render: () => (
              <img
                alt={
                  "Sticks and Spears against Tanks by Sydney H. Schanberg published in the New York Times"
                }
                className={""}
                src={NYT}
              ></img>
            ),
          },
          {
            source: "",
            description: (
              <span>
                <a
                  className={styles.rerouteLink}
                  href="http://www.docstrangelove.com/uploads/1971/foreign/19710723_wsj_a_nation_divided.pdf"
                  target="_blank"
                >
                  A Nation Divided
                </a>{" "}
                by Peter R. Kan published in the Wall Street Journal
              </span>
            ),
            title: "",
            width: "35",
            render: () => (
              <img
                alt={
                  "A Nation Divided by Peter R. Kan published in the Wall Street Journal"
                }
                className={""}
                src={WSJ}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="7"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "AFP",
            description: "Refugees from East Pakistan",
            title: "",
            width: "75",
            render: () => (
              <img
                alt={"Refugees from East Pakistan"}
                className={""}
                src={refugees1}
              ></img>
            ),
          },
          {
            source: "Photograph by Raghu Rai",
            description: "Refugees from East Pakistan",
            title: "",
            width: "75",
            render: () => (
              <img
                alt={"Refugees from East Pakistan"}
                className={""}
                src={refugees2}
              ></img>
            ),
          },
          {
            source: "The Guardian",
            description: "Refugees from East Pakistan",
            title: "",
            width: "75",
            render: () => (
              <img
                alt={"Refugees from East Pakistan"}
                className={""}
                src={refugees3}
              ></img>
            ),
          },
          {
            source: "DW",
            description: "Refugees from East Pakistan",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={"Refugees from East Pakistan"}
                className={""}
                src={refugees4}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="8"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "Hilal Archives",
            description:
              "Propaganda Headlines in the Pakistani Military’s magazine ‘Hilal’",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "Propaganda Headlines in the Pakistani Military’s magazine ‘Hilal’"
                }
                className={""}
                src={hilalHead}
              ></img>
            ),
          },
          {
            source: "Hilal Archives",
            description:
              "Cartoon published in Pakistani miltary’s magazine ‘Hilal’",
            title: "",
            width: "60",
            render: () => (
              <img
                alt={
                  "Cartoon published in Pakistani miltary’s magazine ‘Hilal’"
                }
                className={""}
                src={indra2}
              ></img>
            ),
          },
          {
            source: "Hilal Archives",
            description:
              "Cartoon published in Pakistani miltary’s magazine ‘Hilal’",
            title: "",
            width: "75",
            render: () => (
              <img
                alt={
                  "Cartoon published in Pakistani miltary’s magazine ‘Hilal’"
                }
                className={""}
                src={indra1}
              ></img>
            ),
          },
          {
            source: "Hilal",
            description:
              "A poem titled ‘Crush India’ published in Pakistani miltary’s magazine ‘Hilal’",
            title: "",
            width: "45",
            render: () => (
              <img
                alt={
                  "A poem titled ‘Crush India’ published in Pakistani miltary’s magazine ‘Hilal’"
                }
                className={""}
                src={poem}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="9"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "DAWN",
            description: "Advertisements published in DAWN in December 1971",
            title: "",
            width: "35",
            render: () => (
              <img
                alt={"Advertisements published in DAWN in December 1971"}
                className={""}
                src={propPoster5}
              ></img>
            ),
          },
          {
            source: "DAWN",
            description: "Advertisements published in DAWN in December 1971",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={"Advertisements published in DAWN in December 1971"}
                className={""}
                src={propPoster1}
              ></img>
            ),
          },
          {
            source: "DAWN",
            description: "Advertisements published in DAWN in December 1971",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={"Advertisements published in DAWN in December 1971"}
                className={""}
                src={propPoster2}
              ></img>
            ),
          },
          {
            source: "DAWN",
            description: "Advertisements published in DAWN in December 1971",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={"Advertisements published in DAWN in December 1971"}
                className={""}
                src={propPoster3}
              ></img>
            ),
          },
          {
            source: "DAWN",
            description: "Advertisements published in DAWN in December 1971",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={"Advertisements published in DAWN in December 1971"}
                className={""}
                src={propPoster4}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="10"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "DAWN",
            description: "Headlines from Dawn",
            title: "",
            width: "40",
            render: () => (
              <img alt={"Headlines from Dawn"} className={""} src={news1}></img>
            ),
          },
          {
            source: "DAWN",
            description: "Headlines from Dawn",
            title: "",
            width: "40",
            render: () => (
              <img alt={"Headlines from Dawn"} className={""} src={news2}></img>
            ),
          },
          {
            source: "DAWN",
            description: "Headlines from Dawn",
            title: "",
            width: "40",
            render: () => (
              <img alt={"Headlines from Dawn"} className={""} src={news3}></img>
            ),
          },
          {
            source: "DAWN",
            description: "Headlines from Dawn",
            title: "",
            width: "40",
            render: () => (
              <img alt={"Headlines from Dawn"} className={""} src={news4}></img>
            ),
          },
          {
            source: "DAWN",
            description: "Headlines from Dawn",
            title: "",
            width: "40",
            render: () => (
              <img alt={"Headlines from Dawn"} className={""} src={news5}></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="11"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "Ali Usman Qasmi's collection",
            description: "Proclamation of Emergency",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={"Proclamation of Emergency"}
                className={""}
                src={bengalPaper1}
              ></img>
            ),
          },
          {
            source: "Ali Usman Qasmi's collection",
            description:
              "The news of the victory of Pakistani forces over India and occupation of its areas were repeated on almost daily basis till December 16",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "The news of the victory of Pakistani forces over India and occupation of its areas were repeated on almost daily basis till December 16"
                }
                className={""}
                src={bengalPaper2}
              ></img>
            ),
          },
          {
            source: "Ali Usman Qasmi's collection",
            description:
              "In order to give a semblance of the situation under control while the war was ravaging major parts of East Pakistan, Morning News published a feature on the popularity of miniskirts",
            title: "",
            width: "35",
            render: () => (
              <img
                alt={
                  "In order to give a semblance of the situation under control while the war was ravaging major parts of East Pakistan, Morning News published a feature on the popularity of miniskirts"
                }
                className={""}
                src={bengalPaper3}
              ></img>
            ),
          },
          {
            source: "Ali Usman Qasmi's collection",
            description:
              "Headline of Morning News on December 11, 1971 when the war was at its peak on both fronts",
            title: "",
            width: "60",
            render: () => (
              <img
                alt={
                  "Headline of Morning News on December 11, 1971 when the war was at its peak on both fronts"
                }
                className={""}
                src={bengalPaper4}
              ></img>
            ),
          },
          {
            source: "Ali Usman Qasmi's collection",
            description:
              "Recruitment ads were still being printed as war had broken out on the Eastern Front with the overwhelming number of Bengalis opposed to the Pakistani military",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "Recruitment ads were still being printed as war had broken out on the Eastern Front with the overwhelming number of Bengalis opposed to the Pakistani military"
                }
                className={""}
                src={bengalPaper5}
              ></img>
            ),
          },
          {
            source: "Ali Usman Qasmi's collection",
            description:
              "Making people believe in the myth of Pakistani military's victory over India during the war of 1965 and expecting a repetition of the same in 1971",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "Making people believe in the myth of Pakistani military's victory over India during the war of 1965 and expecting a repetition of the same in 1971"
                }
                className={""}
                src={bengalPaper6}
              ></img>
            ),
          },
          {
            source: "Ali Usman Qasmi's collection",
            description:
              "Headline of Pakistan Observer just three days before surrender",
            title: "",
            width: "75",
            render: () => (
              <img
                alt={
                  "Headline of Pakistan Observer just three days before surrender"
                }
                className={""}
                src={bengalPaper7}
              ></img>
            ),
          },
          {
            source: "Ali Usman Qasmi's collection",
            description:
              "Pakistan Observer becomes Observer as East Pakistan becomes Bangladesh",
            title: "",
            width: "45",
            render: () => (
              <img
                alt={
                  "Pakistan Observer becomes Observer as East Pakistan becomes Bangladesh"
                }
                className={""}
                src={bengalPaper8}
              ></img>
            ),
          },
          {
            source: "Ali Usman Qasmi's collection",
            description:
              "An ad published in Morning News on December 27, 1971 in which the name Pakistan has been crossed out",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "An ad published in Morning News on December 27, 1971 in which the name Pakistan has been crossed out"
                }
                className={""}
                src={bengalPaper9}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="12"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "Wajahat Masood's personal collection",
            description:
              "General Niazi discusses military strategy with senior officers",
            title: "",
            width: "60",
            render: () => (
              <img
                alt={
                  "General Niazi discusses military strategy with senior officers"
                }
                className={""}
                src={war0}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description:
              "General Niazi and General Arora (along with troops) before the signing of the official surrender ",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "General Niazi and General Arora (along with troops) before the signing of the official surrender "
                }
                className={""}
                src={war1}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description:
              "General Niazi along with injured troops on a militart plane",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "General Niazi along with injured troops on a militart plane"
                }
                className={""}
                src={war2}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description:
              "Genaral Niazi along with senior military men from the indian army during the surrender ceremony",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={
                  "Genaral Niazi along with senior military men from the indian army during the surrender ceremony"
                }
                className={""}
                src={war3}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "General Niazi passes on instruction to a troop",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={"General Niazi passes on instruction to a troop"}
                className={""}
                src={war4}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "General Niazi addressing troops",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={"General Niazi addressing troops"}
                className={""}
                src={war5}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "",
            title: "",
            width: "75",
            render: () => <img alt={""} className={""} src={war6}></img>,
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "",
            title: "",
            width: "35",
            render: () => <img alt={""} className={""} src={war7}></img>,
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "",
            title: "",
            width: "60",
            render: () => <img alt={""} className={""} src={war8}></img>,
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "",
            title: "",
            width: "60",
            render: () => <img alt={""} className={""} src={war9}></img>,
          },
          {
            source: "Flickr",
            description:
              "Pakistan’s ambassador to Poland, Bashir ul Alam defects on December 22, 1971",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "Pakistan’s ambassador to Poland, Bashir ul Alam defects on December 22, 1971"
                }
                className={""}
                src={warsaw1}
              ></img>
            ),
          },
          {
            source: "Flickr",
            description:
              "News on the defection of a Pakistani diplomat in Poland as he declared his loyalty to Bangladesh",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "News on the defection of a Pakistani diplomat in Poland as he declared his loyalty to Bangladesh"
                }
                className={""}
                src={warsaw2}
              ></img>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Operation;
