// import Accordion from "./components/accordion";
// import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";

import "./App.css";
import menus from "./components/tree-view/data";

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
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}

      {/* {Load More Data Component} */}
      {/* <LoadMoreData /> */}

      {/* {Tree View Component / Menu UI Component / Recursive Navigation Menu Component} */}
      <TreeView menus={menus} />
    </div>
  );
};

export default App;
