import { useEffect, useState } from "react";

import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import SectionHeading from "../components/SectionHeading.js";
import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import Footer from "../components/Footer.js";
import Overlay from "../components/Overlay";

import chapter1_1 from "../resources/Chapter1/Chapter1_1.png";
import chapter1_2 from "../resources/Chapter1/Chapter1_2.png";
import chapter1_3 from "../resources/Chapter1/Chapter1_3.png";

import eastWestFriends from "../resources/Chapter1/images/East_West_Friends.jpeg";
import tagore from "../resources/Chapter1/images/Tagore.jpg";

import mural from "../resources/Chapter1/images/Mural.jpg";
import blm from "../resources/Chapter1/images/blm.jpeg";
import blmWomen from "../resources/Chapter1/images/blm_women.jpeg";
import heroines from "../resources/Chapter1/images/heroines.jpg";
import bhashaniSM from "../resources/Chapter1/images/bhashani_shahidminar.jpeg";
import SM from "../resources/Chapter1/images/shahidminar.jpeg";

import dawn1954 from "../resources/Chapter1/images/Dawn1954elections.png";
import cabinet1954 from "../resources/Chapter1/images/1954_east_bengal_cabinet.png";

import fatimaJMuj from "../resources/Chapter1/images/FatimaJinnahMujeeb.png";
import fatimaJPos from "../resources/Chapter1/images/FatimaJinnahPoster.png";

import quote from "../resources/Chapter1/images/quote1.png";

const imgArrCh1 = [
  {
    image: chapter1_1,
    style: {
      width: "20%",
    },
  },
  {
    image: chapter1_2,
    style: {
      width: "50%",
    },
  },
  {
    image: chapter1_3,
    style: {
      width: "20%",
    },
  },
];

