import styles from "./css-modules/quote-photo.module.css";
import { useEffect } from "react";
import classNames from "classnames";
import leftQuote from "../resources/quotes/leftQuote.png";
import rightQuote from "../resources/quotes/rightQuote.png";

function ifJSX(logical, JSX) {
  return logical & JSX ? logical & JSX : null;
}

function QuotePhoto({
  addedMargin,
  photo,
  photoClassName,
  quote,
  quoteTxt,
  content,
  quoteAlign,
  color,
  fontSize,
  rotation,
  divider,
  quoterText,
  quotationMark,
  bg = 'white'
}) {
  return (
    <div
      className={classNames(
        (bg == "white" ? styles.bg_white : styles.bg_purple),
        addedMargin && styles.added_margin_quote
      )}
    >
      <div className={styles.quote_container}>
        <div className={styles.content_container}>
          <div className={styles.photo_container}>
            <img
              src={photo}
              className={classNames(
                styles.quote_photo,
                photoClassName && styles[photoClassName],
                rotation && styles[rotation]
              )}
            />
          </div>
          <div className={styles.quote_content_container}>
            {quote ? (
              <div>
                {quotationMark && (
                  <img
                    src={leftQuote}
                    className={styles.quotation_mark}
                    style={{
                      position: "absolute",
                      top: "-30px",
                      left: "0px",
                    }}
                  />
                )}
                <div
                  className={classNames(
                    styles.quote,
                    quoteAlign == "left"
                      ? styles.quote_left
                      : styles.quote_center,
                    color == "white" ? styles.quote_white : styles.quote_yellow,
                    fontSize == "big"
                      ? styles.quote_big
                      : fontSize == "small"
                      ? styles.quote_small
                      : styles.quote_smaller
                  )}
                >
                  {quoteTxt}
                </div>
                {quotationMark && (
                  <img
                    src={rightQuote}
                    className={styles.quotation_mark}
                    style={{
                      position: "absolute",
                      bottom: "-30px",
                      right: "0px",
                    }}
                  />
                )}
                {quoterText && <p className={styles.quoter}>{quoterText}</p>}
              </div>
            ) : (
              <div className={styles.content}>{content}</div>
            )}
            {quote && divider && (
              <div className={styles.quote_markers_container}>
                <div className={styles.quote_marker_line}></div>
                <div className={styles.quote_marker_circle}></div>
                <div className={styles.quote_marker_line}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotePhoto;
