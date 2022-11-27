import { useState, useEffect } from "react";
import MediaQuery from "react-responsive";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import SectionHeading from "../components/SectionHeading.js";
import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import ElectMap from "../components/map/map.js";
import Footer from "../components/Footer.js";
import ResponsivePhotoSwitch from "../components/responsivePhotoSwitch.js";
import Overlay from "../components/Overlay";

import chapter2_1 from "../resources/Chapter2/Chapter2_1.jpg";
import chapter2_2 from "../resources/Chapter2/Chapter2_2.jpg";
import chapter2_3 from "../resources/Chapter2/Chapter2_3.jpg";

import mujib_1966 from "../resources/Chapter2/images/Mujibur_Rahman_1966.jpg";
import mujib_sixP from "../resources/Chapter2/images/shMujibSixP.jpg";

import bhola1 from "../resources/Chapter2/images/Bhola_Aerial.jpg";
import bhola2 from "../resources/Chapter2/images/Bhola_Yahya.jpg";
import bhola3 from "../resources/Chapter2/images/BholaArt.jpeg";
import bhola4 from "../resources/Chapter2/images/BholaArt2.jpeg";

import election1 from "../resources/Chapter2/images/elections/electionsStamp.jpg";
import election2 from "../resources/Chapter2/images/elections/electionCoverage.jpg";
import election3 from "../resources/Chapter2/images/elections/Mujib1970.jpg";
import election4 from "../resources/Chapter2/images/elections/Bhutto1970.jpg";

import transfer1 from "../resources/Chapter2/photoStory2/power_transfer1.jpg";
import transfer2 from "../resources/Chapter2/photoStory2/power_transfer2.jpg";
import transfer3 from "../resources/Chapter2/photoStory2/power_transfer3.jpg";

import photoStory1 from "../resources/Chapter2/photoStory1/photoStory1.jpg";
import photoStory2 from "../resources/Chapter2/photoStory1/photoStory2.jpg";
import photoStory3 from "../resources/Chapter2/photoStory1/photoStory3.jpg";
import photoStory4 from "../resources/Chapter2/photoStory1/photoStory4.jpg";

import photoStory1_ from "../resources/Chapter2/photoStory3/photoStory1.jpg";
import photoStory2_ from "../resources/Chapter2/photoStory3/photoStory2.jpg";
import photoStory3_ from "../resources/Chapter2/photoStory3/photoStory3.jpg";

import BhuttoQuote from "../resources/Chapter2/images/BhuttoQuote.jpg";

import mapData from "./election-scene-data/scene-data.js";

const imgArrCh2 = [
  {
    image: chapter2_1,
    style: {
      width: "25%",
    },
  },
  {
    image: chapter2_2,
    style: {
      width: "50%",
    },
  },
  {
    image: chapter2_3,
    style: {
      width: "25%",
    },
  },
];

const newsImgArr = [
  {
    img: photoStory1,
    width: 650,
    ar: 1.46,
  },
  {
    img: photoStory2,
    width: 620,
    ar: 1.5,
  },
  {
    img: photoStory3,
    width: 540,
    ar: 1.167,
  },
  {
    img: photoStory4,
    width: 320,
    ar: 0.53,
  },
];

const photoData = [
  {
    title: "Bhutto demands the transfer of power to two majority parties",
    description:
      "Speaking to supporters in Nishtar Park, Karachi on March 14, Bhutto demands that power must be transferred to majority parties in East and West Pakistan, reinforcing the People’s Party’s status as the leading political force in West Pakistan. This statement, however, is not received well by the Awami League leadership and is also criticized by other political parties in West Pakistan",
  },
  {
    title: "Talks to reach a political consensus",
    description:
      "Multiple Headlines from West Pakistan’s English Daily Dawn allude to President Yahya Khan’s attempts to hold talks between the political leadership of the People’s Party and Awami League. However, these attempts fail to bear fruit",
  },
  {
    title: "Mujib remains unwavering in his demands",
    description:
      "Amidst the political deadlock, Sheikh Mujib continues to reiterate the message from his iconic March 7 speech about the Bengalis’ struggle for emancipation and freedom. In this newspaper clipping, he is seen speaking to a procession on the occasion of ‘Resistance Day’",
  },
  {
    title: "Bhutto questions Mujib’s demands",
    description:
      "Meanwhile, Bhutto and the People’s party leadership continue to question the Awami League’s demands for autonomy to be ‘something bordering sovereignty’",
  },
];

