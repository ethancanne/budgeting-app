import "./Report.scss";
import React from "react";
import Page from "../Page";
import ReportView from "../../views/reportView/ReportView";

const Report = () => {
  return (
    <Page>
      <div className='report-container'>
        <ReportView />
      </div>
      <div className='button-container'></div>
    </Page>
  );
};

export default Report;
