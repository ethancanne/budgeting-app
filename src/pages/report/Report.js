import "./Report.scss";
import React from "react";
import Page from "../Page";
import ReportView from "../../views/reportView/ReportView";

const Report = () => {
  return (
    <Page>
      <div className='report-container'>
        <ReportView monthRange={[0, 4]} year={2022} />
      </div>
      <div className='button-container'></div>
    </Page>
  );
};

export default Report;
