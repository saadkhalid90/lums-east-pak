import React, {Component} from 'react';
import styles from './css-modules/full-nav.module.scss';
import { Link } from 'react-router-dom';

import { MdCancel } from "react-icons/md";
import {TweenMax, Power3} from 'gsap';

class FullNav extends Component {
  constructor(props) {
    super(props);
    this.navigation = React.createRef();
    this.fadeRef = React.createRef();
    this.delayedFade = React.createRef();
    this.state = {projectNavOpen: false}
  }

  setOpacity = (id, opacity) => {
    document.getElementById(id).style.opacity = opacity;
  }


  componentDidMount() {
    this.setState({
      projectNavOpen: this.props.projectNavOpen
    });
    TweenMax
      .fromTo(this.navigation.current, 1, {
        yPercent:  -100 ,
      }, {
        yPercent: 0,
        ease: Power3.easeInOut,
    });
    TweenMax
      .fromTo(this.fadeRef.current, 1.75, {
        opacity:  0 ,
      }, {
        opacity: 1,
        ease: Power3.easeInOut,
    });
    TweenMax
      .fromTo(this.delayedFade.current, 2, {
        opacity:  0 ,
      }, {
        opacity: 1,
        ease: Power3.easeInOut,
    });
  }

  closeNav() {
    TweenMax
    .fromTo(this.navigation.current, 1, {
        yPercent:  0 ,
    }, {
        yPercent: -100,
        ease: Power3.easeInOut,
        onComplete : ()=>{this.props.toggleProjectNav()}
    });
    TweenMax
      .fromTo(this.fadeRef.current, 0.9, {
        opacity:  1 ,
      }, {
        opacity: 0,
        ease: Power3.easeInOut,
    });
    TweenMax
      .fromTo(this.delayedFade.current, 0.9, {
        opacity:  1 ,
      }, {
        opacity: 0,
        ease: Power3.easeInOut,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projectNavOpen !== this.state.projectNavOpen) {
      TweenMax
        .fromTo(this.navigation.current, 0.7, {
          yPercent:  -100 ,
        }, {
          yPercent: 0,
          ease: Power3.easeInOut,
      })
    }
  }

  render() {
    return (
      <div ref={this.navigation} className={styles.navContainer}>
        <MdCancel className={styles.closeIcon} onClick={() => this.closeNav()}/>
        <div ref={this.fadeRef} style={{position: 'relative'}} className={styles.project_nav_options_container}>
          <p className={styles.browse_proj_heading}>Explore more themes</p>
          <Link to="/" style={{textDecoration: 'none', width: 'fit-content', cursor: 'default'}}>
            <div className={styles.navItem}>
              <p className={styles.projectTitle}><span className={styles.underline}>About the Project</span></p>
            </div>
          </Link>
          <Link to="/ch1" style={{textDecoration: 'none', width: 'fit-content', cursor: 'default'}}>
            <div className={styles.navItem}>
              <p className={styles.projectTitle}><span className={styles.underline}>Chapter 1</span></p>
            </div>
          </Link>
          <Link to="/ch2" style={{textDecoration: 'none', width: 'fit-content', cursor: 'default'}}>
            <div className={styles.navItem}>
              <p className={styles.projectTitle}><span className={styles.underline}>Chapter 2</span></p>
            </div>
          </Link>
          <Link to="/ch3" style={{textDecoration: 'none', width: 'fit-content', cursor: 'default'}}>
            <div className={styles.navItem}>
              <p className={styles.projectTitle}><span className={styles.underline}>Chapter 3</span></p>
            </div>
          </Link>
          <Link to="/ch4" style={{textDecoration: 'none', width: 'fit-content', cursor: 'default'}}>
            <div className={styles.navItem}>
              <p className={styles.projectTitle}><span className={styles.underline}>Chapter 4</span></p>
            </div>
          </Link>
          <p className={styles.browse_proj_heading}>More from LUMS Digital Archive</p>
          <div className={styles.navItem}>
            <p className={styles.projectTitle}><span className={styles.underline}>LUMS Archive</span></p>
          </div>
        </div>
        <div ref={this.delayedFade}>
          <div className={styles.disclaimer_container}>
            <p className={styles.disclaimer}>{this.props.disclaimer}</p>
          </div>
          {/*<div className={styles.designed_by} onClick={() => this.plotree()}>
            <i style={{marginRight: '10px'}}>Designed by Plotree Info Design</i>
            <img alt="Plotree Info Design" className={styles.plotreeLogo} src="https://res.cloudinary.com/plotree/image/upload/v1588508395/logoAlone_ueznfi.svg"/>
          </div> */}
        </div>
      </div>
    )
  }
}

export default FullNav;
