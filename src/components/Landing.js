import { useState } from "react";
import styles from "./css-modules/landing.module.css";
import mujeebBG from "../resources/MujeebBG.jpg";
import FullNav from "./FullNav";

import lumsLogo from "../resources/nav/LumsArchiveLogo.png";
import hambMenu from "../resources/nav/hamburger.png";
import { Link } from 'react-router-dom';
import FadeRR from 'react-reveal/Fade';

const titleStyle = {
  background: `linear-gradient(to bottom, #FFFFFFFF 5%, #FFFFFFDE 75%, #FFFFFFF7 100%), url(${mujeebBG}) no-repeat left top`,
  backgroundSize: `cover`,
};

const titleStyle1 = {
  background: `none`,
};

const imgDelay = 150;

function Landing({ imgArr, title, subtitle, desc }) {
  return (
    <header className={styles.chapter_title} style={titleStyle}>
      <div className={styles.chapter_title_content}>
        <FadeRR top distance="40px" delay={100}>      
          <img className={styles.archive_logo} src={lumsLogo} />
        </FadeRR>
        <div className={styles.img_contain}>
          {imgArr.map((image, imgIdx) => (
            <FadeRR bottom distance="40px" delay={imgIdx*imgDelay} key={`image${imgIdx}`}>      
              <img
                src={image.image}
                key={`image${imgIdx}`}
                className={styles[`img${imgIdx + 1}`]}
              ></img>
            </FadeRR>
          ))}
        </div>
        <FadeRR bottom distance="40px" delay={100}>      
          <h1 className={styles.title}>{title}</h1>
        </FadeRR>
        <FadeRR bottom distance="40px" delay={400}>      
          <p className={styles.subtitle}>{subtitle}</p>
        </FadeRR>
        <FadeRR delay={1000}>      
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
        </FadeRR>
      </div>
    </header>
  );
}

export default Landing;
