import { useState, useEffect } from "react";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import SectionHeading from "../components/SectionHeading.js";
import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import Footer from "../components/Footer.js";
import Overlay from "../components/Overlay";

import chapter4_1 from "../resources/Chapter4/Chapter4_1.jpg";
import chapter4_2 from "../resources/Chapter4/Chapter4_2.jpg";
import chapter4_3 from "../resources/Chapter4/Chapter4_3.jpg";

import blood from "../resources/Chapter4/blood telegram/blood.jpg";
import bloodTel from "../resources/Chapter4/blood telegram/blood telegram.jpg";
import bloodTelSupp from "../resources/Chapter4/blood telegram/blood_support.jpg";
import bloodTelBook from "../resources/Chapter4/blood telegram/blood telegram book.jpg";

import solid1 from "../resources/Chapter4/solid/solid1.jpg";
import solid2 from "../resources/Chapter4/solid/solid2.jpg";
import solid3 from "../resources/Chapter4/solid/solid3.jpg";

import joanDylan from "../resources/Chapter4/solid/JoanDylan.jpg";

import timePeking from "../resources/Chapter4/US/pekingforpeace.jpg";
import yahKiss from "../resources/Chapter4/US/yahyaKissinger.jpg";
import nixon1 from "../resources/Chapter4/US/Nixon1.jpg";
import nixon2 from "../resources/Chapter4/US/Nixon2.jpg";

import timeRefugees from "../resources/Chapter4/int_press/time_refugees.jpg";
import NYT from "../resources/Chapter4/int_press/NYT.jpg";
import WSJ from "../resources/Chapter4/int_press/WSJ.jpg";

const imgArrCh4 = [
  {
    image: chapter4_1,
    style: {
      width: "25%",
    },
  },
  {
    image: chapter4_2,
    style: {
      width: "50%",
    },
  },
  {
    image: chapter4_3,
    style: {
      width: "25%",
    },
  },
];

