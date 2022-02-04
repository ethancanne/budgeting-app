import "./Popup.scss";
import React from "react";
import views from "../Views";
import CreateTransactionView from "../createTransactionView/CreateTransactionView";
import ReportView from "../reportView/ReportView";

const Popup = props => {
  var popupView = <></>;
  switch (props.view) {
    case views.Popup.CREATE_TRANSACTION:
      popupView = <CreateTransactionView setPopup={props.setPopup} />;
      break;

    case views.Popup.GENERATE_REPORT:
      popupView = <ReportView setPopup={props.setPopup} />;
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
