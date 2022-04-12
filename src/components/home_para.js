import React, { Component } from "react";
import styles from "./css-modules/home_para.module.css";
import classNames from "classnames";

class HomePara extends Component {
  constructor(props) {
    super(props);
    this.paraRef = React.createRef();
    this.state = { currState: 0, alertOpen: false, currentImage: null };
  }

  handleClose = () => {
    this.setState({
      alertOpen: false,
    });
  };

  componentDidMount() {
    let io = new IntersectionObserver(
      (entry) => {
        if (entry[0].intersectionRatio > 0) {
          this.props.changeLoc(this.props.index);
        }
      },
      {
        threshold: 1.0,
      }
    );
    io.observe(this.paraRef.current);
  }

  render() {
    return (
      <div ref={this.paraRef} className={styles.container}>
        {this.props.heading && (
          <p className={classNames("Libre", styles.heading)}>
            {this.props.heading}
          </p>
        )}

        <div
          className={classNames("Lato", styles.para)}
          dangerouslySetInnerHTML={{ __html: this.props.para }}
        />
        {this.props.legend && (
          <div className={styles.partyLegend}>
            <div>
              <div className={styles.partyColor}>
                <div className={`${styles.partyBox} ${styles.AL}`} />
                <span className={styles.partyName}>Awami League</span>
              </div>
              <div className={styles.partyColor}>
                <div className={`${styles.partyBox} ${styles.PPP}`} />
                <span className={styles.partyName}>Pakistan Peoples Party</span>
              </div>
              <div className={styles.partyColor}>
                <div className={`${styles.partyBox} ${styles.ML}`} />
                <span className={styles.partyName}>
                  Factions of Muslim League
                </span>
              </div>
              <div className={styles.partyColor}>
                <div className={`${styles.partyBox} ${styles.In}`} />
                <span className={styles.partyName}>Independent</span>
              </div>
              <div className={styles.partyColor}>
                <div className={`${styles.partyBox} ${styles.Ot}`} />
                <span className={styles.partyName}>Others</span>
              </div>
            </div>
          </div>
        )}
        {this.props.partialLegend && (
          <div className={styles.partyLegend}>
            <div>
              <div className={styles.partyColor}>
                <div className={`${styles.partyBox} ${styles.ML}`} />
                <span className={styles.partyName}>
                  Factions of Muslim League
                </span>
              </div>
              <div className={styles.partyColor}>
                <div className={`${styles.partyBox} ${styles.In}`} />
                <span className={styles.partyName}>Independent</span>
              </div>
              <div className={styles.partyColor}>
                <div className={`${styles.partyBox} ${styles.Ot}`} />
                <span className={styles.partyName}>Others</span>
              </div>
            </div>
          </div>
        )}
        {this.props.marginLegend && (
          <div className={styles.radLegend}>
            <div>
              <span className={styles.voteMargHead}>Victory Margin</span>
              <div className={styles.radComp}>
                <span className={styles.voteMargPerc}>0%</span>
                <div className={`${styles.radBox} ${styles.minRad}`} />
                <div className={`${styles.radBox} ${styles.medRad1}`} />
                <div className={`${styles.radBox} ${styles.medRad2}`} />
                <div className={`${styles.radBox} ${styles.maxRad}`} />
                <span className={styles.voteMargPerc}>100%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default HomePara;