function AfterTheWar() {
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
        number="4"
        imgArr={imgArrCh4}
        title="International Dimension"
        subtitle="1971"
        desc="The military operation is condemned by international media, human rights activists, and prominent global leaders"
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <p className={styles.view_para}>
              Despite Pakistan’s claims that the insurgency in East Bengal was
              an internal matter, there was a massive outcry in the
              international media as reports about the military operation
              emerged. It created a major ‘PR crisis’ for Pakistan as various
              human rights activists, prominent global leaders, and even pop
              stars supported the Bengali people and condemned the excesses of
              Pakistan’s military operation. This international pressure,
              combined with the influence and intervention of other powers,
              including the United States, Soviet Union, and most prominently,
              India, made the 1971 War an international war.
            </p>
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
            <p className={styles.view_para}>
              In 2013, Gary J. Bass, Assistant Professor of Politics and
              International Relations at Princeton, authored{" "}
              <i>
                The Blood Telegram: Nixon, Kissinger, and a Forgotten Genocide
              </i>
              , analyzing the American position on the Bangladesh Liberation war
              of 1971. There are numerous declassified conversations between
              Nixon, Kissinger, and other stakeholders.
            </p>
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
          </div>
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="International Solidarity for the Bangladeshi Struggle and Counter Propaganda" />
            <p className={styles.view_para}>
              One such aspect of international solidarity for the Bangladeshi
              cause was the Concert for Bangladesh in August 1971, where iconic
              artists like Ravi Shankar and George Harrison performed.
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
              The Pakistani state had to counter the propaganda at two levels.
              For the international audience, the Martial Law regime issued a
              ‘White Paper’ to give an account of the situation that, in their
              view, necessitated the launch of a military operation. A
              significant reason was the violence against West Pakistanis in
              East Bengal that the Awami League workers had inflicted from 1
              March onwards. The state-owned Pakistan Television also produced a
              documentary in English to show footage of violence against West
              Pakistani civilians and the damage to their properties by the
              Awami League workers and Mukti Bahinis.
            </p>
            <p className={styles.view_para}>
              For the domestic audiences, the Martial Law regime controlled the
              local press to make sure that it only reported stories about the
              defeat, capture, and killing of Mukti Bahinis and their Indian
              handlers. When the war started in December, leading English and
              Urdu majors reported stories about the advances of Pakistani
              troops in West and East Pakistan and the damage that they were
              inflicting on Indian troops.
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
              his national security advisor, Henry Kissinger, were miffed at
              these developments. They viewed Pakistan as a significant ally
              that had helped establish a diplomatic thaw between China and the
              US. The Pakistani Military facilitated this exchange at the
              expense of considerable cost, i.e., open Soviet hostility. The
              Soviets responded by signing a friendship treaty with India,
              supplying them with a large cache of arms and ammunition, which
              was eventually used in the decisive battle against Pakistan in
              November-December 1971.
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
          </div>
        </div>
      </section>
      <Footer
        projectName="Bangladesh's Liberation War"
        projectSubTitle="A visual history"
        projectDescription="We gratefully acknowledge the contributions of Nida Hasan, Bakht Noor, Kumail Haider Jafri, Usama Liaqat, Mohid Ahsan,  Abdullah Niazi, and Noor Fatima Bokhari, who helped generate data for this project. We also thank Hafsa Omar Khawaja and Sajjadur Rahman for their input and valuable suggestions."
        prevLink="/ch3"
        nextLink="/ch5"
        chapterID={4}
      />
      <Overlay
        oId="2"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "Amazon",
            description: (
              <span>
                American journalist and academic Gary J. Bass’s book,{" "}
                <i>The Blood Telegram</i>
              </span>
            ),
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "American journalist and academic Gary J. Bass’s book, The Blood Telegram"
                }
                className={""}
                src={bloodTelBook}
              ></img>
            ),
          },
          {
            source: "Wikimedia Commons",
            description:
              "Archived copy of the telegram by Archer Blood, US Diplomat in Dhaka, notifying the US State department of the excesses committed by Pakistan army",
            title: "",
            width: "45",
            render: () => (
              <img
                alt={
                  "Archived copy of the telegram by Archer Blood, US Diplomat in Dhaka, notifying the US State department of the excesses committed by Pakistan army"
                }
                className={""}
                src={bloodTel}
              ></img>
            ),
          },
          {
            source: "Flickr",
            description:
              "Telegram sent by US foreign officers (South Asia region) supporting the views expressed in the Blood Telegram",
            title: "",
            width: "45",
            render: () => (
              <img
                alt={
                  "Telegram sent by US foreign officers (South Asia region) supporting the views expressed in the Blood Telegram"
                }
                className={""}
                src={bloodTelSupp}
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
            description: `Famous American singer ‘Joan Baez’  wrote "The Song of Bangladesh" to depict army’s crackdown on unarmed Bengali students`,
            title: "",
            width: "40",
            render: () => (
              <img
                alt={`Famous American singer ‘Joan Baez’  wrote "The Song of Bangladesh" to depict army’s crackdown on unarmed Bengali students`}
                className={""}
                src={solid1}
              ></img>
            ),
          },
          {
            source: "Pinterest",
            description:
              "George Harrison along with many other eminent musicians played a series of concerts at the Madison Square Garden (New York) in solidarity with the Bangladeshi cause",
            title: "",
            width: "35",
            render: () => (
              <img
                alt={
                  "George Harrison along with many other eminent musicians played a series of concerts at the Madison Square Garden (New York) in solidarity with the Bangladeshi cause"
                }
                className={""}
                src={solid2}
              ></img>
            ),
          },
          {
            source: "Wikimedia Commons",
            description:
              "A publicity poster of ‘The Concert for Bangladesh’ organized by George Harrison",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "A publicity poster of ‘The Concert for Bangladesh’ organized by George Harrison"
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
            description: (
              <span>
                Peking for Peace: a caricature on the cover of <i>Time</i>{" "}
                magazine about President Nixon and Henry Kissinger’s keenness to
                establish diplomatic ties with China
              </span>
            ),
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "Peking for Peace: a caricature on the cover of Time magazine about President Nixon and Henry Kissinger’s keenness to establish diplomatic ties with China"
                }
                className={""}
                src={timePeking}
              ></img>
            ),
          },
          {
            source: "The Atlantic",
            description:
              "US Secretary of State Henry Kissinger talks with President Yahya Khan",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "US Secretary of State Henry Kissinger talks with President Yahya Khan"
                }
                className={""}
                src={yahKiss}
              ></img>
            ),
          },
          {
            source: "George Washington University Archives",
            description:
              "A handwritten letter by President Nixon thanking President Yahya for his support in improving ties between the US and China (1)",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "A handwritten letter by President Nixon thanking President Yahya for his support in improving ties between the US and China (1)"
                }
                className={""}
                src={nixon1}
              ></img>
            ),
          },
          {
            source: "George Washington University Archives",
            description:
              "A handwritten letter by President Nixon thanking President Yahya for his support in improving ties between the US and China (2)",
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "A handwritten letter by President Nixon thanking President Yahya for his support in improving ties between the US and China (2)"
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
            description: (
              <span>
                Cover of the <i>Time</i> Magazine (August 2, 1971)
              </span>
            ),
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
                by Sydney H. Schanberg published in the <i>New York Times</i>
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
                by Peter R. Kan published in the <i>Wall Street Journal</i>
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
    </div>
  );
}

export default AfterTheWar;
