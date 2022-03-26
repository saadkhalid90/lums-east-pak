import React from 'react';
import styles from './css-modules/overlay.module.css';

function OverlaySlideshow(props){
    return (
    <div className={styles.overlayContent}>
      <div className={styles.OverlaySlideshow}>
        <div className={styles.OverlaySlideshow_content}>
          <div className={styles.overLaySlideshow_imageContainer}>{props.render()}</div>
        </div>
        <div className={styles.overlaySlideshow_source}>Source: {props.source}</div>
        <div className={styles.overlaySlideshow_bg}></div>
      </div>
      <div className={styles.OverlayDescription}>
        <div className={styles.OverlayDescription_Title}>{props.title}</div>
        <div className={styles.OverlayDescription_Desc}>{props.description}</div>
      </div>
    </div>
    )
}

export default OverlaySlideshow;