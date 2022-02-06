import * as d3 from 'd3';
import {useState, useEffect, useRef} from 'react';
import {useGeoData} from './useGeoData.js';
import {useData} from './useData.js';
import MapComp from './mapComp.js';
import HomePara from './home_para.js';
import {projectionEP, projectionWP, geoPathEP, geoPathWP} from './projections.js';
import {colScale} from './partyColors.js';
import styles from './css-modules/map.module.css';


export default function ElectMap({ mapData }){
  // custom hook reads in land geoData and constituency data;
  const epTopo = useGeoData().EP;
  const wpTopo = useGeoData().WP;
  const epConstLocs = useData().EP;
  const wpConstLocs = useData().WP;

  const svgWP = useRef();
  const svgEP = useRef();

  const nScenes = 5;

  const mapStyles = {
    fill: 'lightgrey',
    fillOpacity: '0.1',
    stroke: 'darkgrey',
    strokeWidth: '1px',
    strokeOpacity: '0.0'
  };

  const [scene, setScene] = useState(0);

  useEffect(() => {
    d3.select('div.wpContain')
      .select('g.actual-circle-g')
      .selectAll('circle')
      .data(wpConstLocs);
  }, [wpConstLocs]);

  useEffect(() => {
    d3.select('div.epContain')
      .select('g.actual-circle-g')
      .selectAll('circle')
      .data(epConstLocs);
  }, [epConstLocs]);

  useEffect(() => {
    console.log(scene + 1);
  }, [scene]);

  if (!epTopo || !wpTopo || !epConstLocs || !wpConstLocs) {
    return (
      <div className="vizContain">
        <pre>Loading . . .</pre>
      </div>
    )
  }
  else {
    return (
      <div className={styles.sticky_container}>
        <div className={styles.map_info_container} id="map_paras_container">
          {mapData.length > 0 && mapData.map((data, index) =>
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
        <div className={styles.map_sticky_container}>
          <div className={styles.mapContainer}>
            <div className="vizContain" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              left: '-8%'
            }}
            >
              <MapComp
                classNme = {'wpContain'}
                svgWidth = {730}
                svgHeight = {720}
                topoData = {wpTopo}
                mapStyles = {mapStyles}
                landkey = {'wpLand'}
                geoProj = {projectionWP}
                geoPath = {geoPathWP}
                constLocs = {wpConstLocs}
                colScale = {colScale}
                scene = {`scene${scene+1}`}
              />
              <MapComp
                classNme = {'epContain'}
                svgWidth = {340}
                svgHeight = {450}
                topoData = {epTopo}
                mapStyles = {mapStyles}
                landkey = {'epLand'}
                geoProj = {projectionEP}
                geoPath = {geoPathEP}
                constLocs = {epConstLocs}
                colScale = {colScale}
                scene = {`scene${scene+1}`}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
