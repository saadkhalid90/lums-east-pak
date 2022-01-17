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
        <img className={styles.logo} src={lumsLogo}/>
        <img className={styles.menu} onClick={() => toggleProjectNav()} src={hambMenu}/>
      </nav>
      {navOpen ? <FullNav projectNavOpen={navOpen} toggleProjectNav={toggleProjectNav} disclaimer=<span>These projects are based on research conducted by students for the course <i>Walking in the City: Mapping Everyday Life in Lahore.</i></span>/> : <div></div>}
    </div>
  )
}

export default Navbar;
