import { useEffect } from "react";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import ChapterTitle from "../components/ChapterTitle.js";
import { useState } from "react";

import PhotoContainer from "../components/PhotoContainer.js";
import QuotePhoto from "../components/QuotePhoto.js";
import March from "./sub-views/march.js";
import Footer from "../components/Footer.js";

import chapter6_1 from "../resources/Chapter6/ch6_1.jpg";
import chapter6_2 from "../resources/Chapter6/ch6_2.jpg";
import chapter6_3 from "../resources/Chapter6/ch6_3.jpg";

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
        title="News from W. Pak"
        subtitle="Subtitle"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />

      <section className={styles.content_section}>
        <div className={styles.view_content_wrapper}>
          <ul className={styles.monthNav}>
            {monthArr.map((month, idx) => (
              <li className={styles.monthBut} id={month} key={month} onClick={e => setMonth(e.target.id)}>
                {month}
              </li>
            ))}
          </ul>
          <h2 className={styles.currMonth}>{`${month} 1971`.toUpperCase()}</h2>
          <March />
        </div>
      </section>

      <Footer
        projectName="Bangladesh’s Liberation War"
        projectSubTitle="A visual history"
        projectDescription="The LUMS Digital Archive is a research repository that aims at collecting, cataloging and preserving rare material (books, pamphlets, newspapers and other items) of
      historical significance and making them available to researchers. In particular, the archive focuses on events, groups, movements and personalities relating to broader
      historical, political and cultural trends in South Asia, with an emphasis on preserving the accounts of marginalized and subaltern groups."
        prevLink="/ch2"
        nextLink="/ch3"
        chapterID={3}
      />
    </div>
  );
}

export default LocalNews;
