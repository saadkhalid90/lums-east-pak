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

import Martyrs from "../resources/Chapter3/others/Martyrs.jpg";

import transcript from "../resources/Chapter3/documents/Transcript.pdf";
import razPayDoc from "../resources/Chapter3/documents/Razakar Documents.pdf";
import razOrdDoc from "../resources/Chapter3/documents/Razakar Ordinance.pdf";

import lootedChests from "../resources/Chapter3/others/looted_chests.jpg";
import muktiRailway from "../resources/Chapter3/others/Mukti_ damage_railways.jpg";
import noticeMNA from "../resources/Chapter3/others/notices_Awami League_MNAs.jpg";

import mujibnagar1 from "../resources/Chapter3/others/mujibnagar1.jpg";
import mujibnagar2 from "../resources/Chapter3/others/mujibnagar2.jpg";

import birangona1 from "../resources/Chapter3/birangona/birangona.jpg";
import birangona2 from "../resources/Chapter3/birangona/birangona_sculpture.jpg";

import muktiPosters from "../resources/Chapter3/others/Mukti_Bahini_posters.jpg";
import muktiPractice from "../resources/Chapter3/others/Mukti_Practice.jpg";
import muktiMural from "../resources/Chapter3/others/MuktiMural.jpg";
import razakaarId from "../resources/Chapter3/others/RazakaarId.jpeg";
import razakaarOrd from "../resources/Chapter3/others/RazOrd.png";
import razakaarPay from "../resources/Chapter3/others/razakarPay.jpg";
import intellectuals from "../resources/Chapter3/others/intellectuals_bodies.jpg";

import localnews1 from "../resources/Chapter3/photoStory1/localnews_1.jpg";
import localnews2 from "../resources/Chapter3/photoStory1/localnews_2.png";
import localnews3 from "../resources/Chapter3/photoStory1/localnews_3.png";
import localnews4 from "../resources/Chapter3/photoStory1/localnews_4.jpg";
import localnews5 from "../resources/Chapter3/photoStory1/localnews_5.jpg";
import localnews6 from "../resources/Chapter3/photoStory1/localnews_6.jpg";
import AntArt from "../resources/Chapter3/others/AnthonyArticle.jpg";

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

