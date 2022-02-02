import "./Popup.scss";
import React from "react";
import views from "../Views";
import CreateTransactionView from "../createTransactionView/CreateTransactionView";

const Popup = props => {
  var popupView = <></>;
  switch (props.view) {
    case views.Popup.CREATE_TRANSACTION:
      popupView = <CreateTransactionView setPopup={props.setPopup} />;
      break;
  }
  return (
    <div className={props.isShowing ? "active" : ""}>
      <div className='background' onClick={() => props.setPopup(false)}></div>
      <div className='popup'>
        <div className='popup-top'>
          <h1>{props.view}</h1>
        </div>
        <div className='popup-body'>{popupView}</div>
      </div>
    </div>
  );
};

export default Popup;
