import styles from "./css-modules/chapter-title.module.css";
import mujeebBG from "../resources/MujeebBG.jpg";

import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

const titleStyle = {
  background: `linear-gradient(to bottom, #FFFFFFFF 5%, #FFFFFFDE 75%, #FFFFFFF7 100%), url(${mujeebBG}) no-repeat left top`,
  backgroundSize: `cover`,
};

const imgDelay = 250;

function ChapterTitle({
  number,
  imgArr,
  title,
  subtitle,
  desc,
  navChev = true,
}) {
  const [prevActive, setPrevActive] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    console.log('imageLoaded!');
    console.log(loadedImages);
  }, [loadedImages])

  return (
    <header className={styles.chapter_title} style={titleStyle}>
      <div className={styles.chapter_title_content}>
        {number < 6 ? (
          <p className={styles.chapter_no}>
            Chapter - <span>{number}</span>
          </p>
        ) : (
          <p className={styles.chapter_no}>Appendix</p>
        )}

        <div className={styles.img_contain}>
          {imgArr.map((image, imgIdx) => (
            <img
              key={`image${imgIdx}`}
              src={image.image}
              className={`${styles[`img${imgIdx + 1}`]} ${(loadedImages === 3) ? styles.active : ''}`}
              onLoad={() => setLoadedImages(loadedImages + 1)}
              style={{visibility: (loadedImages === 3) ? 'visible' : 'hidden'}}
            ></img>
          ))}
        </div>
        <div className={styles.chev_title_and_subtitle}>
          {navChev && (
            <Link
              to={parseInt(number) > 1 ? `/ch${parseInt(number) - 1}` : `/`}
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
          )}
          <div className={styles.title_and_subtitle}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          {navChev && (
            <Link
              to={
                parseInt(number) < 5
                  ? `/ch${parseInt(number) + 1}`
                  : parseInt(number) == 5
                  ? `/appendix`
                  : "/"
              }
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
          )}
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
