import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Students from "./Routes/Students/Students";
import Cats from "./Routes/Cats/Cats";
import Dogs from "./Routes/Dogs/Dogs";
import CatDetailsPage from "./Routes/CatDetailsPage";
import DogDetailsPage from "./Routes/DogDetailsPage";

import "./App.css";

function App() {
  return (
    <>
      <nav className="navigation">
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Students Page</NavLink>
          </li>
          <li>
            <NavLink to="/Cats">Cats Page</NavLink>
          </li>
          <li>
            <NavLink to="/Dogs">Dogs Page</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats/:catId" element={<CatDetailsPage />}/>
        <Route path="/dogs/:dogId" element={<DogDetailsPage />}/>
      </Routes>
    </>
  );
}

export default App;
