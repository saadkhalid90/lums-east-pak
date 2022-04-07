import { useState } from 'react';
import styles from './css-modules/navbar.module.css';
import FullNav from './FullNav';
import { Link, useLocation } from 'react-router-dom';

import lumsLogo from '../resources/nav/LumsArchiveLogo.png';
import hambMenu from '../resources/nav/hamburger.png';

function Navbar({type}){

  let location = useLocation();

  const [navOpen, setNavOpen] = useState(false);

  function toggleProjectNav() {
    navOpen ? setNavOpen(false) : setNavOpen(true);
  }

  return (
    <div>
      <nav className={`${styles.navbar} ${styles[[type]]}`}>
        {
          type=="chapter_title" ? (
            <Link to="/">
              <img alt="Lahore University of Management Sciences" className={styles.logo} src={lumsLogo}/>
            </Link>
          ) : (
            <div></div>
          )
        }
        <img alt="Menu Icon" className={styles.menu} onClick={() => toggleProjectNav()} src={hambMenu}/>
      </nav>
      {navOpen ? <FullNav location={location} projectNavOpen={navOpen} toggleProjectNav={toggleProjectNav} disclaimer=<span>This project is based on research conducted by Team member names?</span>/> : <div></div>}
    </div>
  )
}

export default Navbar;
