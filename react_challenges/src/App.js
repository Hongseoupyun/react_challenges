import './App.css';
import MoveupBox from './Components/MoveupBox'
import DynamicSearchFilter from './Components/DynamicSearchFilter';
import IncrementDecrementButton from './Components/IncrementDecrementButton';
import Home from './Components/Home';
import { Route, Link, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/1" element={<DynamicSearchFilter />}></Route>
      <Route path="/2" element={<IncrementDecrementButton />}></Route>
      <Route path="/3" element={<MoveupBox />}></Route>
    </Routes>
  );
}
export default App;
