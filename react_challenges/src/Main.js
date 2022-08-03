import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './Components/Home';
import IncrementDecrementButton from './Components/IncrementDecrementButton';
import DynamicSearchFilter from './Components/DynamicSearchFilter';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/increment_decrement" element={<IncrementDecrementButton />}></Route>
      <Route path="/dynamicFilter" element={<DynamicSearchFilter />}></Route>
    </Routes>

  )
}

export default Main