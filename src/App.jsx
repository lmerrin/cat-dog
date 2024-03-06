import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Students from "./Routes/Students/Students";
import Cats from "./Routes/Cats/Cats";
import Dogs from "./Routes/Dogs/Dogs";

import "./App.css";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Students />} />
      <Route path="/cats" element={<Cats />} />
      <Route path="/dogs" element={<Dogs />} />
    </Routes>

   </>
  );
}

export default App;
