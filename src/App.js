import "./App.scss";
import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime.js";
import { Route, HashRouter as Router, Switch } from "react-router-dom";

//Import Pages
import Dashboard from "./pages/dashboard/Dashboard";

//Import views
import Popup from "./views/popup/Popup";
import views from "./views/Views";

//Import Models
import User from "./models/User";
import Report from "./pages/report/Report";

/**
 * This is the root presentational component that processes all the pages.
 * @author Ethan Cannelongo
 * @date   1/30/2022
 */
const App = props => {
  const [isPopupShowing, setIsPopupShowing] = useState(false);
  const [popupView, setPopupView] = useState(views.Popup.CREATE_TRANSACTION);
  const [user, setUser] = useState({});

  const setPopup = (isShowing, view) => {
    setIsPopupShowing(isShowing);
    if (view) setPopupView(view);
  };

  const resetUserFromLocalStorage = () => {
    if (localStorage.getItem("user")) {
      setUser(User.createFromObject(JSON.parse(localStorage.getItem("user"))));
    }
  };

  useEffect(() => {
    window.addEventListener("storage", resetUserFromLocalStorage, false);
    resetUserFromLocalStorage();
    if (!localStorage.getItem("user")) {
      const newUser = new User([], 0, 0);
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    }
  }, []);

  //Retrieve data from local storage and store in global state
  const retrieveData = () => {};
  return (
    <Router>
      <div className='app'>
        <Popup
          isShowing={isPopupShowing}
          view={popupView}
          setPopup={setPopup}
        />
        <div className={`container ${isPopupShowing && "popup-is-showing"}`}>
          <Switch>
            <Route exact path='/'>
              <Dashboard
                income={user.totalIncome}
                expense={user.totalExpense}
                setPopup={setPopup}
              />
            </Route>
            <Route exact path='/report'>
              <Report />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
