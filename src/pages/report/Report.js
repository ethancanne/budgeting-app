import "./Report.scss";
import React from "react";
import Page from "../Page";
import RangeView from "../../views/RangeView/RangeView";
import ReportView from "../../views/reportView/ReportView";

const Report = () => {
  return (
    <Page>
      <div className='report-container'>
        <ReportView monthRange={[0, 4]} year={2022} />
        <div className='range-container'>
          <RangeView />
        </div>
      </div>
      <div className='button-container'></div>
    </Page>
  );
};

export default Report;