const newsImgArr_ = [
  {
    img: photoStory1_,
    width: 560,
    ar: 1.17,
  },
  {
    img: photoStory2_,
    width: 420,
    ar: 0.716,
  },
  {
    img: photoStory3_,
    width: 320,
    ar: 0.634,
  },
];

const photoData_ = [
  {
    title: "Awami League is banned",
    description:
      "The president’s statement calls Mujib’s non-obedience movement an act of treason. Reports of political leaders praising the Army’s intervention are also seen. Bhutto’s famous statement ‘Pakistan is saved’ was recorded in a headline",
  },
  {
    title: "Army in control, Mujib house arrested",
    description: (
      <>
        Martial Law Administrator’s official statement published in <i>Dawn</i>,
        March 28, 1971. Bhutto criticized Mujib for planning to form an
        ‘independent fascist and racist regime in East Pakistan’.
      </>
    ),
  },
  {
    title: "Awami Leagues' funds frozen",
    description: (
      <p>
        A detailed martial law order banning all financial activity of the
        League is reported in <i>Dawn</i>, March 29, 1971
      </p>
    ),
  },
];

function Polls() {
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
        number="2"
        imgArr={imgArrCh2}
        title="National Elections"
        subtitle="1970"
        desc="Twenty-five years after its creation, Pakistanis went to the polls for the first time in December 1970 to cast ballots in a nationwide election. No one had expected the outcome of the elections and how it will alter the course of Pakistan’s history"
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="First general elections in Pakistan based on adult franchise" />
            <p className={styles.view_para}>
              The new military dictator, General Yahya Khan, promised to hold
              the first-ever general elections in Pakistan based on adult
              franchise. The announcement, and the issuance of the Legal
              Framework Order (LFO) to provide the basis for the upcoming
              elections and framing of the subsequent constitution, generated a
              flurry of political activity. As political parties galvanized to
              harness support, Mujib conducted his campaign on the famous six
              points as part of his party’s manifesto for the elections and the
              blueprint for the country’s future constitution.
            </p>
            <div className={styles.video_contain_center}>
              <div className={styles.video_contain}>
                <iframe
                  src="https://www.youtube.com/embed/YiUR5pdVQn0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.video_caption}>
                  Sheikh Mujib shares Awami League's Election Manifesto on Radio
                  Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={mujib_1966}
            photoClassName={"ch2Q_6points"}
            quoteTxt={
              <ol>
                <li>
                  A form of federal government, a parliamentary system directly
                  elected via one-person-one-vote
                </li>
                <li>
                  Two separate reserve banks and currencies for the two wings of
                  Pakistan
                </li>
                <li>
                  Other than defence and foreign policy all issues will be dealt
                  by the federal provinces
                </li>
                <li>A paramilitary force for East Pakistan</li>
                <li>
                  Both provinces would be in charge of their fiscal affairs, in
                  particular taxation and resource allocation
                </li>
                <li>
                  Monetary and trade policies, such as foreign reserve
                  maintenance and establishing trade links, will be handled
                  separately by the two wings
                </li>
              </ol>
            }
            quoteAlign="left"
            color="white"
            fontSize="small"
            rotation="rotate2"
            quoterText={"Sheikh Mujib's six points"}
            quotationMark={true}
          />
        </div>
      </section>

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Bhola cyclone ravages East Pakistan" />
            <p className={styles.view_para}>
              Meanwhile, East Pakistan continued to slide into chaos. The Bhola
              cyclone wreaked havoc in East Pakistan, killing thousands of
              people and displacing millions of others. The indifference of the
              Pakistani military elite towards the devastation of the Bengalis
              further alienated the people of East Pakistan.
            </p>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"1"}
              imgArr={[
                {
                  image: bhola1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: bhola2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: bhola3,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: bhola4,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
              ]}
            />
            <SectionHeading heading="Poll outcomes take the Military Junta by surprise" />
            <p className={styles.view_para}>
              In Yahya Khan’s calculus, the elections were going to give a split
              mandate. He aimed to contrive a coalition government where he
              would continue to wield power as the country’s president. The
              Military and its secret service allegedly funded religious and
              conservative parties to offset the rising crescendo of socialist
              rhetoric in Pakistani politics.
            </p>
            <p className={styles.view_para}>
              But Yahya and the military junta had miscalculated badly. The
              election results revealed a massive, almost unanimous, wave of
              support for Sheikh Mujib in East Pakistan. The Awami League
              grabbed 158 out of 160 seats. Zulfiqar Ali Bhutto’s Pakistan
              Peoples’ Party was a clear winner in West Pakistan, winning 82 out
              of 138 seats. None of the West Pakistan parties had been able to
              win a single seat in East Pakistan. In fact, the Awami League and
              PPP, the two winning parties, had not even fielded a candidate in
              West Pakistan and East Pakistan, respectively. The electoral split
              that had started with the provincial elections of 1954 reached
              political fruition in 1970.
            </p>
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={mujib_sixP}
            photoClassName={"ch2Q_6points"}
            quoteTxt="The election results gave a massive, almost unanimous, decision for Sheikh Mujib in East Pakistan. The Awami League grabbed 158 out of 160 seats. Zulfiqar Ali Bhutto’s Pakistan Peoples’ Party was a clear winner in West Pakistan, winning 82 out of 138 seats."
            quoteAlign="center"
            color="white"
            fontSize="big"
            rotation="rotate2"
            quotationMark={true}
          />
        </div>
      </section>

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <ElectMap mapData={mapData} />
        </div>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"3"}
              imgArr={[
                {
                  image: election2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: election3,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: election4,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirtyfive",
                },
                {
                  image: election1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
              ]}
            />
            <SectionHeading heading="The Military Junta delays transfer of power" />
            <p className={styles.view_para}>
              What followed was a frantic attempt on the part of the military
              junta to delay the convening of the National Assembly session.
              They started discussions with the Awami League to iron out
              differences over contentious aspects of the six points. Bhutto
              warned the Awami League against ignoring the PPP, which had
              emerged as a clear winner in West Pakistan, the bastion of power
              in Pakistan, as Bhutto put it. Hiding behind Bhutto’s theatrics,
              the military junta feigned helplessness. In the meanwhile, there
              was an increase in military buildup in East Pakistan. The Awami
              League responded by taking to the streets and attacking
              non-Bengali residents and their businesses.
            </p>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"2"}
              noScroll
              imgArr={[
                {
                  image: transfer1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "fortyfive",
                },
                {
                  image: transfer3,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: transfer2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "fortyfive",
                },
              ]}
            />
          </div>
        </div>

        <div className={styles.view_content_wrapper}>
          <ResponsivePhotoSwitch photoData={photoData} imgArr={newsImgArr} />
        </div>
      </section>

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <p className={styles.view_para}>
              The situation in East Pakistan was tense. There was heightened
              anxiety about the delaying tactics used by Yahya’s negotiating
              team, Bhutto’s intransigence, and the military buildup in and
              around Dhaka. Sensing this palpable tension as the convening of
              the national assembly was delayed once again, Mujibur Rahman
              decided to assert authority by addressing a public gathering. The
              Military was anxious that Rahman might go all the way and declare
              independence. He was told in no uncertain terms that this would be
              intolerable, and he was warned of dire consequences. In his
              address to a mammoth gathering at the Ramna Race Course in Dhaka,
              Mujib stopped short of declaring independence. He did, however,
              end his speech by asserting that the struggle this time was for
              freedom.
            </p>
          </div>
          <div className={styles.video_contain_center}>
            <div className={styles.video_contain}>
              <iframe
                src="https://www.youtube.com/embed/5-5Xe21kjC4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className={styles.video_caption}>
                Sheikh Mujib’s iconic speech at Ramna Racecourse, Dhaka on March
                7, 1971
              </p>
            </div>
          </div>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Parliament’s Session" />
            <p className={styles.view_para}>
              Despite Sheikh Mujib’s insistence, Yahya kept on delaying the
              convening of the inaugural session of the newly elected National
              Assembly. Eventually, on <b>1 March</b>, the Martial Law regime
              announced the postponement of the inaugural session that was set
              to take place on <b>3 March</b>. Yahya did not bother to issue the
              statement himself or give a new date for convening the session.
              This led to massive unrest in East Pakistan. The Awami League
              workers committed violence and vandalism against the West
              Pakistani and Bihari civilians, resulting in numerous deaths.
              There was a complete breakdown of government authority in the
              province. Even shopkeepers refused to provide ration supplies to
              military cantonments, and petty government officials followed
              Sheikh Mujib’s orders in carrying out their duties. This
              three-week period of violence and lawlessness provided the
              Pakistani military with the rationale to launch a massive
              operation to save the civilian population and establish its writ.
            </p>
          </div>
          <div className={styles.view_content_container}>
            <SectionHeading heading="As the negotiations to transfer power fall apart, Awami League is outlawed" />
            <p className={styles.view_para}>
              By the third week of March, the negotiations were deadlocked but
              they had not broken down. There was a back-and-forth between the
              negotiating teams led by Awami League’s lawyers and economists,
              and constitutional experts appointed by the military junta. But as
              Yahya Khan left Dhaka on the night of 24 March, everyone knew that
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
          <ResponsivePhotoSwitch photoData={photoData_} imgArr={newsImgArr_} />
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
            bg="purple"
          />
        </div>
      </section>

      <Footer
        projectName="Bangladesh's Liberation War"
        projectSubTitle="A visual history"
        projectDescription="We gratefully acknowledge the contributions of Nida Hasan, Bakht Noor, Kumail Haider Jafri, Usama Liaqat, Mohid Ahsan,  Abdullah Niazi, and Noor Fatima Bokhari, who helped generate data for this project. We also thank Hafsa Omar Khawaja and Sajjadur Rahman for their input and valuable suggestions."
        prevLink="/ch1"
        nextLink="/ch3"
        chapterID={2}
      />
      <Overlay
        oId="1"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "weather.com",
            description:
              "Aerial view of the destruction caused by the Bhola cyclone",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={
                  "Aerial view of the destruction caused by the Bhola cyclone"
                }
                className={""}
                src={bhola1}
              ></img>
            ),
          },
          {
            source: "Wikimedia Commons",
            description:
              "President General Yahya Khan surveys the cyclone-affected areas with close aides",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={
                  "President General Yahya Khan surveys the cyclone-affected areas with close aides"
                }
                className={""}
                src={bhola2}
              ></img>
            ),
          },
          {
            source: "DAWN",
            description:
              "A painter depicts the plight of flood-affected people",
            title: "",
            width: "45",
            render: () => (
              <img
                alt={"A painter depicts the plight of flood-affected people"}
                className={""}
                src={bhola3}
              ></img>
            ),
          },
          {
            source: "DAWN",
            description:
              "A painter depicts the plight of the flood-affected people",
            title: "",
            width: "45",
            render: () => (
              <img
                alt={
                  "A painter depicts the plight of the flood-affected people"
                }
                className={""}
                src={bhola4}
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
            source: "DAWN",
            description:
              "Newspaper headlines announcing Martial Law regime’s decision to delay the transfer of power",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={
                  "Newspaper headlines announcing Martial Law regime’s decision to delay the transfer of power"
                }
                className={""}
                src={transfer1}
              ></img>
            ),
          },
          {
            source: "DAWN",
            description:
              "Newspaper headlines announcing Martial Law regime’s decision to delay the transfer of power",
            title: "",
            width: "22",
            render: () => (
              <img
                alt={
                  "Newspaper headlines announcing Martial Law regime’s decision to delay the transfer of power"
                }
                className={""}
                src={transfer3}
              ></img>
            ),
          },
          {
            source: "DAWN",
            description:
              "Newspaper headlines announcing Martial Law regime’s decision to delay the transfer of power",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "Newspaper headlines announcing Martial Law regime’s decision to delay the transfer of power"
                }
                className={""}
                src={transfer2}
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
            description:
              "Television coverage of the 1970 elections in East Pakistan",
            title: "def",
            width: "70",
            render: () => (
              <img
                alt={
                  "Television coverage of the 1970 elections in East Pakistan"
                }
                className={""}
                src={election2}
              ></img>
            ),
          },
          {
            source: "DAWN",
            description:
              "Sheikh Mujib on the campaign trail. Mujib’s Awami League bagged 160 out of 162 seats in East Pakistan",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={
                  "Sheikh Mujib on the campaign trail. Mujib’s Awami League bagged 160 out of 162 seats in East Pakistan"
                }
                className={""}
                src={election3}
              ></img>
            ),
          },
          {
            source: "The Friday Times",
            description:
              "Zulfiqar Ali Bhutto ran a successful electoral socialist campaign in West Pakistan on the slogan of ‘Islamic Socialism’",
            title: "",
            width: "75",
            render: () => (
              <img
                alt={
                  "Zulfiqar Ali Bhutto ran a successful electoral socialist campaign in West Pakistan on the slogan of ‘Islamic Socialism’"
                }
                className={""}
                src={election4}
              ></img>
            ),
          },
          {
            source: "istampgallery.com",
            description:
              "Pakistani postage stamp commemorating the 1970 election",
            title: "def",
            width: "30",
            render: () => (
              <img
                alt={"Pakistani postage stamp commemorating the 1970 election"}
                className={""}
                src={election1}
              ></img>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Polls;
