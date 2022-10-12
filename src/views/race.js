import { useEffect } from "react";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import SectionHeading from "../components/SectionHeading.js";
import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import Footer from "../components/Footer.js";

import chapter5_1 from "../resources/Chapter5/Chapter5_1.jpg";
import chapter5_2 from "../resources/Chapter5/Chapter5_2.jpg";
import chapter5_3 from "../resources/Chapter5/Chapter5_3.jpg";

import ayub from "../resources/Chapter5/Muhammad_Ayub_Khan.jpeg";
import niazi1 from "../resources/Chapter5/Niazi1.jpg";
import eastPakEndgame from "../resources/Chapter5/EastPakEndgame.jpeg";

import hrReport from "../resources/Chapter5/HamoodReport.jpeg";

import birangona from "../resources/Chapter5/photosGenderViolence/Birangana.jpg";
import heroine from "../resources/Chapter5/photosGenderViolence/iamheroine.jpg";
import rs1 from "../resources/Chapter5/photosGenderViolence/rising_silence.jpg";
import rs2 from "../resources/Chapter5/photosGenderViolence/rising_silence2.jpeg";
import sculpture from "../resources/Chapter5/photosGenderViolence/Sculpture_Birangana.jpeg";

const imgArrCh5 = [
  {
    image: chapter5_1,
    style: {
      width: "25%",
    },
  },
  {
    image: chapter5_2,
    style: {
      width: "50%",
    },
  },
  {
    image: chapter5_3,
    style: {
      width: "25%",
    },
  },
];