function Background() {
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
        number="1"
        imgArr={imgArrCh1}
        title="Background"
        subtitle="1947 - 1969"
        desc="The majority of Pakistan’s population residing in the East Wing of the newborn country feel economically and politically marginalized. As a reaction, the Awami League emerges as a strong political force fighting for regional autonomy"
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Political Differences emerge between the east and the west wings of a newborn state" />
            <p className={styles.view_para}>
              The emergence of Pakistan in 1947 created an anomaly: a
              geographically fractured state. The two wings of the country – the
              majority Bengali population of East Bengal/East Pakistan and the
              multiethnic provincial units, tribal areas, and former princely
              states comprising West Pakistan – were divided by 1200 miles of
              Indian territory.
            </p>
            <p className={styles.view_para}>
              Economically, East Bengal was a rural hinterland, which had
              suffered immensely because of losing its connection with
              Calcutta’s commercial and intellectual hub during Partition. The
              Boundary Commission had awarded Calcutta to India. Protesting this
              decision, Muhammad Ali Jinnah described it as forcing a man to
              live without his lungs.
            </p>
            <PhotoContainer
              noScroll
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"4"}
              imgArr={[
                {
                  image: eastWestFriends,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "fortyfive",
                },
                {
                  image: tagore,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "fortyfive",
                },
              ]}
            />
            <p className={styles.view_para}>
              Politically, the two wings disagreed on the constitutional future
              of the country. Despite being in the numerical majority, East
              Bengalis felt marginalized and excluded. Due to Pakistan’s failure
              to develop a viable democratic structure, political power was
              wielded by the military and bureaucracy recruited mainly from
              Punjab and the North-Indian Muslim migrant elite. In a democratic
              setting, Bengali numerical superiority would have diluted the
              disproportionate power held by the Punjab and North Indian Muslim
              elite. The political elite was reluctant to give up this power.
            </p>
            <p className={styles.view_para}>
              What resulted was a prolonged deadlock on the making of a
              constitution. It was in 1956 that a constitution was finally
              adopted. Much of the Bengali opposition rejected it.
            </p>

            <SectionHeading heading="Bengali Language Movement" />
            <p className={styles.view_para}>
              Other than political disagreements about representation, the
              Bengali leadership was generally campaigning for a more inclusive
              and egalitarian form of national identity. They opposed the
              attempts of the state to impose a homogenized Islam-based
              majoritarian ethos. As part of this statist project, Urdu was
              projected as the only national language, much to the chagrin of
              Bengali leaders who, for good reason, saw it as discriminatory
              against the Bengali majority. What exacerbated this tension was
              the government’s police action against protestors marching for the
              recognition of Bengali as a national language in February 1952
              which resulted in the death of many students. In the following
              years, various Bengali political parties, leaders and
              organizations commemorated this event by holding marches. They
              also built a monument to pay tribute to what they described as the
              martyrs of the Bengali language. This day, 21st February, is now
              globally commemorated as International Mother Language Day.
            </p>

            <PhotoContainer
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"3"}
              imgArr={[
                {
                  image: blm,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: blmWomen,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirtyfive",
                },
                {
                  image: heroines,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirtyfive",
                },
                {
                  image: bhashaniSM,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: SM,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: mural,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirtyfive",
                },
              ]}
            />
          </div>
        </div>

        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={quote}
            photoClassName={"ch2Q_6points"}
            quoteTxt="As part of this statist project, Urdu was projected as the only national language, much to the chagrin of Bengali leaders who, for a good reason, saw it as discriminatory against the Bengali majority. "
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
          <div className={styles.view_content_container}>
            <SectionHeading heading="East Pakistanis choose the United Front Coalition over the Muslim League in the 1954 provincial elections" />
            <p className={styles.view_para}>
              As a result of this disillusionment with the Pakistan project soon
              after independence and the trajectory that the state had taken,
              Bengali voters routed the ruling Muslim League out of power in the
              first provincial elections held in 1954. The United Front - a
              conglomerate of Bengali opposition parties - secured more than 300
              seats compared to less than a dozen won by the Muslim League. Such
              a dramatic reversal of electoral fortunes just seven years after
              independence effectively sealed the prospects of an
              all-Pakistan-based polity.
            </p>
            <p className={styles.view_para}>
              To their credit, the Bengali leadership, led by H. S. Suharawardy
              – and supported by his young lieutenant – Sheikh Mujibur Rahman,
              put up a spirited opposition in the assembly debates between
              1954-56. They warned against the excessive rhetoric of an Islamic
              state as a ruse to push a statist agenda of homogenization, denial
              of equal citizenship to non-Muslims, and diluting of Bengali
              political power.
            </p>

            <PhotoContainer
              noScroll
              setDisplayedOverlay={setDisplayedOverlay}
              overlayID={"2"}
              imgArr={[
                {
                  image: dawn1954,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "fifty",
                },
                {
                  image: cabinet1954,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "fortyfive",
                },
              ]}
            />
            <SectionHeading heading="Martial Law and the Rise of Sheikh Mujibur Rahman" />
            <p className={styles.view_para}>
              This active phase of political opposition came to an end with the
              imposition of Martial Law in 1958.
            </p>
            <p className={styles.view_para}>
              With the death of prominent Bengali leaders like H. S. Suharwardy,
              A. K. Fazlul Haq, and Khawaja Nazimuddin in quick succession, a
              power vacuum emerged, which was filled by the fiery and
              charismatic Sheikh Mujibur Rahman.
            </p>
            <p className={styles.view_para}>
              By the 1960s, in addition to the systematic denial of political
              rights to the Bengali majority and the imposition of Urdu-centric
              cultural policy on the region, the question of economic disparity
              had become an enormous concern. Bengali leaders felt that West
              Pakistan was gaining at the expense of East Pakistan. As
              industrial growth picked up in West Pakistan, there was a growing
              sense of disillusionment in the Eastern wing which had remained
              rural and backward. In the popular imagination, West Pakistani aka
              Punjabi ruling elite was extracting raw material from East
              Pakistan – especially jute – and selling it in the international
              market to earn foreign exchange, which was then spent on capital
              investments in West Pakistan. Much of the rhetoric in East
              Pakistan during the 1960s – especially as the much-trumpeted
              ‘decade of progress’ of General Ayub Khan came to a close – was
              that West Pakistan was using Bengal as its colony.
            </p>
            <p className={styles.view_para}>
              Sheikh Mujib spearheaded the movement capitalizing on the
              sentiment of deprivation, inequality, unfair treatment, and
              exploitation. Despite his disillusionment with the Pakistan
              project, Mujib made a last attempt at all-Pakistan federal
              politics by supporting the candidacy of Fatima Jinnah – sister of
              the late founder of the country – against ‘Field Marshal’ Ayub
              Khan. Despite the tremendous public response that she received
              from the masses, Fatima Jinnah lost the elections. The popular
              opinion was that the military had massively rigged the elections.
              Sheikh Mujib had accompanied Fatima Jinnah during the election
              trail. The resulting electoral disaster sealed the possibility of
              bringing about an inclusive federal polity through democratic
              change.
            </p>
            <div className={styles.view_section}>
              <div className={styles.video_contain_center}>
                <div className={styles.video_contain}>
                  <iframe
                    src="https://www.youtube.com/embed/fvmA1UKcMV4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className={styles.video_caption}>
                    Fatima Jinnah campaigning for the 1965 presidential
                    elections in East Pakistan. Sheikh Mujib can be spotted
                    alongside Ms Jinnah on the campaign trail
                  </p>
                </div>
              </div>
              <PhotoContainer
                noScroll
                setDisplayedOverlay={setDisplayedOverlay}
                overlayID={"1"}
                imgArr={[
                  {
                    image: fatimaJMuj,
                    caption:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    widthID: "fortyfive",
                  },
                  {
                    image: fatimaJPos,
                    caption:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    widthID: "forty",
                  },
                ]}
              />

              <p className={styles.view_para}>
                Sheikh Mujib was subsequently arrested for his role in
                conspiring with India to plan the country’s dismemberment - the
                so-called Agartala Conspiracy Case. While the trial was still
                underway, Ayub Khan’s regime had become immensely unpopular,
                leading to massive protests by students and workers, resulting
                in his eventual ouster. As a last-minute attempt to salvage
                political space for himself, Ayub Khan agreed to release Sheikh
                Mujib and his associates, even though charges against them were
                of serious nature.
              </p>
            </div>
            <div className={styles.video_contain_center}>
              <div className={styles.video_contain}>
                <iframe
                  width="650"
                  height="365"
                  src="https://www.youtube.com/embed/U38kZqY6xS8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.video_caption}>
                  Sheikh Mujib’s interview after his release from prison (in the
                  Agartala Conspiracy case)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        projectName="Bangladesh's Liberation War"
        projectSubTitle="A visual history"
        projectDescription="We gratefully acknowledge the contributions of Nida Hasan, Bakht Noor, Kumail Haider Jafri, Usama Liaqat, Mohid Ahsan,  Abdullah Niazi, and Noor Fatima Bokhari, who helped generate data for this project. We also thank Hafsa Omar Khawaja and Sajjadur Rahman for their input and valuable suggestions."
        prevLink="/"
        nextLink="/ch2"
        chapterID={1}
      />

      <Overlay
        oId="1"
        displayedOverlay={displayedOverlay}
        closeOverlay={closeOverlay}
        setDisplayedOverlay={setDisplayedOverlay}
        slides={[
          {
            source: "Flickr",
            description:
              "Fatima Jinnah campaigning in East Pakistan. Sheikh Mujib can also be seen in the background",
            title: "",
            width: "55",
            render: () => (
              <img
                alt={
                  "Fatima Jinnah campaigning in East Pakistan. Sheikh Mujib can also be seen in the background"
                }
                className={""}
                src={fatimaJMuj}
              ></img>
            ),
          },
          {
            source: "",
            description:
              "Fatima Jinnah’s campaign poster reads: ‘The flowers won’t be able to extinguish this lamp’. ‘Flower’ was the electoral symbol for Ayub Khan whereas ‘lamp’ represented Fatima Jinnah.",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "Fatima Jinnah’s campaign poster reads: ‘The flowers won’t be able to extinguish this lamp’. ‘Flower’ was the electoral symbol for Ayub Khan whereas ‘lamp’ represented Fatima Jinnah."
                }
                className={""}
                src={fatimaJPos}
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
            description: (
              <span>
                <i>Dawn</i>’s headline on the United Front’s victory over the
                Muslim League in 1954 elections
              </span>
            ),
            title: "def",
            width: "70",
            render: () => (
              <img
                alt={
                  "Dawn’s headline on the United Front’s victory over the Muslim League in 1954 elections"
                }
                className={""}
                src={dawn1954}
              ></img>
            ),
          },
          {
            source: "Wikimedia Commons",
            description:
              "East Bengal’s cabinet formed by the United Front. Sheikh Mujibur Rahman can be seen standing in the front row.",
            title: "def",
            width: "75",
            render: () => (
              <img
                alt={
                  "East Bengal’s cabinet formed by the United Front. Sheikh Mujibur Rahman can be seen standing in the front row."
                }
                className={""}
                src={cabinet1954}
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
              "Protestors commemorating the martyrs of language rights movement of  February 1952",
            title: "",
            width: "65",
            render: () => (
              <img
                alt={
                  "Protestors commemorating the martyrs of language rights movement of  February 1952"
                }
                className={""}
                src={blm}
              ></img>
            ),
          },
          {
            source: "Flickr",
            description:
              "Commemorating the martyrs of the language rights movement of February 1952",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={
                  "Commemorating the martyrs of the language rights movement of February 1952"
                }
                className={""}
                src={blmWomen}
              ></img>
            ),
          },
          {
            source: "Observer BD",
            description:
              "A Women’s sit-in commemorating the Bengali Language movement ",
            title: "",
            width: "70",
            render: () => (
              <img
                alt={
                  "A Women’s sit-in commemorating the Bengali Language movement "
                }
                className={""}
                src={heroines}
              ></img>
            ),
          },
          {
            source: "Flickr",
            description: (
              <span>
                Maulana Abdul Hamid Khan Bhashani, a popular Bengali politician,
                at the ceremony to lay the foundation stone for{" "}
                <i>Shahid Minar</i> (Martyrs' monument)
              </span>
            ),
            title: "",
            width: "50",
            render: () => (
              <img
                alt={
                  "Maulana Abdul Hamid Khan Bhashani, a popular Bengali politician, at the ceremony to lay the foundation stone for Shahid Minar (Martyrs' monument)"
                }
                className={""}
                src={bhashaniSM}
              ></img>
            ),
          },
          {
            source: "Flickr",
            description: (
              <span>
                Crowd gathers to lay the foundation stone for{" "}
                <i>Shahid Minar</i> (Martyrs' monument)
              </span>
            ),
            title: "",
            width: "55",
            render: () => (
              <img
                alt={
                  "Crowd gathers to lay the foundation stone for Shahid Minar (Martyrs' monument)"
                }
                className={""}
                src={SM}
              ></img>
            ),
          },
          {
            source: "Art and Culture, Bangladesh",
            description:
              "A street mural in Dhaka commemorating the language rights movement of 1952",
            title: "def",
            width: "70",
            render: () => (
              <img
                alt={
                  "A street mural in Dhaka commemorating the language rights movement of 1952"
                }
                className={""}
                src={mural}
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
            source: "",
            description: `A caricature from a newspaper reads: “The recent Governor’s Conference has brought the two wings of the country closer still”
            `,
            title: "",
            width: "70",
            render: () => (
              <img
                alt={`A caricature from a newspaper reads: “The recent Governor’s Conference has brought the two wings of the country closer still”`}
                className={""}
                src={eastWestFriends}
              ></img>
            ),
          },
          {
            source: "",
            description: `Official government documents show the state’s concern for ‘increase in Pro-Tagore activities in East Pakistan’`,
            title: "",
            width: "65",
            render: () => (
              <img
                alt={`Official government documents show the state’s concern for ‘increase in Pro-Tagore activities in East Pakistan’`}
                className={""}
                src={tagore}
              ></img>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Background;
