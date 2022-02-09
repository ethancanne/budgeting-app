import "./Report.scss";
import React from "react";
import Page from "../Page";
import RangeView from "../../views/RangeView/RangeView";
import ReportView from "../../views/reportView/ReportView";

const Report = () => {
  return (
    <Page>
      <div className='report-container'>
<<<<<<< HEAD
        <ReportView monthRange={[0, 4]} year={2022} />
        <div className='range-container'>
          <RangeView />
        </div>
=======
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
>>>>>>> fcc02e454b80af1275a6479a332ff0d02c790afc
      </div>
      <div className='button-container'></div>
    </Page>
  );
};

export default Report;
