import "./RangeView.scss";
import React from "react";

const RangeView = () => {
    return (
        <div>
            <form>
                <label>
                    <p>Start Date</p>
                    <input type='date' value={date}></input>
                </label>
                <label>
                    <p>End Date</p>
                    <input type='date' value={date}></input>
                </label>
            </form>
        </div>
    );
};

export default RangeView;