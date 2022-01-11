import './App.css';
import ChapterTitle from './components/ChapterTitle.js';

import chapter1_1 from './resources/Chapter1/Chapter1_1.png';
import chapter1_2 from './resources/Chapter1/Chapter1_2.png';
import chapter1_3 from './resources/Chapter1/Chapter1_3.png';

import chapter2_1 from './resources/Chapter2/Chapter2_1.jpg';
import chapter2_2 from './resources/Chapter2/Chapter2_2.jpg';
import chapter2_3 from './resources/Chapter2/Chapter2_3.jpg';

import chapter3_1 from './resources/Chapter3/Chapter3_1.jpg';
import chapter3_2 from './resources/Chapter3/Chapter3_2.jpg';
import chapter3_3 from './resources/Chapter3/Chapter3_3.jpg';

const imgArrCh1 = [
  {
    image: chapter1_1,
    style: {
      width: '20%'
    }
  },
  {
    image: chapter1_2,
    style: {
      width: '50%'
    }
  },
  {
    image: chapter1_3,
    style: {
      width: '20%'
    }
  }
];

const imgArrCh2 = [
  {
    image: chapter2_1,
    style: {
      width: '25%'
    }
  },
  {
    image: chapter2_2,
    style: {
      width: '50%'
    }
  },
  {
    image: chapter2_3,
    style: {
      width: '25%'
    }
  }
];

const imgArrCh3 = [
  {
    image: chapter3_1,
    style: {
      width: '25%'
    }
  },
  {
    image: chapter3_2,
    style: {
      width: '50%'
    }
  },
  {
    image: chapter3_3,
    style: {
      width: '25%'
    }
  }
];

function App() {
  return (
    <div className="App">
      {
        /*
        <ChapterTitle
          number="2"
          imgArr={imgArrCh2}
          title="National Polls"
          subtitle="1970"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        <ChapterTitle
          number="3"
          imgArr={imgArrCh3}
          title="Military Operation"
          subtitle="March 25, 1971 - ..."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        <ChapterTitle
          number="1"
          imgArr={imgArrCh1}
          title="Background"
          subtitle="1947 - 1969"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        */
        <ChapterTitle
          number="1"
          imgArr={imgArrCh1}
          title="Background"
          subtitle="1947 - 1969"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
      }
    </div>
  );
}

export default App;
