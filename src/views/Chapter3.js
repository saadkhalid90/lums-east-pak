import { useEffect, useState } from "react";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import SectionHeading from "../components/SectionHeading.js";
import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import Footer from "../components/Footer.js";
import PhotoSwitch from "../components/photoSwitch.js";

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

import photoStory1 from "../resources/Chapter3/photoStory1/photoStory1.jpg";
import photoStory2 from "../resources/Chapter3/photoStory1/photoStory2.jpg";
import photoStory3 from "../resources/Chapter3/photoStory1/photoStory3.jpg";

import BhuttoQuote from "../resources/Chapter3/others/BhuttoQuote.jpg";

import blood from "../resources/Chapter3/blood telegram/blood.jpg";
import bloodTel from "../resources/Chapter3/blood telegram/blood telegram.jpg";
import bloodTelSupp from "../resources/Chapter3/blood telegram/blood_support.jpg";
import bloodTelBook from "../resources/Chapter3/blood telegram/blood telegram book.jpg";

import muktiPosters from "../resources/Chapter3/others/Mukti_Bahini_posters.jpg";
import muktiPractice from "../resources/Chapter3/others/Mukti_Practice.jpg";
import muktiMural from "../resources/Chapter3/others/MuktiMural.jpg";
import razakaarId from "../resources/Chapter3/others/RazakaarId.jpeg";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.view_container}>
      <Navbar type="chapter_title" />
      <ChapterTitle
        number="3"
        imgArr={imgArrCh3}
        title="Military Operation"
        subtitle="March 25, 1971 - Dec 16, 1971"
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
            <div class={styles.video_contain_center}>
              <div>
                <iframe
                  width="650"
                  height="365"
                  src="https://www.youtube.com/embed/TLyU7uffO6o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
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
              Hindu students at Dhaka University. A partial transcript of
              military units engaged in the operation at Dhaka University has
              also survived.
            </p>
            <p className={styles.view_para}>
              Once there was some semblance of ‘normalcy’, the military issued a
              warning to teachers for their alleged ‘anti-state’ activities. It
              also sent notices to Awami League’s member elects - most of whom
              had already crossed the border to enter India - for their alleged
              atrocities and acts of arson, looting and violence in East
              Pakistan.
            </p>
            <div class={styles.video_contain_center}>
              <div>
                <iframe
                  width="650"
                  height="365"
                  src="https://www.youtube.com/embed/J9NcosVnOMo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
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
              noScroll
              imgArr={[
                {
                  image: bloodTelBook,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
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
              International Relations at Princeton, authored <i>The Blood Telegram:
              Nixon, Kissinger, and a Forgotten Genocide</i>, analyzing the American
              position on the Bangladesh LIberation war of 1971. There are
              numerous declassified conversations between Nixon, Kissinger, and
              other stakeholders.
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
            <div class={styles.video_contain_center}>
              <div>
                <iframe
                  width="650"
                  height="365"
                  src="https://www.youtube.com/embed/Tby39qh9Lts"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
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
            <div class={styles.video_contain_center}>
              <div>
                <iframe
                  width="650"
                  height="365"
                  src="https://www.youtube.com/embed/AETYaUKT__0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
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
          <PhotoSwitch photoData={localNewsData} imgArr={localNewsArr} />
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

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Timeline of events during the war" />
            The material on the timeline of events during the war (December 03,
            1971 - December 16, 1971) has been taken from Bangladeshi
            journalist, Shamsuddoza Sajen’s compilation for the Daily{" "}
            <i>Star</i>
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
    </div>
  );
}

export default Operation;
