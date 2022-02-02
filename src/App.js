import "./App.scss";
import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime.js";

//Import Pages
import Dashboard from "./pages/dashboard/Dashboard";

//Import views
import Popup from "./views/popup/Popup";
import views from "./views/Views";

/**
 * This is the root presentational component that processes all the pages.
 * @author Ethan Cannelongo
 * @date   1/30/2022
 */
const App = props => {
  const [isPopupShowing, setIsPopupShowing] = useState(false);
  const [popupView, setPopupView] = useState(views.Popup.CREATE_TRANSACTION);

  const setPopup = (isShowing, view) => {
    setIsPopupShowing(isShowing);
    if (view) setPopupView(view);
  };

  //Retrieve data from local storage and store in global state
  const retrieveData = () => {};
  return (
    <div>
      <Popup isShowing={isPopupShowing} view={popupView} setPopup={setPopup} />
      <div className={`container ${isPopupShowing && "popup-is-showing"}`}>
        <Dashboard income={600} expense={500} setPopup={setPopup} />
      </div>
    </div>
  );
};

export default App;
