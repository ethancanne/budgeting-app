import "./Report.scss";
import React, { useState } from "react";
import Page from "../Page";
import RangeView from "../../views/RangeView/RangeView";
import ReportView from "../../views/reportView/ReportView";

const Report = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const updateStartDate = e => {
    setStartDate(e.target.value);
  };

  const updateEndDate = e => {
    setEndDate(e.target.value);
  };

  return (
    <Page>
      <div className='report-container'>
        <ReportView
          dateRange={[
            new Date(startDate.replace(/-/g, "/")),
            new Date(endDate.replace(/-/g, "/")),
          ]}
          year={2022}
        />
        <RangeView
          startDate={startDate}
          updateStartDate={updateStartDate}
          endDate={endDate}
          updateEndDate={updateEndDate}
        />
      </div>
    </Page>
  );
};

export default Report;
