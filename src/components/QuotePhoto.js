import styles from './css-modules/quote-photo.module.css';
import classNames from 'classnames';

function QuotePhoto(props){

  return (
    <div className={classNames(styles.quote_container, props.addedMargin && styles.added_margin_quote)}>
      <div className={styles.content_container}>
        <div className={styles.photo_container}>
          <img src={props.photo} className={classNames(styles.quote_photo,props.photoClassName && styles[props.photoClassName])}/>
        </div>
        <div className={styles.quote_content_container}>
          {props.quote ?
            <p className={styles.quote}>{props.quoteTxt}</p>
            :
            <div className={styles.content}>{props.content}</div>
          }
          {props.quote &&
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
