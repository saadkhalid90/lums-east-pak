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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/"
            element={
              <Chapter1/>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
