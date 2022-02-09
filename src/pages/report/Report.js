import "./Report.scss";
import React from "react";
import Page from "../Page";
import ReportView from "../../views/reportView/ReportView";

const Report = () => {
  return (
    <Page>
      <div className='report-container'>
        <ReportView
          dateRange={[
            new Date(
              "Wed Feb 07 2022 08:34:43 GMT-0500 (Eastern Standard Time)"
            ),
            new Date(
              "Wed Feb 20 2022 08:34:43 GMT-0500 (Eastern Standard Time)"
            ),
          ]}
          year={2022}
        />
      </div>
      <div className='button-container'></div>
    </Page>
  );
};

export default Report;
