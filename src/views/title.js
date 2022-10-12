import { useEffect } from "react";
import styles from "./css-modules/view-styles.module.css";
import Navbar from "../components/Navbar.js";
import Landing from "../components/Landing.js";

import landing_1 from "../resources/Home/Land1.jpg";
import landing_2 from "../resources/Home/Land2.jpg";
import landing_3 from "../resources/Home/Land3.jpg";
import landing_4 from "../resources/Home/Land4.jpg";
import landing_5 from "../resources/Home/Land5.jpg";

const imgArrCh1 = [
  {
    image: landing_1,
    style: {
      width: "20%",
    },
  },
  {
    image: landing_2,
    style: {
      width: "20%",
    },
  },
  {
    image: landing_3,
    style: {
      width: "20%",
    },
  },
  {
    image: landing_4,
    style: {
      width: "20%",
    },
  },
  {
    image: landing_5,
    style: {
      width: "20%",
    },
  },
];

function Title() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.view_container}>
      <Navbar type="landing" />
      <Landing
        imgArr={imgArrCh1}
        title="Bangladesh's Liberation War"
        subtitle="A visual history"
        desc="This is the story of Pakistan’s dismemberment and the independence of Bangladesh. It offers an overview of the historical and political forces that led the eastern wing of Pakistan (East Bengal/East Pakistan) to declare and fight for its independence from its Western half and provides an in-depth account of the 1971 conflict and its aftermath."
      />
    </div>
  );
}

export default Title;
