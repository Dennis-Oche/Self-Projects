// import Accordion from "./components/accordion";
// import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/*Accordion Component */}
      {/* <Accordion /> */}

      {/* {Random Color Component} */}
      {/* <RandomColor /> */}

      {/* {Star Rating Component} */}
      <StarRating noOfStars={10} />
    </div>
  );
};

export default App;
