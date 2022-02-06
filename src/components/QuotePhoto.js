import styles from './css-modules/quote-photo.module.css';
import classNames from 'classnames';

function QuotePhoto({
  addedMargin,
  photo,
  photoClassName,
  quote,
  quoteTxt,
  content,
  quoteAlign,
  color,
  fontSize
}){

  return (
    <div className={classNames(styles.quote_container, addedMargin && styles.added_margin_quote)}>
      <div className={styles.content_container}>
        <div className={styles.photo_container}>
          <img src={photo} className={classNames(styles.quote_photo,photoClassName && styles[photoClassName])}/>
        </div>
        <div className={styles.quote_content_container}>
          {quote ?
            <p 
              className={classNames(
                styles.quote, 
                quoteAlign == 'left' ? styles.quote_left : styles.quote_center,
                color == 'white' ? styles.quote_white : styles.quote_yellow,
                fontSize == "big" ? styles.quote_big : styles.quote_small
              )}
            >
              {quoteTxt}
            </p>
            :
            <div className={styles.content}>{content}</div>
          }
          {quote &&
            <div className={styles.quote_markers_container}>
              <div className={styles.quote_marker_line}></div>
              <div className={styles.quote_marker_circle}></div>
              <div className={styles.quote_marker_line}></div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default QuotePhoto;
