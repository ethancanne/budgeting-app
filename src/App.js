import "./App.scss";
import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime.js";

//Import Pages
import Dashboard from "./pages/dashboard/Dashboard";

/**
 * This is the root presentational component that processes all the pages.
 * @author Ethan Cannelongo
 * @date   1/30/2022
 */
const App = props => {
  return (
    <div className='container'>
      <Dashboard income={600} expense={500} />
    </div>
  );
};

export default App;
