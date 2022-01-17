import { useState, useRef } from 'react';
import styles from './css-modules/photo-container.module.css';
import imageStyles from './css-modules/image-styles.module.css';
import classNames from 'classnames';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function PhotoContainer(props){

  let [xPos, update_xPos] = useState(0);
  const pictureDivRef = useRef(null)
  const scrollContainerRef = useRef(null)

  function moveForward() {
    let pictureDivNode = pictureDivRef.current;
    let scrollNode = scrollContainerRef.current;
    let minTranslate;

    if ((scrollNode.scrollWidth - pictureDivNode.offsetWidth + xPos) > 300) {
      minTranslate = xPos - 300;
    }
    else {
      minTranslate = xPos - (scrollNode.scrollWidth - pictureDivNode.offsetWidth + xPos) + 20;
    }
    update_xPos(minTranslate);
  };

  function moveBackward() {
    let scrollNode = scrollContainerRef.current;
    let minTranslate;

    if (xPos <= -300) {
      minTranslate = xPos + 300;
    }
    else {
      minTranslate = 0;
    }
    update_xPos(minTranslate);
  }

  return (
    <div ref={pictureDivRef} className={styles.photo_container}>
       <div ref={scrollContainerRef} className={props.noScroll ? styles.flexed_photo_container : styles.horizontal_scroll_container} style={props.noScroll ? {transform : `translate3d(0px, 0px, 0px)`} : {transform : `translate3d(${xPos}px, 0px, 0px)`}}>
          {props.imgArr && props.imgArr.length > 0 && props.imgArr.map((image, index) =>
            <div key={index} className={classNames(styles.image_parent, props.noScroll ? imageStyles[image.widthID] : imageStyles[image.widthID + 'vw'], !props.noScroll && imageStyles.constant_margin)}>
              <div className={styles.image_container}>
                <img src={image.image} className={styles.image_animate}></img>
              </div>
              <div className={styles.caption_container}>
                <p className={styles.caption}>{image.caption}</p>
              </div>
            </div>
          )}
       </div>

       {!props.noScroll && <div className={styles.scroll_button_container}>
          <div className={styles.chevron_container} onClick={() => moveBackward()}>
            <FiChevronLeft/>
          </div>
          <div className={styles.chevron_container} onClick={() => moveForward()}>
            <FiChevronRight />
          </div>
       </div>}
    </div>
  )
}

export default PhotoContainer;
