import "./RangeView.scss";
import React from "react";
import Button from "../../core/button/Button";

const RangeView = props => {
  return (
    <div className='range-view'>
      <form>
        <label>
          <p>Start Date</p>
          <input
            type='date'
            value={props.startDate}
            onChange={props.updateStartDate}></input>
        </label>
        <label>
          <p>End Date</p>
          <input
            type='date'
            value={props.endDate}
            onChange={props.updateEndDate}></input>
        </label>
      </form>
      <Button onClick={() => history.back()}>Back</Button>
    </div>
  );
};

export default RangeView;