import bengalPaper1 from "../resources/Chapter3/photoStory2/bengalPaper1.jpg";
import bengalPaper2 from "../resources/Chapter3/photoStory2/bengalPaper2.jpg";
import bengalPaper3 from "../resources/Chapter3/photoStory2/bengalPaper3.jpg";
import bengalPaper4 from "../resources/Chapter3/photoStory2/bengalPaper4.jpg";
import bengalPaper5 from "../resources/Chapter3/photoStory2/bengalPaper5.jpg";
import bengalPaper6 from "../resources/Chapter3/photoStory2/bengalPaper6.jpg";
import bengalPaper7 from "../resources/Chapter3/photoStory2/bengalPaper7.jpg";
import bengalPaper8 from "../resources/Chapter3/photoStory2/bengalPaper8.jpg";
import bengalPaper9 from "../resources/Chapter3/photoStory2/bengalPaper9.jpg";

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
    title: "News about ‘normalcy’ after the operation",
    description: (
      <>
        This issue of <i>Dawn</i> publishes a photo of Indian supporters of
        Sheikh Mujibur Rahman demonstrating in front of the Pakistani Embassy in
        New Delhi. A headline also criticizes the false reports published in the
        ‘Anglo-American’ press about the political crisis
      </>
    ),
  },
  {
    title: "Garnering support for Pakistan’s official narrative",
    description:
      "International press coverage and statements of global leaders supporting Pakistan’s official narrative are highlighted in newspapers",
  },
  {
    title: "Photos showing Martial Law Administration in control",
    description:
      "President in a meeting with his team of Martial Law administrators in President House, Rawalpindi (Top). Martial Law Administrator (East Wing), Lt. Gen Tikka Khan speaking with non-Awami league political leaders from West Pakistan (Bottom). A headline celebrates the success of the military operation with support of the Air Force",
  },
  {
    title: "Indian conspiracy",
    description:
      "English dailies in West Pakistan routinely highlight India’s role in the East Pakistan crisis",
  },
  {
    title: "Headlines on the improved situation in the East Wing",
    description: (
      <>
        This clipping from <i>Dawn</i> shows the bustling activity of shoppers
        in a Dacca market to indicate the return to normalcy
      </>
    ),
  },
  {
    title: "Bhutto becomes a spokesperson for the Martial Law Administration",
    description:
      "Here a news report publishes Bhutto’s statement saying that he demanded to share power at the center with Awami League as he did ‘not trust Mujibur Rahman's aims and intentions’",
  },
  {
    title:
      "A Pakistan Journalist flees to publish an article titled “Genocide” in the Sunday Times",
    description: (
      <>
        Given the press censorship in West Pakistan, Karachi-based journalist
        Anthony Mascarenhas goes into self-imposed exile to get his article
        “Genocide”, published in the <i>Sunday Times</i>, UK. This was the first
        report that exposed the excesses of the Pakistan army to the world
      </>
    ),
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
            <SectionHeading heading="Operation Searchlight begins" />
            <p className={styles.view_para}>
              What followed after 25 March 1971 was a bloodbath. The military
              moved quickly to regain control in major cities and ports by
              taking over key installations like the Radio and TV stations, and
              government offices. The human toll of ‘establishing the writ’ was
              innumerable as confirmed by survivors and the autobiographical
              accounts penned by various military officers taking part in the
              operation. The weekly situation reports published in the
              Military’s mouthpiece – <i>Hilal</i> – along with major Urdu
              dailies in West Pakistan, and even English dailies in Dhaka –
              described the success of the operation in terms of ‘neutralizing,’
              ‘taking control,’ ‘eliminating’ or ‘clearing’ the areas. These
              euphemisms helped mask the brutality of the operation that
              targeted civilians along with the paramilitary force of Bengali
              separatists – the Mukti Bahini.
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
              verdict in favour of Sheikh Mujib’s demands for maximum political
              autonomy. From 25 March onwards, most Bengalis viewed the military
              as an occupying force. A formal declaration of independence was
              issued; thus began what the Bengalis considered a war of
              liberation.
            </p>
            <SectionHeading heading="Dhaka University Operation" />
            <p className={styles.view_para}>
              One of the most controversial and bloody aspects of Operation
              Searchlight was the Pakistani military’s action at Dhaka
              University. The popular narrative is that the military opened fire
              on unarmed students and specifically targeted the Jaganath Hall
              because it housed Hindu students. The Pakistani military has
              insisted that there were no classes in the university due to the
              city’s prevailing law and order situation, and most students had
              already left the campus weeks ago. The military claims to have
              taken action against hardened militants. A graphic description of
              the events that unfolded that night, especially at the Dhaka
              University, has been captured in{" "}
              <a
                className={styles.clickLink}
                href="https://www.youtube.com/watch?app=desktop&v=IQhi646vbpk&feature=youtu.be&fbclid=IwAR3swlKy7pwTnWXmE_xBT81cOT6DdOjTqdHrCCBD5n3Xt0ayaKgZHIrkfR8&ab_channel=Canvas-%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A6%AD%E0%A6%BE%E0%A6%B8"
                target="_blank"
                rel="noopener noreferrer"
              >
                wireless communication
              </a>{" "}
              between the troops commanding the operation and the station HQ.
            </p>
            <p className={styles.view_para}>
              A Bengali professor who had recently returned from the US with a
              video camera recorded the shooting of unarmed students lined up on
              the ground and shot at point-blank range.
            </p>
            <p className={styles.view_para}>
              The Pakistani military entered the residential quarters of
              university professors and singled out ‘suspicious’ faculty members
              – especially Hindus – and killed them. Through its proxy –
              Al-Badar and Al-Shams – the military repeated this planned
              campaign against intellectuals towards the end of the conflict on
              the midnight of 15-16 December. It was an act of revenge to bleed
              the newly established country to death by depriving it of its
              finest minds.
            </p>
            <p className={styles.view_para}>
              A partial{" "}
              <a
                className={styles.clickLink}
                href={transcript}
                target="_blank"
                rel="noopener noreferrer"
              >
                transcript
              </a>{" "}
              of the operation at Dhaka University has also available. M B
              Naqvi, a Pakistani journalist, shares his account of what he
              witnessed at the Jaganath Hall - the main residential building for
              Hindu students at Dhaka University.
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
            <SectionHeading heading="Emergence of Paramilitary forces - Mukti Bahini, Al-Badr and Al-Shams" />
            <p className={styles.view_para}>
              The widespread massacre and the fact that the Military had
              resorted to violence instead of handing over power to Sheikh Mujib
              proved to be the proverbial last nail in the coffin. Except for
              the Biharis living in East Pakistan and a handful of Bengali
              Islamists, no significant section of the Bengali community
              supported the idea of a united Pakistan anymore. This sentiment
              was so widespread that a substantial chunk of the Bengali
              military, mainly units in the East Pakistan Rifles, defected to
              join the freedom fighters. The entire diplomatic staff of the
              Pakistani consulate in Calcutta defected to join the government in
              exile. Meanwhile, Mujib was in a jail in Punjab, where he was
              being tried for treason. His associates had managed to escape when
              the operation started and crossed the border into India to
              establish the government in exile. Some of the leading figures
              ended up in London and other major capitals of the world to
              mobilize support for the cause of the Bangladeshi liberation
              movement.
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
                  image: razakaarPay,
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
          </div>
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <p className={styles.view_para}>
              To garner local support against the overwhelming popularity of
              Mukti Bahini, the Pakistani Military raised a volunteer corps of
              Al-Badar and Al-Shams. Mainly comprising of young Bengalis
              belonging to the Jamat-i-Islami, these volunteers served as a
              vital source in providing logistic support to the military in
              identifying critical targets for its operations.
            </p>
            <p className={styles.view_para}>
              The volunteer corps of Al-Badr and Al-Shams were complicit in the
              war crimes committed during the military operation. These included
              widespread massacres of civilians, mass rapes, and forcible
              displacement. Towards the end of the war, as defeat seemed
              imminent, the Pakistani military and their collaborators killed
              hundreds of Bengali intellectuals, journalists, and lawyers, with
              the intention to bleed the country to devastation.
            </p>
            <SectionHeading heading="Declaration of Independence" />
            <p className={styles.view_para}>
              Following Major Zia Rahman’s declaration of independence, Bengalis
              in exile set up a provisional government and issued a formal
              declaration of independence on 10 April 1971 from Mujibnagar. In
              exile, the interim government operated from Indian territory and
              continued to give directives to Bengali fighters in the field. It
              also held discussions about the future constitutional structure of
              a new republic.
            </p>
            <PhotoContainer
              noScroll
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"15"}
              imgArr={[
                {
                  image: mujibnagar2,
                  caption:
                    "Sculptures commemorating Mujibnagar day (17 April, 1971)",
                  widthID: "forty",
                },
                {
                  image: mujibnagar1,
                  caption:
                    "Mujibnagar, 17 April, 1971: C-in-C Col. Osmany, Acting President Syed Nazrul Islam, and Prime Minister Tajuddin Ahmed at the swearing in ceremony of the first Bangladesh government",
                  widthID: "forty",
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
            <SectionHeading heading="General Niazi" />
            <p className={styles.view_para}>
              General A. A. K. Niazi (d. 2004) led the Pakistani troops in the
              counter-insurgency operations against the Mukti Bahini and the war
              against the Indian military in December 1971. Popularly known as
              ‘Tiger Niazi’ in military circles for his outstanding performance
              on the Burma front during the Second World War, General Niazi
              boosted the confidence of the Pakistani military in dealing with
              the Bengali insurgency. During the nine-month-long conflict, Niazi
              visited different parts of the country to bolster the morale of
              his troops. He appreciated the role of Razakars in assisting the
              military to conduct operations against Mukti Bahinis.
            </p>
            <p className={styles.view_para}>
              Niazi confidently refuted media reports about the successes of
              Mukti Bahini operations and the casualties that the Pakistani
              military was suffering. Even at the height of the conflict in the
              early weeks of December 1971, Niazi spoke with commanding
              authority about the impending success of his troops and rubbished
              the reports of compromise or surrender.
            </p>
            <PhotoContainer
              noScroll
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"13"}
              imgArr={[
                {
                  image: war0,
                  caption:
                    "General Niazi and General Arora (along with troops) before the signing of the official surrender",
                  widthID: "forty",
                },
                {
                  image: war1,
                  caption:
                    "General Niazi discusses military strategy with senior officers",
                  widthID: "forty",
                },
              ]}
            />
            <p className={styles.view_para}>
              Heavily outnumbered by the Indian military and their virtual
              control over the airspace, Niazi and his troops were encircled
              from all sides in Dhaka and had little option but to negotiate the
              terms of surrender with the Indian military leadership. Niazi
              insisted on a ‘ceasefire’ as a more amicable term. Eventually, he
              had to sign an instrument of surrender in a massive public
              gathering in Dhaka’s Ramna Racecourse on 16 December 1971. He
              handed over his pistol to the Indian commanding officer, Lt.
              General Jagjit Singh Aurora, as a symbolic gesture. Though it is
              widely believed that 90,000 Pakistani troops surrendered to the
              Indian military, the official Pakistani version is close to
              40,000. They claim that the rest of the people were support staff,
              West Pakistani civilian officers, and their families.
            </p>
            <div className={styles.video_contain_center}>
              <div className={styles.video_contain}>
                <iframe
                  src="https://www.youtube.com/embed/WN9aRP-TW0E"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.video_caption}>
                  Surrender ceremony of Pakistani officers
                </p>
              </div>
            </div>
            <div className={styles.video_contain_center}>
              <div className={styles.video_contain}>
                <iframe
                  src="https://www.youtube.com/embed/sOnQ2gDG1gM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.video_caption}>
                  At the peak of the war, General Niazi rubbished the rumors
                  about surrender. He called the BBC ‘Brahman Broadcast’ and
                  vowed to continue fighting till death.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Coverage by West Pakistani Press" />
            <p className={styles.view_para}>
              Throughout the military operation, people in West Pakistan were
              largely oblivious to the excesses committed in the name of
              national security. The political parties – especially Bhutto’s PPP
              – were scared to voice opposition. Bhutto also served as the
              military junta’s spokesperson before the international community.
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
            <SectionHeading heading="Refugee Crisis" />
            <p className={styles.view_para}>
              One of the most devastating and undeniable impacts of the military
              operation in East Bengal was the displacement of millions of
              Bengalis from their homes. Scared of reprisal attacks, close to 10
              million Bengalis – of whom a disproportionately large number were
              Hindu – ran for their lives and sought refuge in the neighboring
              cities of India. Several Bengali intellectuals, doctors, and newly
              elected members of parliament also migrated to India to take
              shelter.
            </p>
            <p className={styles.view_para}>
              The massive influx of refugees gave the Indian Prime Minister,
              Indira Gandhi, an excuse to highlight it as an international
              humanitarian crisis and intervene militarily in East Bengal.
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
            <SectionHeading heading="Sexual Violence" />
            <p className={styles.view_para}>
              Alongside widespread massacres and mass dislocations, the War
              became synonymous with sexual violence. Rape, as a number of
              academics have shown, was employed by all parties in the conflict,
              including and especially, the Pakistani military and its
              paramilitary units, as a weapon of war. Bangladesh, along with
              other organizations, estimates the number of women raped by the
              Pakistani military and paramilitary collaborators to be in the
              hundreds of thousands. Survivors also bore witness to rape camps
              where they were incarcerated and systematically raped by Pakistani
              soldiers. In the aftermath of the War, Mujibur Rahman awarded rape
              survivors with the honorific title of ‘Birangona’ (war heroines).
              Even so, rape survivors continued to face stigma, shaming, and
              disavowal from their families. This included the shaming and
              abandonment of an estimated tens of thousands of ‘war-babies’ –
              children born of rape survivors.
            </p>
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"14"}
              noScroll
              imgArr={[
                {
                  image: birangona1,
                  caption:
                    "Mujibur rahman awarded rape survivors with the honorific title of ‘Birangona’",
                  widthID: "thirty",
                },
                {
                  image: birangona2,
                  caption:
                    "A sculpture at Mujibnagar, Dhaka paying homage to 'Birangona'",
                  widthID: "fifty",
                },
              ]}
            />
            <SectionHeading heading="War propaganda in West Pakistan" />
            <p className={styles.view_para}>
              The Pakistani military and its media wing mounted a
              counter-propaganda offensive through its official magazine,{" "}
              <i>hilal</i>, and by regulating several Urdu newspapers. To cater
              to an international audience, the military arm-twisted several
              English newspapers – especially those based in Dhaka – to
              highlight the ‘atrocities’ of Bengali fighters and expose Indian
              conspiracies against the Pakistani state.
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
              During the war, English newspapers flashed headlines about the
              heroic achievements of the Pakistani military on the battlefield
              and published ads invoking Jihad against Indian belligerence.
              Nevertheless, as the war drew close to a conclusion, Dhaka-based
              English newspapers joined others in celebrating the liberation of
              Bangladesh. Hence, <i>Pakistan Observer</i> became{" "}
              <i>Bangladesh Observer</i>.
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
            <SectionHeading heading="Archived Photos of the War" />
            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"12"}
              imgArr={[
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
            <SectionHeading heading="Timeline of events during the war" />
            <p className={styles.view_para}>
              The material on the timeline of events during the war (December
              03, 1971 - December 16, 1971) has been taken from Bangladeshi
              journalist, Shamsuddoza Sajen’s compilation for the Daily{" "}
              <i>Star</i>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}></div>
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
                  textDecoration: month === monthName ? "underline" : "none",
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
        projectName="Bangladesh's Liberation War"
        projectSubTitle="A visual history"
        projectDescription="We gratefully acknowledge the contributions of Nida Hasan, Bakht Noor, Kumail Haider Jafri, Usama Liaqat, Mohid Ahsan,  Abdullah Niazi, and Noor Fatima Bokhari, who helped generate data for this project. We also thank Hafsa Omar Khawaja and Sajjadur Rahman for their input and valuable suggestions."
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
                Government documents enumerating looted items by the Mukti
                Bahini
              </span>
            ),
            title: "",
            width: "55",
            render: () => (
              <img
                alt={
                  "Government documents enumerating looted items by the Mukti Bahini"
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
                Government documents report damage caused by the Mukti Bahini to
                railway lines in East Bengal
              </span>
            ),
            title: "",
            width: "40",
            render: () => (
              <img
                alt={
                  "Government documents report damage caused by the Mukti Bahini to railway lines in East Bengal"
                }
                className={""}
                src={muktiRailway}
              ></img>
            ),
          },
          {
            source: "Bangladesh Documents",
            description:
              "Martial Law government’s notice to Awami league parliamentarians",
            title: "",
            width: "45",
            render: () => (
              <img
                alt={
                  "Martial Law government’s notice to Awami league parliamentarians"
                }
                className={""}
                src={noticeMNA}
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
            description: <span>Mukti Bahini Poster</span>,
            title: "",
            width: "40",
            render: () => (
              <img
                alt={"Mukti Bahini Poster"}
                className={""}
                src={muktiPosters}
              ></img>
            ),
          },
          {
            source: "Flickr",
            description: <span>Mukti Bahini fighters undergoing training</span>,
            title: "",
            width: "70",
            render: () => (
              <img
                alt={"Mukti Bahini fighters undergoing training"}
                className={""}
                src={muktiPractice}
              ></img>
            ),
          },
          {
            source: "Bangladesh Tribune",
            description:
              "ID cards of a Razakar (member of the Pakistani government’s paramilitary force)",
            title: "",
            width: "55",
            render: () => (
              <img
                alt={
                  "ID cards of a Razakar (member of the Pakistani government’s paramilitary force)"
                }
                className={""}
                src={razakaarId}
              ></img>
            ),
          },
          {
            source: "docstrangelove",
            description: (
              <span>
                Headline about the East Pakistan Razakar Ordinance promulgated
                by Tikka Khan.{" "}
                <a
                  className={styles.clickLinkInv}
                  href={razPayDoc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Ordinance can be found here.
                </a>
              </span>
            ),
            title: "",
            width: "55",
            render: () => (
              <img
                alt={
                  "Headline about the East Pakistan Razakar Ordinance promulgated by Tikka Khan "
                }
                className={""}
                src={razakaarOrd}
              ></img>
            ),
          },
          {
            source: "Bangladesh Documents",
            description: (
              <span>
                Official document on pay of East Pakistan Razakaars.{" "}
                <a
                  className={styles.clickLinkInv}
                  href={razPayDoc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Document can be found here.
                </a>
              </span>
            ),
            title: "",
            width: "55",
            render: () => (
              <img
                alt={"Official documents on pay of East Pakistan Razakaars"}
                className={""}
                src={razakaarPay}
              ></img>
            ),
          },
          {
            source: "",
            description: <span>A mural celebrating Mukti Bahini</span>,
            title: "",
            width: "75",
            render: () => (
              <img
                alt={"A mural celebrating Mukti Bahini"}
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
            description: (
              <>
                Propaganda Headlines in the Pakistani Military’s magazine{" "}
                <i>Hilal</i>
              </>
            ),
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
            description: (
              <>
                Cartoon published in Pakistani miltary’s magazine <i>Hilal</i>
              </>
            ),
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
            description: (
              <>
                Cartoon published in Pakistani miltary’s magazine <i>Hilal</i>
              </>
            ),
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
            description: (
              <>
                A poem titled ‘Crush India’ published in Pakistani miltary’s
                magazine <i>Hilal</i>
              </>
            ),
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
            description: (
              <>
                Advertisements published in <i>DAWN</i> in December 1971
              </>
            ),
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
            description: (
              <>
                Advertisements published in <i>DAWN</i> in December 1971
              </>
            ),
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
            description: (
              <>
                Advertisements published in <i>DAWN</i> in December 1971
              </>
            ),
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
            description: (
              <>
                Advertisements published in <i>DAWN</i> in December 1971
              </>
            ),
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
            description: (
              <>
                Advertisements published in <i>DAWN</i> in December 1971
              </>
            ),
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
            description: (
              <>
                Headlines from <i>Dawn</i>
              </>
            ),
            title: "",
            width: "40",
            render: () => (
              <img alt={"Headlines from Dawn"} className={""} src={news1}></img>
            ),
          },
          {
            source: "DAWN",
            description: (
              <>
                Headlines from <i>Dawn</i>
              </>
            ),
            title: "",
            width: "40",
            render: () => (
              <img alt={"Headlines from Dawn"} className={""} src={news2}></img>
            ),
          },
          {
            source: "DAWN",
            description: (
              <>
                Headlines from <i>Dawn</i>
              </>
            ),
            title: "",
            width: "40",
            render: () => (
              <img alt={"Headlines from Dawn"} className={""} src={news3}></img>
            ),
          },
          {
            source: "DAWN",
            description: (
              <>
                Headlines from <i>Dawn</i>
              </>
            ),
            title: "",
            width: "40",
            render: () => (
              <img alt={"Headlines from Dawn"} className={""} src={news4}></img>
            ),
          },
          {
            source: "DAWN",
            description: (
              <>
                Headlines from <i>Dawn</i>
              </>
            ),
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
            description: (
              <>
                In order to give a semblance of the situation under control
                while the war was ravaging major parts of East Pakistan,{" "}
                <i>Morning News</i> published a feature on the popularity of
                miniskirts
              </>
            ),
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
            description: (
              <>
                Headline of <i>Morning News</i> on December 11, 1971 when the
                war was at its peak on both fronts
              </>
            ),
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
            description: (
              <>
                Recruitment ads were still being printed as war had broken out
                on the Eastern Front with the overwhelming number of Bengalis
                opposed to the Pakistani military
              </>
            ),
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
            description: (
              <>
                Making people believe in the myth of Pakistani military's
                victory over India during the war of 1965 and expecting a
                repetition of the same in 1971
              </>
            ),
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
            description: (
              <>
                Headline of <i>Pakistan Observer</i> just three days before
                surrender
              </>
            ),
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
            description: (
              <>
                <i>Pakistan Observer</i> becomes Observer as East Pakistan
                becomes Bangladesh
              </>
            ),
            title: "",
            width: "45",
            render: () => (
              <img
                alt={
                  <>
                    <i>Pakistan Observer</i> becomes <i>Observer</i> as East
                    Pakistan becomes Bangladesh
                  </>
                }
                className={""}
                src={bengalPaper8}
              ></img>
            ),
          },
          {
            source: "Ali Usman Qasmi's collection",
            description: (
              <>
                An ad published in <i>Morning News</i> on December 27, 1971 in
                which the name Pakistan has been crossed out
              </>
            ),
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
              "General Niazi along with injured troops on a military plane",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "General Niazi along with injured troops on a military plane"
                }
                className={""}
                src={war2}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "General Amir Abdullah Khan Niazi",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={"General Amir Abdullah Khan Niazi"}
                className={""}
                src={war3}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description:
              "Genaral Niazi along with senior military men from the Indian army during the surrender ceremony",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={
                  "Genaral Niazi along with senior military men from the Indian army during the surrender ceremony"
                }
                className={""}
                src={war4}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "General Niazi passes on instructions to his troops",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={"General Niazi passes on instructions to his troops"}
                className={""}
                src={war5}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "General Niazi instructs a group of military men ",
            title: "",
            width: "75",
            render: () => (
              <img
                alt={"General Niazi instructs a group of military men"}
                className={""}
                src={war6}
              ></img>
            ),
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
      <Overlay
        oId="13"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "genocidebangladesh.org",
            description:
              "Mujibnagar, 17 April, 1971: C-in-C Col. Osmany, Acting President Syed Nazrul Islam, and Prime Minister Tajuddin Ahmed at the swearing in ceremony of the first Bangladesh government",
            title: "",
            width: "60",
            render: () => (
              <img
                alt={
                  "Mujibnagar, 17 April, 1971: C-in-C Col. Osmany, Acting President Syed Nazrul Islam, and Prime Minister Tajuddin Ahmed at the swearing in ceremony of the first Bangladesh government"
                }
                className={""}
                src={mujibnagar1}
              ></img>
            ),
          },
          {
            source: "https://www.kalerkantho.com/",
            description:
              "Sculptures commemorating Mujibnagar day (17 April, 1971)",
            title: "",
            width: "60",
            render: () => (
              <img
                alt={"Sculptures commemorating Mujibnagar day (17 April, 1971)"}
                className={""}
                src={mujibnagar2}
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
              "General Niazi along with injured troops on a military plane",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "General Niazi along with injured troops on a military plane"
                }
                className={""}
                src={war2}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "Genaral Niazi",
            title: "",
            width: "70",
            render: () => (
              <img alt={"Genaral Niazi"} className={""} src={war3}></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description:
              "Genaral Niazi along with senior military men from the Indian Army during the surrender ceremony",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={
                  "Genaral Niazi along with senior military men from the Indian Army during the surrender ceremony"
                }
                className={""}
                src={war4}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "General Niazi passes on instruction to a troop",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={"General Niazi passes on instruction to a troop"}
                className={""}
                src={war5}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description: "General Niazi addressing troops",
            title: "",
            width: "75",
            render: () => (
              <img
                alt={"General Niazi addressing troops"}
                className={""}
                src={war6}
              ></img>
            ),
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
      <Overlay
        oId="13"
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
              "General Niazi and General Arora before the signing of the instrument of surrender",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "General Niazi and General Arora before the signing of the instrument of surrender"
                }
                className={""}
                src={war1}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="14"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "theguardian.com",
            description:
              "Mujibur rahman awarded rape survivors with the honorific title of ‘Birangona’",
            title: "",
            width: "35",
            render: () => (
              <img
                alt={
                  "Mujibur rahman awarded rape survivors with the honorific title of ‘Birangona’"
                }
                className={""}
                src={birangona1}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description:
              "A sculpture at Mujibnagar, Dhaka paying homage to 'Birangona'",
            title: "",
            width: "60",
            render: () => (
              <img
                alt={
                  "A sculpture at Mujibnagar, Dhaka paying homage to 'Birangona'"
                }
                className={""}
                src={birangona2}
              ></img>
            ),
          },
        ]}
      />
      <Overlay
        oId="15"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "theguardian.com",
            description:
              "Sculptures commemorating Mujibnagar day (17 April, 1971)",
            title: "",
            width: "60",
            render: () => (
              <img
                alt={"Sculptures commemorating Mujibnagar day (17 April, 1971)"}
                className={""}
                src={mujibnagar2}
              ></img>
            ),
          },
          {
            source: "Wajahat Masood's personal collection",
            description:
              "Mujibnagar, 17 April, 1971: C-in-C Col. Osmany, Acting President Syed Nazrul Islam, and Prime Minister Tajuddin Ahmed at the swearing in ceremony of the first Bangladesh government",
            title: "",
            width: "60",
            render: () => (
              <img
                alt={
                  "Mujibnagar, 17 April, 1971: C-in-C Col. Osmany, Acting President Syed Nazrul Islam, and Prime Minister Tajuddin Ahmed at the swearing in ceremony of the first Bangladesh government"
                }
                className={""}
                src={mujibnagar1}
              ></img>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Operation;
