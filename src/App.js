import "./App.scss";
import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime.js";

//Import Pages
import Dashboard from "./pages/dashboard/Dashboard";

//Import views
import Popup from "./views/popup/Popup";
import views from "./views/Views";

//Import Models
import User from "./models/User";

/**
 * This is the root presentational component that processes all the pages.
 * @author Ethan Cannelongo
 * @date   1/30/2022
 */
const App = props => {
  const [isPopupShowing, setIsPopupShowing] = useState(false);
  const [popupView, setPopupView] = useState(views.Popup.CREATE_TRANSACTION);
  const userStart = new User([], 0, 0);
  const [user, setUser] = useState(userStart);

  const setPopup = (isShowing, view) => {
    setIsPopupShowing(isShowing);
    if (view) setPopupView(view);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
    } else {
      // console.log("running");
      // setUser(user);
      // localStorage.setItem("user", user);
    }
  }, []);

  window.addEventListener("storage", () => {
    setUser(localStorage.getItem("user"));
  });

  //Retrieve data from local storage and store in global state
  const retrieveData = () => {};
  return (
    <div className='app'>
      <Popup isShowing={isPopupShowing} view={popupView} setPopup={setPopup} />
      <div className={`container ${isPopupShowing && "popup-is-showing"}`}>
        <Dashboard
          income={user.totalIncome}
          expense={user.totalExpense}
          setPopup={setPopup}
        />
      </div>
    </div>
  );
};

export default App;
