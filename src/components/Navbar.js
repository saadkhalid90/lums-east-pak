import { useState } from 'react';
import styles from './css-modules/navbar.module.css';
import FullNav from './FullNav';

import lumsLogo from '../resources/nav/LumsArchiveLogo.png';
import hambMenu from '../resources/nav/hamburger.png';

function Navbar(){

  const [navOpen, setNavOpen] = useState(false);

  function toggleProjectNav() {
    navOpen ? setNavOpen(false) : setNavOpen(true);
  }

  return (
    <div>
      <nav className={styles.navbar}>
        <img alt="Lahore University of Management Sciences" className={styles.logo} src={lumsLogo}/>
        <img alt="Menu Icon" className={styles.menu} onClick={() => toggleProjectNav()} src={hambMenu}/>
      </nav>
      {navOpen ? <FullNav projectNavOpen={navOpen} toggleProjectNav={toggleProjectNav} disclaimer=<span>This project is based on research conducted by Team member names?</span>/> : <div></div>}
    </div>
  )
}

export default Navbar;
