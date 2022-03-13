import { useState } from "react";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import SectionHeading from "../components/SectionHeading.js";
import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import Footer from "../components/Footer.js";

import chapter1_1 from "../resources/Chapter1/Chapter1_1.png";
import chapter1_2 from "../resources/Chapter1/Chapter1_2.png";
import chapter1_3 from "../resources/Chapter1/Chapter1_3.png";

import eastWestFriends from "../resources/Chapter1/East_West_Friends.jpeg";
import tagore from "../resources/Chapter1/Tagore.png";

import mural from "../resources/Chapter1/images/Mural.jpg";
import blm from "../resources/Chapter1/images/blm.jpeg";

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
  return (
    <div className={styles.view_container}>
      <Navbar type="chapter_title" />
      <ChapterTitle
        number="1"
        imgArr={imgArrCh1}
        title="Background"
        subtitle="1947 - 1969"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <div className={styles.view_section}>
              <SectionHeading heading="Political Differences emerge between the east and the west wings of a newborn state" />
              <p className={styles.view_para}>
                The emergence of Pakistan in 1947 created an anomaly of a
                geographically fractured state. The two wings of the country –
                the majority Bengali population of East Bengal/East Pakistan and
                the multiethnic provincial units, tribal areas, and formerly
                princely states comprising West Pakistan – were divided by a
                1600-miles stretch of Indian territory.
              </p>
              <p className={styles.view_para}>
                Economically, East Bengal was a rural hinterland, which had
                suffered immensely because of losing connection with Calcutta's
                commercial and intellectual hub, which the British government
                had awarded to India. Protesting against this decision, Jinnah
                described it as forcing a man to live without his lungs.
              </p>
              <PhotoContainer
                noScroll
                imgArr={[
                  {
                    image: eastWestFriends,
                    caption:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    widthID: "fifty",
                  },
                  {
                    image: tagore,
                    caption:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    widthID: "fortyFive",
                  },
                ]}
              />
              <p className={styles.view_para}>
                Politically, the two wings disagreed on the constitutional
                future of the country. Despite being the numerical majority, the
                East Bengalis felt marginalized and excluded. Due to Pakistan's
                failure to develop a viable democratic structure, the political
                power was wielded by the Military and bureaucracy mainly
                recruited from Punjab and the North-Indian Muslim migrant elite.
                In a democratic setting, Bengali numerical superiority would
                have diluted the disproportionate power held by Punjab and North
                Indian Muslim elite. The political elite was reluctant to give
                up this power.
              </p>
              <p className={styles.view_para}>
                What resulted was a prolonged deadlock on the making of a
                constitution. It was in 1956 that a constitution was finally
                adopted. Much of the Bengali opposition rejected it.
              </p>
            </div>
            <div className={styles.view_section}>
              <SectionHeading heading="Identity Politics and the Bengali Language Movement" />
              <p className={styles.view_para}>
                Other than political disagreements about representation, the
                Bengali leadership was generally campaigning for a more
                inclusive and egalitarian form of national identity. They
                opposed the attempts of the state to impose a homogenized
                Islam-based identity. As part of this statist project, Urdu was
                projected as the only national language, much to the chagrin of
                Bengali leaders who, for a good reason, saw it as discriminatory
                against the Bengali majority.
              </p>

              <PhotoContainer
                noScroll
                imgArr={[
                  {
                    image: blm,
                    caption:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    widthID: "fortyFive",
                  },
                  {
                    image: mural,
                    caption:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    widthID: "fifty",
                  }
                ]}
              />

              <p className={styles.view_para}>
                Other than political disagreements about representation, the
                Bengali leadership was generally campaigning for a more
                inclusive and egalitarian form of national identity. They
                opposed the attempts of the state to impose a homogenized
                Islam-based identity. As part of this statist project, Urdu was
                projected as the only national language, much to the chagrin of
                Bengali leaders who, for a good reason, saw it as discriminatory
                against the Bengali majority.
              </p>
            </div>
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
            <div className={styles.view_section}>
              <SectionHeading heading="East Pakistanis choose the United Front Coalition over the Muslim league in 1954 provincial elections" />
              <p className={styles.view_para}>
                As a result of this disillusionment with the Pakistan project
                soon after independence and the trajectory that it had taken,
                the Bengali voters routed the ruling Muslim League out of power
                in the first provincial elections held in 1954. The United Front
                of a conglomerate of Bengali opposition parties secured more
                than 300 seats compared to less than a dozen won by the Muslim
                League. Such a dramatic reversal of electoral fortunes in just
                seven years after independence effectively sealed the prospects
                of an all-Pakistan-based polity.
              </p>
              <p className={styles.view_para}>
                To their credit, Bengali leadership, led by H. S. Suharawardy –
                and supported by his young lieutenant – Sheikh Mujib-ur-Rehman –
                put up spirited opposition in the assembly debates between
                1954-56. They warned against the excessive rhetoric of an
                Islamic state as a ruse to push statist agenda of
                homogenization, denial of equal citizenship to non-Muslims, and
                diluting of Bengali political power.
              </p>

              <PhotoContainer
                noScroll
                imgArr={[
                  {
                    image: dawn1954,
                    caption:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    widthID: "fiftyFive",
                  },
                  {
                    image: cabinet1954,
                    caption:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    widthID: "fortyFive",
                  },
                ]}
              />
            </div>

            <div className={styles.view_section}>
              <SectionHeading heading="Martial Law and the Rise of Sheikh Mujib ur Rehman" />
              <p className={styles.view_para}>
                This active phase of political opposition came to an end with
                the imposition of Martial Law in 1958.
              </p>
              <p className={styles.view_para}>
                With the death of prominent Bengali leaders like H. S.
                Suharwardy, A. K. Fazlul Haq, and Khawaja Nazimuddin in quick
                succession, a power vacuum emerged, filled by the fiery and
                charismatic Sheikh Mujib-ur-Rehman.
              </p>
              <p className={styles.view_para}>
                By the 1960s, in addition to the systematic denial of political
                rights to the Bengali majority and imposition of Urdu-centric
                cultural policy on the region, the question of economic
                disparity had become an enormous concern. Bengali leaders felt
                that West Pakistan was gaining at the expense of East Pakistan.
                As industrial growth picked up in West Pakistan, a growing sense
                of disillusionment in the Eastern wing had remained rural and
                backward. In the popular imagination, raw material from East
                Pakistan – especially jute – was being sold in the international
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
                politics by supporting the candidacy of Fatima Jinnah – sister
                of the late founder of the country – against ‘Field Marshal’
                Ayub Khan. Despite the tremendous public response, Fatima Jinnah
                lost the elections that were massively rigged against her.
                Sheikh Mujib had accompanied Fatima Jinnah during the election
                trail. The resulting electoral disaster sealed the fate of a
                democratic change for an inclusive federal polity.
              </p>

              <PhotoContainer
                noScroll
                imgArr={[
                  {
                    image: fatimaJMuj,
                    caption:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    widthID: "fiftyFive",
                  },
                  {
                    image: fatimaJPos,
                    caption:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    widthID: "fortyFive",
                  }
                ]}
              />

              <p className={styles.view_para}>
                Sheikh Mujib was subsequently arrested for his role in
                conspiring with India to plan the country’s dismemberment. While
                the trial was still underway, Ayub Khan’s regime had become
                immensely unpopular, leading to massive protests by students and
                workers, resulting in his eventual ouster. As a last-minute
                attempt to salvage political space for himself, Ayub Khan agreed
                to release Sheikh Mujib and his associates, even though charges
                against them were severe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer
        projectName="Bangladesh’s Liberation War"
        projectSubTitle="A visual history"
        projectDescription="The LUMS Digital Archive is a research repository that aims at collecting, cataloging and preserving rare material (books, pamphlets, newspapers and other items) of
      historical significance and making them available to researchers. In particular, the archive focuses on events, groups, movements and personalities relating to broader
      historical, political and cultural trends in South Asia, with an emphasis on preserving the accounts of marginalized and subaltern groups."
        prevLink="/"
        nextLink="/ch2"
        chapterID={1}
      />
    </div>
  );
}

export default Background;
