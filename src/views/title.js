import { useState } from 'react';
import styles from './css-modules/view-styles.module.css';
import Navbar from '../components/Navbar.js';

import chapter1_1 from '../resources/Chapter1/Chapter1_1.png';
import chapter1_2 from '../resources/Chapter1/Chapter1_2.png';
import chapter1_3 from '../resources/Chapter1/Chapter1_3.png';

function Title(){
  return (
    <div className={styles.view_container}>
      <Navbar noLogo/>
    </div>
  )
}

export default Title;