function Race() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.view_container}>
      <Navbar type="chapter_title" />
      <ChapterTitle
        number="5"
        imgArr={imgArrCh5}
        title="Racializing the Conflict"
        subtitle="Subtitle"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Racializing the Conflict" />
            <p className={styles.view_para}>
              The military operation targeting Bengali carried deep roots of
              racial hatred for Bengalis as the other. Pakistan's top generals
              described Bengalis as inferior, effeminate, and treacherous in
              their autobiographical and war histories. As an ultimate mark of
              racial inferiority and hatred, they described them as 'Hindu-like'
              in their features, mindset, and worldviews. Therefore, for the
              West Pakistani Military, the Bengalis were to be reformed and
              civilized – a project aimed at racial purity that could only have
              been genocidal in its effect.
            </p>
            <p className={styles.view_para}>
              Across several diary entries, Ayub quotes various persons who only
              cement his racism by offering virulent portraits of the Bengalis.
              For instance, Qazi Qadir, a minister in East Pakistan, pronounces
              that "Bengalis are by nature treacherous and unreliable," writer
              Nirad Chaudhari concludes that "Bengalis, and for that matter, all
              the Hindus, are not capable of governing themselves nor exercising
              political power. They are narrow-minded and fractious and suffer
              from crises of character," and in a 1968 Ministry of Information
              and Broadcasting report on East Pakistan, Joint Secretary Aftab
              Ahmad deems Bengalis to "psychologically" have "a strong craving
              for attention."
            </p>
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={ayub}
            photoClassName={"ch2Q_6points"}
            quoteTxt={
              <ul>
                <li>
                  Ayub himself deduces that the Bengali outlook does not "not
                  conform to any rational yardstick" and that it was only with
                  the birth of Pakistan that Bengalis "got the blessing of
                  freedom... Any normal people should have recognised and
                  rejoiced at this blessing…" but their "minds are totally shut
                  to reason, and full of suspicion and skepticism. Geography,
                  history, climate, natural hazards, and racial traits might
                  well be responsible for this malady."
                </li>
                <li>
                  In other instances, he mentions that until and unless Bengalis
                  adopt Urdu, "the vehicle in which Muslim thought and
                  philosophy is expressed……If not careful they will have no
                  choice but to drift back to Hinduism and be engulfed by it."
                  Bengali demands for democratic rights and the assertion of
                  their own culture, literature and heritage is only seen as a
                  dangerous reversion and slide to Hinduism which must be
                  stifled and the Bengalis rescued from.
                </li>
                <li>
                  Ayub's aversion and loathing for this remain unconcealed when
                  he tells Khawaja Shahabuddin, "We could not think of a worse
                  combination. Hindus and Bengalis." He later allows his
                  antipathy towards Bengalis and Hindus to merge and morph into
                  the idea that most Bengali beliefs are only barely punctuated
                  by Islam because they are essentially, deeply un-Islamic and
                  Hindu: "Without meaning any unkindness, the fact of the matter
                  is that a large majority of the Muslims in East Pakistan have
                  an animist base which is a thick layer of Hinduism and top
                  crust of Islam which is pierced by Hinduism from time to
                  time."
                </li>
              </ul>
            }
            quoteAlign="left"
            color="white"
            fontSize="small"
            rotation="rotate2"
            quoterText={
              "Ayub Khan - Friends Not Masters (A political autobiography)"
            }
            quotationMark={true}
          />
        </div>
      </section>

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <p className={styles.view_para}>
              At other points, he also insinuated that the Bengalis maintain an
              affinity for India. The conclusion he attained from this
              characterization of the Bengalis, which combined his earlier
              racism into a blatant otherization that flagged them as
              relentlessly Hinduism and India-inclined in their "language and
              customs, if not the temple," was that the "supreme task in East
              Pakistan" was to save the Bengalis "from a reversion to serfdom
              and domination of Hindus….especially so when they themselves are
              proving such unwilling tools."
            </p>
            <p className={styles.view_para}>
              The thinly veiled contempt and blanket condemnation of Bengali
              culture is exemplified in Brigadier Asif Haroon's book which
              employs old tropes such as the "emotional Bengali" and the
              malicious Hindu <i>bania</i> to elucidate 'Hinduization' and its
              permeation in Bengali arts, clothes, drama, dance, TV, music,
              literature, and even the ritual practice of Islam among Bengali
              Muslims too. Major General Hakeem Arshad Qureshi, who had
              commanded the 26th battalion of the Frontier Force Regiment in
              Saidpur in East Pakistan and was part of the 90,000 prisoners of
              war taken by India at the end of the war, also seconds Haroon that
              "Bengali Muslims were set up for a cultural onslaught by Bengali
              writers, mostly Hindus." While villainous characterization of
              Hindus, Hinduism and Hindu culture in East Pakistan are manifest,
              it is equally notable that even Bengali Muslims are incriminated
              in the sweeping charge of 'Hinduization' which displaces their
              stability from the category of Muslims and Pakistanis.
            </p>
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={eastPakEndgame}
            photoClassName={"ch2Q_6points"}
            quoteTxt={`
              Brigadier Siddiqi admits that Operation Searchlight and the army's activities in East Pakistan were "not just temporary missions of pacification but one of conversion and transformation of the Bengalis into true Muslims and Pakistanis" and that the top leadership of the Pakistani Military, including General Niazi and General Rahim were "hell-bent on cleansing the Bengali race and culture." - The otherization of the Bengalis as "Hindus" and "traitors" had been rendered complete to the extent that even among ordinary West Pakistanis a deep indifference to the Bengalis was palpable. There was an "absence of any brotherly feelings for the East Pakistanis. They might as well have belonged to Biafra or South Africa for all that one heard or saw. No consideration for human suffering seemed to exist at all." The Hamoodur Rahman Commission recorded Rao Farman Ali's testimony that Tikka Khan had told the troops "What have I been hearing about shortage of rations? Are not there any cows and goats in this country? This is enemy territory. Get what you want. This is what we used to do in Burma."
              `}
            quoteAlign="left"
            color="white"
            fontSize="small"
            rotation="rotate2"
            quoterText={
              "Brigadier A. R. Siddiqi - East Pakistan The End Game, An onlooker's journal 1969-1971"
            }
            quotationMark={true}
          />
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Rape as a Military Weapon" />
            <p className={styles.view_para}>
              The Hamoodur Rahman Commission registered the ill-repute of
              General Niazi in what were vaguely termed "sex matters" and
              referenced the testimony of a witness for it who stated, "The
              troops used to say that when the Commander (Lt. Gen. Niazi) was
              himself a raper, how could they be stopped. Gen. Niazi enjoyed the
              same reputation at Sialkot and Lahore." Given this reputation,
              Niazi's exchange with Raja reads as an expectation of sexual
              license, access and liberty which could be taken with Bengali
              women by Pakistani military officers during the opportune time of
              turmoil.
            </p>
            <PhotoContainer
              noScroll
              imgArr={[
                {
                  image: chapter5_1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfivevw",
                },
                {
                  image: hrReport,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfivevw",
                },
                {
                  image: sculpture,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirtyvw",
                },
              ]}
            />

            <p className={styles.view_para}>
              Niazi, and many other military leaders and officers, viewed and
              explained sexual violence by Pakistani soldiers as a "natural"
              outcome of the "sexual needs of a soldier" which the army had
              usually dealt with by way of its liberal leave policy but which
              had to be suspended in 1971 due to the distance between the two
              wings and the growing tumult that also exacerbated the situation
              since "Homesick, love-starved jawans are most vulnerable to
              elemental appetites."
            </p>
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={niazi1}
            photoClassName={"ch2Q_6points"}
            quoteTxt={`
              He (Niazi) is said to have "openly encouraged the jawans in their unsoldierly, inhuman, and carnal indulgences. 'What is your last night's score, Shera (Tiger)?' he would ask. The score referred to the number of women the soldier might have molested." Niazi is also reported to have argued brazenly in justification of rape cases reported to him, infamously remarking "You cannot expect a man to live, fight, and die in East Pakistan and go to Jhelum for sex, would you?" 250 It was with this attitude and orientation, facetious at best and disgracefully frightful at worst, with which Niazi approached and directed Pakistan's military action against the Bengalis. In fact, in front of the Hamoodur Rahman Commission, he admitted that "there were a few cases of rape, but asserted that the guilty persons were duly punished" and that "these things do happen when troops are spread over."
              `}
            quoteAlign="left"
            color="white"
            fontSize="small"
            rotation="rotate2"
            quotationMark={true}
          />
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <PhotoContainer
              imgArr={[
                {
                  image: birangona,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: heroine,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: rs1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: rs2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
              ]}
            />
          </div>
          <div class={styles.video_contain_center}>
            <div>
              <iframe
                width="650"
                height="365"
                src="https://www.youtube.com/embed/3585BLvRuQo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer
        projectName="Bangladesh's Liberation War"
        projectSubTitle="A visual history"
        projectDescription="The LUMS Digital Archive is a research repository that aims at collecting, cataloging and preserving rare material (books, pamphlets, newspapers and other items) of
      historical significance and making them available to researchers. In particular, the archive focuses on events, groups, movements and personalities relating to broader
      historical, political and cultural trends in South Asia, with an emphasis on preserving the accounts of marginalized and subaltern groups."
        prevLink="/ch4"
        nextLink="/"
        chapterID={5}
      />
    </div>
  );
}

export default Race;
