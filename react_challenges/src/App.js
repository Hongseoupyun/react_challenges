import "./App.css";
import MoveupBox from "./Components/MoveupBox";
import DynamicSearchFilter from "./Components/DynamicSearchFilter";
import IncrementDecrementButton from "./Components/IncrementDecrementButton";
import Home from "./Components/Home";
import FetchData from "./Components/FetchData";
import ImageCarousal from "./Components/ImageCarousal";
import IntuitCarousal from "./Components/IntuitCarousal";
import { Route, Link, Router, Routes } from "react-router-dom";
import Pagination from "./Components/Pagination";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/1" element={<DynamicSearchFilter />}></Route>
      <Route path="/2" element={<IncrementDecrementButton />}></Route>
      <Route path="/3" element={<MoveupBox />}></Route>
      <Route path="/4" element={<FetchData />}></Route>
      <Route path="/5" element={<ImageCarousal />}></Route>
      <Route path="/6" element={<IntuitCarousal />}>
        {" "}
      </Route>
      <Route path="7" element={Pagination}></Route>
    </Routes>
  );
}
export default App;
