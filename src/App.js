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
      <h1>Hey Hunter and Conor!</h1>
    </div>
  );
};

export default App;
