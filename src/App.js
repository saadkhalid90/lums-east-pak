import "./App.css";
import preloadImage from "./resources/navBG.png";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Title from "./views/title.js";
import Chapter1 from "./views/Chapter1.js";
import Chapter2 from "./views/Chapter2.js";
import Chapter3 from "./views/Chapter3.js";
import Chapter4 from "./views/Chapter4.js";
import Chapter5 from "./views/Chapter5.js";
import Appendix from "./views/Appendix.js";

import chapter1_1 from "./resources/Chapter1/Chapter1_1.png";
import chapter1_2 from "./resources/Chapter1/Chapter1_2.png";
import chapter1_3 from "./resources/Chapter1/Chapter1_3.png";
import chapter4_1 from "./resources/Chapter4/Chapter4_1.jpg";
import chapter4_2 from "./resources/Chapter4/Chapter4_2.jpg";
import chapter4_3 from "./resources/Chapter4/Chapter4_3.jpg";
import chapter5_1 from "./resources/Chapter5/Chapter5_1.jpg";
import chapter5_2 from "./resources/Chapter5/Chapter5_2.jpg";
import chapter5_3 from "./resources/Chapter5/Chapter5_3.jpg";
import chapter3_1 from "./resources/Chapter3/Chapter3_1.jpg";
import chapter3_2 from "./resources/Chapter3/Chapter3_2.jpg";
import chapter3_3 from "./resources/Chapter3/Chapter3_3.jpg";
import chapter2_1 from "./resources/Chapter2/Chapter2_1.jpg";
import chapter2_2 from "./resources/Chapter2/Chapter2_2.jpg";
import chapter2_3 from "./resources/Chapter2/Chapter2_3.jpg";
import landing_1 from "./resources/Home/Land1.jpg";
import landing_2 from "./resources/Home/Land2.jpg";
import landing_3 from "./resources/Home/Land3.jpg";
import landing_4 from "./resources/Home/Land4.jpg";
import landing_5 from "./resources/Home/Land5.jpg";

import { Grid } from "react-loader-spinner";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imageArr = [
      chapter1_1,
      chapter1_2,
      chapter1_3,
      chapter4_1,
      chapter4_2,
      chapter4_3,
      chapter3_1,
      chapter3_2,
      chapter3_3,
      chapter2_1,
      chapter2_2,
      chapter2_3,
      landing_1,
      landing_2,
      landing_3,
      landing_4,
      landing_5,
    ];
    let counter = 0;
    imageArr.forEach((image) => {
      if (image) {
        let downloadingImage = new Image();
        if (downloadingImage) {
          downloadingImage.onload = function () {
            counter++;
            if (counter === imageArr.length) {
              setLoaded(true);
            }
          };
          downloadingImage.src = image;
        }
      }
    });
  }, []);

  return (
    <div className="App">
      {!loaded ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <Grid color="#666" height={35} width={35} />
        </div>
      ) : (
        <div>
          <img src={preloadImage} style={{ display: "none" }}></img>
          <Router>
            <Routes>
              <Route exact path="/" element={<Title />} />
              <Route exact path="/ch1" element={<Chapter1 />} />
              <Route exact path="/ch2" element={<Chapter2 />} />
              <Route exact path="/ch3" element={<Chapter3 />} />
              <Route exact path="/ch4" element={<Chapter4 />} />
              <Route exact path="/ch5" element={<Chapter5 />} />
              <Route exact path="/appendix" element={<Appendix />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
