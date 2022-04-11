import React from "react";
import styles from "./css-modules/overlay.module.css";
import imageWidthStyles from "./css-modules/image-width-styles.module.css";
import Fade from "@mui/material/Fade";

function OverlaySlide(props) {
  return (
    <div className={styles.overlayContent}>
      <div className={styles.OverlaySlideshow}>
        <div className={styles.OverlaySlideshow_content}>
          <Fade in={true}>
            <div className={imageWidthStyles[`overLay${props.width}`]}>
              {props.render()}
            </div>
          </Fade>
        </div>
        <div className={styles.overlaySlideshow_source}>
          Source: {props.source}
        </div>
        <div className={styles.overlaySlideshow_bg}></div>
      </div>
      <div className={styles.OverlayDescription}>
        <div className={styles.OverlayDescription_Desc}>
          {props.description}
        </div>
      </div>
    </div>
  );
}

export default OverlaySlide;
