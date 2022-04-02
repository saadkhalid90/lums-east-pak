import { useEffect } from "react";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import SectionHeading from "../components/SectionHeading.js";
import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import Footer from "../components/Footer.js";

import chapter4_1 from "../resources/Chapter4/Chapter4_1.jpg";
import chapter4_2 from "../resources/Chapter4/Chapter4_2.jpg";
import chapter4_3 from "../resources/Chapter4/Chapter4_3.jpg";

import BhuttoQuote from "../resources/Chapter3/others/BhuttoQuote.jpg";

import mujbhutt1 from "../resources/Chapter4/mujeebBhutto1.jpg";
import mujbhutt2 from "../resources/Chapter4/mujeebBhutto2.jpg";
import mujbhutt3 from "../resources/Chapter4/mujeebBhutto3.jpg";
import mujbhutt4 from "../resources/Chapter4/mujeebBhutto4.jpg";
import mujbhutt5 from "../resources/Chapter4/mujeebBhutto5.jpg";

import firstAmend1 from "../resources/Chapter4/first-amend/FirstAmend1.jpg";
import revokeCit from "../resources/Chapter4/first-amend/revokeCit.jpg";

import geneva1 from "../resources/Chapter4/geneva-camp/geneva1.jpg";
import geneva2 from "../resources/Chapter4/geneva-camp/geneva2.jpg";

import azmatBook from "../resources/Chapter4/Azmat.jpg";
import hamood from "../resources/Chapter4/hamoodurrehman.jpg";
import hamoodRpt from "../resources/Chapter4/HamoodReport.jpg";

