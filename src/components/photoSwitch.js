import {useState, useEffect, useRef} from 'react';
import PhotoComp from './photoComp.js';
import HomePara from './home_para.js';
import styles from './css-modules/photo-switch.module.css';



export default function PhotoSwitch({ photoData , imgArr}){
  
  const nScenes = imgArr.length;

  const [scene, setScene] = useState(0);

    useEffect(() => 
    console.log(scene), [scene]);

    return (
      <div className={styles.sticky_container}>
        <div className={styles.photo_info_container}>
          {photoData.length > 0 && photoData.map((data, index) =>
            <div key={index}>
              <HomePara
                heading={data.title}
                para={data.description}
                changeLoc={setScene}
                index={index}
              />
            </div>
          )}
        </div>
        <div className={styles.photo_sticky_container}>
          <div className={styles.photoContainer}>
            <div className="vizContain" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'}}
            >
              <PhotoComp
                imgArr = {imgArr}
                scene = {scene}
              />
            </div>
          </div>
        </div>
      </div>
    )
}