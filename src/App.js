import './App.css';
import ChapterTitle from './components/ChapterTitle.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Title from './views/title.js';
import Chapter1 from './views/background.js';
import Chapter2 from './views/polls.js';
import Chapter3 from './views/operation.js';
import Chapter4 from './views/bloodtele.js';
import Chapter5 from './views/race.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/"
            element={
              <Title/>
            }
          />
          <Route exact path="/ch1"
            element={
              <Chapter1/>
            }
          />
          <Route exact path="/ch2"
            element={
              <Chapter2/>
            }
          />
          <Route exact path="/ch3"
            element={
              <Chapter3/>
            }
          />
          <Route exact path="/ch4"
            element={
              <Chapter4/>
            }
          />
          <Route exact path="/ch5"
            element={
              <Chapter5/>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
