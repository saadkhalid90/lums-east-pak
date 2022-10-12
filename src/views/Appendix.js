import { useEffect } from "react";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import { useState } from "react";

import March from "./sub-views/march.js";
import April from "./sub-views/april.js";
import May from "./sub-views/may.js";
import June from "./sub-views/june.js";
import July from "./sub-views/july.js";
import August from "./sub-views/august.js";
import September from "./sub-views/september.js";
import October from "./sub-views/october.js";
import November from "./sub-views/november.js";
import December from "./sub-views/december.js";

import Footer from "../components/Footer.js";

import chapter6_1 from "../resources/Appendix/ch6_1.jpg";
import chapter6_2 from "../resources/Appendix/ch6_2.jpg";
import chapter6_3 from "../resources/Appendix/ch6_3.jpg";

import jang_logo from "../resources/Appendix/jang200x100_w.png";
import nwaqt_logo from "../resources/Appendix/Nwaqk200x100_w.png";
import dawn_logo from "../resources/Appendix/Dawn200x100_w.png";

const imgArrLocNews = [
  {
    image: chapter6_1,
    style: {
      width: "25%",
    },
  },
  {
    image: chapter6_2,
    style: {
      width: "50%",
    },
  },
  {
    image: chapter6_3,
    style: {
      width: "25%",
    },
  },
];

const monthArr = [
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function LocalNews() {
  const [month, setMonth] = useState("March");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(month);
  }, [month]);
  return (
    <div className={styles.view_container}>
      <Navbar type="chapter_title" />
      <ChapterTitle
        number="6"
        imgArr={imgArrLocNews}
        title="In the News"
        subtitle="Press coverage in West Pakistan"
        desc={
          <p>
            This section summarizes the news coverage of major events in West
            Pakistani Newspapers (Dawn, Jang and Nawai Waqt) from March to
            December 1971. Data for this section were collected by LUMS students
            from archived newspapers and were later organized in a narrative
            structure for easy consumption of the reader
          </p>
        }
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <h3 className={styles.legend_header}>Text Style Legend</h3>
          <p className={styles.legend_subheader}>
            To separate newspaper sources
          </p>
          <div className={styles.newspaper_logo_contain}>
            <div className={styles.one_paper_contain}>
              <img src={dawn_logo}></img>
              <span className={styles.dawn_text}>Dawn</span>
            </div>
            <div className={styles.one_paper_contain}>
              <img src={jang_logo}></img>
              <span className={styles.jang_text}>Jang</span>
            </div>
            <div className={styles.one_paper_contain}>
              <img src={nwaqt_logo}></img>
              <span className={styles.nwaqt_text}>Nawai Waqk</span>
            </div>
          </div>
          <div className={styles.selectPrompt}>Select Month</div>
          <ul className={styles.monthNav}>
            {monthArr.map((monthName, idx) => (
              <li
                className={styles.monthBut}
                id={monthName}
                key={monthName}
                onClick={(e) => setMonth(e.target.id)}
                style={{
                  textDecoration:
                    month === monthName
                      ? "underline"
                      : "none",
                  borderRadius: "4px",
                }}
              >
                {monthName}
              </li>
            ))}
          </ul>

          <div className={styles.currMonthContain}>
            <div key={month} className={styles.currMonthFade}></div>
            <h2 className={styles.currMonth}>
              {`${month} 1971`.toUpperCase()}
            </h2>
          </div>

          {month === "March" ? (
            <March />
          ) : month === "April" ? (
            <April />
          ) : month === "May" ? (
            <May />
          ) : month === "June" ? (
            <June />
          ) : month === "July" ? (
            <July />
          ) : month === "August" ? (
            <August />
          ) : month === "September" ? (
            <September />
          ) : month === "October" ? (
            <October />
          ) : month === "November" ? (
            <November />
          ) : (
            <December />
          )}
        </div>
      </section>

      <Footer
        projectName="Bangladesh's Liberation War"
        projectSubTitle="A visual history"
        projectDescription="The LUMS Digital Archive is a research repository that aims at collecting, cataloging and preserving rare material (books, pamphlets, newspapers and other items) of
      historical significance and making them available to researchers. In particular, the archive focuses on events, groups, movements and personalities relating to broader
      historical, political and cultural trends in South Asia, with an emphasis on preserving the accounts of marginalized and subaltern groups."
        prevLink="/ch5"
        nextLink="/"
        chapterID={6}
        appendixShow = {false}
      />
    </div>
  );
}

export default LocalNews;
