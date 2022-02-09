import "./RangeView.scss";
import React from "react";

const RangeView = props => {
    return (
        <div>
            <form>
                <label>
                    <p>Start Date</p>
                    <input type='date' value={props.startDate} onChange={props.updateStartDate}></input>
                </label>
                <label>
                    <p>End Date</p>
                    <input type='date' value={props.endDate} onChange={props.updateEndDate}></input>
                </label>
            </form>
        </div>
    );
};

export default RangeView;