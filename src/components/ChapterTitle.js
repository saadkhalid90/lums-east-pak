import { useState } from 'react';
import styles from './css-modules/chapter-title.module.css';
import mujeebBG from '../resources/MujeebBG.jpg';
import FullNav from './FullNav';

import lumsLogo from '../resources/nav/LumsArchiveLogo.png';
import hambMenu from '../resources/nav/hamburger.png';

const titleStyle = {
  background: `linear-gradient(to bottom, #FFFFFFFF 5%, #FFFFFFDE 75%, #FFFFFFF7 100%), url(${mujeebBG}) no-repeat left top`,
  backgroundSize: `cover`
}

function ChapterTitle({number, imgArr, title, subtitle, desc}){
  return (
    <header className={styles.chapter_title} style={titleStyle}>
      <div className={styles.chapter_title_content}>
        <p className={styles.chapter_no}>Chapter - <span>{number}</span></p>
        <div className={styles.img_contain}>
          {imgArr.map((image, imgIdx) => (
            <img src={image.image} key={`image${imgIdx}`} className={styles[`img${imgIdx+1}`]}></img>
          ))}
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
    </header>
  )
}

export default ChapterTitle;
