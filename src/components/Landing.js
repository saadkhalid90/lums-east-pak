import { useState } from "react";
import styles from "./css-modules/landing.module.css";
import mujeebBG from "../resources/MujeebBG.jpg";
import FullNav from "./FullNav";

import lumsLogo from "../resources/nav/LumsArchiveLogo.png";
import hambMenu from "../resources/nav/hamburger.png";
import { Link } from 'react-router-dom';

const titleStyle = {
  background: `linear-gradient(to bottom, #FFFFFFFF 5%, #FFFFFFDE 75%, #FFFFFFF7 100%), url(${mujeebBG}) no-repeat left top`,
  backgroundSize: `cover`,
};

const titleStyle1 = {
  background: `none`,
};

function Landing({ imgArr, title, subtitle, desc }) {
  return (
    <header className={styles.chapter_title} style={titleStyle}>
      <div className={styles.chapter_title_content}>
        <img className={styles.archive_logo} src={lumsLogo} />
        <div className={styles.img_contain}>
          {imgArr.map((image, imgIdx) => (
            <img
              src={image.image}
              key={`image${imgIdx}`}
              className={styles[`img${imgIdx + 1}`]}
            ></img>
          ))}
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.desc}>{desc}</p>
        <Link
          to="/ch1"
          style={{
            textDecoration: "none",
            width: "fit-content",
            cursor: "default",
          }}
        >
          <div className={styles.start_story}>
            <p>EXPLORE STORY</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Landing;
