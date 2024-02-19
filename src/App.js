// import Accordion from "./components/accordion";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/*Accordion Component */}
      {/* <Accordion /> */}

      {/* {Random Color Component} */}
      {/* <RandomColor /> */}

      {/* {Star Rating Component} */}
      {/* <StarRating noOfStars={10} /> */}

      {/* {Image Slider Component} */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
    </div>
  );
};

export default App;
