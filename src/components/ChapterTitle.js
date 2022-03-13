import styles from "./css-modules/chapter-title.module.css";
import mujeebBG from "../resources/MujeebBG.jpg";

import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { useState, useEffect } from 'react';
// import {classNames} from 'classnames';

import { Link } from 'react-router-dom';

const titleStyle = {
  background: `linear-gradient(to bottom, #FFFFFFFF 5%, #FFFFFFDE 75%, #FFFFFFF7 100%), url(${mujeebBG}) no-repeat left top`,
  backgroundSize: `cover`,
};

function ChapterTitle({ number, imgArr, title, subtitle, desc }) {
  const [prevActive, setPrevActive] = useState(false);
  const [nextActive, setNextActive] = useState(false);

  // useEffect(() => {
  //   console.log('prevActive ', prevActive);
  //   console.log('nextActive ', nextActive);
  // }, [prevActive, nextActive])
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
              key={`image${imgIdx}`}
              className={styles[`img${imgIdx + 1}`]}
            ></img>
          ))}
        </div>
        <div className={styles.chev_title_and_subtitle}>
          <div className={`${styles.chevron_explainer} ${styles.chevron_explainer_prev} ${prevActive && styles.active}`}>
            {parseInt(number) > 1 ? `Previous Chapter` : `Home page`}
          </div>
          <Link
            to={parseInt(number) > 1 ? `/ch${parseInt(number) - 1}` : `/`}
            onMouseEnter = {e => setPrevActive(true)}
            onMouseLeave = {e => setPrevActive(false)}
            style={{
              textDecoration: "none",
              width: "fit-content",
              cursor: "default",
            }}
          >
            <div 
              className={styles.chevron}
            >
              <IoChevronBack />
            </div>
          </Link>
          <div className={styles.title_and_subtitle}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <Link
            to={parseInt(number) < 5 ? `/ch${parseInt(number) + 1}` : `/`}
            onMouseEnter = {e => setNextActive(true)}
            onMouseLeave = {e => setNextActive(false)}
            style={{
              textDecoration: "none",
              width: "fit-content",
              cursor: "default",
            }}
          >
            <div 
              className={styles.chevron}
            >
              <IoChevronForward />
            </div>
          </Link>
          <div className={`${styles.chevron_explainer} ${styles.chevron_explainer_next} ${nextActive && styles.active}`}>
            {parseInt(number) < 5 ? `Next Chapter` : `Home page`}
          </div>
        </div>
        <p className={styles.desc}>{desc}</p>
      </div>
    </header>
  );
}

export default ChapterTitle;