import film1 from "../resources/Chapter4/films/film1.jpg";
import film2 from "../resources/Chapter4/films/film2.jpg";
import film3 from "../resources/Chapter4/films/film3.jpg";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.view_container}>
      <Navbar type="chapter_title" />
      <ChapterTitle
        number="4"
        imgArr={imgArrCh4}
        title="After the Surrender"
        subtitle="1972 - 1974"
        desc="Zulfiqar Ali Bhutto uses diplomatic channels to recognize the new state of Bangladesh. Pakistan revises its citizenship law in 1974. Urdu speaking East Pakistanis become refugees in Bangladesh"
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <p className={styles.view_para}>
              After the war and military surrender, the Pakistani state was
              confronted with existential crises and several unresolved issues.
              The biggest challenge was to get the prisoners of war released and
              ensure the safety of 'stranded Pakistanis' in former East
              Pakistan.
            </p>
            <SectionHeading heading="Pakistan's Recognition of Bangladesh" />
            <p className={styles.view_para}>
              Pakistan did not recognize the state of Bangladesh till 1974.
              Throughout the intervening years, the Pakistani Government
              remained in contact with the Bangladeshi Government through the
              intermediary of friendly countries. One of the outstanding issues
              was Sheikh Mujib's insistence on trying about 200 Pakistani
              officers for war crimes. Pakistan insisted that all PoWs must
              return and that the Pakistani Government should be responsible for
              taking any action that might be necessary.
            </p>
            <p className={styles.view_para}>
              Pakistan's formal recognition of Bangladesh in February 1974 at
              the occasion of the second session of the Organization of Islamic
              Countries (OIC) in Lahore (add picture) was followed by a
              constitutional amendment to redefine Pakistan's sovereign
              boundaries.
            </p>
          </div>
          <div className={styles.view_content_container}>
            <PhotoContainer
              imgArr={[
                {
                  image: mujbhutt1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
                {
                  image: mujbhutt5,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twenty",
                },
                {
                  image: mujbhutt4,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: mujbhutt3,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: mujbhutt2,
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
                src="https://www.youtube.com/embed/fowobGg-nwY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class={styles.video_contain_center}>
            <div>
              <iframe
                width="650"
                height="365"
                src="https://www.youtube.com/embed/DgI3fjtTLds"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.view_fw_content}>
          <QuotePhoto
            quote
            addedMargin
            photo={BhuttoQuote}
            photoClassName={"ch2Q_6points"}
            quoteTxt={
              <p>
                ...a country was dismembered, a unity was sundered and a
                yearning gap was opened between you and us. In a sense, it may
                now be too late to cry over what has happened already. But it is
                never too late to repent and say tauba from the bottom of our
                heart. As I have said earlier, the people of Pakistan respect
                your decision. They and the Government of Pakistan of Pakistan
                recognize the sovereignty and independence of Bangladesh. More
                than that, we wish you rapid progress and prosperity. We extend
                to you all our goodwill and are prepared to cooperate with you
                to the extent that you desire...
              </p>
            }
            quoteAlign="left"
            color="white"
            fontSize="small"
            rotation="rotate2"
            quoterText={
              "Zulfiqar Ali Bhutto - Excerpt from a Speech on his visit to Bangladesh in 1974"
            }
            quotationMark={true}
          />
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <p className={styles.view_para}>
              To effectively implement the division that had taken place,
              Pakistan amended its citizenship laws in 1978. It was meant to
              formally renounce the citizenship of what was erstwhile the
              majority population of Bengalis in united Pakistan.
            </p>
            <PhotoContainer
              noScroll
              imgArr={[
                {
                  image: firstAmend1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirtyfive",
                },
                {
                  image: revokeCit,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirtyfive",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Repatriation of Urdu speaking 'Biharis'" />
            <p className={styles.view_para}>
              Despite numerous diplomatic initiatives by international
              organizations and mutual agreements between Pakistan and
              Bangladesh, little has been achieved on the repatriation of
              Urdu-speaking communities, collectively clubbed together as
              'Biharis,' living in Bangladesh. Targeted for their pro-Pakistan
              stance, the Bangladeshi Government dumped them in refugee camps
              and refused to accept them as its citizens.
            </p>
            <p className={styles.view_para}>
              The so-called Geneva Camp in Dhaka is home to one of the largest
              refugee populations in the world. Only a few thousand families –
              mostly affluent or with strong family connections – were able to
              get out of Bangladesh. The rest remained in these camps as
              stateless subjects. It was only in the early 2000s that the
              Bangladeshi Supreme Court recognized the citizenship status of
              those born in Bangladesh after 1971. But the formal completion of
              the citizenship status of Urdu-speaking refugees is far from
              complete. It will take sustained efforts over decades to transform
              them from refugees to citizens.
            </p>
            <PhotoContainer
              noScroll
              imgArr={[
                {
                  image: geneva1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "forty",
                },
                {
                  image: geneva2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "forty",
                },
              ]}
            />
            <p className={styles.view_para}>
              <a
                className={styles.clickLink}
                href="https://www.theguardian.com/global-development/gallery/2014/aug/11/stranded-pakistanis-camps-bangladesh-bihari-in-pictures"
                target="_blank"
              >
                A photo essay published by Guardian on the life of so called{" "}
                <i>'Bihari'</i> refugees in Geneva camp
              </a>
            </p>
            <p className={styles.view_para}>
              There was no such place as a home for the Biharis who were able to
              return to what was left of Pakistan. Azmat Ashraf's autobiography
              gives a haunting account of those who survived the Bihari massacre
              in East Pakistan and their quest for a homeland, which eventually
              took him and some of his childhood friends to Canada. They still
              wait for justice from the Bangladeshi Government and an
              acknowledgment of the violence committed against them by Mukti
              Bahinis.
            </p>
            <div class={styles.video_contain_center}>
              <div>
                <iframe
                  width="650"
                  height="365"
                  src="https://www.youtube.com/embed/Wquha5rZuBo"
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
            photo={azmatBook}
            photoClassName={"ch2Q_6points"}
            quoteTxt={
              <p>
                The attackers were so organized and meticulous that it seemed as
                if they had the census survey in their hands. Wherever their
                tally did not match the dead, they would come back to look for
                more. For nearly two weeks, the Biharis remained sitting ducks
                in their own homes or hiding here and there, exhausted, hungry,
                or wounded. No one was prepared to own even those poor folks who
                had totally assimilated in the society, spoke the language,
                married into Bengali families, and had Bengali children. The
                Haiders, the Shobratis, and the Ashrafs were all to be dealt
                with. In towns like Thakurgaon and Dinajpur, the carnage was so
                extensive that no one was spared, not even women and children,
                newborns, the old, or the infirm.
              </p>
            }
            quoteAlign="left"
            color="white"
            fontSize="small"
            rotation="rotate2"
            quoterText={
              "Azmat Ashraf - Refugee: Unsettled as I roam - My endless search for a home"
            }
            quotationMark={true}
          />
        </div>
      </section>
      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <div className={styles.view_content_container}>
            <SectionHeading heading="Hammoodur Rehman Commission" />
            <p className={styles.view_para}>
              To probe the reasons for Pakistan's breakup and poor military
              performance during the war, the Pakistani Government set up a
              commission of inquiry headed by Justice Hammoodur Rehman – the
              Chief Justice of the Pakistani Supreme Court. The inquiry
              commission held marathon sessions to collect testimonies from
              hundreds of officers who had served during the war or were
              responsible for running the administration leading up to the
              outbreak of violence in March 1971.
            </p>
            <p className={styles.view_para}>
              Once India repatriated the PoWs, the Commission was reconvened to
              record the testimonies of more officers. The final report,
              however, was not made public. In the early 2000s, an Indian
              website published an unverified copy of the report online. It
              prompted the Pakistani Government to issue an official version
              with some parts of the report redacted. We still do not have
              access to the transcripts of daily proceedings or possible
              court-martial trials that might have taken place per the report's
              recommendations.
            </p>
            <PhotoContainer
              noScroll
              imgArr={[
                {
                  image: hamood,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "fifty",
                },
                {
                  image: hamoodRpt,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "thirty",
                },
              ]}
            />
            <SectionHeading heading="Pakistan's stance today" />
            <p className={styles.view_para}>
              The official Pakistani policy has been to 'bury the past' and move
              forward by 'regretting' what happened in 1971. It falls short of a
              formal apology or an explicit recognition of the military's crimes
              during the war.
            </p>
            <p className={styles.view_para}>
              In school textbooks and popular media, Pakistan continues to deny
              any wrongdoing. The usual practice is to put the entire blame on
              India's support to Mukti Bahinis and its long-term plan to
              destabilize and dismember Pakistan.
            </p>
            <p className={styles.view_para}>
              The Pakistani military mounted a PR offensive in the fiftieth year
              of Bangladesh's independence. Its media wing – the Inter-Services
              Public Relations (ISPR), sponsored several films, documentaries,
              and TV serials to paddle a narrative about the 1971 war that
              exonerated the military of any wrongdoing.
            </p>
            <PhotoContainer
              noScroll
              imgArr={[
                {
                  image: film1,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: film2,
                  caption:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  widthID: "twentyfive",
                },
                {
                  image: film3,
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
      historical significance and making them available to researchers. In particular, the archive focuses on events, groups, movements and personalities relating to broader
      historical, political and cultural trends in South Asia, with an emphasis on preserving the accounts of marginalized and subaltern groups."
        prevLink="/ch4"
        nextLink="/"
        chapterID={4}
      />
    </div>
  );
}

export default AfterTheWar;
