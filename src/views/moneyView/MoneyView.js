import "./MoneyView.scss";
import React from "react";
import Button from "../../core/button/Button";

const MoneyView = props => {
  return (
    <div className='moneyContainer'>
      <h2>{props.label}</h2>
      <div className='moneyView'>
        <h1>${props.money}</h1>
      </div>
    </div>
  );
};

export default MoneyView;
