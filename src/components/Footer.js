import styles from "./css-modules/footer.module.css";
import lumsLogo from "../resources/nav/LumsArchiveLogoInv.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import chapter4 from "../resources/Chapter4/Chapter4_2.jpg";
import chapter3 from "../resources/Chapter3/Chapter3_2.jpg";
import chapter2 from "../resources/Chapter2/Chapter2_2.jpg";
import chapter1 from "../resources/Chapter1/Chapter1_2.png";
import title from "../resources/Home.jpg";

function Footer({ chapterID, nextLink, prevLink, projectDescription }) {
  const [nextImage, setNextImage] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  const [nextHover, setNextHover] = useState(false);
  const [prevHover, setPrevHover] = useState(false);

  useEffect(() => {
    if (chapterID === 1) {
      setNextImage(chapter2);
      setPrevImage(title);
    } else if (chapterID === 2) {
      setNextImage(chapter3);
      setPrevImage(chapter1);
    } else if (chapterID === 3) {
      setNextImage(chapter4);
      setPrevImage(chapter2);
    } else if (chapterID === 4) {
      setNextImage(title);
      setPrevImage(chapter3);
    } else if (chapterID === 5) {
      setNextImage(chapter1);
      setPrevImage(title);
    }
  }, []);

  return (
    <footer className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.navigation_container}>
          <Link to={prevLink} className={styles.nav_half}>
            <div className={styles.navigation_option} onMouseEnter={e => setPrevHover(true)} onMouseLeave={e => setPrevHover(false)}>
              <img
                src={prevImage}
                className={`${styles.navigation_option_image} ${prevHover ? styles.imageScale : ''}`}
              ></img>
              <div className={styles.navigation_title}>
                <p className={`${styles.navigation_button_title} ${(prevHover ? styles.hover : '')}`}>
                  {chapterID === 5 ? (
                    <span className={styles.chapter_text}>Home</span>
                  ) : chapterID - 1 === 0 ? (
                    <span className={styles.chapter_text}>Home Page</span>
                  ) : (
                    <span className={styles.chapter_text}>
                      Chapter{" "}
                      <span className={styles.chapterNum}>{chapterID - 1}</span>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </Link>
          <Link to={nextLink} className={styles.nav_half}>
            <div className={styles.navigation_option} onMouseEnter={e => setNextHover(true)} onMouseLeave={e => setNextHover(false)}>
              <img
                src={nextImage}
                className={`${styles.navigation_option_image} ${nextHover ? styles.imageScale : ''}`}
              ></img>
              <div className={styles.navigation_title}>
                <p className={`${styles.navigation_button_title} ${(nextHover ? styles.hover : '')}`}>
                  {chapterID === 5 ? (
                    <span className={styles.chapter_text}>Chapter 1</span>
                  ) : chapterID === 4 ? (
                    <span className={styles.chapter_text}>Home Page</span>
                  ) : (
                    <span className={styles.chapter_text}>
                      Chapter{" "}
                      <span className={styles.chapterNum}>{chapterID + 1}</span>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.heading_container}>
          <img
            src={lumsLogo}
            className={styles.footer_logo}
            alt="Lahore University of Management Sciences"
          />
        </div>
        <p className={styles.footer_paragraph}>To explore events as covered by West Pakistani Press, go to <Link className={styles.appendix_link} to="/Appendix" style={{color:'white', cursor: 'pointer'}}>
            <span>Appendix</span>
          </Link></p>
        <p className={styles.footer_paragraph}>{projectDescription}</p>
      </div>
    </footer>
  );
}

export default Footer;
