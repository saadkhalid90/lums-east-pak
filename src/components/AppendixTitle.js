import styles from "./css-modules/chapter-title.module.css";
import mujeebBG from "../resources/MujeebBG.jpg";

import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import FadeRR from "react-reveal/Fade";

const titleStyle = {
  background: `linear-gradient(to bottom, #FFFFFFFF 5%, #FFFFFFDE 75%, #FFFFFFF7 100%), url(${mujeebBG}) no-repeat left top`,
  backgroundSize: `cover`,
};

const imgDelay = 250;

function ChapterTitle({ number, imgArr, title, subtitle, desc }) {
  const [prevActive, setPrevActive] = useState(false);
  const [nextActive, setNextActive] = useState(false);

  return (
    <header className={styles.chapter_title} style={titleStyle}>
      <div className={styles.chapter_title_content}>
        <p className={styles.chapter_no}>
          Chapter - <span>{number}</span>
        </p>
        <div className={styles.img_contain}>
          {imgArr.map((image, imgIdx) => (
              <img
                src={image.image}
                className={styles[`img${imgIdx + 1}`]}
              ></img>
          ))}
        </div>
        <div className={styles.chev_title_and_subtitle}>
          <div
            className={`${styles.chevron_explainer} ${
              styles.chevron_explainer_prev
            } ${prevActive && styles.active}`}
          >
            {parseInt(number) > 1 ? `Previous Chapter` : `Home page`}
          </div>

          <Link
            to={`/ch5`}
            onMouseEnter={(e) => setPrevActive(true)}
            onMouseLeave={(e) => setPrevActive(false)}
            style={{
              textDecoration: "none",
              width: "fit-content",
              cursor: "default",
            }}
          >
            <div className={styles.chevron}>
              <IoChevronBack />
            </div>
          </Link>
          <div className={styles.title_and_subtitle}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <Link
            to={`/`}
            onMouseEnter={(e) => setNextActive(true)}
            onMouseLeave={(e) => setNextActive(false)}
            style={{
              textDecoration: "none",
              width: "fit-content",
              cursor: "default",
            }}
          >
            <div className={styles.chevron}>
              <IoChevronForward />
            </div>
          </Link>
          <div
            className={`${styles.chevron_explainer} ${
              styles.chevron_explainer_next
            } ${nextActive && styles.active}`}
          >
            {parseInt(number) < 5 ? `Next Chapter` : `Home page`}
          </div>
        </div>
        <p className={styles.desc}>{desc}</p>
          <div className={styles.chevron_container}>
            <p className={styles.chev_text}>Explore</p>
            <div className={styles.chevron_icon_container}>
              <BiChevronDown
                id="md_arrow"
                className={styles.scroll_down_icon_arrow}
              />
            </div>
          </div>
      </div>
    </header>
  );
}

export default ChapterTitle;
