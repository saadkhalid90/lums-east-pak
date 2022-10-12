import React, { Component } from "react";
import styles from "./css-modules/home_para.module.css";
import classNames from "classnames";

class HomePara extends Component {
  constructor(props) {
    super(props);
    this.paraRef = React.createRef();
    this.state = { currState: 0 };
  }

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
        <p className={classNames("Libre", styles.heading)}>
          {this.props.heading}
        </p>
        <div className={classNames("Lato", styles.para)}>{this.props.para}</div>
        {this.props.legend && (
          <div className={styles.partyLegend}>
            <ul>
              <li>Awami League</li>
              <li>Pakistan Peoples Party</li>
              <li>Factions of Muslim League</li>
              <li>Independent</li>
              <li>Others</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default HomePara;
