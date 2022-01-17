import styles from './css-modules/footer.module.css';
import classNames from 'classnames';
import lumsLogo from '../resources/nav/LumsArchiveLogo.png';
import { Link } from 'react-router-dom';

function Footer(props){

  return (
    <footer className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.heading_container}>
          <div className={styles.heading_text}>
            <h2 className={styles.footer_heading}>{props.projectName}</h2>
            <h3 className={styles.footer_sub_heading}>{props.projectSubTitle}</h3>
          </div>
          <img src={lumsLogo} className={styles.footer_logo} alt="Lahore University of Management Sciences"/>
        </div>
        <p className={styles.footer_paragraph}>{props.projectDescription}</p>

        <div className={styles.navigation_section}>
          <h4 className={styles.nav_sec_t}>Navigation Section</h4>
          <div className={styles.navigation_options}>
            <Link to="/">
              <p className={styles.navigation_option}>Homepage</p>
            </Link>
            <Link to="/ch1">
              <p className={styles.navigation_option}>About The Project</p>
            </Link>
            <Link to="/ch1">
              <p className={styles.navigation_option}>Chapter 1</p>
            </Link>
            <Link to="/ch2">
              <p className={styles.navigation_option}>Chapter 2</p>
            </Link>
            <Link to="/ch3">
              <p className={styles.navigation_option}>Chapter 3</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
