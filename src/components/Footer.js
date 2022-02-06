import styles from './css-modules/footer.module.css';
import classNames from 'classnames';
import lumsLogo from '../resources/nav/LumsArchiveLogo.png';
import { Link } from 'react-router-dom';
import {useEffect, useState } from 'react';

import chapter3 from '../resources/Chapter3/Chapter3_2.jpg';
import chapter2 from '../resources/Chapter2/Chapter2_2.jpg';
import chapter1 from '../resources/Chapter1/Chapter1_2.png';
import title from '../resources/Chapter1/Chapter1_2.png';

function Footer(props){

  const [nextImage, setNextImage] = useState(null);
  const [prevImage, setPrevImage] = useState(null);

  useEffect(() => {
    if (props.chapterID === 1) {
      setNextImage(chapter2);
      setPrevImage(title);
    }
    else if (props.chapterID === 2) {
      setNextImage(chapter3);
      setPrevImage(chapter1);
    }
    else if (props.chapterID === 3) {
      setNextImage(chapter3);
      setPrevImage(chapter3);
    }
  }, []);

  return (
    <footer className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.navigation_container}>
          <Link to={props.prevLink} className={styles.nav_half}>
            <div className={styles.navigation_option}>
              <img src={prevImage} className={styles.navigation_option_image}></img>
              <div className={styles.navigation_title}>
                <p className={styles.navigation_button_title}>{(props.chapterID - 1) === 0 ? <span className={styles.chapter_text}>Home Page</span> : <span className={styles.chapter_text}>Chapter <span className={styles.chapterNum}>{props.chapterID - 1}</span></span>}</p>
              </div>
            </div>
          </Link>
          <Link to={props.nextLink} className={styles.nav_half}>
            <div className={styles.navigation_option}>
              <img src={nextImage} className={styles.navigation_option_image}></img>
              <div className={styles.navigation_title}>
                <p className={styles.navigation_button_title}>{(props.chapterID + 1) === 0 ? <span className={styles.chapter_text}>Home Page</span> : <span className={styles.chapter_text}>Chapter <span className={styles.chapterNum}>{props.chapterID + 1}</span></span>}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.heading_container}>
          <img src={lumsLogo} className={styles.footer_logo} alt="Lahore University of Management Sciences"/>
        </div>
        <p className={styles.footer_paragraph}>{props.projectDescription}</p>
      </div>
    </footer>
  )
}

export default Footer;
